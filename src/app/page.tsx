import { HeroSection } from '@/components/sections/HeroSection';
import { TheBeginning } from '@/components/sections/TheBeginning';
import { FirstTimes } from '@/components/sections/FirstTimes';
import { Trips } from '@/components/sections/Trips';
import { PhotoAlbum } from '@/components/sections/PhotoAlbum';
import { ThingsILove } from '@/components/sections/ThingsILove';
import { FunnyFacts } from '@/components/sections/FunnyFacts';
import { TheLetter } from '@/components/sections/TheLetter';
import { FinalSurprise } from '@/components/sections/FinalSurprise';
import { Outro } from '@/components/sections/Outro';
import { ProgressIndicator } from '@/components/ProgressIndicator';

export default function Home() {
  return (
    <main className="w-full bg-[#0a0a0a]">
      <ProgressIndicator />
      
      {/* 1. PORTADA */}
      <HeroSection />
      
      {/* 3. UN POCO DE NOSOTROS (El comienzo) */}
      <TheBeginning />
      
      {/* 4. RECUERDOS (Primeras veces) */}
      <FirstTimes />
      
      {/* 5. VIAJES Y MOMENTOS */}
      <Trips />
      
      {/* 6. COSAS QUE AMO DE VOS */}
      <ThingsILove />
      
      {/* 7. DATOS CIENTÍFICOS SOBRE VOS */}
      <FunnyFacts />
      
      {/* 8. FOTOS */}
      <PhotoAlbum />
      
      {/* 9. LA CARTA */}
      <TheLetter />
      
      {/* 10. SORPRESA */}
      <FinalSurprise />
      
      {/* 11. FINAL */}
      <Outro />
    </main>
  );
}
