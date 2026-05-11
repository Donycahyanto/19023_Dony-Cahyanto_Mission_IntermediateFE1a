import React from 'react';
import { Link } from 'react-router-dom';
import InputField from '../components/UI/InputField';

const Register = () => {
  return (
    <main className="flex-1 flex items-start justify-center px-4 pt-10 pb-10 md:pt-16 md:pb-16 min-h-screen">
      <section className="border border-border-default rounded-[4px] shadow-sm overflow-hidden w-full max-w-[320px] p-[20px] md:max-w-[590px] md:p-[36px]">
        {/* Header Section */}
        <div className="text-center mb-[20px] md:mb-[36px]">
          <h2 className="text-[22px] md:text-[28px] font-bold text-dark-900 tracking-tight leading-tight">
            Pendaftaran Akun
          </h2>
          <p className="font-dm-sans text-[14px] font-normal text-dark-500 mt-3">
            Yuk, daftarkan akunmu sekarang juga!
          </p>
        </div>

        {/* Form Section */}
        <form className="flex flex-col gap-[20px] md:gap-[36px]" onSubmit={(e) => e.preventDefault()}>
          <InputField label="Nama Lengkap" required={true} />
          <InputField label="E-Mail" type="email" required={true} />
          
          {/* Custom Field: No. HP */}
          <div className="space-y-2">
            <label className="block text-[14px] font-medium text-dark-700 font-dm-sans">
              No. Hp <span className="text-red-500">*</span>
            </label>
            <div className="flex items-stretch w-full rounded-[4px] border border-gray-300 overflow-hidden focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary">
              <div className="flex items-center gap-2 px-3 bg-gray-50 border-r border-gray-300 flex-shrink-0">
                <img src="./asset/icon/logo-bendera.svg" alt="ID" className="w-5 h-auto" />
                <span className="text-[14px] font-medium text-dark-700">+62</span>
              </div>
              <input type="tel" className="w-full p-3.5 focus:outline-none font-dm-sans text-[14px]" required />
            </div>
          </div>

          <InputField label="Kata Sandi" isPassword={true} required={true} />
          <InputField label="Konfirmasi Kata Sandi" isPassword={true} required={true} />

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 pt-2">
            <button type="submit" className="bg-primary text-white font-bold py-[14px] rounded-[4px] hover:brightness-95 transition shadow-sm text-[16px]">
              Daftar
            </button>
            <Link to="/login" className="bg-primary/5 text-primary font-bold py-[14px] rounded-[4px] text-center hover:bg-primary/10 transition text-[16px]">
              Masuk
            </Link>
          </div>

          {/* Divider & SSO */}
          <div className="relative py-2 flex items-center">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="mx-4 text-gray-400 text-sm font-dm-sans">atau</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          <button type="button" className="w-full border border-gray-300 flex items-center justify-center gap-3 py-[14px] rounded-[4px] hover:bg-gray-50 transition shadow-sm">
            <img src="./asset/icon/logos_google-icon.svg" className="w-5 h-5" alt="Google" />
            <span className="text-dark-700 font-dm-sans font-bold text-[16px]">Daftar dengan Google</span>
          </button>
        </form>
      </section>
    </main>
  );
};

export default Register;