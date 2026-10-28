
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
      className="relative flex min-h-[76svh] items-start overflow-hidden bg-[#090e15] pb-8 pt-[88px] sm:min-h-[86vh] sm:pb-12 sm:pt-[104px] lg:min-h-[92vh]"
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
        <div className="relative aspect-[1774/887] w-[80vw] max-w-[376px] sm:w-[58vw] sm:max-w-[612px] lg:w-[48vw] lg:max-w-[734px] xl:w-[44vw] xl:max-w-[804px]">
          <Image
            src="/brand/pirates-wordmark.png"
            alt={businessName}
            fill
            priority
            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 58vw, (max-width: 1280px) 48vw, (max-width: 1840px) 44vw, 804px"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
