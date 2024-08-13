import { Icon, IconifyIcon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';

export default function PostForm() {
  return (
    <div className="flex justify-between">
      <input type="text" className='bg-transparent text-white border-none w-full h-auto focus:outline-none focus:border-transparent py-2' placeholder='Escrever seu blog...'/>
      <button className='text-blue-500'>
        Post
      </button>
    </div>
  );
}