import Image from 'next/image';
import PostForm from './postForm';

export default async function PostCardBlog() {
  const user = await fetch(`http://localhost:3000/api/user?id=2`).then((res) =>
    res.json(),
  );
  console.log(user[0]?.imagem);
  return (
    <div className='flex flex-row bg-[#131313] gap-4 text-white p-4'>
      <div>
        <Image className='rounded-full' width={50} height={50} src={user[0]?.imagem} alt="" />
      </div>
      <div className='w-full'>
        <h1 className='text-lg'>{user[0]?.nome}</h1>
        <PostForm/>
      </div>
    </div>
    
    
  );
}
