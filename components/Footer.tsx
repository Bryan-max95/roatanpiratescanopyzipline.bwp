'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { Language, SiteConfig } from '@/lib/types';
import { translations } from '@/lib/translations';

const FACEBOOK_URL = 'https://www.facebook.com/share/19Qi2zh2Pv/?mibextid=wwXIfr';
const INSTAGRAM_URL = 'https://www.instagram.com/pirateszipline_roatan?stkn=a29xMTV2YWlxYng0&utm_source=qr';

function FacebookIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current"><path d="M13.7 22v-9h3l.45-3.5H13.7V7.27c0-1.01.28-1.7 1.73-1.7h1.85V2.44a24.8 24.8 0 0 0-2.7-.14c-2.67 0-4.5 1.63-4.5 4.62V9.5H7v3.5h3.08v9h3.62Z" /></svg>;
}

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4.25" /><circle cx="17.4" cy="6.65" r="1" className="fill-current stroke-none" /></svg>;
}

interface FooterProps {
  lang: Language;
  siteConfig: SiteConfig;
}

export function Footer({ lang, siteConfig }: FooterProps) {
  const t = translations[lang];
  const [modalPolicy, setModalPolicy] = useState<{ title: string; content: string } | null>(null);

  const openPrivacy = () => {
    setModalPolicy({
      title: lang === 'es' ? 'Política de Privacidad' : 'Privacy Policy',
      content: lang === 'es'
        ? 'En Pirates of the Caribbean Zipline respetamos y protegemos la privacidad de todos nuestros aventureros. Los datos ingresados en nuestro formulario de reservación (nombre, correo, teléfono y detalles de viaje) se utilizan exclusivamente para coordinar su excursión, organizar traslados desde los puertos de cruceros y brindar asistencia personalizada. Nunca vendemos ni compartimos sus datos con terceros.'
        : 'At Pirates of the Caribbean Zipline, we respect and safeguard the personal data of all our guests. Information provided on our reservation form (name, email, phone, and trip logistics) is used strictly to coordinate your canopy excursion, organize cruise port pickups, and provide personal service. We never sell or share your data with third parties.'
    });
  };

  const openTerms = () => {
    setModalPolicy({
      title: lang === 'es' ? 'Términos y Condiciones' : 'Terms & Conditions',
      content: lang === 'es'
        ? 'Al participar, los visitantes deben seguir las instrucciones de los guías y mantener el equipo de seguridad abrochado. El límite máximo de peso es 370 lbs. Los menores de 6 años viajan en tándem con un padre o guía.'
        : 'Guests must follow all guide instructions and keep safety equipment fastened. Maximum weight is 370 lbs. Ages 6 and under ride tandem with a parent or guide.'
    });
  };

  const openCancellation = () => {
    setModalPolicy({
      title: lang === 'es' ? 'Política de Cancelación' : 'Cancellation & Refund Policy',
      content: lang === 'es'
        ? 'Si tu barco no llega a ninguno de los puertos de cruceros de la isla, recibirás un reembolso del 100%. Las tormentas eléctricas son poco frecuentes y, el 90% de las veces, duran solamente entre 15 y 20 minutos antes de que regrese el sol. Se requiere un depósito de $20 por persona para reservar el transporte mediante PayPal a paypal@roatanpiratescanopy.com. El saldo restante se paga al llegar. Las cancelaciones deben realizarse al menos 24 horas antes de la recogida. Las instrucciones de recogida se enviarán después de confirmar el depósito.'
        : 'If your ship does not make port at either cruise port on the island, you will receive a 100% refund. Thunderstorms are rare and, 90% of the time, last only 15–20 minutes before the sunshine returns. A $20 per-person deposit is required to reserve transportation through PayPal at paypal@roatanpiratescanopy.com. The remaining balance is due upon arrival. Cancellations must be made at least 24 hours before pickup. Pickup instructions will be sent after the deposit is confirmed.'
    });
  };

  return (
    <footer className="bg-[#06090e] border-t-2 border-[#c5a059]/40 text-gray-300 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle Nautical Chart Grid Lines */}
      <div className="absolute inset-0 pointer-events-none bg-nautical-grid opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="relative h-20 w-20 shrink-0">
                <Image src="/brand/pirates-logo.png" alt="Pirates of the Caribbean Zipline & Canopy" fill sizes="80px" className="object-contain drop-shadow-xl" />
              </div>
              <div>
                <span className="font-heading text-lg font-bold text-white block leading-tight">
                  PIRATES OF THE CARIBBEAN
                </span>
                <span className="text-xs uppercase text-[#d4af37] font-semibold tracking-widest">
                  Zipline • Roatán
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 italic">
              &ldquo;{siteConfig.tagline[lang] || t.footer.slogan}&rdquo;
            </p>

            <div className="flex items-center justify-center gap-3 pt-2" aria-label={lang === 'es' ? 'Redes sociales oficiales' : 'Official social media'}>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="footer-social-link"
              >
                <FacebookIcon />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="footer-social-link"
              >
                <InstagramIcon />
              </a>
              <a
                href={siteConfig.tripadvisorUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#111923] border border-gray-700 flex items-center justify-center hover:border-[#d4af37] hover:text-[#d4af37] text-xs transition-colors"
              >
                TA
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Rights */}
        <div className="flex flex-col items-center gap-4 border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <div>
            <div>© {new Date().getFullYear()} {siteConfig.companyName}. {t.footer.rights}</div>
            <a
              href="https://www.bwpsoftware.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1.5 inline-block text-[10px] font-semibold tracking-[.12em] text-gray-600 transition-colors hover:text-[#c5a059]"
            >
              Created by BWP
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={openPrivacy}
              className="hover:text-gray-300 transition-colors"
            >
              {t.footer.privacy}
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={openTerms}
              className="hover:text-gray-300 transition-colors"
            >
              {t.footer.terms}
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={openCancellation}
              className="hover:text-gray-300 transition-colors"
            >
              {t.footer.cancellation}
            </button>
          </div>
        </div>
      </div>

      {/* Policy Modal */}
      {modalPolicy && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-[#0e1622] border border-[#c5a059] rounded-2xl p-6 text-gray-200 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-gray-800 mb-4">
              <h3 className="font-heading text-lg font-bold text-[#d4af37]">
                {modalPolicy.title}
              </h3>
              <button
                type="button"
                onClick={() => setModalPolicy(null)}
                className="p-1 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
              {modalPolicy.content}
            </p>
            <div className="text-right">
              <button
                type="button"
                onClick={() => setModalPolicy(null)}
                className="px-4 py-2 rounded-lg bg-[#8c1d24] text-white text-xs font-bold"
              >
                {lang === 'es' ? 'Cerrar' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
