import React, { useState } from 'react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-bg-base min-h-screen flex flex-col font-lato antialiased">
      {/* Header */}
      <header className="w-full bg-white border-b border-border-default sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="shrink-0">
              <a href="/">
                <img
                  src="src/assets/Logo.svg"
                  alt="videobelajar"
                  className="h-7 md:h-10 w-auto"
                />
              </a>
            </div>
            <div className="flex items-center"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-start justify-center px-4 pt-5 pb-12 md:pt-20 md:pb-20">
        <section className="bg-white p-6 md:p-10 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-border-default w-full max-w-135">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-dark-900 tracking-tight leading-tight">
              Masuk ke Akun
            </h2>
            <p className="font-dm-sans text-[14px] font-normal leading-[140%] tracking-[0.2px] text-dark-500 mt-3">
              Yuk, lanjutin belajarmu di videobelajar.
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-[14px] font-medium text-dark-700 font-dm-sans">
                E-Mail <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md p-3.5 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 font-dm-sans text-[14px]"
                placeholder=""
                required
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2 relative">
              <label className="block text-[14px] font-medium text-dark-700 font-dm-sans">
                Kata Sandi <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full border border-gray-300 rounded-md p-3.5 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 font-dm-sans text-[14px]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {/* Icon Mata (Lucide-like) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {showPassword ? (
                       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    ) : (
                      <>
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </>
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <a
                href="#"
                className="text-[14px] text-dark-500 hover:text-orange-500 font-dm-sans transition-colors"
              >
                Lupa Password?
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 pt-2">
              <button
                type="submit"
                className="bg-[#F2994A] text-white font-bold py-3.5 rounded-md hover:brightness-95 transition shadow-sm font-dm-sans text-[14px] cursor-pointer"
              >
                Masuk
              </button>
              <a
                href="/register"
                className="bg-orange-50 text-orange-500 font-bold py-3.5 rounded-md text-center hover:bg-orange-100 transition font-dm-sans text-[14px]"
              >
                Daftar
              </a>
            </div>

            {/* Divider */}
            <div className="relative py-4 flex items-center">
              <div className="grow border-t border-gray-200"></div>
              <span className="shrink mx-4 text-gray-400 text-sm font-dm-sans">
                atau
              </span>
              <div className="grow border-t border-gray-200"></div>
            </div>

            {/* Google Login */}
            <button
              type="button"
              className="w-full border border-border-default flex items-center justify-center gap-2 py-3 rounded-md hover:bg-gray-50 transition shadow-sm cursor-pointer"
            >
              <img
                src="./asset/icon/logos_google-icon.svg"
                className="w-5 h-5"
                alt="Google"
              />
              <span className="text-dark-700 font-dm-sans font-bold text-[14px]">
                Masuk dengan Google
              </span>
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Login;