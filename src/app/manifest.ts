import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Frontend разработчик | Казань | lldan',
    short_name: 'lldan',
    description: 'Frontend delevoper in Kazan',
    start_url: '/',
    display: 'standalone',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
