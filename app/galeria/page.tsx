'use client';

import React from 'react';
import Link from 'next/link';
import { PlayCircle } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { PageHeader } from '@/components/PageHeader';
import { GallerySection } from '@/components/GallerySection';

export default function GaleriaPage() {
  const { lang, gallery } = useAppStore();
  const featuredVideo = gallery.find((item) => item.type === 'video' && item.videoUrl);
  const galleryItems = featuredVideo
    ? gallery.filter((item) => item.id !== featuredVideo.id)
    : gallery;
  const ownerStoryVideo = featuredVideo?.videoUrl || '/image/WhatsApp%20Video%202026-09-21%20at%208.25.04%20PM.mp4';
  const ownerStoryPoster = featuredVideo?.imageUrl || '/image/homeweb.jpeg';

  return (
    <div className="bg-[#070b10] min-h-screen">
      {/* Page Header */}
      <PageHeader
        lang={lang}
        badge={lang === 'es' ? 'Recuerdos de Aventura' : 'Adventure Memories'}
        title={
          lang === 'es'
            ? 'Galería de Fotos y Videos'
            : 'Photo & Video Gallery'
        }
        subtitle={
          lang === 'es'
            ? 'Explora momentos reales de nuestros visitantes, vuelos sobre la selva, aventuras en el arrecife y la belleza natural de Roatán.'
            : 'Explore real guest moments, flights above the jungle, reef adventures and the natural beauty of Roatan.'
        }
        breadcrumbs={[
          {
            label: lang === 'es' ? 'Galería' : 'Gallery'
          }
        ]}
      />

      {/* Featured owner story */}
      <section className="border-b border-[#c5a059]/20 bg-[#090f16] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-7 text-center sm:mb-9">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-[#c5a059]">
              <PlayCircle className="h-4 w-4" />
              {lang === 'es' ? 'Historia de la propietaria' : "The owner's story"}
            </span>
            <h2 className="mx-auto mt-3 max-w-3xl font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
              {lang === 'es' ? 'La historia detrás de nuestro canopy' : 'The story behind our canopy'}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
              {lang === 'es'
                ? 'Conoce de primera mano cómo nació Pirates of the Caribbean Zipline y la visión que convirtió este canopy en una experiencia especial de Roatán.'
                : 'Hear how Pirates of the Caribbean Zipline began and discover the vision behind this special Roatan canopy experience.'}
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#c5a059]/35 bg-black shadow-[0_24px_70px_rgba(0,0,0,.35)] sm:rounded-3xl">
            <video
              src={ownerStoryVideo}
              poster={ownerStoryPoster}
              controls
              playsInline
              preload="metadata"
              className="aspect-video w-full bg-black object-contain"
              aria-label={lang === 'es' ? 'Video de la historia del canopy narrada por la propietaria' : 'Video of the canopy story told by the owner'}
            />
          </div>
        </div>
      </section>

      {/* Main Photo & Video Gallery with Fullscreen Lightbox */}
      <GallerySection
        lang={lang}
        gallery={galleryItems}
      />

      {/* Canopy visit invitation */}
      <section className="py-16 bg-[#0c131c] border-t border-[#c5a059]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#111923] border border-[#c5a059]/30 rounded-3xl p-8 sm:p-12">
            <div className="max-w-3xl">
              <span className="text-xs font-bold text-[#c5a059] uppercase tracking-widest block mb-2">
                {lang === 'es' ? 'Visita nuestro canopy' : 'Visit our canopy'}
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
                {lang === 'es'
                  ? 'Vive la aventura desde las alturas de Roatán'
                  : 'Experience Roatan from above'}
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                {lang === 'es'
                  ? 'Ven a conocer Pirates of the Caribbean Zipline y disfruta una experiencia inolvidable entre la naturaleza tropical, las vistas del Caribe y la emoción de nuestro canopy en Roatán.'
                  : 'Visit Pirates of the Caribbean Zipline for an unforgettable experience surrounded by tropical nature, Caribbean views and the excitement of our Roatan canopy adventure.'}
              </p>
              <Link
                href="/reservar"
                className="btn-gold-outline inline-flex rounded-full px-8 py-3.5 text-xs font-bold uppercase tracking-widest"
              >
                {lang === 'es' ? 'Planifica tu visita' : 'Plan your visit'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
