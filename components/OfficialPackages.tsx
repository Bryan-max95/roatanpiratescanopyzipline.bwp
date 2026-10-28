'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Anchor,
  ArrowUpRight,
  Binoculars,
  Check,
  ChevronDown,
  Clock3,
  CreditCard,
  Map,
  MapPinned,
  PawPrint,
  Phone,
  ShipWheel,
  Star,
  Trees,
  WalletCards,
  Waves,
} from 'lucide-react';
import { Language, SiteConfig } from '@/lib/types';

type LocalizedText = { en: string; es: string };

type PackageSection = {
  title: LocalizedText;
  items: LocalizedText[];
};

type TourPackage = {
  icon: typeof Trees;
  price: number;
  image: string;
  imageAlt: LocalizedText;
  imageMode?: 'cover' | 'contain';
  fixedPrice?: boolean;
  name: LocalizedText;
  summary: LocalizedText;
  features: LocalizedText[];
  sections: PackageSection[];
  duration: LocalizedText;
  bring: LocalizedText;
  payment: LocalizedText;
};

const text = (en: string, es: string): LocalizedText => ({ en, es });

const packages: TourPackage[] = [
  {
    icon: Trees,
    price: 65,
    image: '/brand/pirates-logo.png',
    imageAlt: text('Official Pirates of the Caribbean Zipline emblem', 'Emblema oficial de Pirates of the Caribbean Zipline'),
    imageMode: 'contain',
    name: text('Pirates Zipline Tour', 'Tour de Tirolesa Pirates'),
    summary: text(
      "One of Roatan's signature adventures: high-speed adrenaline, panoramic jungle views and professional guides who handle the technical details for you.",
      'Una de las aventuras emblemáticas de Roatán: adrenalina a gran velocidad, vistas panorámicas de la selva y guías profesionales que se encargan de los detalles técnicos.'
    ),
    features: [
      text('Round-trip transportation', 'Transporte ida y vuelta'),
      text('Guided zipline tour', 'Tour guiado de tirolesa'),
      text('Gravity-assisted auto-braking', 'Frenado automático asistido por gravedad'),
    ],
    sections: [
      {
        title: text('Tour requirements', 'Requisitos del tour'),
        items: [
          text('Maximum weight: 370 lbs.', 'Peso máximo: 370 lb.'),
          text('Harnesses fit up to a 66-inch waist and 44-inch thighs.', 'Arneses para cintura de hasta 66 pulgadas y muslos de hasta 44 pulgadas.'),
          text('Children ages 6 and under must ride tandem with a parent or guide.', 'Los niños de 6 años o menos deben ir en tándem con un padre o guía.'),
          text('Suitable for first-time zipliners, families and a wide range of fitness levels.', 'Ideal para principiantes, familias y una amplia variedad de condiciones físicas.'),
        ],
      },
    ],
    duration: text('Approximately 1½ hours.', 'Aproximadamente 1½ horas.'),
    bring: text('Sportswear, secure comfortable shoes, camera, bug spray and sunscreen. Lockers are available on-site.', 'Ropa deportiva, zapatos cómodos y seguros, cámara, repelente y protector solar. Hay casilleros disponibles en el lugar.'),
    payment: text('Cash and PayPal are accepted. PayPal: paypal@roatanpiratescanopy.com.', 'Se aceptan efectivo y PayPal. PayPal: paypal@roatanpiratescanopy.com.'),
  },
  {
    icon: PawPrint,
    price: 35,
    image: '/image/WhatsApp Image 2026-09-21 at 8.25.05 PM.jpeg',
    imageAlt: text('Sloth encounter at a Roatan animal park', 'Encuentro con un perezoso en un parque animal de Roatán'),
    name: text('Pirates Animal Park Adventure', 'Aventura Pirates en Parque Animal'),
    summary: text(
      'Meet sloths, monkeys and exotic birds while choosing one or several nearby animal parks for your personalized day.',
      'Conoce perezosos, monos y aves exóticas, eligiendo uno o varios parques cercanos para personalizar tu día.'
    ),
    features: [
      text('Choose your favorite animal park', 'Elige tu parque animal favorito'),
      text('Round-trip transportation', 'Transporte ida y vuelta'),
      text('Add the zipline tour for $65 per person', 'Agrega la tirolesa por $65 por persona'),
    ],
    sections: [
      {
        title: text('Available parks', 'Parques disponibles'),
        items: [
          text("Daniel Johnson's Monkey & Sloth Hangout", 'Daniel Johnson’s Monkey & Sloth Hangout'),
          text("AJ's Monkeys & Sloths", 'AJ’s Monkeys & Sloths'),
          text('La Hacienda del Cielo Animal Park', 'La Hacienda del Cielo Animal Park'),
          text("Arch's Iguana & Marine Park", 'Arch’s Iguana & Marine Park'),
        ],
      },
      {
        title: text('Build your visit', 'Personaliza tu visita'),
        items: [
          text('The listed parks are within approximately five minutes of one another.', 'Los parques indicados están aproximadamente a cinco minutos entre sí.'),
          text('Each additional park is $15 per person.', 'Cada parque adicional cuesta $15 por persona.'),
        ],
      },
    ],
    duration: text('Approximately 1 hour per park.', 'Aproximadamente 1 hora por parque.'),
    bring: text('Sportswear, comfortable walking shoes, hat, sunscreen, bug spray and camera.', 'Ropa deportiva, zapatos cómodos para caminar, sombrero, protector solar, repelente y cámara.'),
    payment: text('Cash and PayPal are accepted. PayPal: paypal@roatanpiratescanopy.com.', 'Se aceptan efectivo y PayPal. PayPal: paypal@roatanpiratescanopy.com.'),
  },
  {
    icon: Map,
    price: 40,
    image: '/image/WhatsApp Image 2026-09-21 at 8.25.04 PM (2).jpeg',
    imageAlt: text('Guest enjoying a wildlife stop during a private Roatan island tour', 'Visitante disfrutando una parada de vida silvestre durante un tour privado por Roatán'),
    name: text('Pirates Private Island Tour', 'Tour Privado Pirates por la Isla'),
    summary: text(
      'Explore Roatan with a personal local guide, an air-conditioned vehicle and an itinerary built around your group instead of a crowded tour bus.',
      'Explora Roatán con un guía local privado, vehículo con aire acondicionado y un itinerario diseñado para tu grupo, lejos de los autobuses llenos.'
    ),
    features: [
      text('Private bilingual guide', 'Guía bilingüe privado'),
      text('Custom itinerary and sightseeing', 'Itinerario personalizado y recorridos panorámicos'),
      text('Culture, beach break and souvenir shopping', 'Cultura, playa y compras de recuerdos'),
    ],
    sections: [
      {
        title: text('Optional activities', 'Actividades opcionales'),
        items: [
          text('Pirates Zipline Tour — $65 per person', 'Tour de Tirolesa Pirates — $65 por persona'),
          text('Clear Boat Adventure — $45 per person', 'Aventura en Bote Transparente — $45 por persona'),
          text('Glass Bottom Boat — $45 per person', 'Bote con Fondo de Cristal — $45 por persona'),
          text('Reef Snorkel Adventure — $45 per person', 'Aventura de Snorkel — $45 por persona'),
          text('Each listed animal park — $15 per person', 'Cada parque animal indicado — $15 por persona'),
        ],
      },
      {
        title: text('A day built around you', 'Un día diseñado para ti'),
        items: [
          text('Control the itinerary, pace and destinations.', 'Controla el itinerario, el ritmo y los destinos.'),
          text('Your guide can recommend local cuisine and trusted souvenir shops. Food and drinks are not included.', 'Tu guía puede recomendar cocina local y tiendas confiables. Alimentos y bebidas no están incluidos.'),
        ],
      },
    ],
    duration: text("Approximately 2–4 hours. Cruise guests must return at least 1 hour before the ship's scheduled departure.", 'Aproximadamente 2–4 horas. Los pasajeros de crucero deben regresar al menos 1 hora antes de la salida programada del barco.'),
    bring: text('Sportswear, comfortable shoes, camera and bug spray.', 'Ropa deportiva, zapatos cómodos, cámara y repelente.'),
    payment: text('Cash and PayPal are accepted. PayPal: paypal@roatanpiratescanopy.com.', 'Se aceptan efectivo y PayPal. PayPal: paypal@roatanpiratescanopy.com.'),
  },
  {
    icon: Waves,
    price: 65,
    image: '/image/homeweb.jpeg',
    imageAlt: text('Guests aboard the clear boat adventure in Roatan', 'Visitantes a bordo de la aventura en bote transparente en Roatán'),
    name: text('Clear Boat Adventure', 'Aventura en Bote Transparente'),
    summary: text(
      "Glide over French Cay's pristine reef and see marine life through the transparent hull without entering the water. Optional snorkeling is available.",
      'Navega sobre el arrecife de French Cay y observa la vida marina a través del casco transparente sin entrar al agua. Hay snorkel opcional.'
    ),
    features: [
      text('Round-trip transportation and guided boat ride', 'Transporte ida y vuelta y paseo guiado'),
      text('Underwater sightseeing', 'Observación submarina'),
      text('Optional snorkeling with gear included', 'Snorkel opcional con equipo incluido'),
    ],
    sections: [
      {
        title: text('Important requirements', 'Requisitos importantes'),
        items: [
          text('Minimum age: 4 for the clear boat and 8 for snorkeling.', 'Edad mínima: 4 años para el bote transparente y 8 para snorkel.'),
          text('Maximum weight: 270 lbs per person.', 'Peso máximo: 270 lb por persona.'),
          text('Not wheelchair or stroller accessible.', 'No es accesible para silla de ruedas ni cochecito.'),
          text('Life jackets are included and required on the boat and while snorkeling.', 'Los chalecos salvavidas están incluidos y son obligatorios en el bote y durante el snorkel.'),
          text('Some medical conditions and pregnancy prevent participation.', 'Algunas condiciones médicas y el embarazo impiden participar.'),
          text('Marine sightings are not guaranteed. Weather may shorten or cancel the activity for safety.', 'Los avistamientos no están garantizados. El clima puede acortar o cancelar la actividad por seguridad.'),
        ],
      },
      {
        title: text('Optional add-on', 'Adicional opcional'),
        items: [text('Add the Pirates Zipline Tour for $65 per person.', 'Agrega el Tour de Tirolesa Pirates por $65 por persona.')],
      },
    ],
    duration: text('Approximately 1½ hours.', 'Aproximadamente 1½ horas.'),
    bring: text('Sportswear, sunscreen, camera and easily removable shoes. The transparent hull is entered barefoot or with socks. For snorkeling, also bring towels and swimwear. Lockers are available.', 'Ropa deportiva, protector solar, cámara y zapatos fáciles de quitar. Se ingresa al casco transparente descalzo o con calcetines. Para snorkel, lleva también toallas y traje de baño. Hay casilleros.'),
    payment: text('Cash and PayPal are accepted. PayPal: paypal@roatanpiratescanopy.com.', 'Se aceptan efectivo y PayPal. PayPal: paypal@roatanpiratescanopy.com.'),
  },
  {
    icon: ShipWheel,
    price: 75,
    image: '/image/WhatsApp Image 2026-09-21 at 8.25.03 PM (2).jpeg',
    imageAlt: text('Boat experience above the Caribbean reef', 'Experiencia en bote sobre el arrecife del Caribe'),
    name: text('Glass Bottom Boat', 'Bote con Fondo de Cristal'),
    summary: text(
      "See the world's second-largest barrier reef, colorful fish, coral and marine life from the comfort of a glass-bottom boat.",
      'Observa el segundo arrecife más grande del planeta, peces, coral y vida marina desde la comodidad de un bote con fondo de cristal.'
    ),
    features: [
      text('Comfortable for all ages and non-swimmers', 'Cómodo para todas las edades y quienes no nadan'),
      text('Round-trip transportation and bilingual guide', 'Transporte ida y vuelta y guía bilingüe'),
      text('Optional beach break, sightseeing and shopping', 'Playa opcional, recorrido y compras'),
    ],
    sections: [
      {
        title: text('Optional add-on', 'Adicional opcional'),
        items: [text('Add the Pirates Zipline Tour for $65 per person.', 'Agrega el Tour de Tirolesa Pirates por $65 por persona.')],
      },
    ],
    duration: text('Approximately 3 hours total; the glass-bottom boat tour is about 45 minutes.', 'Aproximadamente 3 horas en total; el recorrido en bote dura unos 45 minutos.'),
    bring: text('Sportswear, non-skid shoes and camera.', 'Ropa deportiva, zapatos antideslizantes y cámara.'),
    payment: text('Cash and PayPal are accepted. PayPal: paypal@roatanpiratescanopy.com.', 'Se aceptan efectivo y PayPal. PayPal: paypal@roatanpiratescanopy.com.'),
  },
  {
    icon: Anchor,
    price: 45,
    image: '/image/WhatsApp Image 2026-09-21 at 8.25.04 PM.jpeg',
    imageAlt: text('Caribbean water and reef near Roatan', 'Agua del Caribe y arrecife cerca de Roatán'),
    name: text('Pirates Private Island Beach Break', 'Día de Playa Pirates en Isla Privada'),
    summary: text(
      'Escape to a secure private island with white sand, crystal-clear water, beach chairs, restrooms and an on-site restaurant.',
      'Escápate a una isla privada y segura con arena blanca, agua cristalina, sillas de playa, baños y restaurante.'
    ),
    features: [
      text('Round-trip transportation', 'Transporte ida y vuelta'),
      text('Beach chairs and restrooms included', 'Sillas de playa y baños incluidos'),
      text('Restaurant on-site; food and drinks not included', 'Restaurante en el lugar; alimentos y bebidas no incluidos'),
    ],
    sections: [
      {
        title: text('Your beach day', 'Tu día de playa'),
        items: [
          text('Bring your own snorkel gear to explore directly from the beach.', 'Puedes llevar tu propio equipo de snorkel y explorar desde la playa.'),
          text('Add the Pirates Zipline Tour for $65 per person.', 'Agrega el Tour de Tirolesa Pirates por $65 por persona.'),
        ],
      },
    ],
    duration: text("Approximately 1–4 hours. Cruise guests must return at least 1 hour before the ship's scheduled departure.", 'Aproximadamente 1–4 horas. Los pasajeros de crucero deben regresar al menos 1 hora antes de la salida programada del barco.'),
    bring: text('Swimwear, towels, sunscreen, bug spray and camera.', 'Traje de baño, toallas, protector solar, repelente y cámara.'),
    payment: text('Cash and PayPal are accepted. PayPal: paypal@roatanpiratescanopy.com.', 'Se aceptan efectivo y PayPal. PayPal: paypal@roatanpiratescanopy.com.'),
  },
  {
    icon: Binoculars,
    price: 50,
    image: '/image/WhatsApp Image 2026-09-21 at 8.25.02 PM (1).jpeg',
    imageAlt: text('Snorkeler exploring the reef in Roatan', 'Persona explorando el arrecife de Roatán con snorkel'),
    name: text('Reef Snorkel Adventure', 'Aventura de Snorkel en el Arrecife'),
    summary: text(
      "Take a guided boat trip to French Cay's pristine reef and explore its marine life with all snorkeling equipment included.",
      'Viaja en bote al arrecife de French Cay y explora su vida marina con guía y todo el equipo de snorkel incluido.'
    ),
    features: [
      text('Round-trip transportation and boat ride', 'Transporte ida y vuelta y paseo en bote'),
      text('Guided snorkeling with bilingual guide', 'Snorkel guiado con guía bilingüe'),
      text('All snorkel gear included', 'Todo el equipo de snorkel incluido'),
    ],
    sections: [
      {
        title: text('Important requirements', 'Requisitos importantes'),
        items: [
          text('Minimum snorkeling age: 8 years.', 'Edad mínima para snorkel: 8 años.'),
          text('Life jackets are included and required on the boat and while snorkeling.', 'Los chalecos están incluidos y son obligatorios en el bote y durante el snorkel.'),
          text('Some medical conditions and pregnancy prevent participation.', 'Algunas condiciones médicas y el embarazo impiden participar.'),
          text('Tours are weather-dependent and may be shortened or cancelled for safety.', 'Los tours dependen del clima y pueden acortarse o cancelarse por seguridad.'),
          text('Add the Pirates Zipline Tour for $65 per person.', 'Agrega el Tour de Tirolesa Pirates por $65 por persona.'),
        ],
      },
    ],
    duration: text('Approximately 2 hours.', 'Aproximadamente 2 horas.'),
    bring: text('Sunscreen, camera, easily removable shoes, towels and swimwear.', 'Protector solar, cámara, zapatos fáciles de quitar, toallas y traje de baño.'),
    payment: text('Cash and PayPal are accepted. PayPal: paypal@roatanpiratescanopy.com.', 'Se aceptan efectivo y PayPal. PayPal: paypal@roatanpiratescanopy.com.'),
  },
  {
    icon: ShipWheel,
    price: 130,
    fixedPrice: true,
    image: '/image/WhatsApp Image 2026-09-21 at 8.25.05 PM.jpeg',
    imageAlt: text('Sloth at the sanctuary included in the Captain’s Special Package', 'Perezoso en el santuario incluido en el Paquete Especial del Capitán'),
    name: text("Captain's Special Package", 'Paquete Especial del Capitán'),
    summary: text(
      'Enjoy a day full of extreme adventure: soar through the jungle on a zipline, visit the monkey and sloth sanctuary, then unwind on one of our beautiful private beaches.',
      'Disfruta un día lleno de aventura extrema: recorre la selva en tirolesa, visita el santuario de monos y perezosos y relájate en una de nuestras hermosas playas privadas.'
    ),
    features: [
      text('Zipline tour', 'Tour de tirolesa'),
      text('Monkey & sloth sanctuary visit', 'Visita al santuario de monos y perezosos'),
      text('Private beach access with entry fee and beach chairs included', 'Acceso a playa privada con entrada y sillas de playa incluidas'),
    ],
    sections: [
      {
        title: text('Your adventure, step by step', 'Tu aventura, paso a paso'),
        items: [
          text('Start with the zipline tour for an adrenaline-filled jungle adventure.', 'Comienza con el tour de tirolesa para vivir una aventura llena de adrenalina en la selva.'),
          text('Continue with a visit to the monkey and sloth sanctuary.', 'Continúa con una visita al santuario de monos y perezosos.'),
          text('Finish with time to relax on a private beach, with admission and a beach chair included.', 'Termina con tiempo para relajarte en una playa privada, con entrada y silla de playa incluidas.'),
        ],
      },
      {
        title: text('Package total', 'Total del paquete'),
        items: [
          text('$130 USD per person for all three activities, including the private beach entry fee and beach chairs.', '$130 USD por persona por las tres actividades, incluyendo la entrada a la playa privada y las sillas de playa.'),
        ],
      },
    ],
    duration: text('Confirm the total duration and activity schedule when booking.', 'Confirma la duración total y el horario de las actividades al reservar.'),
    bring: text('Comfortable clothing, secure shoes for ziplining, swimwear, a towel, sunscreen, bug spray and a camera.', 'Ropa cómoda, zapatos seguros para la tirolesa, traje de baño, toalla, protector solar, repelente y cámara.'),
    payment: text('Credit card and PayPal. PayPal: paypal@roatanpiratescanopy.com.', 'Tarjeta de crédito y PayPal. PayPal: paypal@roatanpiratescanopy.com.'),
  },
];

