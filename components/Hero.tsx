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
  return (
    <section
      id="inicio"
      aria-label={lang === 'es' ? 'Roatan Pirates of the Caribbean Xtreme Canopy Zipline' : 'Roatan Pirates of the Caribbean Xtreme Canopy Zipline'}
      className="relative flex min-h-[78svh] items-center justify-center overflow-hidden bg-[#090e15] pb-10 pt-24 sm:min-h-[88vh] sm:pb-14 sm:pt-28 lg:min-h-[94vh]"
    >
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/image/homeweb.jpeg"
          alt="Guests enjoying the clear boat adventure in Roatan"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#04070a]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090e15] via-transparent to-[#090e15]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(4,7,10,.48)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] items-center justify-start px-4 sm:px-8 lg:px-14 xl:px-20">
        <div className="relative aspect-[1774/887] w-[82vw] max-w-[360px] -translate-y-8 sm:w-[58vw] sm:max-w-[620px] sm:-translate-y-10 lg:w-[48vw] lg:max-w-[700px] lg:-translate-y-12 xl:w-[45vw] xl:max-w-[760px]">
          <Image
            src="/brand/pirates-wordmark.png"
            alt="Roatan Pirates of the Caribbean Xtreme Canopy Zipline"
            fill
            priority
            sizes="(max-width: 640px) 96vw, (max-width: 1280px) 88vw, 1180px"
            className="object-contain drop-shadow-[0_14px_20px_rgba(0,0,0,.78)]"
          />
        </div>
      </div>
    </section>
  );
}
