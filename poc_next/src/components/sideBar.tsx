'use client'
import Link from 'next/link';
import SideBarButton from './sideBarButton';
import { useUser } from '@/context/user-context';

export default function SideBar() {
  const { user } = useUser();
  return (
    <div className="bg-[#101010]  h-screen fixed left-0 w-[10%] flex items-center justify-center">
      <div className=" flex items-start h-[90%] justify-center ">
        <div className="flex flex-col justify-evenly">
          <Link href="/">
            <SideBarButton icon={'teenyicons:home-solid'} text="Home" />
          </Link>
          <SideBarButton icon={'icon-park-outline:add'} text="Create" />
          {user?.imagem && (
            <SideBarButton
              icon={'mingcute:user-4-fill'}
              imagem={user?.imagem}
              text="Profile"
            />
          )}
        </div>
      </div>
    </div>
  );
}
