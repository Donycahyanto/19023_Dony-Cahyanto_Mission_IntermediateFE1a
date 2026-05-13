import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="flex-1 flex items-start justify-center px-[20px] pt-[28px] pb-[28px] md:pt-[163.5px] md:pb-[163.5px]">

      <section className="bg-white rounded-[4px] border border-[#F1F1F1] shadow-sm w-full max-w-[360px] p-[20px] flex flex-col gap-[20px] md:max-w-[590px] md:p-[36px] md:gap-[36px]">

          <div className="text-center">
          <h2 className="font-poppins font-semibold text-[24px] md:text-[32px] leading-[110%] text-[#222325] md:w-[246px] md:h-[35px] mx-auto">
            Masuk ke Akun
          </h2>
          <p className="font-dm-sans font-normal text-[14px] md:text-[16px] leading-[140%] tracking-[0.2px] text-[#333333AD] mt-3 md:w-[525px] md:h-[22px] mx-auto text-center">
            Yuk, lanjutin belajarmu di videobelajar.
          </p>
        </div>

        <form className="flex flex-col gap-[20px] md:gap-[24px]" onSubmit={(e) => e.preventDefault()}>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-medium text-[#222325] font-dm-sans">
              E-Mail <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full border border-[#F1F1F1] rounded-[4px] p-[12px] focus:outline-none focus:ring-1 focus:ring-[#EB7F03] text-[14px] font-dm-sans"
              required
            />
          </div>

          <div className="flex flex-col gap-2 relative">
            <label className="text-[14px] font-medium text-[#222325] font-dm-sans">
              Kata Sandi <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full border border-[#F1F1F1] rounded-[4px] p-[12px] focus:outline-none focus:ring-1 focus:ring-[#EB7F03] text-[14px] font-dm-sans"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  {!showPassword && <line x1="1" y1="1" x2="23" y2="23" />}
                </svg>
              </button>
            </div>
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
              Masuk
            </button>
            <Link
              to="/register"
              className="w-full md:w-[518px] h-[42px] bg-[#E2FCD9CC] text-[#3ECF4C] font-dm-sans font-bold text-[16px] leading-[140%] tracking-[0.2px] rounded-[10px] flex items-center justify-center hover:bg-[#d4f7c5] transition mx-auto"
            >
              Daftar
            </Link>
          </div>

          <div className="relative flex items-center py-4">
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
                src="src/assets/icon/logos_google-icon.svg"
                className="w-[20px] h-[20px]"
                alt="Google"
              />
              <span className="text-[#4A505C] font-dm-sans font-bold text-[16px] leading-[140%] tracking-[0.2px] whitespace-nowrap">
                Masuk dengan Google
              </span>
            </div>
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;