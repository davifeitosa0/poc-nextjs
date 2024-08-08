import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PopperPlacementType, Tooltip } from "@mui/material";
import { ReactNode } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { SideBarButtonProps } from "@/types/SideBarButtonProps";

export default function SideBarButton({
  icon,
  tooltip,
  placementText = "right",
}: SideBarButtonProps) {
  return (
    <div className="h-[50px] w-[50px] text-[#fefefe] p-1 flex items-center justify-center rounded-md hover:bg-[#09536b] hover:border hover:border-[#22485b] cursor-pointer">
      <Tooltip title={tooltip} placement={placementText}>
        <FontAwesomeIcon className="w-6 h-6" icon={icon}></FontAwesomeIcon>
      </Tooltip>
    </div>
  );
}
