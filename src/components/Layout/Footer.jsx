import React, { useState } from 'react';
import logoSvg from '/src/assets/logo.svg';
import socialIcon from '/src/assets/icon-sosial-media.svg';

const Footer = () => {
  // State untuk melacak kategori mana yang sedang terbuka di mobile
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    // Jika section yang diklik sudah terbuka, tutup (null), jika tidak, buka section tersebut
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="w-full bg-white border-t border-[#F2F2F2]">
      <div className="max-w-360 mx-auto px-5 pb-7 md:px-10 xl:px-30 pt-2 md:py-15 flex flex-col gap-2">

        <div className="flex flex-col md:flex-row justify-between items-start w-full min-h-49.75 gap-2 md:gap-0">

          {/* Sisi Kiri - Logo & Alamat */}
          <div className="flex flex-col gap-4 max-w-87.5">
            <img src={logoSvg} alt="Logo" className="h-8 w-fit" />
            <h4 className="font-bold text-base text-[#222222] leading-relaxed">
              Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
            </h4>
            <div className="text-[#333333] text-sm space-y-1 font-normal">
              <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
              <p>+62-877-7123-1234</p>
            </div>
          </div>

          {/* Sisi Kanan - Link Navigasi (Dropdown di Mobile, Grid di Desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-20 w-full md:w-auto">

            {/* --- Kategori --- */}
            <div className="border-b border-[#F2F2F2] md:border-none">
              <button
                onClick={() => toggleSection('kategori')}
                className="w-full flex justify-between items-center py-4 md:py-0 md:mb-4 focus:outline-none"
              >
                <h5 className="font-bold text-base text-[#222222]">Kategori</h5>
                {/* Icon Panah (Hanya muncul di mobile) */}
                {/* Ganti bagian <span> icon panah di setiap button dengan ini */}
                <span className={`text-[10px] transition-transform duration-300 md:hidden ${openSection === 'kategori' ? 'rotate-90' : 'rotate-0'}`}>
                  ▶
                </span>
              </button>
              <ul className={`space-y-3 text-[#555555] text-sm overflow-hidden transition-all duration-300 ${openSection === 'kategori' ? 'max-h-60 pb-4' : 'max-h-0 md:max-h-full'} md:block`}>
                <li><a href="#" className="hover:text-green-500 transition">Digital & Teknologi</a></li>
                <li><a href="#" className="hover:text-green-500 transition">Pemasaran</a></li>
                <li><a href="#" className="hover:text-green-500 transition">Manajemen Bisnis</a></li>
                <li><a href="#" className="hover:text-green-500 transition">Pengembangan Diri</a></li>
                <li><a href="#" className="hover:text-green-500 transition">Desain</a></li>
              </ul>
            </div>

            {/* --- Perusahaan --- */}
            <div className="border-b border-[#F2F2F2] md:border-none">
              <button
                onClick={() => toggleSection('perusahaan')}
                className="w-full flex justify-between items-center py-4 md:py-0 md:mb-4 focus:outline-none"
              >
                <h5 className="font-bold text-base text-[#222222]">Perusahaan</h5>
                {/* Ganti bagian <span> icon panah di setiap button dengan ini */}
                <span className={`text-[10px] transition-transform duration-300 md:hidden ${openSection === 'kategori' ? 'rotate-90' : 'rotate-0'}`}>
                  ▶
                </span>
              </button>
              <ul className={`space-y-3 text-[#555555] text-sm overflow-hidden transition-all duration-300 ${openSection === 'perusahaan' ? 'max-h-60 pb-4' : 'max-h-0 md:max-h-full'} md:block`}>
                <li><a href="#" className="hover:text-green-500 transition">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-green-500 transition">FAQ</a></li>
                <li><a href="#" className="hover:text-green-500 transition">Kebijakan Privasi</a></li>
                <li><a href="#" className="hover:text-green-500 transition">Ketentuan Layanan</a></li>
                <li><a href="#" className="hover:text-green-500 transition">Bantuan</a></li>
              </ul>
            </div>

            {/* --- Komunitas --- */}
            <div className="border-b border-[#F2F2F2] md:border-none">
              <button
                onClick={() => toggleSection('komunitas')}
                className="w-full flex justify-between items-center py-4 md:py-0 md:mb-4 focus:outline-none"
              >
                <h5 className="font-bold text-base text-[#222222]">Komunitas</h5>
                {/* Ganti bagian <span> icon panah di setiap button dengan ini */}
                <span className={`text-[10px] transition-transform duration-300 md:hidden ${openSection === 'kategori' ? 'rotate-90' : 'rotate-0'}`}>
                  ▶
                </span>
              </button>
              <ul className={`space-y-3 text-[#555555] text-sm overflow-hidden transition-all duration-300 ${openSection === 'komunitas' ? 'max-h-60 pb-4' : 'max-h-0 md:max-h-full'} md:block`}>
                <li><a href="#" className="hover:text-green-500 transition">Tips Sukses</a></li>
                <li><a href="#" className="hover:text-green-500 transition">Blog</a></li>
              </ul>
            </div>

          </div>
        </div>

        <hr className="border-[#F2F2F2] mt-0" />

        {/* pt-0 untuk mobile (naik), md:pt-16 untuk desktop (turun) */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center w-full max-w-80 md:max-w-none pt-0 md:pt-16 gap-4 md:gap-4 border-t border-grey-200">

          {/* Teks Hak Cipta */}
          <p className="text-[#999999] text-sm font-medium text-left leading-none md:leading-relaxed">
            @2023 Gerobak Sayur All Rights Reserved.
          </p>

          {/* Ikon Sosial Media */}
          <div className="flex items-center gap-4">
            <img src={socialIcon} alt="Social Media" className="h-8 w-auto object-contain" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;