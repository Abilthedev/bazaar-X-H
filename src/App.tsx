import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { TabBazaar } from './components/TabBazaar';
import { TabPotPupuk } from './components/TabPotPupuk';
import { TabPotBunga } from './components/TabPotBunga';
import { TabIdentifikasiSampah } from './components/TabIdentifikasiSampah';
import { TabVotingSenyum } from './components/TabVotingSenyum';
import { Footer } from './components/Footer';
import { VoteStats } from './types';
import { Store, Droplets, Flower2, Trash2, Smile } from 'lucide-react';

// Clean initial state - no fake / dummy reviews!
const DEFAULT_STATS: VoteStats = {
  average: 0,
  totalVotes: 0,
  breakdown: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
  votes: []
};

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('bazaar');
  const [voteStats, setVoteStats] = useState<VoteStats>(DEFAULT_STATS);
  const [loadingVotes, setLoadingVotes] = useState<boolean>(true);

  // Fetch online votes from the Express backend
  const fetchVotes = async () => {
    try {
      const res = await fetch('/api/votes');
      if (res.ok) {
        const data = await res.json();
        if (data && typeof data.average === 'number') {
          setVoteStats(data);
          localStorage.setItem('x_h_bazaar_votes', JSON.stringify(data));
        }
      }
    } catch (err) {
      console.warn('Backend API unreachable, using local storage or fallback', err);
      const cached = localStorage.getItem('x_h_bazaar_votes');
      if (cached) {
        try {
          setVoteStats(JSON.parse(cached));
        } catch {
          // ignore
        }
      }
    } finally {
      setLoadingVotes(false);
    }
  };

  useEffect(() => {
    fetchVotes();
    // Poll updates every 10s to keep live rating synced online
    const interval = setInterval(fetchVotes, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleVoteSubmit = async (newVote: {
    score: number;
    comment: string;
  }) => {
    try {
      const res = await fetch('/api/votes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newVote),
      });

      if (res.ok) {
        const result = await res.json();
        if (result.stats) {
          setVoteStats(result.stats);
          localStorage.setItem('x_h_bazaar_votes', JSON.stringify(result.stats));
        } else {
          await fetchVotes();
        }
      } else {
        throw new Error('Gagal mengirimkan vote ke server');
      }
    } catch (err) {
      console.error(err);
      // Local fallback calculation if offline
      setVoteStats((prev) => {
        const newTotal = prev.totalVotes + 1;
        const newBreakdown = { ...prev.breakdown };
        newBreakdown[newVote.score] = (newBreakdown[newVote.score] || 0) + 1;
        const newSum = Object.entries(newBreakdown).reduce(
          (acc, [s, count]) => acc + Number(s) * count,
          0
        );
        const newAvg = parseFloat((newSum / newTotal).toFixed(1));
        const updatedVoteItem = {
          id: 'local-' + Date.now(),
          score: newVote.score,
          comment: newVote.comment,
          createdAt: new Date().toISOString(),
        };
        const updated = {
          average: newAvg,
          totalVotes: newTotal,
          breakdown: newBreakdown,
          votes: [updatedVoteItem, ...prev.votes],
        };
        localStorage.setItem('x_h_bazaar_votes', JSON.stringify(updated));
        return updated;
      });
    }
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Mobile Bottom Navigation items
  const navItems = [
    { id: 'bazaar', label: 'Galeri', icon: Store },
    { id: 'pot-pupuk', label: 'Pot Pupuk', icon: Droplets },
    { id: 'pot-bunga', label: 'Pot Bunga', icon: Flower2 },
    { id: 'identifikasi-sampah', label: 'Sampah', icon: Trash2 },
    { id: 'voting', label: 'Vote', icon: Smile, highlight: true },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-emerald-200 selection:text-emerald-900 pb-16 lg:pb-0">
      {/* Top Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        averageRating={voteStats.average}
        totalVotes={voteStats.totalVotes}
      />

      {/* Hero Banner with Class X-H Branding */}
      <HeroBanner
        onExplore={handleTabChange}
        averageRating={voteStats.average}
        totalVotes={voteStats.totalVotes}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 w-full">
        {activeTab === 'bazaar' && <TabBazaar />}
        {activeTab === 'pot-pupuk' && <TabPotPupuk />}
        {activeTab === 'pot-bunga' && <TabPotBunga />}
        {activeTab === 'identifikasi-sampah' && <TabIdentifikasiSampah />}
        {activeTab === 'voting' && (
          <TabVotingSenyum
            stats={voteStats}
            onVoteSubmitted={handleVoteSubmit}
            loading={loadingVotes}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleTabChange} />

      {/* Mobile Sticky Bottom Thumb Navigation (Optimized for Smartphones) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-lg px-2 py-1 safe-area-pb">
        <div className="grid grid-cols-5 gap-1 max-w-md mx-auto items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={`py-1.5 px-1 rounded-xl flex flex-col items-center justify-center transition-all cursor-pointer min-h-[50px] ${
                  isActive
                    ? item.highlight
                      ? 'bg-emerald-600 text-white font-bold shadow-xs'
                      : 'text-emerald-700 bg-emerald-50 font-bold'
                    : item.highlight
                    ? 'text-emerald-700 font-semibold hover:bg-emerald-50/50'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive && !item.highlight ? 'stroke-[2.5]' : ''}`} />
                <span className="text-[10px] mt-0.5 leading-tight truncate">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
