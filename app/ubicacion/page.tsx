'use client';

import React from 'react';
import Link from 'next/link';
import { useAppStore } from '@/lib/store';
import { PageHeader } from '@/components/PageHeader';
import { LocationSection } from '@/components/LocationSection';

export default function UbicacionPage() {
  const { lang, siteConfig } = useAppStore();

  return (
    <div className="bg-[#070b10] min-h-screen">
      {/* Page Header */}
      <PageHeader
        lang={lang}
        badge={lang === 'es' ? 'Roatán, Islas de la Bahía' : 'Roatan, Bay Islands'}
        title={
          lang === 'es'
            ? 'Ubicación y Logística de Traslado'
            : 'Location & Cruise Port Logistics'
        }
        subtitle={
          lang === 'es'
            ? 'Estratégicamente ubicados en la cresta montañosa de Dixon Cove, a pocos minutos de los muelles de cruceros de Mahogany Bay y Coxen Hole.'
            : 'Strategically nestled on the lush ridge of Dixon Cove, just minutes away from Mahogany Bay and Coxen Hole cruise ship terminals.'
        }
        breadcrumbs={[
          {
            label: lang === 'es' ? 'Ubicación' : 'Location'
          }
        ]}
      />

      {/* Main Location, Interactive Map & Coordinates Component */}
      <LocationSection
        lang={lang}
        siteConfig={siteConfig}
      />

      {/* Detailed Cruise Passenger Guide */}
      <section className="py-16 bg-[#0c131c] border-t border-[#c5a059]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#c5a059] uppercase tracking-widest block mb-2">
              {lang === 'es' ? 'Instrucciones para Pasajeros de Barcos' : 'Step-by-Step Cruise Guest Instructions'}
            </span>
            <h2 className="font-heading text-3xl font-bold text-white">
              {lang === 'es' ? 'Cómo Encontrar a tu Conductor' : 'How to Meet Your Driver at Port'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Terminal 1: Mahogany Bay */}
            <div className="bg-[#111923] border border-[#c5a059]/30 rounded-2xl p-6 sm:p-8">
              <span className="inline-block px-3 py-1 rounded-full bg-[#8c1d24] text-white text-xs font-bold uppercase tracking-widest mb-4">
                Mahogany Bay (Carnival, Princess, Holland America)
              </span>
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                {lang === 'es' ? 'Muelle Mahogany Bay' : 'Mahogany Bay Terminal'}
              </h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#ffd778] font-bold">1.</span>
                  <span>
                    {lang === 'es'
                      ? 'Desembarca del crucero y camina por el centro comercial de artesanías hacia la colina de salida peatonal.'
                      : 'Disembark the ship and walk through the main duty-free and craft village toward the designated pedestrian exit hill.'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ffd778] font-bold">2.</span>
                  <span>
                    {lang === 'es'
                      ? 'Al cruzar el portón de seguridad principal de la calle, verás a nuestro representante sosteniendo un cartel oficial de Pirates Zipline con tu nombre.'
                      : 'Once past the main security gate at the street, you will spot our uniformed guide holding an official Pirates Zipline sign with your name.'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ffd778] font-bold">3.</span>
                  <span>
                    {lang === 'es'
                      ? 'Tiempo de traslado: únicamente 15 minutos en minivan con aire acondicionado.'
                      : 'Travel time: only 15 minutes in our comfortable air-conditioned van.'}
                  </span>
                </li>
              </ul>
            </div>

            {/* Terminal 2: Port of Roatan / Coxen Hole */}
            <div className="bg-[#111923] border border-[#c5a059]/30 rounded-2xl p-6 sm:p-8">
              <span className="inline-block px-3 py-1 rounded-full bg-[#162230] text-[#ffd778] border border-[#c5a059]/40 text-xs font-bold uppercase tracking-widest mb-4">
                Coxen Hole (Royal Caribbean, Celebrity, NCL, MSC)
              </span>
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                {lang === 'es' ? 'Muelle Coxen Hole (Town Center)' : 'Port of Roatan (Coxen Hole)'}
              </h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#ffd778] font-bold">1.</span>
                  <span>
                    {lang === 'es'
                      ? 'Sal del muelle por la Puerta #1 o #2 hacia la salida de operadores turísticos independientes.'
                      : 'Exit the terminal through Gate #1 or #2 toward the certified independent tour operator meeting zone.'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ffd778] font-bold">2.</span>
                  <span>
                    {lang === 'es'
                      ? 'Tu coordinador de Pirates Zipline estará esperándote con tu código de reservación en mano.'
                      : 'Your Pirates Zipline tour coordinator will be standing right by the meeting area with your booking voucher.'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ffd778] font-bold">3.</span>
                  <span>
                    {lang === 'es'
                      ? 'Tiempo de traslado: aproximadamente 20 minutos con vistas escénicas de la costa.'
                      : 'Travel time: approximately 20 minutes with panoramic coastal views.'}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Travel Times Table */}
          <div className="bg-[#111923] border border-gray-800 rounded-2xl p-6 overflow-x-auto">
            <h4 className="font-heading text-lg font-bold text-white mb-4">
              {lang === 'es' ? 'Tiempos Estimados de Traslado' : 'Estimated Travel Times to Pirates Zipline'}
            </h4>
            <table className="w-full text-left text-sm text-gray-300">
              <thead>
                <tr className="border-b border-gray-800 text-xs uppercase tracking-wider text-[#ffd778]">
                  <th className="py-2.5 px-4">{lang === 'es' ? 'Punto de Origen' : 'Starting Point'}</th>
                  <th className="py-2.5 px-4">{lang === 'es' ? 'Distancia' : 'Distance'}</th>
                  <th className="py-2.5 px-4">{lang === 'es' ? 'Tiempo Estimado' : 'Estimated Time'}</th>
                  <th className="py-2.5 px-4">{lang === 'es' ? 'Servicio de Recogida' : 'Pickup Service'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/60">
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Mahogany Bay Cruise Port</td>
                  <td className="py-3 px-4">6 km (3.7 mi)</td>
                  <td className="py-3 px-4 text-[#ffd778] font-bold">12 - 15 min</td>
                  <td className="py-3 px-4 text-emerald-400 font-semibold">{lang === 'es' ? 'Incluido' : 'Included'}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Port of Roatán (Coxen Hole)</td>
                  <td className="py-3 px-4">9 km (5.5 mi)</td>
                  <td className="py-3 px-4 text-[#ffd778] font-bold">18 - 22 min</td>
                  <td className="py-3 px-4 text-emerald-400 font-semibold">{lang === 'es' ? 'Incluido' : 'Included'}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">French Harbour Hotels</td>
                  <td className="py-3 px-4">4 km (2.5 mi)</td>
                  <td className="py-3 px-4 text-[#ffd778] font-bold">8 - 10 min</td>
                  <td className="py-3 px-4 text-emerald-400 font-semibold">{lang === 'es' ? 'Disponible' : 'Available'}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">West End Village</td>
                  <td className="py-3 px-4">18 km (11.2 mi)</td>
                  <td className="py-3 px-4 text-[#ffd778] font-bold">30 - 35 min</td>
                  <td className="py-3 px-4 text-emerald-400 font-semibold">{lang === 'es' ? 'Disponible' : 'Available'}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">West Bay Beach Resorts</td>
                  <td className="py-3 px-4">22 km (13.6 mi)</td>
                  <td className="py-3 px-4 text-[#ffd778] font-bold">40 - 45 min</td>
                  <td className="py-3 px-4 text-emerald-400 font-semibold">{lang === 'es' ? 'Disponible' : 'Available'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* CTA Box */}
          <div className="mt-10 text-center">
            <Link
              href="/reservar"
              className="btn-wine-red px-10 py-3.5 rounded-full text-sm font-bold tracking-wide inline-block"
            >
              {lang === 'es' ? 'Reservar con Transporte Incluido' : 'Book with Transportation Included'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
