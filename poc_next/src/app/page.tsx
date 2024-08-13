import SideBar from '@/components/sideBar';
import PostCardBlog from '@/components/postCard';

export default async function Home() {

  return (
    <main className="min-h-screen">
      <div className='flex'>
        <SideBar></SideBar>
        <div className='w-full'>
        <PostCardBlog></PostCardBlog>
        </div>
      </div>
    </main>
  );
}
