import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'ADmyBRAND AI Suite - AI-Powered Marketing Tool',
  description: 'Transform your marketing with AI-powered insights, automation, and optimization. The complete AI suite for modern marketers.',
  keywords: ['AI', 'marketing', 'automation', 'analytics', 'SaaS'],
  authors: [{ name: 'ADmyBRAND Team' }],
  creator: 'ADmyBRAND',
  publisher: 'ADmyBRAND',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://admybrand.com'),
  openGraph: {
    title: 'ADmyBRAND AI Suite - AI-Powered Marketing Tool',
    description: 'Transform your marketing with AI-powered insights, automation, and optimization.',
    url: 'https://admybrand.com',
    siteName: 'ADmyBRAND AI Suite',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ADmyBRAND AI Suite',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADmyBRAND AI Suite - AI-Powered Marketing Tool',
    description: 'Transform your marketing with AI-powered insights, automation, and optimization.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <div className="relative min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  );
} 