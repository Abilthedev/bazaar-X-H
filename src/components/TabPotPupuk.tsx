import React, { useState } from 'react';
import { Droplets, CheckCircle2, AlertTriangle, ArrowRight, Wrench, Sparkles, BookOpen, Calculator } from 'lucide-react';

export const TabPotPupuk: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [dailyWasteKg, setDailyWasteKg] = useState<number>(1.5);

  const steps = [
    {
      title: 'Langkah 1: Persiapan Galon & Pemotongan Pintu Masuk',
      tag: 'Pemotongan Wadah',
      desc: 'Bersihkan galon bekas air mineral hingga higienis. Gunakan cutter tajam untuk memotong bagian sepertiga atas galon. Potongan atas ini jangan dibuang karena akan digunakan kembali sebagai penutup tabung komposter agar tidak terkena lalat dan air hujan.',
      keyPoints: [
        'Gunakan galon berbahan PET atau polikarbonat tebal',
        'Sisakan sedikit engsel plastik saat memotong agar tutup tidak hilang',
        'Ratakan tepi potongan dengan amplas halus agar tidak melukai tangan'
      ]
    },
    {
      title: 'Langkah 2: Pemasangan Kran Drainase Pupuk Cair (POC)',
      tag: 'Sistem Kran Bawah',
      desc: 'Beri tanda lubang pada dinding galon sekitar 5 cm dari dasar. Lubangi menggunakan solder panas atau mata bor ukuran 1/2 inch. Pasang kran air plastik berulir yang telah dilapisi seal tape putih dan ring karet ganda (bagian dalam dan luar) agar tidak terjadi kebocoran cairan pupuk.',
      keyPoints: [
        'Ketinggian kran 5 cm dari dasar menyisakan ruang endapan',
        'Gunakan seal tape karet silikon tebal untuk mencegah rembesan',
        'Lakukan uji coba kebocoran dengan 2 liter air sebelum digunakan'
      ]
    },
    {
      title: 'Langkah 3: Pemasangan Saringan Pembatas (Grid Separator)',
      tag: 'Filter Padat & Cair',
      desc: 'Letakkan saringan plastik berlubang rapat atau kawat kasa stainless di atas batas kran (sekitar 7-8 cm dari dasar). Saringan ini bertugas menahan sampah sisa makanan padat agar tidak menyumbat lubang kran, sehingga cairan lindi nutrisi murni dapat menetes bebas ke bagian bawah.',
      keyPoints: [
        'Bahan filter tahan asam dan tidak mudah berkarat',
        'Diberi penyangga batu bata mini atau potongan paralon di bawahnya',
        'Memastikan aliran cairan pupuk lancar saat kran dibuka'
      ]
    },
    {
      title: 'Langkah 4: Pembuatan Lubang Aerasi Mikro (Ventilasi)',
      tag: 'Sirkulasi Oksigen',
      desc: 'Buat lubang-lubang kecil berdiameter 2 mm di sekeliling leher galon bagian atas menggunakan jarum panas atau solder kecil. Ventilasi ini krusial untuk sirkulasi oksigen bagi bakteri pengurai aerob sehingga proses fermentasi tidak menimbulkan bau busuk.',
      keyPoints: [
        'Lubang mikro berukuran 1-2 mm agar semut dan lalat buah tidak masuk',
        'Dapat dilapisi kain kasa nyamuk di bagian dalam lubang',
        'Menjamin pasokan udara segar bagi mikroorganisme pengurai'
      ]
    },
    {
      title: 'Langkah 5: Pengisian Formula Kompos & Bio-Aktivator',
      tag: 'Formulasi Bahan',
      desc: 'Masukkan lapisan awal berupa cacahan daun kering atau serbuk kayu (unsur Karbon/Coklat). Lalu tambahkan sampah sisa sayuran dan buah kantin yang sudah dicacah kecil (unsur Nitrogen/Hijau). Siramkan larutan bio-aktivator EM4 yang telah dicampur air gula/molase (rasio 1 tutup botol EM4 : 1 sendok gula : 500ml air).',
      keyPoints: [
        'Rasio ideal: 50% sampah coklat (karbon) + 50% sampah hijau (nitrogen)',
        'Cacah sampah hingga ukuran 2-3 cm agar proses penguraian 3x lebih cepat',
        'Kelembaban dijaga seperti spons basah yang diperas (tidak becek)'
      ]
    },
    {
      title: 'Langkah 6: Panen Pupuk Cair (POC) & Kompos Padat',
      tag: 'Masa Panen',
      desc: 'Setelah 14 hingga 21 hari proses fermentasi, buka kran drainase. Cairan berwarna coklat kehitaman dengan aroma khas tape/fermentasi manis adalah Pupuk Organik Cair (POC) berkualitas tinggi! Cairan ini dapat diencerkan dengan air (1:100) untuk menyiram tanaman sekolah. Sampah padat di atasnya akan menjadi kompos gembur dalam 40 hari.',
      keyPoints: [
        'POC dipanen berkala 3 hari sekali melalui kran',
        'POC kaya unsur hara NPK organik untuk merangsang tunas dan bunga',
        'Kompos padat dapat langsung dicampurkan ke tanah pot bunga X-H'
      ]
    }
  ];

  // Calculation for Waste to Liquid Fertilizer
  // 1 kg food waste generates approx 0.15 - 0.25 L POC per week
  const monthlyWaste = dailyWasteKg * 30;
  const estimatedPocLiters = (monthlyWaste * 0.2).toFixed(1);
  const estimatedSolidCompostKg = (monthlyWaste * 0.35).toFixed(1);
  const estimatedPlantsFed = Math.round(parseFloat(estimatedPocLiters) * 20);

  return (
    <div className="space-y-8">
      {/* Real Photo Showcase Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-5 relative bg-slate-900 min-h-[340px] flex items-center justify-center overflow-hidden">
            <img
              src="/assets/aistudio/foto_membuat_pot_pupuk_d1b33e94.jpeg"
              alt="Siswa Kelas X-H merakit pot galon pupuk organik cair"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 text-white text-xs p-2.5 bg-slate-900/80 backdrop-blur-xs rounded-xl border border-white/10">
              <span className="font-bold text-emerald-400 block text-[11px] uppercase tracking-wider">
                Dokumentasi Nyata Siswa Kelas X-H
              </span>
              Perakitan pot komposter galon dan fitting kran pembuangan POC di selasar kelas.
            </div>
          </div>

          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-md text-xs font-semibold">
                <Droplets className="w-3.5 h-3.5 text-emerald-600" />
                <span>Teknologi Ramah Lingkungan Kelas X-H</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Inovasi Pot Pupuk Galon Bekas (Komposter POC)
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2">
                Pot pupuk galon ini merupakan solusi cerdas karya tim siswa <strong>Kelas X-H</strong> untuk mengolah sampah organik kantin sekolah dan dapur rumah menjadi dua produk bernilai tinggi sekaligus: <strong>Pupuk Organik Cair (POC)</strong> dan <strong>Kompos Padat Subur</strong>.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-xl">
                <div className="text-[11px] text-slate-500 font-medium">Bahan Baku</div>
                <div className="text-sm font-bold text-slate-900">100% Galon Bekas</div>
              </div>
              <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-xl">
                <div className="text-[11px] text-slate-500 font-medium">Waktu Panen POC</div>
                <div className="text-sm font-bold text-emerald-700 font-mono">14-21 Hari</div>
              </div>
              <div className="bg-slate-50 border border-slate-200/80 p-3 rounded-xl col-span-2 sm:col-span-1">
                <div className="text-[11px] text-slate-500 font-medium">Karakteristik Bau</div>
                <div className="text-sm font-bold text-emerald-700">Aroma Fermentasi Segar</div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-500 border-t border-slate-100">
              <Wrench className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Biaya pembuatan sangat ekonomis (di bawah Rp 20.000 per unit bila menggunakan barang bekas).</span>
            </div>
          </div>
        </div>
      </div>

      {/* Step by Step Interactive Tutorial */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-600" />
              <span>Langkah Pembuatan Pot Pupuk Step-by-Step</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Ikuti panduan praktikum Kelas X-H berikut untuk membuat pot komposter di rumahmu
            </p>
          </div>
          <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 self-start sm:self-auto">
            Tahap {activeStep + 1} dari {steps.length}
          </span>
        </div>

        {/* Step Buttons Navigator */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {steps.map((st, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                activeStep === idx
                  ? 'border-emerald-600 bg-emerald-50/80 shadow-xs'
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded ${
                  activeStep === idx ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  0{idx + 1}
                </span>
                {activeStep === idx && <Sparkles className="w-3 h-3 text-emerald-600" />}
              </div>
              <div className="text-[11px] font-bold text-slate-900 line-clamp-1">{st.tag}</div>
            </button>
          ))}
        </div>

        {/* Active Step Content Card */}
        <div className="bg-slate-50/80 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-md uppercase tracking-wide">
              {steps[activeStep].tag}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
              <span>Projek P5 Gaya Hidup Berkelanjutan Kelas X-H</span>
            </div>
          </div>

          <h4 className="text-lg sm:text-xl font-bold text-slate-900">
            {steps[activeStep].title}
          </h4>

          <p className="text-slate-700 text-sm leading-relaxed">
            {steps[activeStep].desc}
          </p>

          <div className="bg-white rounded-xl p-4 border border-slate-200 space-y-2 mt-4">
            <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Poin Penting & Tips Praktik Siswa X-H:</span>
            </div>
            <ul className="space-y-1.5">
              {steps[activeStep].keyPoints.map((kp, idx) => (
                <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span>{kp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Step Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200">
            <button
              onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeStep === 0
                  ? 'text-slate-300 cursor-not-allowed'
                  : 'text-slate-700 hover:bg-slate-200'
              }`}
            >
              ← Langkah Sebelumnya
            </button>

            <button
              onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
              disabled={activeStep === steps.length - 1}
              className={`px-5 py-2 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeStep === steps.length - 1
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
              }`}
            >
              <span>Langkah Berikutnya</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Interactive POC Calculator */}
      <div className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-semibold">
              <Calculator className="w-3.5 h-3.5" />
              <span>Kalkulator Potensi Pupuk Organik Kelas X-H</span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight">
              Hitung Pupuk Cair yang Bisa Kamu Hasilkan di Rumah
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Berapa rata-rata sampah sisa sayur, buah, atau sisa nasi di rumahmu setiap hari? Geser slider untuk melihat estimasi hasil pupuk cair dan kompos padat!
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-slate-300">Sampah Organik Harian:</span>
                <span className="font-mono text-emerald-400 font-bold text-sm tabular-nums">
                  {dailyWasteKg} kg / hari
                </span>
              </div>
              <input
                type="range"
                min="0.5"
                max="5.0"
                step="0.5"
                value={dailyWasteKg}
                onChange={(e) => setDailyWasteKg(parseFloat(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer h-2 bg-slate-700 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>0.5 kg (Keluarga Kecil)</span>
                <span>2.5 kg (Standar)</span>
                <span>5.0 kg (Kantin / Rumah Besar)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/10 space-y-1">
              <span className="text-xs text-emerald-300 font-semibold block">Estimasi Pupuk Cair (POC):</span>
              <div className="text-3xl font-extrabold font-mono text-white tabular-nums">
                {estimatedPocLiters} <span className="text-base font-normal text-slate-300">Liter / bln</span>
              </div>
              <p className="text-[11px] text-slate-300 pt-1">
                Cukup untuk menyiram ± <strong className="text-emerald-300 font-mono">{estimatedPlantsFed} pot</strong> tanaman hias atau sayur!
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/10 space-y-1">
              <span className="text-xs text-amber-300 font-semibold block">Kompos Padat Matang:</span>
              <div className="text-3xl font-extrabold font-mono text-white tabular-nums">
                {estimatedSolidCompostKg} <span className="text-base font-normal text-slate-300">Kg / bln</span>
              </div>
              <p className="text-[11px] text-slate-300 pt-1">
                Dapat menggantikan 100% pupuk kimia tanah pot sekolah.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
