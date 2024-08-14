'use server'
import PostCards from '@/components/postCards';
import SideBar from '@/components/sideBar';
import { Post } from '@/types/posts';
import PostCardBlog from '@/components/postCard';
import next from 'next';

export default async function Home() {
  const respota = await fetch(`http://localhost:3000/api/post`, {
    next: {
      tags: ['getposts'],
    },
  });

  const resp = await respota.json();
  const posts: Post[] = resp[0];
  // console.log(posts);
  return (
    <main className="min-h-screen bg-[#161616] w-full">
      <div className="flex w-full">
        <SideBar />
        <div className="pl-[10%] w-full">
          <PostCardBlog></PostCardBlog>
          <div className="px-6">
            {posts?.map((post) => (
              <PostCards
                key={post.id}
                id={post.id}
                nome={post.nome}
                texto={post.texto}
                dtPost={post.dtPost}
                qtd_likes={post.qtd_likes}
                imagem={post.imagem}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
