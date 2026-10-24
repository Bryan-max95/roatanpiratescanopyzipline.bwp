'use client';

import Link from 'next/link';
import { Ship, CheckCircle2, Star } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { Hero } from '@/components/Hero';
import { OfficialPackages } from '@/components/OfficialPackages';

export default function HomePage() {
  const { lang, siteConfig } = useAppStore();

  return (
    <div className="bg-[#070b10]">
      {/* Hero Section */}
      <Hero
        lang={lang}
        siteConfig={siteConfig}
      />

      <OfficialPackages lang={lang} siteConfig={siteConfig} />

      {/* Cruise Passengers Assurance Banner */}
      <section className="py-16 bg-[#0c131c] border-t border-b border-[#c5a059]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#111923] border-2 border-[#c5a059]/40 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c2837] border border-[#c5a059]/40 text-[#ffd778] text-xs font-bold uppercase tracking-wider mb-4">
                  <Ship className="w-4 h-4 text-[#ffd778]" />
                  <span>{lang === 'es' ? 'Garantía Oficial de Crucero' : 'Official Cruise Guarantee'}</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                  {lang === 'es'
                    ? '100% Garantía de Regreso a Tiempo a tu Barco'
                    : '100% On-Time Return Guarantee to Your Cruise Ship'}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {lang === 'es'
                    ? 'Con más de 15 años atendiendo a miles de pasajeros de Carnival, Royal Caribbean, Celebrity, Princess, NCL y MSC, nunca hemos hecho perder un barco a un viajero. Te retornamos al puerto con un mínimo de 2 horas de anticipación a la hora de partida.'
                    : 'With over 15 years serving travelers from Carnival, Royal Caribbean, Celebrity, Princess, NCL, and MSC, not a single guest has ever missed a ship. We return you to port at least 2 hours before all-aboard time.'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{lang === 'es' ? 'Recogida privada en muelle' : 'Direct pier pickup'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{lang === 'es' ? 'Monitoreo de atraque en vivo' : 'Live ship docking tracking'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{lang === 'es' ? 'Reembolso por desvío de puerto' : 'Full refund if port is missed'}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <Link
                  href="/reservar"
                  className="btn-wine-red text-center py-3.5 px-6 rounded-full text-sm font-bold tracking-wide"
                >
                  {lang === 'es' ? 'Reservar Excursión Crucero' : 'Book Cruise Excursion'}
                </Link>
                <Link
                  href="/ubicacion"
                  className="btn-gold-outline text-center py-3.5 px-6 rounded-full text-sm font-semibold tracking-wide"
                >
                  {lang === 'es' ? 'Ver Logística de Puerto' : 'View Port Logistics'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tripadvisor Callout Section */}
      <section className="py-16 bg-gradient-to-b from-[#090e15] to-[#070b10] border-t border-[#c5a059]/20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-[#c5a059] uppercase tracking-widest block mb-2">
            {lang === 'es' ? 'Comparte tu experiencia' : 'Share your experience'}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            {lang === 'es'
              ? 'Visítanos en Tripadvisor'
              : 'Visit us on Tripadvisor'}
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto mb-8">
            {lang === 'es'
              ? 'Lee las opiniones de otros viajeros o comparte directamente tu experiencia con Pirates of the Caribbean Zipline en Roatán.'
              : 'Read feedback from fellow travelers or share your experience with Pirates of the Caribbean Zipline in Roatan.'}
          </p>
          <a
            href={siteConfig.tripadvisorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-outline inline-flex w-full items-center justify-center gap-2 rounded-full px-10 py-4 text-base font-bold tracking-wide sm:w-auto"
          >
            <Star className="h-5 w-5" />
            {lang === 'es' ? 'Ir a Tripadvisor' : 'Visit Tripadvisor'}
          </a>
        </div>
      </section>
    </div>
  );
}
