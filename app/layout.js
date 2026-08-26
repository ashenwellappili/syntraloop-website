import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export const metadata = {
  title: 'SyntraLoop — From Ideas to Intelligent Solutions | Technology Studio',
  description: 'SyntraLoop is a technology studio transforming business ideas into modern websites, custom web applications, business systems, and AI integrations.',
  openGraph: {
    title: 'SyntraLoop — From Ideas to Intelligent Solutions',
    description: 'Transforming business ideas into modern websites, web applications, business systems, and AI integrations.',
    images: ['/syntralooplogo.jpeg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/jpeg" href="/syntralooplogo.jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
