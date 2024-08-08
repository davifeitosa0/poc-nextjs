import {
  faBagShopping,
  faBars,
  faNewspaper,
  faUserGroup,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

import SideBarButton from "./sideBarButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SideBar() {
  return (
    <div className="bg-[#073a4b] h-screen w-[6%]">
      <div className="bg-[#22485b] flex items-center justify-center h-[11%] w-[100%]">
        <FontAwesomeIcon
          className="text-[#FEFEFE] h-1/3 w-1/2"
          icon={faCode}
        />
      </div>
      <div className="h-[89%] flex items-center justify-center">
        <div className="flex flex-col h-[90%] items-center my-auto justify-between">
          <div className="flex flex-col h-[40%] justify-between">
            <SideBarButton icon={faUserGroup} tooltip={"Clientes"} />
            <SideBarButton icon={faNewspaper} tooltip={"Notícias"} />
            <SideBarButton icon={faBagShopping} tooltip={"Loja"} />
          </div>

          <div>
            <SideBarButton icon={faBars} tooltip={"Menu"} />
          </div>
        </div>
      </div>
    </div>
  );
}
