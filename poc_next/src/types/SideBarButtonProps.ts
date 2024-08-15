import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type SideBarButtonProps = {
    icon: string;
    imagem?: string | StaticImport;
    text: string;
}