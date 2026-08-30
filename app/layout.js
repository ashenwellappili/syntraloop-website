import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import { ThemeProvider } from '@/components/ThemeProvider';
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
