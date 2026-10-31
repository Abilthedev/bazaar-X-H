import React from 'react';
import { Star, Smile } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  averageRating: number;
  totalVotes: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  averageRating,
  totalVotes,
}) => {
  const tabs = [
    { id: 'bazaar', label: 'Galeri Karya X-H' },
    { id: 'pot-pupuk', label: 'Cara Buat Pot Pupuk' },
    { id: 'pot-bunga', label: 'Cara Buat Pot Bunga' },
    { id: 'identifikasi-sampah', label: 'Identifikasi Sampah & Video' },
    { id: 'voting', label: 'Voting Slider Senyum' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16">
          {/* Zone 1: Brand Wordmark */}
          <div 
            onClick={() => setActiveTab('bazaar')}
            className="flex items-center gap-3 cursor-pointer select-none shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
              X-H
            </div>
            <div>
              <div className="text-base font-bold tracking-tight text-slate-900 leading-tight">
                Bazaar Ramah Lingkungan
              </div>
              <div className="text-xs text-emerald-700 font-medium">
                Karya Siswa Kelas X-H • SMAN Garut
              </div>
            </div>
          </div>

          {/* Zone 2: Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-800 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action / Live Rating Indicator */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setActiveTab('voting')}
              className="flex items-center gap-2 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-all shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap"
            >
              <Smile className="w-4 h-4 text-emerald-100" />
              <span>Vote Senyuman</span>
              <div className="flex items-center gap-1 bg-emerald-700/60 px-1.5 py-0.5 rounded text-[11px] font-mono tabular-nums">
                <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
                <span>{averageRating.toFixed(1)}</span>
                <span className="text-emerald-200 text-[10px]">({totalVotes})</span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Sub-Navigation Bar */}
        <div className="lg:hidden flex items-center gap-1 overflow-x-auto py-2 border-t border-slate-100 no-scrollbar">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-2.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-emerald-600 text-white font-semibold'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
