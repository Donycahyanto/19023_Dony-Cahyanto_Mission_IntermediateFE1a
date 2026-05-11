import React from 'react';
import heroImg from '/src/assets/hero-section.jpg';
import bgNewsletter from '/src/assets/background-section.jpg';
import Footer from '/src/components/Layout/Footer.jsx';

// Data simulasi kursus
const courses = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  title: 'Big 4 Auditor Financial Analyst',
  description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik.',
  rating: 3.5,
  price: '300k',
  instructor: 'Jenna Ortega',
  role: 'Senior Accountant di Gojek',
  imgCard: `/src/assets/card-desktop-${i + 1}.svg`,
  imgAvatar: `/src/assets/avatar-mobile-${i + 1}.svg`,
}));

const Beranda = () => {
  return (
    <div className="min-h-screen">
      <header className="max-w-360 mx-auto px-4 md:px-10 xl:px-30 py-6 md:py-10 mt-20">
        <div className="relative mx-auto overflow-hidden w-full max-w-80 md:max-w-full h-100 rounded-[10px] flex items-center justify-center text-center text-white shadow-lg">
          <div className="absolute inset-0 z-0">
            <img src={heroImg} className="w-full h-full object-cover" alt="Hero Background" />
            <div className="absolute inset-0 bg-black/60 z-10"></div>
          </div>

          <div className="relative z-20 w-full flex flex-col items-center justify-center gap-6 pt-16 pb-16 px-5 md:px-15">
            <h1 className="font-poppins font-bold text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px] leading-[110%] max-w-225 mx-auto">
              Revolusi Pembelajaran: <br className="md:hidden" />
              <span className="block mt-2 md:mt-0">Temukan Ilmu Baru melalui Platform Video Interaktif!</span>
            </h1>
            <p className="font-dm-sans font-medium text-[14px] md:text-[16px] leading-[140%] tracking-[0.2px] text-gray-200 max-w-200 mx-auto">
              Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
            </p>
            <button
              className="bg-primary hover:bg-success-hover text-white 
              w-70 h-10 rounded-[10px] 
              font-dm-sans font-normal text-[14px] leading-[140%] tracking-[0.2px]
              transition-all active:scale-95 shadow-lg whitespace-nowrap"
            >
              Temukan Video Course untuk Dipelajari!
            </button>
          </div>
        </div>
      </header>

      {/* ========== MAIN CONTENT ========== */}
      <main className="max-w-360 mx-auto px-4 md:px-10 xl:px-30 py-6 flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h2 className="font-poppins font-semibold text-[24px] md:text-[32px] leading-[110%] text-grey-900 m-0">
            Koleksi Video <br className="md:hidden" /> Pembelajaran Unggulan
          </h2>
          <p className="font-dm-sans font-medium text-[14px] leading-[140%] tracking-[0.2px] text-text-dark-secondary m-0">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
        </div>

        {/* Tabs Filter: Menghilangkan border-bottom default */}
        <div className="flex gap-6 md:gap-10 overflow-x-auto no-scrollbar border-none shadow-none">
          {['Semua Kelas', 'Pemasaran', 'Desain', 'Pengembangan Diri', 'Bisnis'].map((tab, idx) => (
            <button
              key={idx}
              className={`relative pb-4 whitespace-nowrap text-sm font-medium transition-colors duration-300 flex flex-col items-left ${idx === 0
                ? 'text-tertiary font-bold'
                : 'text-text-dark-secondary hover:text-text-dark-primary'
                }`}
            >
              {tab}
              {/* Indikator Oranye: Menggunakan absolute agar presisi */}
              {idx === 0 && (
                <span className="absolute bottom-0 h-1.5 w-13 bg-tertiary rounded-[10px]"></span>
              )}
            </button>
          ))}
        </div>

        {/* Grid Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-[#3A35411F] rounded-[10px] shadow-sm transition-all hover:shadow-md overflow-hidden
                 /* Mobile: Sesuai Spek */
                 flex flex-col w-80 h-36.75 p-4 gap-2 mx-auto
                 /* Desktop: Kembali ke Layout Stacked */
                 md:flex-col md:w-full md:h-auto md:p-5 md:gap-4"
            >
              {/* Atas: Gambar & Info (Khusus Mobile Side-by-Side) */}
              <div className="flex flex-row md:flex-col gap-2 md:gap-4">
                {/* Image Card */}
                <img
                  src={course.imgCard}
                  alt={course.title}
                  className="rounded-[10px] object-cover shrink-0
                     /* Mobile Spek */
                     w-20.5 h-20.5
                     /* Desktop */
                     md:w-full md:h-48.25"
                />

                {/* Title, Instructor, Role Container */}
                <div className="flex flex-col gap-2 w-48.5 h-20.75 md:w-full md:h-auto overflow-hidden">
                  <h3 className="font-poppins font-semibold text-grey-900 leading-[120%] text-[14px] md:text-[18px] line-clamp-2">
                    {course.title}
                  </h3>

                  <div className="flex items-center gap-2">
                    <img
                      src={course.imgAvatar}
                      className="w-6 h-6 md:w-10 md:h-10 rounded-md"
                      alt={course.instructor}
                    />
                    <div className="flex flex-col leading-tight overflow-hidden">
                      <span className="font-semibold text-[10px] md:text-[14px] text-grey-900 truncate">
                        {course.instructor}
                      </span>
                      <span className="text-[9px] md:text-[12px] text-grey-500 truncate">
                        {course.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bawah: Rating & Price */}
              <div className="flex flex-row justify-between items-end w-full mt-auto">

                {/* Rating Container: w:143, h:18, gap:8 (Mobile) */}
                <div className="flex flex-row items-center gap-2 w-35.75 h-4.5">
                  {/* Bintang Rating */}
                  <div className="flex text-secondary text-[12px] shrink-0">
                    {'★'.repeat(3)}<span className="text-gray-300">{'☆'.repeat(2)}</span>
                  </div>

                  {/* Teks Rating: 45x17, DM Sans Medium 12px, Underline, Warna #333333AD */}
                  <span className="font-dm-sans font-medium text-[12px] leading-[140%] tracking-[0.2px] underline text-text-dark-secondary 
                     /* KUNCI AGAR TIDAK TURUN: */
                     inline-block shrink-0 whitespace-nowrap
                     /* Ukuran spesifik mobile: */
                     w-11.25 h-4.25
                     /* Reset untuk Desktop (md): */
                     md:w-auto md:h-auto md:text-grey-400">
                    3.5 (86)
                  </span>
                </div>

                {/* Price Container: w:83, h:24, font:Poppins SemiBold 20px, line-height:120% */}
                <div className="flex items-center justify-end w-20.75 h-6">
                  <span className="font-poppins font-semibold text-[20px] leading-[120%] text-primary">
                    Rp{course.price}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </main>

      <section className="max-w-360 mx-auto px-4 md:px-10 xl:px-30 py-10">
        <div className="relative rounded-[10px] bg-cover bg-center min-h-100 flex flex-col justify-center items-center text-white overflow-hidden py-10 px-6"
          style={{ backgroundImage: `url(${bgNewsletter})` }}>
          <div className="absolute inset-0 bg-black/70 z-0"></div>
          <div className="relative z-10 w-full max-w-131.25 flex flex-col items-center text-center">
            <p className="font-dm-sans font-medium text-[16px] md:text-[18px] text-text-light-secondary uppercase tracking-[0.2px] mb-2">Newsletter</p>
            <h2 className="font-poppins font-semibold text-[24px] md:text-[32px] leading-[110%] mb-3">Mau Belajar Lebih Banyak?</h2>
            <p className="font-dm-sans font-normal text-[14px] md:text-[16px] leading-[140%] mb-8 text-gray-300">
              Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id
            </p>

            <div className="flex flex-col md:flex-row items-center w-full gap-4 md:gap-0 md:bg-white md:h-14.5 md:rounded-[10px] md:pr-2 md:pl-8 md:shadow-md">
              <input
                type="email"
                placeholder="Masukkan Emailmu"
                className="w-full md:flex-1 h-12.5 md:h-auto px-4 md:px-0 rounded-[10px] md:rounded-none bg-white md:bg-transparent outline-none text-black text-sm font-dm-sans text-center md:text-left"
              />
              <button className="w-full md:w-auto bg-secondary hover:bg-yellow-500 text-white h-12.5 md:h-10.5 px-8 rounded-[10px] font-bold transition-all active:scale-95 shadow-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Beranda;