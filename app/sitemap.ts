import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ['/', 1, 'weekly'], ['/es', .9, 'weekly'], ['/experiencia', .9, 'monthly'], ['/precios', .9, 'weekly'],
    ['/galeria', .7, 'weekly'], ['/ubicacion', .8, 'monthly'], ['/contacto', .7, 'monthly'], ['/reservar', .9, 'weekly']
  ] as const;
  return routes.map(([path, priority, changeFrequency]) => ({ url: `${siteUrl}${path}`, lastModified: new Date(), changeFrequency, priority }));
}
