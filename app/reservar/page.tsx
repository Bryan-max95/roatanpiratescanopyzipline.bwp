'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { PageHeader } from '@/components/PageHeader';
import { BookingSection } from '@/components/BookingSection';

function ReservarContent() {
  const searchParams = useSearchParams();
  const preSelectedTour = searchParams.get('tour') || undefined;
  const { lang, tours, siteConfig, addReservation } = useAppStore();

  return (
    <div className="bg-[#070b10] min-h-screen">
      {/* Page Header */}
      <PageHeader
        lang={lang}
        badge={lang === 'es' ? 'Motor de Reservaciones' : 'Online Booking Engine'}
        title={
          lang === 'es'
            ? 'Reservación Oficial en Línea'
            : 'Official Online Reservation'
        }
        subtitle={
          lang === 'es'
            ? 'Reserva sin cobro anticipado. Elige tu tour, indica tu barco o lugar de hospedaje y recibe de inmediato tu comprobante digital y confirmación por WhatsApp.'
            : 'Book with no upfront payment. Pick your tour, provide your ship or accommodation, and instantly generate your digital voucher with WhatsApp confirmation.'
        }
        breadcrumbs={[
          {
            label: lang === 'es' ? 'Reservar' : 'Book Now'
          }
        ]}
      />

      {/* Main 3-Step Interactive Booking Engine */}
      <div className="pb-16">
        <BookingSection
          lang={lang}
          tours={tours}
          siteConfig={siteConfig}
          onAddReservation={addReservation}
          preSelectedTourId={preSelectedTour}
        />
      </div>
    </div>
  );
}

export default function ReservarPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#070b10] flex items-center justify-center text-[#ffd778]">Cargando motor de reservaciones...</div>}>
      <ReservarContent />
    </Suspense>
  );
}
