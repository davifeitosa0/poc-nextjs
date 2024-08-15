import ProfileCard from '@/components/profileCard';
import SideBar from '@/components/sideBar';

export default async function PerfilPage() {

  return (
    <main className="min-h-screen bg-[#161616] w-full">
      <div className="flex w-full">
        <SideBar />
        <div className="pl-[10%] w-full">
          <ProfileCard/>
          <div className="px-6">
            <h1 className='text-2xl text-white font-semibold pt-6'>
              Seus blogs
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}