const CONTACT_PHONES = [
  { display: '+504 3387-7652', href: '50433877652', en: 'Coming on a cruise ship', es: 'Visitantes de crucero' },
  { display: '+504 9497-9106', href: '50494979106', en: 'Staying at a hotel or Airbnb', es: 'Huéspedes de hotel o Airbnb' },
];

const PAYPAL_EMAIL = 'paypal@roatanpiratescanopy.com';

const pick = (value: LocalizedText, lang: Language) => value[lang];

export function OfficialPackages({ lang, siteConfig }: { lang: Language; siteConfig: SiteConfig }) {
  return (
    <section className="pirate-packages relative overflow-hidden py-24">
      <div className="pirate-chart-glow" />
      <div className="pirate-compass-mark" aria-hidden="true"><span /><span /><span /></div>
      <div className="pirate-chart relative mx-auto max-w-7xl px-4 py-10 sm:px-8 sm:py-14 lg:px-12">
        <div className="mb-12 grid gap-7 lg:grid-cols-[1fr_.7fr] lg:items-end">
          <div>
            <p className="pirate-chart-eyebrow"><ShipWheel className="h-4 w-4" />{lang === 'en' ? "The Captain's Route Collection" : 'La Colección de Rutas del Capitán'}</p>
            <h2 className="pirate-chart-title mt-4 max-w-3xl font-heading text-4xl font-bold uppercase leading-tight sm:text-5xl">{lang === 'en' ? 'One island. Eight unforgettable ways to explore it.' : 'Una isla. Ocho formas inolvidables de descubrirla.'}</h2>
          </div>
          <div className="pirate-chart-side lg:justify-self-end">
            <div className="home-adventure-seal" aria-label={lang === 'es' ? 'Sello oficial de canopy en Roatán' : 'Official Roatan canopy seal'}>
              <span><Image src="/brand/pirates-logo.png" alt="Pirates of the Caribbean Zipline" fill sizes="100px" className="object-contain" /></span>
              <strong>{lang === 'es' ? 'Canopy Oficial de Roatán' : 'Official Roatan Canopy'}</strong>
              <small>{lang === 'es' ? 'Reserva Directa' : 'Direct Booking'}</small>
            </div>
            <p className="pirate-chart-intro max-w-xl text-base leading-7">{lang === 'en' ? 'Chart your course across Roatan. Every route includes transportation and selected voyages can be paired with our signature extreme zipline.' : 'Traza tu rumbo por Roatán. Cada ruta incluye transporte y las travesías seleccionadas pueden combinarse con nuestra tirolesa extrema.'}</p>
          </div>
        </div>

        <div className="pirate-route-line" aria-hidden="true" />

        <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((item, index) => {
            const Icon = item.icon;
            return (
              <article key={item.name.en} className={`package-card pirate-package-card group ${index === 0 ? 'lg:col-span-2 lg:grid lg:grid-cols-[.75fr_1fr] lg:items-start' : ''}`}>
                <div className="p-7">
                  <div className="mb-7 flex items-start justify-between gap-5">
                    <span className="pirate-package-icon"><Icon className="h-6 w-6" /></span>
                    <div className="pirate-package-price text-right">
                      <span className="block text-[10px] font-bold uppercase tracking-[.2em]">{item.fixedPrice ? (lang === 'en' ? 'Package total' : 'Total del paquete') : (lang === 'en' ? 'Adventure from' : 'Aventura desde')}</span>
                      <strong className="font-heading text-3xl">${item.price}</strong>
                      <span className="ml-1 text-xs">/ {lang === 'en' ? 'person' : 'persona'}</span>
                    </div>
                  </div>
                  <h3 className="pirate-package-title font-heading text-2xl font-bold transition">{pick(item.name, lang)}</h3>
                  <p className="mt-4 text-sm leading-6 text-[#62503d]">{pick(item.summary, lang)}</p>
                </div>

                <div className="pirate-package-details border-t p-7 lg:border-l lg:border-t-0">
                  <ul className="space-y-3">
                    {item.features.map(feature => <li key={feature.en} className="flex gap-3 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0" />{pick(feature, lang)}</li>)}
                  </ul>

                  <details className="pirate-package-more mt-6">
                    <summary>
                      <span>{lang === 'en' ? 'Full tour details' : 'Detalles completos del tour'}</span>
                      <ChevronDown className="h-4 w-4" />
                    </summary>
                    <div className="pirate-package-expanded">
                      {item.sections.map(section => (
                        <div key={section.title.en}>
                          <h4>{pick(section.title, lang)}</h4>
                          <ul>
                            {section.items.map(entry => <li key={entry.en}>{pick(entry, lang)}</li>)}
                          </ul>
                        </div>
                      ))}
                      <div>
                        <h4>{lang === 'en' ? 'Duration' : 'Duración'}</h4>
                        <p>{pick(item.duration, lang)}</p>
                      </div>
                      <div>
                        <h4>{lang === 'en' ? 'What to bring' : 'Qué llevar'}</h4>
                        <p>{pick(item.bring, lang)}</p>
                      </div>
                      <div>
                        <h4>{lang === 'en' ? 'Accepted payment' : 'Pago aceptado'}</h4>
                        <p>{pick(item.payment, lang)}</p>
                      </div>
                    </div>
                  </details>

                  <Link href="/reservar" className="pirate-package-link mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.15em]">
                    {lang === 'en' ? 'Reserve this adventure' : 'Reservar esta aventura'}<ArrowUpRight className="h-4 w-4" />
                  </Link>

                  <div className={`pirate-package-media ${item.imageMode === 'contain' ? 'is-emblem' : ''}`}>
                    <Image
                      src={item.image}
                      alt={pick(item.imageAlt, lang)}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 28vw"
                      className={item.imageMode === 'contain' ? 'object-contain' : 'object-cover'}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="pirate-visitor-info mt-10">
          <div className="pirate-visitor-heading">
            <p>{lang === 'en' ? 'Official visitor information' : 'Información oficial para visitantes'}</p>
            <h3>{lang === 'en' ? 'Plan your Roatan adventure with confidence.' : 'Planifica tu aventura en Roatán con confianza.'}</h3>
            <span>Roatan Pirates of the Caribbean Extreme Canopy Zipline</span>
          </div>

          <div className="pirate-info-grid">
            <article>
              <Phone />
              <h4>{lang === 'en' ? 'Direct contact' : 'Contacto directo'}</h4>
              <div className="pirate-phone-list">
                 <a href="mailto:piratescanopyziplineroatan@gmail.com" className="break-words">
                  <span>{lang === 'en' ? 'Email' : 'Correo electrónico'}</span>
                  piratescanopyziplineroatan@gmail.com
                </a>
                {CONTACT_PHONES.map(phone => (
                  <a key={phone.href} href={`https://wa.me/${phone.href}`} target="_blank" rel="noreferrer">
                    <span>{phone[lang]}</span>
                    {phone.display}
                  </a>
                ))}
              </div>
            </article>

            <article>
              <Clock3 />
              <h4>{lang === 'en' ? 'Opening hours' : 'Horario'}</h4>
              <ul>
                <li><strong>{lang === 'en' ? 'Sunday:' : 'Domingo:'}</strong> {lang === 'en' ? 'Reservations only' : 'Solo reservaciones'}</li>
                <li><strong>{lang === 'en' ? 'Monday–Friday:' : 'Lunes–viernes:'}</strong> 8:00 AM–4:00 PM</li>
                <li><strong>{lang === 'en' ? 'Saturday:' : 'Sábado:'}</strong> {lang === 'en' ? 'Closed' : 'Cerrado'}</li>
              </ul>
            </article>

            <article>
              <WalletCards />
              <h4>{lang === 'en' ? 'Payment methods' : 'Métodos de pago'}</h4>
              <ul>
                <li>{lang === 'en' ? 'Credit card' : 'Tarjeta de crédito'}</li>
                <li>PayPal: {PAYPAL_EMAIL}</li>
              </ul>
            </article>

          </div>

          <div className="pirate-guarantee-grid">
            <div>
              <CreditCard />
              <h4>{lang === 'en' ? 'Our refund policy' : 'Nuestra política de reembolso'}</h4>
              <ul>
                <li>{lang === 'en' ? 'If your ship does not make port at either cruise port on the island, you will receive a 100% refund.' : 'Si tu barco no llega a ninguno de los puertos de cruceros de la isla, recibirás un reembolso del 100%.'}</li>
                <li>{lang === 'en' ? 'Thunderstorms are rare and, 90% of the time, last only 15–20 minutes before the sunshine returns.' : 'Las tormentas eléctricas son poco frecuentes y, el 90% de las veces, duran solamente entre 15 y 20 minutos antes de que regrese el sol.'}</li>
                <li>{lang === 'en' ? `A $20 per-person deposit is required to reserve transportation. Send it through PayPal to ${PAYPAL_EMAIL}.` : `Se requiere un depósito de $20 por persona para reservar el transporte. Envíalo por PayPal a ${PAYPAL_EMAIL}.`}</li>
                <li>{lang === 'en' ? 'The remaining balance is due upon arrival.' : 'El saldo restante se paga al llegar.'}</li>
                <li>{lang === 'en' ? 'Cancellations must be made at least 24 hours before pickup.' : 'Las cancelaciones deben realizarse al menos 24 horas antes de la recogida.'}</li>
                <li>{lang === 'en' ? 'Pickup instructions will be sent after the reservation deposit is confirmed.' : 'Las instrucciones de recogida se enviarán cuando se confirme el depósito de la reservación.'}</li>
              </ul>
            </div>
          </div>

          <div className="pirate-info-actions">
            <Link href="/reservar"><CreditCard />{lang === 'en' ? 'Book & request payment link' : 'Reservar y solicitar enlace de pago'}</Link>
            <a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer"><MapPinned />{lang === 'en' ? 'View canopy location' : 'Ver ubicación del canopy'}</a>
            <a href={siteConfig.tripadvisorUrl} target="_blank" rel="noopener noreferrer"><Star />{lang === 'en' ? 'Read traveler reviews' : 'Ver opiniones de viajeros'}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
