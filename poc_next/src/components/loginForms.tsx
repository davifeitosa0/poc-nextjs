'use client';
import { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function LoginForms() {
  return (
    <div className="flex flex-col space-y-4 gap-4">
      <div className="relative">
      <Icon icon="heroicons:user" 
        className="absolute text-3xl top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
        />
        <input
          type="text"
          placeholder="E-mail"
          className="pl-14 py-2 text-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-white-500 bg-transparent h-16 w-full text-lg"
        />
      </div>

      <div className="relative">
      <Icon
          icon="material-symbols-light:lock-outline"
          className="absolute text-3xl top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
        />
        <input
          type="text"
          placeholder="Senha"
          className="pl-14 py-2 text-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-white-500 bg-transparent h-16 w-full text-lg"
        />
      </div>
      <button className="bg-white text-blue-700 py-2 px-4 text-xl rounded font-semibold">
        Entrar
      </button>
    </div>
  );
}
