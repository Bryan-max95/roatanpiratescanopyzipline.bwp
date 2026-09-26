'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { PageHeader } from '@/components/PageHeader';
import { PricingSection } from '@/components/PricingSection';
import { CreditCard, ShieldCheck, WalletCards, UsersRound } from 'lucide-react';

export default function PreciosPage() {
  const router = useRouter();
  const { lang, prices } = useAppStore();

  const handleBookRate = (rateId: string) => {
    router.push(`/reservar?rate=${rateId}`);
  };

  return (
    <div className="bg-[#070b10] min-h-screen">
      {/* Page Header */}
      <PageHeader
        lang={lang}
        badge={lang === 'es' ? 'Tarifas Oficiales 2026' : 'Official 2026 Rates'}
        title={
          lang === 'es'
            ? 'Precios y Paquetes de Aventura'
            : 'Prices & Adventure Packages'
        }
        subtitle={
          lang === 'es'
            ? 'Precios transparentes y sin comisiones ocultas. Todas las tarifas incluyen equipo profesional Petzl CE, guías certificados e hidratación de cortesía.'
            : 'Transparent pricing with no hidden fees. All rates include Petzl CE certified equipment, certified bilingual guides, and complimentary hydration.'
        }
        breadcrumbs={[
          {
            label: lang === 'es' ? 'Precios' : 'Pricing'
          }
        ]}
      />

      {/* Main Pricing Cards Component */}
      <PricingSection
        lang={lang}
        prices={prices}
        onBookRate={handleBookRate}
      />

      {/* Transparent Payment Terms & Cruise Guarantee Policy */}
      <section className="pricing-terms py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="pricing-terms-kicker text-xs font-bold uppercase tracking-widest block mb-2">
              {lang === 'es' ? 'Claridad y Compromiso' : 'Clarity & Commitment'}
            </span>
            <h2 className="font-heading text-3xl font-bold text-white">
              {lang === 'es' ? 'Términos de Pago y Garantías' : 'Payment Terms & Guarantees'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="pricing-term-card p-6">
              <span className="pricing-term-icon"><WalletCards className="h-5 w-5" /></span>
              <span className="text-xs font-bold uppercase tracking-widest block mb-2">
                {lang === 'es' ? 'Pago el Día del Tour' : 'Pay Upon Check-in'}
              </span>
              <p className="text-sm text-gray-300 leading-relaxed">
                {lang === 'es'
                  ? 'No cobramos por adelantado tu tarjeta de crédito para reservar. Aseguras tu fecha y hora en línea y pagas cómodamente en nuestra taquilla antes de iniciar tu vuelo.'
                  : 'We do not charge your credit card upfront to secure your slot. Book your time online and conveniently pay at our welcome desk before takeoff.'}
              </p>
            </div>

            <div className="pricing-term-card p-6">
              <span className="pricing-term-icon"><CreditCard className="h-5 w-5" /></span>
              <span className="text-xs font-bold uppercase tracking-widest block mb-2">
                {lang === 'es' ? 'Monedas y Tarjetas' : 'Accepted Currencies'}
              </span>
              <p className="text-sm text-gray-300 leading-relaxed">
                {lang === 'es'
                  ? 'Aceptamos Dólares Estadounidenses (USD en efectivo), Lempiras hondureños (HNL) y las principales tarjetas internacionales de crédito y débito (Visa y MasterCard).'
                  : 'We accept US Dollars cash, Honduran Lempiras (HNL), and major international credit and debit cards (Visa and MasterCard).'}
              </p>
            </div>

            <div className="pricing-term-card p-6">
              <span className="pricing-term-icon"><ShieldCheck className="h-5 w-5" /></span>
              <span className="text-xs font-bold uppercase tracking-widest block mb-2">
                {lang === 'es' ? 'Cancelación Libre de Riesgo' : 'Risk-Free Cruise Cancellation'}
              </span>
              <p className="text-sm text-gray-300 leading-relaxed">
                {lang === 'es'
                  ? 'Si tu barco de crucero cancela su escala en Roatán por mal clima o retrasa su llegada, tu reservación queda libre de penalidades y reembolsada al 100%.'
                  : 'If your cruise ship cancels its port call in Roatan due to bad weather or changes schedule, your reservation is completely penalty-free with 100% money back.'}
              </p>
            </div>
          </div>

          {/* Group visit coordination */}
          <div className="pricing-group-callout mt-12 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="pricing-group-icon"><UsersRound className="h-7 w-7" /></span>
            <div className="flex-1">
              <span className="inline-block text-xs font-bold tracking-widest uppercase mb-2">
                {lang === 'es' ? 'Coordinación para Grupos' : 'Group Coordination'}
              </span>
              <h3 className="font-heading text-xl font-bold text-white">
                {lang === 'es' ? '¿Estás organizando una visita para 10 o más personas?' : 'Planning a visit for 10 or more guests?'}
              </h3>
              <p className="text-sm text-gray-300 mt-1 max-w-2xl">
                {lang === 'es'
                  ? 'Nuestro equipo puede ayudarte a coordinar horarios, transporte, distribución de participantes y atención organizada para familias, empresas y grupos de cruceristas. Se mantienen las tarifas oficiales por persona.'
                  : 'Our team can help coordinate schedules, transportation, guest distribution, and an organized arrival for families, companies, and cruise groups. Official per-person rates still apply.'}
              </p>
            </div>
            <Link
              href="/contacto"
              className="pricing-group-action px-6 py-3 text-xs font-bold uppercase tracking-wider shrink-0"
            >
              {lang === 'es' ? 'Coordinar Visita Grupal' : 'Coordinate Group Visit'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
