import type {MetadataRoute} from 'next';

export const dynamic = 'force-static';

const BASE_URL = 'https://studio-forma.hok.rs';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}
