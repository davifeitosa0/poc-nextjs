import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type TypeUser = {
  id: number;
  nome: string;
  email: string;
  senha?: string;
  imagem: string | StaticImport;
};
