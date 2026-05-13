import React from 'react';
import { Link } from 'react-router-dom';
import InputField from '../components/UI/InputField';

const Register = () => {
  return (
    <main className="flex-1 flex items-center justify-center min-h-screen p-6">
      <section className="bg-white rounded-[4px] border border-[#F1F1F1] shadow-sm w-full 
  max-w-[360px]
  md:max-w-[590px]
  p-[20px] md:p-[36px] flex flex-col gap-[20px] md:gap-[36px]">

        <div className="text-center">
          <h2 className="font-poppins font-semibold text-[24px] md:text-[32px] leading-[110%] text-[#222325] md:w-[297px] mx-auto text-center">
            Pendaftaran Akun
          </h2>
          <p className="font-dm-sans font-normal text-[14px] md:text-[16px] leading-[140%] tracking-[0.2px] text-[#333333AD] mt-3 md:w-[525px] mx-auto text-center">
            Yuk, daftarkan akunmu sekarang juga!
          </p>
        </div>

        <form className="flex flex-col gap-[20px] md:gap-[24px]" onSubmit={(e) => e.preventDefault()}>

          <div className="flex flex-col gap-4">
            <InputField label="Nama Lengkap" required={true} />
            <InputField label="E-Mail" type="email" required={true} />

            <div className="flex flex-col gap-2 md:hidden">
              <label className="text-[14px] font-medium text-[#222325] font-dm-sans text-left">
                Jenis Kelamin <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  className="w-full h-[42px] px-[12px] border border-[#D1D5DB] rounded-[4px] bg-white text-[14px] font-dm-sans text-[#222325] focus:outline-none focus:ring-1 focus:ring-[#3ECF4C] appearance-none cursor-pointer"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>Pilih Jenis Kelamin</option>
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-medium text-[#222325] font-dm-sans text-left">
                No. Hp <span className="text-red-500">*</span>
              </label>

              <div className="flex items-center gap-2">

                <div className="flex border border-[#D1D5DB] rounded-[4px] overflow-hidden h-[48px] shrink-0">

                  <div className="w-[44px] h-[48px] flex items-center justify-center bg-[#F4F5FA] border-r border-[#3A35411F] px-[10px]">
                    <img
                      src="/src/assets/icon/logo-bendera.svg"
                      alt="ID"
                      className="w-full h-auto"
                    />
                  </div>

                  <div className="w-[68px] h-[48px] flex items-center justify-center gap-1.5 bg-white px-[8px]">
                    <span className="text-[14px] text-[#222325] font-dm-sans">+62</span>
                    <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <input
                  type="tel"
                  className="flex-1 min-w-[120px] h-[48px] border border-[#D1D5DB] rounded-[4px] px-[12px] focus:outline-none focus:ring-1 focus:ring-[#3ECF4C] text-[14px] font-dm-sans bg-white"
                  placeholder=""
                  required
                />
              </div>
            </div>

            <InputField label="Kata Sandi" isPassword={true} required={true} />
            <InputField label="Konfirmasi Kata Sandi" isPassword={true} required={true} />
          </div>

          <div className="text-right -mt-2">
            <Link
              to="/forgot-password"
              className="
      inline-flex items-center justify-end
      w-[109px] h-[20px] text-[14px] whitespace-nowrap
      md:w-[125px] md:h-[22px] md:text-[16px]
      font-dm-sans font-medium leading-[140%] tracking-[0.2px] text-right
      text-[#333333AD] hover:text-[#3ECF4C] transition-colors
    "
            >
              Lupa Password?
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="submit"
              className="w-full md:w-[518px] h-[42px] bg-[#3ECF4C] text-white font-dm-sans font-bold text-[16px] leading-[140%] tracking-[0.2px] rounded-[10px] hover:brightness-95 transition shadow-sm mx-auto"
            >
              Daftar
            </button>

            <Link
              to="/login"
              className="w-full md:w-[518px] h-[42px] bg-[#E2FCD9CC] text-[#3ECF4C] font-dm-sans font-bold text-[16px] leading-[140%] tracking-[0.2px] rounded-[10px] flex items-center justify-center hover:bg-[#d4f7c5] transition mx-auto"
            >
              Masuk
            </Link>
          </div>

          <div className="relative flex items-center py-2">
            <div className="grow border-t border-[#F1F1F1]"></div>
            <span className="shrink mx-4 text-[#4A505C] font-dm-sans font-normal text-[16px] leading-[140%] tracking-[0.2px] text-center w-[34px] h-[22px] flex items-center justify-center">
              atau
            </span>
            <div className="grow border-t border-[#F1F1F1]"></div>
          </div>

          <button
            type="button"
            className="w-full md:w-[518px] h-[42px] border border-[#F1F1F1] bg-[#FFFFFF] rounded-[10px] flex items-center justify-center gap-[8px] hover:bg-gray-50 transition shadow-sm mx-auto group"
          >
            <div className="flex items-center justify-center gap-[8px] py-[8px] px-[26px]">
              <img
                src="/src/assets/icon/logos_google-icon.svg"
                className="w-[20px] h-[20px]"
                alt="Google"
              />
              <span className="text-[#4A505C] font-dm-sans font-bold text-[16px] leading-[140%] tracking-[0.2px]">
                Daftar dengan Google
              </span>
            </div>
          </button>
        </form>
      </section>
    </main>
  );
};

export default Register;