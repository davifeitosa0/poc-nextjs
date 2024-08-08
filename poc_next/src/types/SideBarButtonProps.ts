import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { PopperPlacementType } from "@mui/material";
import { ReactNode } from "react";

type ValidPlacement = "right" | "left" | "top" | "bottom" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end" | undefined;

export type SideBarButtonProps = {
    icon: IconProp;
    tooltip: ReactNode;
    placementText?: ValidPlacement;
}