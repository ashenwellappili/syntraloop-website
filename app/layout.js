import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import { ThemeProvider } from '@/components/ThemeProvider';
import '@/styles/globals.css';

export const metadata = {
  metadataBase: new URL('https://syntraloop.com'),
  title: 'SyntraLoop — From Ideas to Intelligent Solutions | Technology Studio',
  description: 'SyntraLoop is a technology studio transforming business ideas into modern websites, custom web applications, business systems, and AI integrations.',
  keywords: [
    'software development',
    'web applications',
    'AI integrations',
    'custom business systems',
    'ERP solutions',
    'Next.js development',
    'SyntraLoop'
  ],
  authors: [{ name: 'SyntraLoop Engineering Team', url: 'https://syntraloop.com' }],
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
  openGraph: {
    title: 'SyntraLoop — From Ideas to Intelligent Solutions',
    description: 'Transforming business ideas into modern websites, web applications, business systems, and AI integrations.',
    url: 'https://syntraloop.com',
    siteName: 'SyntraLoop',
    locale: 'en_US',
    type: 'website',
    images: ['/syntralooplogo.jpeg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SyntraLoop — From Ideas to Intelligent Solutions',
    description: 'Transforming business ideas into modern websites, custom web applications, and AI integrations.',
    images: ['/syntralooplogo.jpeg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/jpeg" href="/syntralooplogo.jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('syntraloop-theme');
                  var theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                  if (theme === 'dark') document.documentElement.classList.add('dark');
                  else document.documentElement.classList.remove('dark');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
