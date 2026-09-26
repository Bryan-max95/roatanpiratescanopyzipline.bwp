'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Ship, Clock, CheckCircle2 } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { Hero } from '@/components/Hero';
import { ReviewsSection } from '@/components/ReviewsSection';
import { OfficialPackages } from '@/components/OfficialPackages';

export default function HomePage() {
  const { lang, siteConfig, reviews } = useAppStore();

  const modules = [
    {
      title: lang === 'es' ? 'La Experiencia' : 'The Experience',
      subtitle:
        lang === 'es'
          ? 'Circuito de 9 cables, 18 plataformas sobre las copas de los árboles y combos con santuario de perezosos.'
          : '9 high-speed cables, 18 treetop jungle platforms, and combos with our sloth and monkey sanctuary.',
      href: '/experiencia',
      image: '/image/WhatsApp%20Image%202026-09-21%20at%208.25.05%20PM.jpeg',
      badge: lang === 'es' ? 'Circuito Canopy' : 'Canopy Circuit',
      actionText: lang === 'es' ? 'Explorar Experiencia' : 'Explore Experience'
    },
    {
      title: lang === 'es' ? 'Precios y Paquetes' : 'Prices & Packages',
      subtitle:
        lang === 'es'
          ? 'Tarifas oficiales transparentes desde $65 USD. Sin cargos sorpresa, pago el día del tour y cancelación gratuita.'
          : 'Transparent official rates starting at $65 USD. No surprise fees, pay upon check-in, and free cancellation.',
      href: '/precios',
      image: '/image/homeweb.jpeg',
      badge: lang === 'es' ? 'Tarifas Oficiales' : 'Official Rates',
      actionText: lang === 'es' ? 'Ver Precios y Paquetes' : 'View Prices & Packages'
    },
    {
      title: lang === 'es' ? 'Galería de Aventuras' : 'Adventure Gallery',
      subtitle:
        lang === 'es'
          ? 'Fotografías reales en alta resolución, tomas de acción en plataformas y videos aéreos de los visitantes.'
          : 'High-definition real guest photos, adrenaline-packed platform shots, and aerial video footage.',
      href: '/galeria',
      image: '/image/WhatsApp%20Image%202026-09-21%20at%208.25.04%20PM.jpeg',
      badge: lang === 'es' ? 'Fotos y Videos' : 'Photos & Videos',
      actionText: lang === 'es' ? 'Abrir Galería' : 'Open Gallery'
    },
    {
      title: lang === 'es' ? 'Ubicación y Traslados' : 'Location & Port Pickup',
      subtitle:
        lang === 'es'
          ? 'Guía paso a paso para pasajeros de Mahogany Bay y Coxen Hole. Tiempos de traslado y mapa interactivo.'
          : 'Step-by-step pickup logistics for Mahogany Bay and Coxen Hole cruise ports, travel times, and map.',
      href: '/ubicacion',
      image: '/image/WhatsApp%20Image%202026-09-21%20at%208.25.08%20PM.jpeg',
      badge: lang === 'es' ? 'Logística y Mapa' : 'Logistics & Map',
      actionText: lang === 'es' ? 'Ver Ubicación y Rutas' : 'View Location & Routes'
    },
    {
      title: lang === 'es' ? 'Reservaciones en Línea' : 'Online Booking',
      subtitle:
        lang === 'es'
          ? 'Asegura tu cupo en 3 sencillos pasos. Generación de comprobante digital y confirmación por WhatsApp.'
          : 'Secure your excursion in 3 easy steps. Instant digital voucher generation and direct WhatsApp confirmation.',
      href: '/reservar',
      image: '/image/WhatsApp%20Image%202026-09-21%20at%208.25.02%20PM%20(2).jpeg',
      badge: lang === 'es' ? 'Reserva Inmediata' : 'Instant Booking',
      actionText: lang === 'es' ? 'Reservar Mi Lugar' : 'Book My Tour'
    },
    {
      title: lang === 'es' ? 'Contacto y Soporte' : 'Contact & Support',
      subtitle:
        lang === 'es'
          ? 'Asistencia telefónica y chat de WhatsApp con el equipo en Roatán. Preguntas frecuentes y cotizaciones grupales.'
          : 'Direct phone and WhatsApp chat with our local team in Roatan. Comprehensive FAQs and group bookings.',
      href: '/contacto',
      image: '/image/WhatsApp%20Image%202026-09-21%20at%208.25.06%20PM.jpeg',
      badge: lang === 'es' ? 'Atención al Cliente' : 'Guest Support',
      actionText: lang === 'es' ? 'Contactar al Equipo' : 'Contact Team'
    }
  ];

  return (
    <div className="bg-[#070b10]">
      {/* Hero Section */}
      <Hero
        lang={lang}
        siteConfig={siteConfig}
      />

      <OfficialPackages lang={lang} />

      {/* Main Modules Directory: Dedicated Pages Overview */}
      <section className="py-20 bg-[#090f17] border-t border-[#c5a059]/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-[#162230] border border-[#c5a059]/40 text-[#ffd778] text-xs font-bold uppercase tracking-widest mb-3">
              {lang === 'es' ? 'Estructura de la Plataforma' : 'Platform Architecture'}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              {lang === 'es' ? 'Explora Nuestras Secciones' : 'Explore Our Dedicated Modules'}
            </h2>
            <div className="w-20 h-1 bg-[#8c1d24] mx-auto my-4 rounded-full" />
            <p className="text-base sm:text-lg text-gray-300">
              {lang === 'es'
                ? 'Navega por cada módulo dedicado para conocer en detalle los circuitos de tirolesa, tarifas oficiales, galería de fotos, traslados desde puertos y el motor de reservación.'
                : 'Browse each dedicated page to explore zipline circuits, official transparent pricing, media galleries, cruise port logistics, and our booking engine.'}
            </p>
          </div>

          {/* 6 Modular Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((mod, idx) => (
              <div
                key={idx}
                className="group bg-[#111923] rounded-3xl border border-gray-800 hover:border-[#c5a059]/60 transition-all duration-300 overflow-hidden flex flex-col shadow-xl hover:-translate-y-1"
              >
                {/* Visual Thumbnail */}
                <div className="relative h-52 w-full overflow-hidden bg-[#0a0e14]">
                  <Image
                    src={mod.image}
                    alt={mod.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111923] via-[#111923]/40 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0a0f16]/90 border border-[#c5a059]/40 text-[#ffd778] text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm">
                    {mod.badge}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-white group-hover:text-[#ffd778] transition-colors">
                      {mod.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-gray-300 leading-relaxed">
                      {mod.subtitle}
                    </p>
                  </div>

                  {/* Navigation CTA */}
                  <div className="pt-6 mt-6 border-t border-gray-800/80">
                    <Link
                      href={mod.href}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#c5a059] group-hover:text-[#ffd778] uppercase tracking-wider transition-colors"
                    >
                      <span>{mod.actionText}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Guest Reviews & Accreditations */}
      <ReviewsSection lang={lang} reviews={reviews} />

      {/* Direct Quick Booking Callout Section */}
      <section className="py-16 bg-gradient-to-b from-[#090e15] to-[#070b10] border-t border-[#c5a059]/20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-[#c5a059] uppercase tracking-widest block mb-2">
            {lang === 'es' ? 'Tu Próxima Aventura Te Espera' : 'Your Next Adventure Awaits'}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            {lang === 'es'
              ? '¿Listo para volar en el mejor canopy de Roatán?'
              : 'Ready to fly Roatan’s finest canopy zipline?'}
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto mb-8">
            {lang === 'es'
              ? 'Reserva ahora sin pago previo. Recibe confirmación instantánea por WhatsApp y asegura tu horario preferido.'
              : 'Book now with zero advance deposit. Receive immediate WhatsApp confirmation and secure your preferred flight time.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/reservar"
              className="btn-wine-red px-10 py-4 rounded-full text-base font-bold tracking-wide w-full sm:w-auto"
            >
              {lang === 'es' ? 'Reservar en Línea Ahora' : 'Book Online Now'}
            </Link>
            <Link
              href="/precios"
              className="btn-gold-outline px-8 py-4 rounded-full text-base font-semibold tracking-wide w-full sm:w-auto"
            >
              {lang === 'es' ? 'Consultar Tarifas' : 'Check Rates'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
