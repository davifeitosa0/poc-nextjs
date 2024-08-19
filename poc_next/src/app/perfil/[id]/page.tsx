import PostCards from '@/components/postCards';
import ProfileCard from '@/components/profileCard';
import SideBar from '@/components/sideBar';
import { Post } from '@/types/posts';
import { notFound } from 'next/navigation';

export default async function PerfilPage({
  params,
}: {
  params: { id: number };
}) {
  const userId = params.id;
  if (isNaN(userId)) {
    return notFound();
  }

  const response: Post[][] = await fetch(`http://localhost:3000/api/posts/${userId}`,{
    cache: 'no-store',
  })
    .then((resp) => {
      if (!resp.ok) {
        throw new Error('Erro ao buscar os posts');
      }
      return resp.json()
    })
    .catch(() => notFound());

    const posts: Post[] = response[0] ;
  return (
    <main className="min-h-screen bg-[#161616] w-full">
      <div className="flex w-full">
        <SideBar />
        <div className="pl-[10%] w-full">
          <ProfileCard id={userId} />
          <div className="px-6">
            <h1 className="text-2xl text-white font-semibold pt-6">Posts</h1>
            {posts?.map((post) => (
              <PostCards
                key={post.id}
                id={post.id}
                nome={post.nome}
                texto={post.texto}
                dtPost={post.dtPost}
                qtd_likes={post.qtd_likes}
                imagem={post.imagem}
                fk_usuario={post.fk_usuario}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
