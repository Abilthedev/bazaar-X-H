import React, { useState } from 'react';
import { Star, MessageSquare, Send, Sparkles, Sliders, Table, Download, ExternalLink, Copy, Check, FileSpreadsheet } from 'lucide-react';
import { VoteStats } from '../types';

interface TabVotingSenyumProps {
  stats: VoteStats;
  onVoteSubmitted: (vote: { score: number; comment: string }) => Promise<void>;
  loading: boolean;
}

export const TabVotingSenyum: React.FC<TabVotingSenyumProps> = ({
  stats,
  onVoteSubmitted,
  loading,
}) => {
  const [sliderScore, setSliderScore] = useState<number>(5);
  const [voterComment, setVoterComment] = useState<string>('');
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [justVoted, setJustVoted] = useState<boolean>(false);
  const [copiedData, setCopiedData] = useState<boolean>(false);
  const [showSheetsView, setShowSheetsView] = useState<boolean>(false);

  const getStageInfo = (score: number) => {
    switch (score) {
      case 1:
        return {
          title: 'Senyum Murung',
          subtitle: 'Sangat Kurang / Kecewa',
          emoji: '😞',
          desc: 'Masih kurang menarik dan butuh banyak perbaikan.',
          bgBadge: 'bg-rose-100 text-rose-800 border-rose-300',
          accentColor: '#f43f5e',
          mouthPath: 'M 30 70 Q 50 48 70 70',
        };
      case 2:
        return {
          title: 'Kurang Senyum',
          subtitle: 'Kurang Puas',
          emoji: '🙁',
          desc: 'Cukup baik, namun hasil karya masih belum optimal.',
          bgBadge: 'bg-orange-100 text-orange-800 border-orange-300',
          accentColor: '#fb923c',
          mouthPath: 'M 32 66 Q 50 56 68 66',
        };
      case 3:
        return {
          title: 'Datar / Biasa Saja',
          subtitle: 'Cukup / Netral',
          emoji: '😐',
          desc: 'Stand bazaar dan hasil karya siswa sudah sesuai standar.',
          bgBadge: 'bg-amber-100 text-amber-800 border-amber-300',
          accentColor: '#f59e0b',
          mouthPath: 'M 34 62 L 66 62',
        };
      case 4:
        return {
          title: 'Senyum Ramah',
          subtitle: 'Puas & Bagus',
          emoji: '🙂',
          desc: 'Bagus! Pot tanaman dan pot pupuknya rapi serta bermanfaat.',
          bgBadge: 'bg-teal-100 text-teal-800 border-teal-300',
          accentColor: '#14b8a6',
          mouthPath: 'M 32 58 Q 50 72 68 58',
        };
      case 5:
      default:
        return {
          title: 'Senyum Lebar Banget',
          subtitle: 'Sangat Puas & Menginspirasi!',
          emoji: '😄',
          desc: 'Luar biasa! Inovasi Kelas X-H sangat kreatif, solutif, dan membanggakan!',
          bgBadge: 'bg-emerald-100 text-emerald-800 border-emerald-300',
          accentColor: '#10b981',
          mouthPath: 'M 28 54 Q 50 82 72 54 Z',
        };
    }
  };

  const currentStage = getStageInfo(sliderScore);

  const handleSubmitVote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    try {
      await onVoteSubmitted({
        score: sliderScore,
        comment: voterComment.trim(),
      });
      setJustVoted(true);
      setVoterComment('');
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  // Copy rows formatted for Google Sheets (TSV format)
  const handleCopyForGoogleSheets = () => {
    let tsv = 'No\tWaktu (WIB)\tSkor (1-5)\tEkspresi Senyuman\tCatatan Pengunjung\n';
    stats.votes.forEach((v, idx) => {
      const d = new Date(v.createdAt);
      const timeStr = d.toLocaleDateString('id-ID', { timeZone: 'Asia/Jakarta' }) + ' ' + d.toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta' });
      const smile = getStageInfo(v.score);
      const note = (v.comment || '-').replace(/\t|\n/g, ' ');
      tsv += `${idx + 1}\t${timeStr}\t${v.score}\t${smile.title}\t${note}\n`;
    });

    navigator.clipboard.writeText(tsv).then(() => {
      setCopiedData(true);
      setTimeout(() => setCopiedData(false), 2500);
    }).catch(() => {});
  };

  const handleOpenGoogleSheets = () => {
    window.open('https://sheets.new', '_blank');
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {/* Header Info & Live Online Score */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-100 text-emerald-800 rounded-full text-[11px] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Voting Kilat Pengunjung • Kelas X-H SMAN Garut</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Beri Penilaian Senyumanmu
            </h2>
            <p className="text-xs text-slate-500">
              Cukup geser slider lalu klik kirim. Tanpa ribet isi nama!
            </p>
          </div>

          {/* Live Online Average Card */}
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-2xl px-5 py-3.5 text-center min-w-[190px] shadow-sm w-full sm:w-auto">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-100 block">
              Rata-Rata Voting Online
            </span>
            <div className="flex items-center justify-center gap-2 mt-0.5">
              <span className="text-3xl sm:text-4xl font-black font-mono tabular-nums">
                {stats.totalVotes > 0 ? stats.average.toFixed(1) : '-'}
              </span>
              <div className="text-left">
                <div className="flex items-center text-amber-300">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className={`w-3.5 h-3.5 ${
                        s <= Math.round(stats.average) ? 'fill-amber-300' : 'text-emerald-300/40'
                      }`}
                    />
                  ))}
                </div>
                <div className="text-[10px] text-emerald-100 font-mono">
                  {stats.totalVotes} Suara Masuk
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Breakdown Progress Bars */}
        <div className="mt-5 pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between text-xs mb-2 text-slate-700 font-bold">
            <span>Sebaran Voting Pengunjung:</span>
            <span className="font-mono text-emerald-700 font-semibold">{stats.totalVotes} Suara Nyata</span>
          </div>
          <div className="space-y-1.5">
            {[
              { val: 5, label: 'Senyum Lebar', emoji: '😄', color: 'bg-emerald-600' },
              { val: 4, label: 'Senyum Ramah', emoji: '🙂', color: 'bg-teal-500' },
              { val: 3, label: 'Biasa Saja', emoji: '😐', color: 'bg-amber-400' },
              { val: 2, label: 'Kurang Senyum', emoji: '🙁', color: 'bg-orange-400' },
              { val: 1, label: 'Senyum Murung', emoji: '😞', color: 'bg-rose-500' },
            ].map((item) => {
              const count = stats.breakdown[item.val] || 0;
              const percent = stats.totalVotes > 0 ? Math.round((count / stats.totalVotes) * 100) : 0;
              return (
                <div key={item.val} className="flex items-center gap-2 text-xs">
                  <div className="w-28 flex items-center gap-1 shrink-0">
                    <span>{item.emoji}</span>
                    <span className="text-[11px] text-slate-600 truncate">{item.label}</span>
                  </div>
                  <div className="flex-1 bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} transition-all duration-300`}
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                  <span className="w-12 text-right font-mono text-[10px] text-slate-500 shrink-0 tabular-nums">
                    {count} ({percent}%)
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Super Simple 1-Second Voting Box */}
      <div className="bg-white rounded-2xl border-2 border-emerald-500/30 p-5 sm:p-7 shadow-sm space-y-5">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
            <Sliders className="w-4 h-4 text-emerald-600" />
            <span>Formulir Voting Simpel (1 Sentuhan)</span>
          </div>
          <span className="text-[10px] bg-emerald-50 text-emerald-800 font-semibold px-2 py-0.5 rounded">
            Tanpa Nama
          </span>
        </div>

        {justVoted ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3 animate-in fade-in duration-200">
            <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto text-3xl shadow-sm">
              😄
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">
                Suaramu Berhasil Dicatat!
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Terima kasih telah mengapresiasi karya siswa <strong>Kelas X-H SMA Negeri Garut</strong>.
              </p>
            </div>
            <button
              onClick={() => setJustVoted(false)}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold cursor-pointer transition-colors"
            >
              Kirim Suara Tambahan
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmitVote} className="space-y-5">
            
            {/* Dynamic Morphing Avatar Display */}
            <div className="flex flex-col items-center justify-center text-center space-y-2 py-1">
              <div
                className="w-24 h-24 rounded-full border-4 shadow-sm flex items-center justify-center transition-all duration-200"
                style={{
                  borderColor: currentStage.accentColor,
                  backgroundColor: `${currentStage.accentColor}15`,
                }}
              >
                <svg viewBox="0 0 100 100" className="w-18 h-18 transition-all duration-200">
                  <circle cx="50" cy="50" r="46" fill="#FDE047" stroke="#CA8A04" strokeWidth="2.5" />
                  {sliderScore === 5 ? (
                    <>
                      <path d="M 28 40 Q 36 30 44 40" fill="none" stroke="#713F12" strokeWidth="3.5" strokeLinecap="round" />
                      <path d="M 56 40 Q 64 30 72 40" fill="none" stroke="#713F12" strokeWidth="3.5" strokeLinecap="round" />
                    </>
                  ) : sliderScore === 1 ? (
                    <>
                      <circle cx="36" cy="40" r="4.5" fill="#713F12" />
                      <circle cx="64" cy="40" r="4.5" fill="#713F12" />
                      <path d="M 28 32 L 42 36" stroke="#713F12" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M 72 32 L 58 36" stroke="#713F12" strokeWidth="2.5" strokeLinecap="round" />
                    </>
                  ) : (
                    <>
                      <circle cx="36" cy="40" r="4" fill="#713F12" />
                      <circle cx="64" cy="40" r="4" fill="#713F12" />
                    </>
                  )}
                  {sliderScore >= 4 && (
                    <>
                      <circle cx="26" cy="52" r="5" fill="#F87171" opacity="0.6" />
                      <circle cx="74" cy="52" r="5" fill="#F87171" opacity="0.6" />
                    </>
                  )}
                  <path
                    d={currentStage.mouthPath}
                    fill={sliderScore === 5 ? '#713F12' : 'none'}
                    stroke="#713F12"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div>
                <div className="text-lg font-extrabold text-slate-900 flex items-center justify-center gap-1.5">
                  <span>{currentStage.emoji}</span>
                  <span>{currentStage.title}</span>
                  <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-full border ${currentStage.bgBadge}`}>
                    {sliderScore}/5
                  </span>
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {currentStage.desc}
                </div>
              </div>
            </div>

            {/* Slider Control */}
            <div className="space-y-2">
              <input
                type="range"
                min="1"
                max="5"
                step="1"
                value={sliderScore}
                onChange={(e) => setSliderScore(parseInt(e.target.value, 10))}
                className="w-full h-4 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                style={{
                  background: `linear-gradient(to right, #f43f5e 0%, #fb923c 25%, #f59e0b 50%, #14b8a6 75%, #10b981 100%)`,
                }}
              />

              {/* 5 Big Tap Targets for Easy Mobile Touch */}
              <div className="grid grid-cols-5 gap-1 pt-1">
                {[
                  { val: 1, label: 'Murung', emoji: '😞' },
                  { val: 2, label: 'Kurang', emoji: '🙁' },
                  { val: 3, label: 'Biasa', emoji: '😐' },
                  { val: 4, label: 'Senyum', emoji: '🙂' },
                  { val: 5, label: 'Lebar', emoji: '😄' },
                ].map((item) => (
                  <button
                    key={item.val}
                    type="button"
                    onClick={() => setSliderScore(item.val)}
                    className={`py-2 px-1 rounded-xl text-center transition-all cursor-pointer flex flex-col items-center justify-center min-h-[46px] border ${
                      sliderScore === item.val
                        ? 'border-emerald-600 bg-emerald-50 text-slate-900 font-bold ring-2 ring-emerald-500/20'
                        : 'border-slate-100 bg-slate-50 text-slate-400 hover:bg-slate-100'
                    }`}
                  >
                    <span className="text-xl sm:text-2xl">{item.emoji}</span>
                    <span className="text-[10px] mt-0.5 font-medium leading-tight">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Optional Note (No Name, No Category) */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Pesan / Kesan untuk Siswa X-H (Opsional):
              </label>
              <input
                type="text"
                value={voterComment}
                onChange={(e) => setVoterComment(e.target.value)}
                placeholder="Tuliskan ucapan penyemangat singkat..."
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
              />
            </div>

            {/* Big 1-Tap Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white rounded-xl text-sm font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 min-h-[48px]"
            >
              <Send className="w-4 h-4" />
              <span>{submitting ? 'Menyimpan Suara...' : 'Kirim Suara Senyuman Sekarang'}</span>
            </button>
          </form>
        )}
      </div>

      {/* Google Sheets Integration Section */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider">
              <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
              <span>Integrasi Google Sheets</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
              Lihat Semua Hasil Voting di Google Sheets
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleCopyForGoogleSheets}
              className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copiedData ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedData ? 'Data Tersalin!' : 'Salin untuk Sheets'}</span>
            </button>

            <a
              href="/api/votes/csv"
              download="hasil-voting-kelas-x-h.csv"
              className="px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CSV (Sheets)</span>
            </a>

            <button
              onClick={handleOpenGoogleSheets}
              className="px-3 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Buka Google Sheets</span>
            </button>
          </div>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed">
          Semua hasil voting pengunjung bazaar dapat kamu buka langsung di <strong>Google Sheets</strong>. 
          Klik tombol <strong>"Salin untuk Sheets"</strong> lalu buka Google Sheets dan tekan <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded font-mono text-[10px]">Ctrl+V</kbd> untuk menempelkan seluruh baris ke spreadsheet!
        </p>

        {/* Live Spreadsheet Table Preview */}
        <div className="border border-slate-200 rounded-xl overflow-hidden">
          <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex items-center justify-between text-xs font-bold text-slate-700">
            <div className="flex items-center gap-2">
              <Table className="w-3.5 h-3.5 text-slate-500" />
              <span>Tabel Spreadsheet Voting ({stats.totalVotes} Data)</span>
            </div>
            <button
              onClick={() => setShowSheetsView(!showSheetsView)}
              className="text-emerald-700 hover:underline cursor-pointer text-[11px]"
            >
              {showSheetsView ? 'Sembunyikan Tabel' : 'Tampilkan Seluruh Baris'}
            </button>
          </div>

          <div className="overflow-x-auto max-h-72">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 sticky top-0">
                <tr>
                  <th className="py-2 px-3 border-r border-slate-200 w-12 text-center">#</th>
                  <th className="py-2 px-3 border-r border-slate-200 whitespace-nowrap">Waktu (WIB)</th>
                  <th className="py-2 px-3 border-r border-slate-200 text-center w-20">Skor</th>
                  <th className="py-2 px-3 border-r border-slate-200 whitespace-nowrap">Ekspresi Senyuman</th>
                  <th className="py-2 px-3 min-w-[200px]">Catatan Pengunjung</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {stats.votes.map((v, idx) => {
                  const smile = getStageInfo(v.score);
                  const d = new Date(v.createdAt);
                  const dateStr = d.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' });
                  const timeStr = d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

                  return (
                    <tr key={v.id} className="hover:bg-emerald-50/40">
                      <td className="py-2 px-3 border-r border-slate-200 text-center text-slate-400">{idx + 1}</td>
                      <td className="py-2 px-3 border-r border-slate-200 text-slate-600 whitespace-nowrap">{dateStr} {timeStr}</td>
                      <td className="py-2 px-3 border-r border-slate-200 text-center font-bold text-emerald-700">{v.score} / 5</td>
                      <td className="py-2 px-3 border-r border-slate-200 whitespace-nowrap font-sans font-medium text-slate-800">
                        {smile.emoji} {smile.title}
                      </td>
                      <td className="py-2 px-3 font-sans text-slate-600 italic">
                        {v.comment ? `"${v.comment}"` : <span className="text-slate-300 font-sans not-italic">-</span>}
                      </td>
                    </tr>
                  );
                })}

                {stats.votes.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-slate-400 font-sans text-xs">
                      Belum ada suara masuk. Voting pertama akan otomatis muncul di sini!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Live Sync Formula Tip */}
        <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 text-xs text-slate-600 space-y-1">
          <div className="font-semibold text-slate-800 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Tips Sinkronisasi Otomatis ke Google Sheets:</span>
          </div>
          <p className="text-[11px] leading-relaxed text-slate-500">
            Di Google Sheets baru, ketikkan rumus: <code className="bg-white px-2 py-0.5 rounded border border-slate-300 font-mono text-[10px] text-emerald-800 select-all">=IMPORTDATA("{window.location.origin}/api/votes/csv")</code> untuk mengupdate tabel secara otomatis setiap ada pengunjung yang melakukan voting!
          </p>
        </div>
      </div>
    </div>
  );
};
