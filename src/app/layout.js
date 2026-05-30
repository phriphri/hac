import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'HAC Group — African Canadian Holding',
  description:
    'HAC Group développe des relations commerciales, technologiques et stratégiques entre le Canada, la RDC et l\'Afrique. Pont économique durable entre deux continents.',
  keywords: 'HAC Group, African Canadian Holding, commerce international, Canada Afrique, RDC, OGEFREM, FERI, logistique',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
