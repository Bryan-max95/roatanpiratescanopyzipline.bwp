
'use client';

import Image from 'next/image';
import { Language, SiteConfig } from '@/lib/types';

interface HeroProps {
  lang: Language;
  siteConfig: SiteConfig;
  onBookClick?: () => void;
  onExploreClick?: () => void;
}

export function Hero({ lang }: HeroProps) {
  const businessName = 'Roatan Pirates of the Caribbean Xtreme Canopy Zipline';

  return (
    <section
      id="inicio"
      aria-label={businessName}
      className="relative flex min-h-[76svh] items-center overflow-hidden bg-[#090e15] pb-8 pt-20 sm:min-h-[86vh] sm:pb-12 sm:pt-24 lg:min-h-[92vh]"
    >
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/image/homeweb.jpeg"
          alt={lang === 'es' ? 'Aventura turística de Roatán, Honduras' : 'Roatan, Honduras adventure experience'}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          referrerPolicy="no-referrer"
        />
      </div>

      <h1 className="sr-only">{businessName}</h1>

      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] items-center justify-start px-3 sm:px-7 lg:px-12 xl:px-16">
        <div className="relative aspect-[1774/887] w-[91vw] max-w-[430px] -translate-y-7 sm:w-[66vw] sm:max-w-[700px] sm:-translate-y-9 lg:w-[54vw] lg:max-w-[840px] lg:-translate-y-11 xl:w-[50vw] xl:max-w-[920px]">
          <Image
            src="/brand/pirates-wordmark.png"
            alt={businessName}
            fill
            priority
            sizes="(max-width: 640px) 91vw, (max-width: 1024px) 66vw, (max-width: 1280px) 54vw, 920px"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
