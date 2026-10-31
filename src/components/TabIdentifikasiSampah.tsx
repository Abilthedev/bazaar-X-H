import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, ShieldCheck, Trash2, CheckCircle2, XCircle, Award, RotateCcw, AlertTriangle, Sparkles, Video } from 'lucide-react';
import { WasteItemQuiz } from '../types';

export const TabIdentifikasiSampah: React.FC = () => {
  // Video player controls
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  // Interactive waste quiz state
  const [currentQuizIdx, setCurrentQuizIdx] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const wasteQuizList: WasteItemQuiz[] = [
    {
      id: 'w-1',
      name: 'Botol Plastik Air Mineral (PET 1)',
      type: 'anorganik',
      description: 'Dapat didaur ulang menjadi pot tanaman hias estetik warna kuning dan biru karya Kelas X-H!',
      icon: '🍾'
    },
    {
      id: 'w-2',
      name: 'Kulit Buah Jeruk & Sisa Sayuran Kantin',
      type: 'organik',
      description: 'Sangat kaya nutrisi dan bio-enzim! Cocok langsung dimasukkan ke pot komposter galon X-H untuk difermentasi jadi pupuk cair (POC).',
      icon: '🍊'
    },
    {
      id: 'w-3',
      name: 'Baterai Bekas & Aki Jam Dinding',
      type: 'b3',
      description: 'Mengandung logam berat beracun (merkuri & timbal). Jangan dibakar atau dibuang sembarangan, harus masuk ke tong khusus B3 sekolah!',
      icon: '🔋'
    },
    {
      id: 'w-4',
      name: 'Dedaunan Kering Taman Sekolah SMAN Garut',
      type: 'organik',
      description: 'Merupakan sumber Karbon (Brown Waste) terbaik untuk menyeimbangkan kelembaban dan aroma pot pupuk komposter.',
      icon: '🍂'
    },
    {
      id: 'w-5',
      name: 'Kaleng Minuman Soda Aluminium',
      type: 'anorganik',
      description: 'Bahan anorganik bernilai ekonomis tinggi yang 100% dapat dilebur dan didaur ulang berulang kali.',
      icon: '🥫'
    },
    {
      id: 'w-6',
      name: 'Pecahan Kaca & Termometer Rusak',
      type: 'b3',
      description: 'Sampah berbahaya dengan risiko melukai petugas kebersihan dan mengandung zat berbahaya.',
      icon: '⚠️'
    }
  ];

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }
  };

  const handleToggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleAnswer = (choice: 'organik' | 'anorganik' | 'b3') => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(choice);
    const isCorrect = choice === wasteQuizList[currentQuizIdx].type;
    if (isCorrect) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const handleNextQuiz = () => {
    if (currentQuizIdx < wasteQuizList.length - 1) {
      setCurrentQuizIdx((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuizIdx(0);
    setSelectedAnswer(null);
    setQuizScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="space-y-8">
      {/* Video & Action Header */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Real Video Player (Left 6-7 Cols) */}
          <div className="lg:col-span-7 bg-black relative flex flex-col justify-center">
            <video
              ref={videoRef}
              src="/assets/aistudio/vidio_membersihkan_tempat_sampah_398fe1a0.mp4"
              playsInline
              loop
              muted={isMuted}
              className="w-full h-auto max-h-[480px] object-contain mx-auto"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Custom Overlay Controls */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none flex flex-col justify-between p-4">
              <div className="flex items-center justify-between pointer-events-auto">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-lg text-white text-[11px] font-semibold border border-white/10">
                  <Video className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Vidio Dokumentasi Aksi Siswa X-H</span>
                </div>

                <button
                  onClick={handleToggleMute}
                  className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                </button>
              </div>

              <div className="pointer-events-auto flex items-center justify-between">
                <button
                  onClick={handleTogglePlay}
                  className="flex items-center gap-2 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold shadow-md transition-all cursor-pointer"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4 fill-white" />
                      <span>Jeda Vidio</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-white" />
                      <span>Putar Vidio</span>
                    </>
                  )}
                </button>
                <span className="text-[11px] text-slate-300 font-mono">
                  Membersihkan Tong Sampah SMA Negeri Garut
                </span>
              </div>
            </div>
          </div>

          {/* Video Description & Class Project Details */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-md text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Dokumentasi Budaya Bersih Sekolah</span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 mt-2">
                Aksi Bersih Tempat Sampah Organik Kelas X-H
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2">
                Sebelum mengolah sampah menjadi pot dan pupuk bernilai jual, tim siswa <strong>Kelas X-H SMA Negeri Garut</strong> mencuci dan mensterilkan tong sampah organik sekolah dengan sabun, sikat, dan air mengalir. 
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2">
                Tempat sampah yang higienis mencegah perkembangbiakan lalat dan bakteri patogen, sekaligus menjamin sampah organik yang dikumpulkan tetap bersih untuk difermentasi menjadi pupuk cair (POC) berkualitas tinggi.
              </p>
            </div>

            <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200/80 space-y-2 text-xs text-emerald-950">
              <div className="font-bold flex items-center gap-1.5 text-emerald-900">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Nilai Profil Pelajar Pancasila (P5):</span>
              </div>
              <ul className="space-y-1 text-slate-700">
                <li>• <strong>Gotong Royong</strong>: Kerjasama membersihkan fasilitas publik sekolah.</li>
                <li>• <strong>Bernalar Kritis</strong>: Mengidentifikasi jenis sampah sebelum diproses.</li>
                <li>• <strong>Kreatif</strong>: Mengolah kembali limbah menjadi produk pot dan pupuk bernilai.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* 3 Categories of Waste Guide */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900">
            Panduan Identifikasi 3 Kategori Utama Sampah Sekolah
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Pelajari karakteristik setiap jenis sampah agar tidak salah memasukkan ke tempat sampah
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* 1. Organik */}
          <div className="bg-white rounded-2xl border-2 border-emerald-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-lg font-bold">
                🟢
              </span>
              <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Bahan Pupuk X-H
              </span>
            </div>

            <div>
              <h4 className="text-base font-bold text-slate-900">1. Sampah Organik</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Sampah alami yang berasal dari sisa makhluk hidup dan mudah terurai oleh bakteri tanah secara hayati.
              </p>
            </div>

            <div className="bg-emerald-50/70 rounded-xl p-3 text-xs space-y-1 text-slate-700">
              <div className="font-bold text-emerald-900 mb-1">Contoh Nyata di Sekolah:</div>
              <div>• Sisa nasi, sayur & lauk kantin</div>
              <div>• Kulit buah-buahan & ampas jus</div>
              <div>• Daun & ranting gugur taman sekolah</div>
              <div>• Ampas kopi dan teh ruang guru</div>
            </div>

            <div className="text-[11px] text-emerald-800 font-semibold flex items-center gap-1.5 pt-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Diolah di Pot Pupuk Galon Kelas X-H</span>
            </div>
          </div>

          {/* 2. Anorganik Daur Ulang */}
          <div className="bg-white rounded-2xl border-2 border-amber-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center text-lg font-bold">
                🟡
              </span>
              <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Bahan Pot Bunga X-H
              </span>
            </div>

            <div>
              <h4 className="text-base font-bold text-slate-900">2. Sampah Anorganik Daur Ulang</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Sampah buatan manusia yang tidak mudah membusuk namun memiliki nilai ekonomis tinggi untuk dikreasikan kembali.
              </p>
            </div>

            <div className="bg-amber-50/70 rounded-xl p-3 text-xs space-y-1 text-slate-700">
              <div className="font-bold text-amber-900 mb-1">Contoh Nyata di Sekolah:</div>
              <div>• Botol plastik air mineral (PET 1)</div>
              <div>• Gelas plastik & sedotan minuman es</div>
              <div>• Kaleng minuman aluminium</div>
              <div>• Kardus makanan & kertas HVS bekas ujian</div>
            </div>

            <div className="text-[11px] text-amber-800 font-semibold flex items-center gap-1.5 pt-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>Dipotong & Dicat Jadi Pot Bunga X-H</span>
            </div>
          </div>

          {/* 3. B3 & Residu */}
          <div className="bg-white rounded-2xl border-2 border-rose-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center text-lg font-bold">
                🔴
              </span>
              <span className="text-[10px] font-bold text-rose-800 bg-rose-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Penanganan Khusus
              </span>
            </div>

            <div>
              <h4 className="text-base font-bold text-slate-900">3. Sampah B3 & Residu Berbahaya</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Limbah beracun, infeksius, atau tajam yang berbahaya bagi kesehatan manusia dan mencemari air tanah.
              </p>
            </div>

            <div className="bg-rose-50/70 rounded-xl p-3 text-xs space-y-1 text-slate-700">
              <div className="font-bold text-rose-900 mb-1">Contoh Nyata di Sekolah:</div>
              <div>• Baterai bekas jam & remote lab</div>
              <div>• Masker sekali pakai & perban UKS</div>
              <div>• Pecahan kaca jendela atau gelas lab</div>
              <div>• Kemasan pestisida & cairan kimia</div>
            </div>

            <div className="text-[11px] text-rose-800 font-semibold flex items-center gap-1.5 pt-1">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
              <span>Wajib Dibuang ke Drop Point B3 Sekolah</span>
            </div>
          </div>

        </div>
      </div>

      {/* Interactive Waste Sorting Mini Game */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Game Kuis Interaktif Pengunjung Bazaar</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mt-0.5">
              Tantangan Pilah Sampah Kilat Kelas X-H
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Uji ketelitianmu memilah sampah sekolah ke tempat yang tepat!
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium">Skor Saat Ini:</span>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-mono font-bold rounded-lg text-sm">
              {quizScore} / {wasteQuizList.length}
            </span>
          </div>
        </div>

        {!quizFinished ? (
          <div className="space-y-6 max-w-xl mx-auto py-2">
            
            {/* Question Card */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 text-center space-y-3">
              <span className="text-[11px] font-mono text-slate-500 font-semibold">
                Soal {currentQuizIdx + 1} dari {wasteQuizList.length}
              </span>
              <div className="text-5xl">{wasteQuizList[currentQuizIdx].icon}</div>
              <h4 className="text-lg font-bold text-slate-900">
                {wasteQuizList[currentQuizIdx].name}
              </h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Ke tempat sampah manakah sampah ini harus dimasukkan?
              </p>
            </div>

            {/* Answer Options */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                onClick={() => handleAnswer('organik')}
                disabled={selectedAnswer !== null}
                className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer font-semibold text-xs flex flex-col items-center justify-center gap-1.5 ${
                  selectedAnswer === 'organik'
                    ? wasteQuizList[currentQuizIdx].type === 'organik'
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-rose-600 text-white border-rose-600'
                    : 'bg-white border-emerald-200 text-emerald-800 hover:bg-emerald-50'
                }`}
              >
                <span className="text-lg">🟢</span>
                <span>Sampah Organik</span>
              </button>

              <button
                onClick={() => handleAnswer('anorganik')}
                disabled={selectedAnswer !== null}
                className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer font-semibold text-xs flex flex-col items-center justify-center gap-1.5 ${
                  selectedAnswer === 'anorganik'
                    ? wasteQuizList[currentQuizIdx].type === 'anorganik'
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-rose-600 text-white border-rose-600'
                    : 'bg-white border-amber-200 text-amber-800 hover:bg-amber-50'
                }`}
              >
                <span className="text-lg">🟡</span>
                <span>Anorganik Daur Ulang</span>
              </button>

              <button
                onClick={() => handleAnswer('b3')}
                disabled={selectedAnswer !== null}
                className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer font-semibold text-xs flex flex-col items-center justify-center gap-1.5 ${
                  selectedAnswer === 'b3'
                    ? wasteQuizList[currentQuizIdx].type === 'b3'
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-rose-600 text-white border-rose-600'
                    : 'bg-white border-rose-200 text-rose-800 hover:bg-rose-50'
                }`}
              >
                <span className="text-lg">🔴</span>
                <span>B3 / Residu</span>
              </button>
            </div>

            {/* Feedback and next button */}
            {selectedAnswer !== null && (
              <div className="bg-slate-100 rounded-xl p-4 border border-slate-200 space-y-3 animate-in fade-in duration-200">
                <div className="flex items-center gap-2">
                  {selectedAnswer === wasteQuizList[currentQuizIdx].type ? (
                    <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Tepat Sekali! Jawabanmu Benar.</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-rose-600 font-bold text-xs">
                      <XCircle className="w-5 h-5" />
                      <span>Kurang Tepat! Kategori sebenarnya: {wasteQuizList[currentQuizIdx].type.toUpperCase()}</span>
                    </div>
                  )}
                </div>

                <p className="text-xs text-slate-700">
                  {wasteQuizList[currentQuizIdx].description}
                </p>

                <div className="text-right">
                  <button
                    onClick={handleNextQuiz}
                    className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg cursor-pointer"
                  >
                    {currentQuizIdx < wasteQuizList.length - 1 ? 'Lanjut ke Soal Berikutnya →' : 'Lihat Hasil Akhir'}
                  </button>
                </div>
              </div>
            )}

          </div>
        ) : (
          <div className="text-center py-8 max-w-md mx-auto space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl">
              🏆
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900">
                Hebat! Kamu Selesai Menjawab
              </h4>
              <p className="text-xs text-slate-600 mt-1">
                Kamu berhasil memilah <strong className="text-emerald-700 font-mono text-sm">{quizScore}</strong> dari <strong className="font-mono text-sm">{wasteQuizList.length}</strong> jenis sampah dengan tepat!
              </p>
            </div>

            <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200 text-xs text-emerald-950 font-medium">
              {quizScore >= 5
                ? '🌟 Luar biasa! Kamu pantas dinobatkan sebagai Duta Peduli Lingkungan Kelas X-H!'
                : '🌱 Bagus! Kamu sudah memahami prinsip dasar pemilahan sampah sekolah.'}
            </div>

            <button
              onClick={handleRestartQuiz}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold flex items-center gap-2 mx-auto cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Mainkan Lagi Tantangan</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
