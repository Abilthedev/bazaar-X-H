import React, { useState } from 'react';
import { Eye, Search, Tag, Sparkles, Sprout, Droplets, CheckCircle, Info, Heart, MapPin, Recycle } from 'lucide-react';
import { BazaarProduct } from '../types';

export const TabBazaar: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeWorkModal, setActiveWorkModal] = useState<BazaarProduct | null>(null);

  const works: BazaarProduct[] = [
    {
      id: 'work-1',
      name: 'Pot Biopori Komposter Galon (Pengolah Pupuk Cair)',
      category: 'pot',
      description: 'Galon air mineral daur ulang yang dirancang dengan sistem filter gravitasi dan kran pembuangan pupuk cair (POC). Berfungsi mengolah sampah sisa makanan kantin sekolah menjadi cairan penyubur tanaman tanpa bau menyengat.',
      badge: 'Inovasi Unggulan',
      status: 'Terpasang di Kebun Sekolah & Booth X-H',
      image: '/assets/aistudio/foto_membuat_pot_pupuk_d1b33e94.jpeg',
      benefits: [
        'Mengolah 15-20 kg sampah organik kantin per bulan',
        'Dilengkapi kran drainase untuk memudahkan panen cairan lindi',
        'Saringan kasa stainless memisahkan sampah padat dan cair',
        'Menyediakan pasokan pupuk cair gratis untuk tanaman sekolah'
      ],
      specs: [
        'Bahan: Galon air mineral 19 liter bekas',
        'Aksesoris: Kran 1/2 inch, pipa aerasi, kasa saring',
        'Daya tampung: 15 Liter bahan organik',
        'Tujuan: Ditempatkan di taman sekolah & percontohan lab biologi'
      ]
    },
    {
      id: 'work-2',
      name: 'Pot Gantung Tanaman Hias (Kuning & Biru Khas X-H)',
      category: 'pot',
      description: 'Pot tanaman gantung mandiri (self-watering) dari botol plastik air mineral bekas yang dipotong dan dilukis tangan oleh siswa Kelas X-H. Dirancang dengan warna cerah kuning dan biru untuk mempercantik balkon koridor kelas.',
      badge: 'Dekorasi Koridor',
      status: 'Menghiasi Koridor Lantai 1 SMAN Garut',
      image: '/assets/aistudio/foto_mengecet_pot_bunga_1aac49cd.jpeg',
      benefits: [
        'Sistem sumbu kapiler otomatis mencegah tanaman layu',
        'Mengurangi limbah botol plastik sekali pakai di lingkungan SMA',
        'Cat tahan air dan tahan panas matahari tropis',
        'Menciptakan ruang belajar yang hijau, sejuk, dan estetik'
      ],
      specs: [
        'Bahan: Botol plastik PET 600ml & 1.500ml bekas',
        'Pewarna: Cat minyak akrilik kuning kenari & biru langit',
        'Gantungan: Tali rami goni serat alami',
        'Tujuan: Perindang balkon kelas dan pagar sekolah'
      ]
    },
    {
      id: 'work-3',
      name: 'Pupuk Organik Cair (POC) Ekstraksi Fermentasi X-H',
      category: 'pupuk',
      description: 'Pupuk alami cair ramah lingkungan hasil fermentasi anaerobik sampah sayur dan buah kantin sekolah dengan bantuan bioaktivator mikroba ramah lingkungan. Disediakan gratis untuk perawatan kebun bersama.',
      badge: 'Formula Alami',
      status: 'Digunakan untuk Kebun Tanaman Sekolah',
      image: '/assets/aistudio/foto_membuat_pot_pupuk_d1b33e94.jpeg',
      benefits: [
        '100% alami tanpa bahan kimia sintetis',
        'Mempercepat pertumbuhan tunas daun dan akar baru',
        'Menyuburkan mikroorganisme alami di dalam tanah pot',
        'Diberikan secara gratis bagi warga sekolah yang merawat tanaman'
      ],
      specs: [
        'Bahan baku: Sampah sayur kantin, kulit buah, molase, EM4',
        'Masa fermentasi: 21 hari hingga matang',
        'Aroma: Fermentasi segar khas tapai',
        'Aplikasi: Larutkan 10 ml ke 1 liter air siram'
      ]
    },
    {
      id: 'work-4',
      name: 'Pot Meja Edukasi + Tanaman Lidah Mertua (Sansevieria)',
      category: 'tanaman',
      description: 'Kombinasi pot botol mini daur ulang dengan tanaman sukulen dan lidah mertua pembersih udara. Dirancang untuk diletakkan di atas meja guru dan ruang belajar sebagai penyerap racun udara dan radiasi elektronik.',
      badge: 'Pembersih Udara',
      status: 'Ditempatkan di Ruang Guru & Meja Belajar',
      image: '/assets/aistudio/foto_membuat_pot_a0f63aeb.jpeg',
      benefits: [
        'Menyerap senyawa polutan benzena dan karbon monoksida',
        'Sangat hemat air dan tahan di dalam ruangan ber-AC',
        'Media tanam menggunakan campuran kompos olahan siswa X-H',
        'Membantu meningkatkan konsentrasi dan kenyamanan belajar'
      ],
      specs: [
        'Bahan pot: Potongan dasar botol mineral 600ml',
        'Tanaman: Sansevieria trifasciata mini',
        'Media: Tanah subur + sekam bakar + kompos padat X-H',
        'Perawatan: Penyiraman cukup 1 kali seminggu'
      ]
    },
    {
      id: 'work-5',
      name: 'Instalasi Rak Bambu & Tanaman Gantung Sekolah',
      category: 'edukasi',
      description: 'Struktur rangka bambu vertikal buatan siswa X-H untuk menjemur pot saat proses pengecatan serta menjadi instalasi taman vertikal (vertical garden) portabel di sudut sekolah.',
      badge: 'Infrastruktur Hijau',
      status: 'Terpasang di Booth Pameran X-H',
      image: '/assets/aistudio/foto_mengecet_pot_bunga_1aac49cd.jpeg',
      benefits: [
        'Memanfaatkan material bambu lokal yang kuat dan ramah lingkungan',
        'Dapat memuat hingga 20 pot gantung sekaligus',
        'Bisa dipindahkan ke berbagai area koridor yang membutuhkan penghijauan',
        'Dibuat mandiri dengan ketelitian konstruksi siswa X-H'
      ],
      specs: [
        'Bahan: Bambu tali yang diamplas halus & papan kayu bekas',
        'Kapasitas: 15 - 20 pot botol gantung',
        'Dimensi: Panjang 1.5 meter, tinggi 1.2 meter',
        'Tujuan: Display pameran dan rak taman permanen'
      ]
    },
    {
      id: 'work-6',
      name: 'Modul Edukasi Pemilahan Sampah Mandiri',
      category: 'edukasi',
      description: 'Serangkaian panduan visual dan stiker edukatif untuk tempat sampah sekolah agar siswa-siswi SMAN Garut dapat memisahkan sampah organik, anorganik, dan B3 dengan benar sejak dari sumbernya.',
      badge: 'Panduan Edukatif',
      status: 'Diterapkan di Tong Sampah Koridor Sekolah',
      image: '/assets/aistudio/foto_membuat_pot_a0f63aeb.jpeg',
      benefits: [
        'Membantu petugas kebersihan sekolah memilah sampah',
        'Menjaga sampah organik tetap bersih dari plastik dan puntung',
        'Meningkatkan kesadaran ekologis seluruh warga sekolah',
        'Mendukung program Adiwiyata SMA Negeri Garut'
      ],
      specs: [
        'Format: Poster edukasi tahan air & panduan web interaktif',
        'Cakupan: Seluruh koridor kelas X, XI, dan XII',
        'Inisiator: Tim Divisi Lingkungan Hidup Kelas X-H',
        'Sifat: Non-profit terbuka untuk seluruh civitas akademika'
      ]
    }
  ];

  const filteredWorks = works.filter((work) => {
    const matchesCategory = selectedCategory === 'all' || work.category === selectedCategory;
    const matchesSearch = work.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          work.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Non-Profit Showcase Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-md text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Pameran Karya Non-Profit • Edukasi & Aksi Nyata</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Galeri Karya & Hasil Inovasi Kelas X-H
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Selamat datang di etalase karya non-profit <strong>Kelas X-H SMA Negeri Garut</strong>! 
              Semua karya di bawah ini dibuat dari bahan daur ulang galon dan botol plastik untuk tujuan 
              penghijauan sekolah, edukasi lingkungan, dan pelestarian bumi tanpa dipungut biaya komersial.
            </p>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 shrink-0 max-w-xs space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
              <Heart className="w-4 h-4 text-emerald-600 fill-emerald-600" />
              <span>Misi Non-Profit Kelas X-H:</span>
            </div>
            <p className="text-[11px] text-emerald-800 leading-relaxed">
              Karya ini dibagikan dan dipasang untuk fasilitas bersama SMAN Garut: penghijauan koridor, percontohan biopori, dan edukasi sampah.
            </p>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {[
              { id: 'all', label: 'Semua Hasil Karya' },
              { id: 'pot', label: 'Pot Daur Ulang' },
              { id: 'pupuk', label: 'Pupuk Kompos & POC' },
              { id: 'tanaman', label: 'Tanaman Penghijauan' },
              { id: 'edukasi', label: 'Instalasi & Edukasi' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari karya siswa X-H..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white"
            />
          </div>
        </div>
      </div>

      {/* Works Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWorks.map((work) => (
          <div
            key={work.id}
            className="bg-white rounded-2xl border border-slate-200 hover:border-emerald-300 transition-all duration-200 overflow-hidden flex flex-col shadow-xs hover:shadow-md group"
          >
            {/* Image Showcase */}
            <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
              <img
                src={work.image}
                alt={work.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-bold text-emerald-800 shadow-xs border border-emerald-100">
                {work.badge}
              </div>
              <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-xs px-2.5 py-0.5 rounded text-[10px] font-medium text-emerald-300 flex items-center gap-1">
                <Recycle className="w-3 h-3" />
                <span>100% Daur Ulang</span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold mb-1">
                  <MapPin className="w-3 h-3" />
                  <span className="truncate">{work.status}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                  {work.name}
                </h3>
                <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                  {work.description}
                </p>

                {/* Key Highlights */}
                <div className="mt-3 space-y-1">
                  {work.benefits.slice(0, 2).map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-500">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action / Detail Trigger */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-emerald-800 font-medium bg-emerald-50 px-2 py-0.5 rounded">
                  Karya Siswa X-H
                </span>

                <button
                  onClick={() => setActiveWorkModal(work)}
                  className="px-3.5 py-2 bg-slate-900 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Lihat Detail Karya</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredWorks.length === 0 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
          <p className="text-slate-500 text-sm">Tidak ada karya yang cocok dengan pencarian Anda.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-lg cursor-pointer"
          >
            Lihat Semua Karya
          </button>
        </div>
      )}

      {/* Work Detail Modal */}
      {activeWorkModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-7 shadow-2xl border border-slate-200 animate-in fade-in duration-200 max-h-[90vh] overflow-y-auto space-y-5">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wide">
                  Detail Dokumentasi Karya Kelas X-H
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                  {activeWorkModal.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveWorkModal(null)}
                className="text-slate-400 hover:text-slate-700 text-2xl font-bold p-1 cursor-pointer leading-none"
              >
                ×
              </button>
            </div>

            <div className="rounded-xl overflow-hidden aspect-16/9 bg-slate-100 border border-slate-200">
              <img
                src={activeWorkModal.image}
                alt={activeWorkModal.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                Deskripsi Inovasi:
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeWorkModal.description}
              </p>
            </div>

            {/* Manfaat Nyata */}
            <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200/80 space-y-2">
              <h4 className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Manfaat untuk Lingkungan SMAN Garut:</span>
              </h4>
              <ul className="space-y-1.5">
                {activeWorkModal.benefits.map((b, idx) => (
                  <li key={idx} className="text-xs text-emerald-950 flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Spesifikasi Teknis Pembuatan */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-2">
              <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-slate-600" />
                <span>Spesifikasi & Bahan Daur Ulang:</span>
              </h4>
              <ul className="space-y-1.5">
                {activeWorkModal.specs.map((s, idx) => (
                  <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                    <span className="text-slate-400 font-bold">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-slate-100">
              <span className="text-xs text-slate-500 font-medium">
                Pameran Karya Projek P5 • Kelas X-H SMAN Garut
              </span>
              <button
                onClick={() => setActiveWorkModal(null)}
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg cursor-pointer transition-colors"
              >
                Tutup Jendela
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
