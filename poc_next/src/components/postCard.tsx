'use client';
import Image from 'next/image';
import PostForm from './postForm';
import { useUser } from '@/context/user-context';
import { TypeUser } from '@/types/user';

export default function PostCardBlog() {
  const { user } = useUser();
  
  return (
    <div className="flex flex-row bg-[#131313] gap-4 text-white p-6">
      <div>
        <Image
          className="rounded-full"
          width={50}
          height={50}
          src={user?.imagem || ''}
          alt=""
        />
      </div>
      <div className="w-full">
        <h1 className="text-lg">{user?.nome}</h1>
        <PostForm userId={2} />
      </div>
    </div>
  );
}
