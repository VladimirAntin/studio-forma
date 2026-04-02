import {ReactNode} from 'react';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import type {Metadata} from 'next';
import ScrollProgress from '@/components/ScrollProgress';

const BASE_URL = 'https://studio-forma.hok.rs';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Studio Forma — Dizajn Enterijera Kikinda',
    template: '%s | Studio Forma',
  },
  description:
    'Studio Forma — dizajn enterijera u Kikindi. Konceptni dizajn, 3D vizualizacija, projektovanje i nadzor realizacije. Pretvaramo prostore u doživljaje.',
  keywords: [
    'dizajn enterijera Kikinda',
    'enterijer dizajner Kikinda',
    'uređenje stana Kikinda',
    '3D vizualizacija enterijera',
    'projektovanje enterijera Srbija',
    'interior design Kikinda',
    'enterijer arhitekta Vojvodina',
  ],
  authors: [{name: 'Studio Forma', url: BASE_URL}],
  creator: 'Studio Forma',
  publisher: 'Studio Forma',
  robots: {
    index: true,
    follow: true,
    googleBot: {index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1},
  },
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    url: BASE_URL,
    siteName: 'Studio Forma',
    title: 'Studio Forma — Dizajn Enterijera Kikinda',
    description: 'Konceptni dizajn, 3D vizualizacija i realizacija enterijera u Kikindi i okolini.',
    images: [{url: '/og-image.jpg', width: 1200, height: 630, alt: 'Studio Forma — Dizajn Enterijera Kikinda'}],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Forma — Dizajn Enterijera Kikinda',
    description: 'Konceptni dizajn, 3D vizualizacija i realizacija enterijera u Kikindi.',
    images: ['/og-image.jpg'],
  },
  alternates: {canonical: BASE_URL},
  icons: {icon: '/favicon.png', apple: '/favicon.png'},
};

export default function RootLayout({children}: Readonly<{children: ReactNode}>) {
  return (
    <html lang={'sr'} className={'scroll-smooth'} suppressHydrationWarning>
      <head>
        <script
          type={'application/ld+json'}
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'InteriorDesigner',
              name: 'Studio Forma',
              url: BASE_URL,
              description: 'Dizajn enterijera u Kikindi — konceptni dizajn, 3D vizualizacija i realizacija.',
              email: 'info@studio-forma.hok.rs',
              telephone: '+38123123456',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Kikinda',
                postalCode: '23300',
                addressCountry: 'RS',
              },
              areaServed: [
                {'@type': 'City', name: 'Kikinda'},
                {'@type': 'State', name: 'Vojvodina'},
              ],
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '17:00',
                },
              ],
              sameAs: ['https://www.instagram.com/studioforma.kikinda'],
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning className={'bg-[#0c0a07]'}>
        <ScrollProgress />
        <Navigation />
        {/* top padding for desktop top-navbar / bottom padding for mobile tab bar */}
        <div className={'flex min-h-screen flex-col pb-16 md:pb-0'}>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
