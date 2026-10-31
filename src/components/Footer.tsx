import React from 'react';
import { Heart, Sprout, Recycle } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Class Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg">
                X-H
              </div>
              <div>
                <div className="text-base font-bold text-white leading-tight">
                  Pameran Karya Ramah Lingkungan
                </div>
                <div className="text-xs text-emerald-400 font-medium">
                  Karya Siswa-Siswi Kelas X-H • SMAN Garut
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Website edukasi dan etalase karya non-profit Projek Penguatan Profil Pelajar Pancasila (P5) tema Gaya Hidup Berkelanjutan. Dibuat dengan semangat kepedulian lingkungan oleh generasi muda Kelas X-H.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400">
              <Recycle className="w-4 h-4 shrink-0" />
              <span>Kelola Sampah, Lestarikan Bumi, Bangkitkan Inovasi Hijau</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Navigasi Halaman
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('bazaar')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-slate-400"
                >
                  Galeri Hasil Karya X-H
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pot-pupuk')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-slate-400"
                >
                  Panduan Membuat Pot Pupuk Cair (POC)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pot-bunga')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-slate-400"
                >
                  Panduan Pot Bunga & Tanaman Hias
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('identifikasi-sampah')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-slate-400"
                >
                  Identifikasi Sampah & Vidio Aksi
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('voting')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-slate-400"
                >
                  Voting Slider Senyuman & Ulasan
                </button>
              </li>
            </ul>
          </div>

          {/* School Project Info */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Tentang Projek Kelas X-H
            </div>
            <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/60 text-xs space-y-2 text-slate-300">
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <Sprout className="w-4 h-4" />
                <span>SMA Negeri Garut • Kelas X-H</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Seluruh karya pot daur ulang, pupuk cair organik, dan fasilitas edukasi dibuat langsung oleh peserta didik Kelas X-H untuk penghijauan sekolah SMAN Garut secara 100% non-profit.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © 2026 Stand Bazaar Kelas X-H. Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>oleh Tim Kreatif Siswa Kelas X-H</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
