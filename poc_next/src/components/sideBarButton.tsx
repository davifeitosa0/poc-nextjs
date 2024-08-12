import { SideBarButtonProps } from '@/types/SideBarButtonProps';
import { Icon, IconifyIcon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';

export default function SideBarButton({
  icon,
  text,
  imagem,
}: SideBarButtonProps) {
  return (
    <div className="h-[50px] w-[100px] text-[#fefefe] p-1 flex items-center justify-center rounded-md hover:bg-[#2b2c2c] hover:border hover:border-[#fefefe] cursor-pointer">
      {imagem ? (
        <Image className='rounded-full' width={25} height={25} src={imagem} alt="" />
      ) : (
        <Icon
          icon={icon}
          width="25px"
          height="25px"
          style={{ color: 'white' }}
        />
      )}
      <h1 className="ml-2">{text}</h1>
    </div>
  );
}
