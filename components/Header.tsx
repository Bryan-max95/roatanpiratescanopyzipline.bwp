
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Language, SiteConfig } from '@/lib/types';
import { translations } from '@/lib/translations';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  siteConfig: SiteConfig;
  onBookClick: () => void;
}

export function Header({
  lang,
  onLanguageChange,
  siteConfig,
  onBookClick
}: HeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '/', visible: true },
    { label: t.nav.experience, href: '/experiencia', visible: false },
    { label: t.nav.prices, href: '/precios', visible: false },
    { label: t.nav.location, href: '/ubicacion', visible: false },
    { label: t.nav.gallery, href: '/galeria', visible: true },
    { label: t.nav.contact, href: '/contacto', visible: false }
  ];

  const visibleNavLinks = navLinks.filter((link) => link.visible);

  const isLinkActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 border-b py-3.5 transition-colors duration-300 ${
        isScrolled
          ? 'bg-black/65 backdrop-blur-md shadow-xl border-[#c5a059]/25'
          : 'bg-black border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link
            href="/"
            id="brand-logo"
            aria-label="Roatan Pirates of The Caribbean Xtreme Canopy Zipline — Home"
            className="group flex min-w-0 items-center gap-2.5 text-left sm:gap-3"
          >
            <div className="relative h-14 w-14 shrink-0 transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16">
              <Image src="/brand/pirates-logo.png" alt="Roatan Pirates of The Caribbean Xtreme Canopy Zipline official logo" fill sizes="64px" className="object-contain drop-shadow-[0_5px_10px_rgba(0,0,0,.65)]" priority />
            </div>
            <div className="min-w-0 max-w-[11.5rem] sm:max-w-[18rem] xl:max-w-[22rem]">
              <div className="font-heading text-[10px] font-bold uppercase leading-[1.18] tracking-[.08em] text-white sm:text-[12px] sm:tracking-[.1em] xl:text-[13px]">
                <span className="text-[#e2bd68]">Roatan</span>{' '}
                <span>Pirates of The Caribbean</span>
              </div>
              <div className="mt-1 border-t border-[#c5a059]/45 pt-1 text-[8px] font-bold uppercase leading-none tracking-[.18em] text-[#c5a059] sm:text-[9px] sm:tracking-[.22em]">
                Xtreme Canopy Zipline
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {visibleNavLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-all duration-200 tracking-wide py-1 border-b-2 ${
                    active
                      ? 'text-[#ffd778] font-bold border-[#d4af37]'
                      : 'text-gray-200 hover:text-[#d4af37] border-transparent hover:border-[#c5a059]/50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions: Language Switcher, Admin Button & CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle */}
            <div className="flex items-center rounded-full bg-[#141d27] border border-[#c5a059]/40 p-0.5 text-xs">
              <button
                type="button"
                id="lang-btn-es"
                onClick={() => onLanguageChange('es')}
                className={`px-2.5 py-1 rounded-full font-semibold transition-all ${
                  lang === 'es'
                    ? 'bg-[#c5a059] text-[#090e15] shadow-sm'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                ES
              </button>
              <button
                type="button"
                id="lang-btn-en"
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 rounded-full font-semibold transition-all ${
                  lang === 'en'
                    ? 'bg-[#c5a059] text-[#090e15] shadow-sm'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* Prominent "Reservar ahora" CTA */}
            <Link
              href="/reservar"
              id="header-book-btn"
              className="btn-wine-red px-6 py-2 rounded-full text-sm font-semibold tracking-wide inline-flex items-center justify-center"
            >
              {t.nav.bookNow}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Lang Button */}
            <button
              type="button"
              id="mobile-lang-toggle"
              onClick={() => onLanguageChange(lang === 'es' ? 'en' : 'es')}
              className="px-2 py-1 text-xs rounded bg-[#162230] border border-[#c5a059]/40 text-[#d4af37] font-bold"
            >
              {lang.toUpperCase()}
            </button>

            <button
              type="button"
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-200 hover:text-[#d4af37] rounded-md focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-black border-b border-[#c5a059]/40 px-6 py-6 shadow-2xl animate-in slide-in-from-top duration-200"
        >
          <nav className="flex flex-col space-y-4 text-center">
            {visibleNavLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium py-1 border-b border-gray-800/40 ${
                    active ? 'text-[#ffd778] font-bold' : 'text-gray-200 hover:text-[#d4af37]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="/reservar"
                id="mobile-drawer-book-btn"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-wine-red w-full py-3 rounded-full text-base font-bold text-center block"
              >
                {t.nav.bookNow}
              </Link>

            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
