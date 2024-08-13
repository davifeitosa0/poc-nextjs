import SideBarButton from './sideBarButton';

export default async function SideBar() {
  const user = await fetch(`http://localhost:3000/api/user?id=2`).then((res) =>
    res.json(),
  );
  console.log(user[0]?.imagem);
  return (
    <div className="bg-[#101010] h-screen w-[7%] flex items-center justify-center">
      <div className=" flex items-start h-[90%] justify-center ">
        <div className="flex flex-col justify-evenly">
          <SideBarButton icon={'teenyicons:home-solid'} text="Home" />
          <SideBarButton icon={'icon-park-outline:add'} text="Create" />
          <SideBarButton
            icon={'mingcute:user-4-fill'}
            imagem={user[0]?.imagem}
            text="Profile"
          />
        </div>
      </div>
    </div>
  );
}
