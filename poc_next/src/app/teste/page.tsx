import ExemploContador from '@/components/exemploContador';
import { Icon } from '@iconify/react';

export default function KaorasdasdasiNePage() {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1> OLá Mundo</h1>
      <Icon icon="pixelarticons:heart"  style={{color: 'black'}} />
      <ExemploContador />
    </div>
  );
}
