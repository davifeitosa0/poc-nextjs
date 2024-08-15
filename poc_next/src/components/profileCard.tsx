// PostCardBlog.js
import Image from 'next/image';

export default async function ProfileCard() {
  const user = await fetch(`http://localhost:3000/api/user?id=2`).then((res) =>
    res.json(),
  );
  return (
    <div className="flex flex-row bg-[#131313] gap-4 text-white p-6">
      <div>
        <Image className="rounded-full" width={69} height={69} src={user[0]?.imagem} alt="" />
      </div>
      <div className="w-full flex justify-center flex-col">
        <h1 className="text-xl font-semibold">{user[0]?.nome}</h1>
        <h1 className="text-lg font-normal text-slate-300">{user[0]?.email}</h1>
      </div>
    </div>
  );
}
