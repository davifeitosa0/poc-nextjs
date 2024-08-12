import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SideBarButtonProps } from "@/types/SideBarButtonProps";

export default function SideBarButton({
  icon,
}: SideBarButtonProps) {
  return (
      <div className="h-[50px] w-[50px] text-[#fefefe] p-1 flex items-center justify-center rounded-md hover:bg-[#09536b] hover:border hover:border-[#fefefe] cursor-pointer">
        <FontAwesomeIcon className="w-6 h-6" icon={icon}></FontAwesomeIcon>
        <h1></h1>
      </div>
  );
}
