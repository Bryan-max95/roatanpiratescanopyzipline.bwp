'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MessageCircle, X } from 'lucide-react';
import { Language, SiteConfig } from '@/lib/types';
import { translations } from '@/lib/translations';

const FACEBOOK_URL = 'https://www.facebook.com/share/19Qi2zh2Pv/?mibextid=wwXIfr';
const INSTAGRAM_URL = 'https://www.instagram.com/pirateszipline_roatan?stkn=a29xMTV2YWlxYng0&utm_source=qr';
const CONTACT_PHONES = [
  { display: '+504 3387-7652', href: '+50433877652' },
  { display: '+504 9990-4937', href: '+50499904937' },
  { display: '+504 9992-2033', href: '+50499922033' },
];

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
        ? 'Para reservas individuales o familiares, las cancelaciones recibidas con 24 horas de antelación son elegibles para reprogramación o reembolso completo. Para pasajeros de cruceros: si su barco no atraca en Roatán debido a mal tiempo o cambios de itinerario del capitán, su reservación se cancela sin penalidad ni costo alguno.'
        : 'For individual and family bookings, cancellations made at least 24 hours prior to tour time are eligible for full re-scheduling or 100% refund. For cruise ship passengers: if your cruise ship misses Roatán or itinerary cancels port call due to weather or maritime conditions, your reservation is cancelled with zero penalty.'
    });
  };

  return (
    <footer className="bg-[#06090e] border-t-2 border-[#c5a059]/40 text-gray-300 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle Nautical Chart Grid Lines */}
      <div className="absolute inset-0 pointer-events-none bg-nautical-grid opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand & Slogan */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
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

            <div className="pt-2 flex items-center gap-3" aria-label={lang === 'es' ? 'Redes sociales oficiales' : 'Official social media'}>
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

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading text-base font-bold text-white uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-[#d4af37] transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-[#d4af37] transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & Cruise Notice */}
          <div>
            <h4 className="font-heading text-base font-bold text-white uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
              {t.footer.schedule}
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3">
              {siteConfig.openingHours[lang]}
            </p>
            <div className="p-3 bg-[#111923] border border-gray-800 rounded-xl">
              <span className="text-xs font-bold text-[#ffd778] block mb-1">
                {lang === 'es' ? 'Atención a Cruceros' : 'Cruise Ship Port Guests'}
              </span>
              <p className="text-[11px] text-gray-400">
                {siteConfig.cruisePortNotes[lang]}
              </p>
            </div>
          </div>

          {/* Column 4: Direct Contact & Admin Access */}
          <div>
            <h4 className="font-heading text-base font-bold text-white uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
              {t.footer.contact}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 w-4 h-4 text-[#d4af37] shrink-0" />
                <div className="flex flex-col gap-1">
                  {CONTACT_PHONES.map(phone => (
                    <a key={phone.href} href={`tel:${phone.href}`} className="hover:text-[#d4af37]">
                      {phone.display}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400"
                >
                  WhatsApp: {siteConfig.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[#d4af37] break-all">
                  {siteConfig.email}
                </a>
              </li>
            </ul>

          </div>
        </div>

        {/* Bottom Legal & Rights */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="text-center sm:text-left">
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

          <div className="flex flex-wrap items-center gap-4">
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
