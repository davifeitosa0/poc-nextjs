import PostCards from '@/components/postCards';
import SideBar from '@/components/sideBar';
import { Post } from '@/types/posts';
import PostCardBlog from '@/components/postCard';

export default async function Home() {
  const respota = await fetch(`http://localhost:3000/api/post`);
  
  const resp = await respota.json();
  const posts: Post[] = resp[0];
console.log(posts)
  return (
    <main className="min-h-screen bg-[#161616]">
      <div className="flex">
        <SideBar />
        <div className="w-full">
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
        <div className='w-full'>
        <PostCardBlog></PostCardBlog>
        </div>
      </div>
    </main>
  );
}
