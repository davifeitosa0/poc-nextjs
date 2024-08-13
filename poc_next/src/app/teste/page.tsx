import ExemploContador from '@/components/exemploContador';
import { Icon } from '@iconify/react';

export default async function KaorasdasdasiNePage() {
  const cep = await fetch('https://viacep.com.br/ws/01001000/json/').then((response) => response.json());
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1> OLá Mundo</h1>
      <h1>{cep.logradouro} </h1>
      <Icon icon="pixelarticons:heart" style={{color: 'black'}} />
      <ExemploContador />
    </div>
  );
}
