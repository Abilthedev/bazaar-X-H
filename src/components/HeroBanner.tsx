import React from 'react';
import { Sparkles, Recycle, HeartHandshake, Smile, ArrowRight, Sprout } from 'lucide-react';

interface HeroBannerProps {
  onExplore: (tab: string) => void;
  averageRating: number;
  totalVotes: number;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onExplore,
  averageRating,
  totalVotes,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-white to-slate-50 border-b border-emerald-100/60 py-10 lg:py-14">
      {/* Subtle organic background patterns */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-80 h-80 bg-teal-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Info (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100/80 text-emerald-800 rounded-full text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>BOOTH KARYA INOVASI KELAS X-H SMA NEGERI GARUT</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Ubah Sampah Jadi Berkah, Bersama <span className="text-emerald-600 underline decoration-emerald-300 underline-offset-4">Kelas X-H</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              Selamat datang di website resmi booth bazaar ramah lingkungan <strong>Kelas X-H</strong>! 
              Temukan pot biopori pupuk cair dari galon daur ulang, pot tanaman hias estetik warna-warni, 
              edukasi pemilahan sampah, dan jangan lupa berikan penilaian senyuman Anda di kotak suara online kami!
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onExplore('bazaar')}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow flex items-center gap-2 cursor-pointer"
              >
                <Recycle className="w-4 h-4" />
                <span>Lihat Galeri Hasil Karya X-H</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onExplore('voting')}
                className="px-5 py-2.5 bg-white hover:bg-slate-50 text-emerald-700 border border-emerald-200 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <Smile className="w-4 h-4 text-emerald-600" />
                <span>Beri Rating Slider Senyuman</span>
              </button>
            </div>

            {/* Quick Micro Metrics */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-200/80 max-w-lg">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-700">100%</div>
                <div className="text-[11px] text-slate-500 font-medium">Non-Profit Edukatif</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-700">{averageRating.toFixed(1)} / 5.0</div>
                <div className="text-[11px] text-slate-500 font-medium">Skor Kepuasan ({totalVotes} Suara)</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-700">Kelas X-H</div>
                <div className="text-[11px] text-slate-500 font-medium">Tim Siswa SMAN Garut</div>
              </div>
            </div>
          </div>

          {/* Right Showcase Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-emerald-100 p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <Sprout className="w-4 h-4 text-emerald-600" />
                  <span>Highlight Kegiatan Karya Kelas X-H</span>
                </div>
                <span className="text-[11px] text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded">
                  P5 Gaya Hidup Berkelanjutan
                </span>
              </div>

              {/* Mini thumbnails previewing our real photos */}
              <div className="grid grid-cols-2 gap-2.5">
                <div 
                  onClick={() => onExplore('pot-pupuk')} 
                  className="group relative rounded-xl overflow-hidden border border-slate-200 cursor-pointer aspect-4/3 bg-slate-100"
                >
                  <img
                    src="/assets/aistudio/foto_membuat_pot_pupuk_d1b33e94.jpeg"
                    alt="Siswa X-H merakit pot pupuk"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex items-end p-2">
                    <span className="text-[11px] text-white font-semibold">Pot Pupuk Galon</span>
                  </div>
                </div>

                <div 
                  onClick={() => onExplore('pot-bunga')} 
                  className="group relative rounded-xl overflow-hidden border border-slate-200 cursor-pointer aspect-4/3 bg-slate-100"
                >
                  <img
                    src="/assets/aistudio/foto_mengecet_pot_bunga_1aac49cd.jpeg"
                    alt="Siswa X-H mengecat pot bunga"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex items-end p-2">
                    <span className="text-[11px] text-white font-semibold">Pengecatan Pot Estetik</span>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50/80 rounded-xl p-3 text-xs text-emerald-900 space-y-1">
                <div className="font-semibold flex items-center gap-1.5">
                  <HeartHandshake className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Karya Nyata untuk Sekolah Kami</span>
                </div>
                <p className="text-[11px] text-emerald-800 leading-relaxed">
                  Seluruh karya pot dan pupuk dibuat murni untuk edukasi, penghijauan lingkungan SMA Negeri Garut, dan fasilitas bersama tanpa orientasi komersial.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
