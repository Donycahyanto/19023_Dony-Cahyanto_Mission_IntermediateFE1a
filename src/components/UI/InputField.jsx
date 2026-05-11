import React, { useState } from 'react';

const InputField = ({ label, type = "text", required = false, isPassword = false, placeholder = "" }) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="space-y-2 relative">
      <label className="block text-[14px] font-medium text-dark-700 font-dm-sans">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <input
          type={inputType}
          placeholder={placeholder}
          className="w-full border border-gray-300 rounded-sm p-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-dm-sans text-[14px]"
          required={required}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              {!showPassword && <line x1="1" y1="1" x2="23" y2="23" />}
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;