import Image from 'next/image';
import { Post } from '@/types/posts';
import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';
export default function PostCards({
  nome,
  texto,
  dtPost,
  qtd_likes,
  imagem,
  fk_usuario
}: Post) {
  const dataHora = new Date(dtPost);
  const diffMilissegundos = new Date().getTime() - dataHora.getTime();
  let diffHoras = Math.floor(diffMilissegundos / (1000 * 60 * 60));

  let textHoras = diffHoras + 'h';

  if (diffHoras > 24) {
    diffHoras = Math.floor(diffHoras / 24);

    textHoras = diffHoras + 'd';
  } else if (diffHoras == 0) {
    textHoras = 'now';
  }

  return (
    <div className="text-white py-5 border-b-2 border-b-[#323233]">
      <div className="w-full justify-between flex">
          <Link className='flex flex-row gap-4' href={`/perfil/${fk_usuario}`}>
            <Image
              alt={''}
              className="rounded-full"
              width={25}
              height={25}
              src={imagem}
            ></Image>
            <h1>{nome}</h1>
          </Link>
        <h1 className="text-[#606060]">{textHoras}</h1>
      </div>
      <div className="pl-10 flex flex-col gap-2">
        <h1>{texto} </h1>
        <div className="flex gap-2">
          <Icon
            className="hover:scale-125 cursor-pointer"
            width="20px"
            height="20px"
            icon={'mdi:heart-outline'}
          ></Icon>
          <Icon
            className="hover:scale-125 cursor-pointer"
            width="20px"
            height="20px"
            icon={'iconamoon:comment'}
          ></Icon>
        </div>
        <h1 className="text-[#606060]">{qtd_likes} likes</h1>
      </div>
    </div>
  );
}
