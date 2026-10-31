import React, { useState } from 'react';
import { Palette, Scissors, Sun, Sparkles, Check, ArrowRight, Heart } from 'lucide-react';

export const TabPotBunga: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>('yellow');
  const [selectedPlant, setSelectedPlant] = useState<string>('sirih-gading');
  const [selectedModel, setSelectedModel] = useState<'hanging' | 'desktop'>('hanging');
  const [activeStepTab, setActiveStepTab] = useState<number>(0);

  const colors = [
    { id: 'yellow', name: 'Kuning Cerah X-H', bg: 'bg-amber-400', border: 'border-amber-500', hex: '#FBBF24', desc: 'Warna optimisme dan energi ceria kelas X-H' },
    { id: 'blue', name: 'Biru Laut X-H', bg: 'bg-sky-500', border: 'border-sky-600', hex: '#0EA5E9', desc: 'Warna ketenangan dan kesejukan langit Garut' },
    { id: 'green', name: 'Hijau Botani', bg: 'bg-emerald-500', border: 'border-emerald-600', hex: '#10B981', desc: 'Harmoni selaras dengan dedaunan taman' },
    { id: 'combo', name: 'Dwi-Warna (Kuning-Biru)', bg: 'bg-gradient-to-r from-sky-400 to-amber-400', border: 'border-slate-400', hex: 'combo', desc: 'Kombinasi artistik paling favorit di stand bazaar' },
  ];

  const plants = [
    {
      id: 'sirih-gading',
      name: 'Sirih Gading (Epipremnum aureum)',
      type: 'Tanaman Menjuntai',
      needs: 'Cahaya sedang, air 2 hari sekali',
      desc: 'Sangat cocok untuk pot gantung, daun menjuntai anggun dan tangguh di dalam ruangan.'
    },
    {
      id: 'sansevieria',
      name: 'Lidah Mertua Mini (Sansevieria Trifasciata)',
      type: 'Tanaman Meja Pembersih Udara',
      needs: 'Cahaya minim/terang, air 4-5 hari sekali',
      desc: 'Bentuk tegak arsitektural, juara menyerap polutan asap dan debu di kelas.'
    },
    {
      id: 'sukulen',
      name: 'Sukulen / Kaktus Hias Mini',
      type: 'Tanaman Meja Estetik',
      needs: 'Cahaya terang, siram 1 minggu sekali',
      desc: 'Bentuk mungil seperti kelopak bunga mawar, hemat air dan sangat awet.'
    },
    {
      id: 'portulaka',
      name: 'Bunga Krokot Warna-Warni',
      type: 'Tanaman Bunga Halaman',
      needs: 'Sinar matahari penuh, mekar setiap pagi',
      desc: 'Bunganya mekar semarak merah, putih, dan ungu saat terkena sinar matahari.'
    }
  ];

  const tutorialSteps = [
    {
      title: 'Langkah 1: Pemotongan Botol Plastik PET Bekas',
      subtitle: 'Pembentukan Fisik Pot',
      photoDesc: 'Siswa Kelas X-H memotong botol mineral menggunakan gunting dan cutter secara presisi.',
      details: 'Gunakan botol air mineral ukuran 600ml atau 1.500ml. Potong botol menjadi dua bagian (bagian atas dengan corong dan bagian bawah dengan dasar tabung). Untuk pot self-watering, bagian atas akan dibalik dan dimasukkan ke dalam bagian bawah sebagai wadah tanam otomatis.',
      tips: 'Tandai garis lingkar menggunakan spidol permanen terlebih dahulu agar hasil potongan simetris dan rapi.'
    },
    {
      title: 'Langkah 2: Pembuatan Lubang Drainase & Sumbu Kain Flanel',
      subtitle: 'Sistem Hidrologi Tanaman',
      photoDesc: 'Membuat lubang di tutup botol untuk jalur sumbu air kapiler.',
      details: 'Lubangi tutup botol sebesar 4 mm menggunakan solder atau paku panas. Masukkan sumbu kain flanel atau sumbu kompor sepanjang 15 cm melalui lubang tersebut. Sumbu ini akan menyerap air dari tampungan bawah ke media tanah di atas secara mandiri (self-watering), sehingga tanaman tidak kekeringan walau ditinggal libur akhir pekan.',
      tips: 'Kain flanel adalah bahan sumbu terbaik karena daya kapilaritasnya tinggi dan tidak mudah lapuk.'
    },
    {
      title: 'Langkah 3: Pengamplasan Halus & Pelapisan Cat Dasar',
      subtitle: 'Preparasi Permukaan Plastik',
      photoDesc: 'Permukaan botol diamplas ringan agar cat minyak/akrilik menempel kuat.',
      details: 'Gosok perlahan seluruh permukaan luar botol dengan amplas nomor 400. Ini membuat permukaan plastik bertekstur mikro sehingga cat tidak akan mengelupas saat terkena siraman air atau panas matahari.',
      tips: 'Bersihkan sisa serbuk amplas dengan kain lap kering sebelum mengoleskan kuas cat.'
    },
    {
      title: 'Langkah 4: Pengecatan Artistik Kuning & Biru Khas X-H',
      subtitle: 'Sentuhan Estetika Kelas',
      photoDesc: 'Siswa mewarnai pot dengan kuas di selasar kelas menggunakan palet warna cerah.',
      details: 'Celupkan kuas kecil ke cat minyak atau akrilik tahan air. Oleskan secara merata dengan arah sapuan searah. Siswa kelas X-H memilih warna kuning cerah dan biru langit untuk memberi kesan ceria, segar, dan bersemangat. Berikan dua lapis sapuan tipis agar warna solid merata.',
      tips: 'Tunggu lapisan pertama setengah kering (sekitar 15 menit) sebelum menimpanya dengan lapisan kedua.'
    },
    {
      title: 'Langkah 5: Pengeringan di Rak Bambu & Pemasangan Tali Gantung',
      subtitle: 'Finishing & Assembly',
      photoDesc: 'Pot-pot yang baru dicat digantung pada rak bambu khusus penjemuran di koridor sekolah.',
      details: 'Gantungkan pot pada bilah rak jemur bambu selama 2-3 jam di tempat teduh berangin. Setelah cat kering sempurna, pasang tali rami goni atau kawat gantungan pada tiga titik seimbang jika ingin dijadikan pot gantung.',
      tips: 'Jangan jemur di bawah terik matahari langsung yang ekstrem agar plastik botol tidak meliuk lentur.'
    },
    {
      title: 'Langkah 6: Penanaman dengan Kompos Hasil X-H',
      subtitle: 'Media Tanam & Penanaman',
      photoDesc: 'Memasukkan media tanam campuran tanah subur dan kompos pupuk X-H.',
      details: 'Masukkan media tanam dengan perbandingan 2 bagian tanah taman + 1 bagian sekam bakar + 1 bagian kompos padat buatan Kelas X-H. Masukkan bibit tanaman hias dengan hati-hati agar akarnya tidak patah. Siram secukupnya dengan air larutan POC X-H.',
      tips: 'Tepuk-tepuk lembut pinggiran pot agar media tanah mengisi rongga akar dengan padat merata.'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Dual Real Photo Grid Gallery */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-100 text-amber-800 rounded-md text-xs font-semibold">
            <Palette className="w-3.5 h-3.5 text-amber-600" />
            <span>Kreativitas Seni Daur Ulang Kelas X-H</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
            Cara Membuat Pot Bunga & Tanaman Hias Estetik
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-3xl leading-relaxed">
            Dari botol air mineral bekas yang biasanya menjadi limbah, siswa-siswi <strong>Kelas X-H SMA Negeri Garut</strong> menyulapnya menjadi pot bunga bernilai seni tinggi dengan teknik self-watering dan palet warna cerah!
          </p>
        </div>

        {/* The Two Actual Student Photos Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Photo 1: Cutting the bottles */}
          <div className="group rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 flex flex-col shadow-xs">
            <div className="relative aspect-4/3 overflow-hidden bg-slate-900">
              <img
                src="/assets/aistudio/foto_membuat_pot_a0f63aeb.jpeg"
                alt="Siswa Kelas X-H memotong botol plastik untuk pot tanaman"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-md text-[11px] font-bold text-slate-800 shadow-xs">
                Dokumentasi Tahap 1
              </div>
            </div>
            <div className="p-4 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                <Scissors className="w-3.5 h-3.5 text-emerald-600" />
                <span>Pemotongan & Pembentukan Pola Botol</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Siswi Kelas X-H bergotong royong memotong botol plastik air mineral bekas dengan gunting khusus di depan ruang kelas SMA Negeri Garut.
              </p>
            </div>
          </div>

          {/* Photo 2: Painting the bottles */}
          <div className="group rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 flex flex-col shadow-xs">
            <div className="relative aspect-4/3 overflow-hidden bg-slate-900">
              <img
                src="/assets/aistudio/foto_mengecet_pot_bunga_1aac49cd.jpeg"
                alt="Siswa Kelas X-H mengecat pot botol warna kuning dan biru di rak bambu"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-md text-[11px] font-bold text-amber-800 shadow-xs">
                Dokumentasi Tahap 2
              </div>
            </div>
            <div className="p-4 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                <Palette className="w-3.5 h-3.5 text-amber-600" />
                <span>Pengecatan Warna Kuning & Biru di Rak Bambu</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Proses pengecatan kuas menggunakan cat tahan air dengan kombinasi warna kuning cerah dan biru langit, digantung rapi di instalasi rak bambu siswa X-H.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive DIY Customizer Simulator */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Simulasi Desain Interaktif</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mt-1">
            Rancang Pot Tanaman Impianmu (Karya Kelas X-H)
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Pilih warna cat, model pot, dan tanaman hias yang kamu sukai untuk melihat tampilannya di stan kami!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Customizer Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Color Choice */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-2">
                1. Pilih Warna Cat Pot:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {colors.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedColor(c.id)}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      selectedColor === c.id
                        ? 'border-emerald-600 ring-2 ring-emerald-500/20 bg-emerald-50/40'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full mb-2 ${c.bg} shadow-inner`} />
                    <div className="text-xs font-bold text-slate-900 leading-tight">{c.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Model Choice */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-2">
                2. Pilih Model Pot:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setSelectedModel('hanging')}
                  className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                    selectedModel === 'hanging'
                      ? 'border-emerald-600 bg-emerald-50/50 text-emerald-900 font-semibold'
                      : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="text-xs font-bold">Pot Gantung (Hanging Pot)</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Dengan tali rami & cantolan gantungan</div>
                </button>

                <button
                  onClick={() => setSelectedModel('desktop')}
                  className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                    selectedModel === 'desktop'
                      ? 'border-emerald-600 bg-emerald-50/50 text-emerald-900 font-semibold'
                      : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="text-xs font-bold">Pot Duduk Meja (Desktop Pot)</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Dengan tatakan anti-tumpah meja</div>
                </button>
              </div>
            </div>

            {/* Plant Choice */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-2">
                3. Pilih Jenis Tanaman:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {plants.map((pl) => (
                  <button
                    key={pl.id}
                    onClick={() => setSelectedPlant(pl.id)}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      selectedPlant === pl.id
                        ? 'border-emerald-600 bg-emerald-50/40 text-emerald-950 font-semibold shadow-xs'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-900">{pl.name}</div>
                    <div className="text-[11px] text-emerald-700 mt-0.5">{pl.type}</div>
                    <div className="text-[10px] text-slate-500 mt-1">{pl.needs}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Live Preview Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-50 to-emerald-50/30 rounded-2xl border border-slate-200 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Preview Desain Kreasi Kamu
              </span>
              <span className="text-[10px] bg-emerald-600 text-white font-mono px-2 py-0.5 rounded">
                Karya Siswa X-H
              </span>
            </div>

            {/* Graphical Pot Rendering */}
            <div className="relative h-60 bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col items-center justify-end p-4 shadow-inner">
              
              {/* Plant top graphics */}
              <div className="relative -mb-4 z-10 text-center animate-bounce duration-1000">
                <div className="w-20 h-20 rounded-full bg-emerald-600/20 flex items-center justify-center mx-auto text-emerald-800">
                  <span className="text-4xl">
                    {selectedPlant === 'sirih-gading' ? '🌿' : selectedPlant === 'sansevieria' ? '🪴' : selectedPlant === 'sukulen' ? '🌵' : '🌸'}
                  </span>
                </div>
              </div>

              {/* Pot Container */}
              <div
                className={`w-36 h-28 rounded-b-2xl border-4 transition-all duration-300 relative flex flex-col items-center justify-between p-2 shadow-md ${
                  selectedColor === 'yellow'
                    ? 'bg-amber-400 border-amber-500 text-amber-950'
                    : selectedColor === 'blue'
                    ? 'bg-sky-500 border-sky-600 text-white'
                    : selectedColor === 'green'
                    ? 'bg-emerald-500 border-emerald-600 text-white'
                    : 'bg-gradient-to-r from-sky-400 to-amber-400 border-sky-600 text-slate-900'
                }`}
              >
                {selectedModel === 'hanging' && (
                  <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-amber-800 dashed flex items-start justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700 -top-1 absolute" />
                  </div>
                )}

                <div className="w-full text-center">
                  <span className="text-[10px] font-bold tracking-widest uppercase opacity-90">
                    KELAS X-H
                  </span>
                </div>

                <div className="w-full bg-black/10 rounded py-1 px-1 text-center">
                  <span className="text-[9px] font-mono font-bold block truncate">
                    {plants.find(p => p.id === selectedPlant)?.name.split('(')[0]}
                  </span>
                </div>
              </div>

              {/* Self watering indicator */}
              <div className="mt-2 text-[10px] font-mono text-emerald-700 font-semibold flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>Fitur Self-Watering Kapiler Aktif</span>
              </div>
            </div>

            {/* Recipe summary */}
            <div className="bg-white rounded-xl p-3.5 border border-slate-200 text-xs space-y-1.5">
              <div className="font-bold text-slate-900">Spesifikasi Pot Terpilih:</div>
              <div className="text-[11px] text-slate-600 flex justify-between">
                <span>Model:</span>
                <span className="font-semibold text-slate-900">
                  {selectedModel === 'hanging' ? 'Pot Gantung (Hanging)' : 'Pot Duduk Meja'}
                </span>
              </div>
              <div className="text-[11px] text-slate-600 flex justify-between">
                <span>Warna Cat:</span>
                <span className="font-semibold text-slate-900">
                  {colors.find(c => c.id === selectedColor)?.name}
                </span>
              </div>
              <div className="text-[11px] text-slate-600 flex justify-between">
                <span>Tanaman:</span>
                <span className="font-semibold text-slate-900">
                  {plants.find(p => p.id === selectedPlant)?.name}
                </span>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-emerald-700 font-bold">
                <span>Dampak Daur Ulang:</span>
                <span className="text-xs font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                  2 Botol Plastik Diselamatkan
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Step-by-Step Accordion / List */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-900">
            Panduan Lengkap Langkah Pembuatan (6 Tahap)
          </h3>
          <span className="text-xs text-slate-500 font-mono">Modul Praktikum Siswa X-H</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tutorialSteps.map((st, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3 hover:border-emerald-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                    Tahap 0{idx + 1}
                  </span>
                  <span className="text-[10px] text-slate-500">{st.subtitle}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 mt-2 leading-snug">
                  {st.title}
                </h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {st.details}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80">
                <div className="text-[11px] text-emerald-800 font-medium flex items-start gap-1.5 bg-emerald-50/70 p-2 rounded-lg">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Tips X-H:</strong> {st.tips}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
