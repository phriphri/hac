import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const footerLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/secteurs', label: 'Secteurs' },
  { href: '/partenaires', label: 'Partenaires' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy-deep text-white">
      {/* Main footer */}
      <div className="container-hac py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="flex flex-col">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/images/logo.png" 
                alt="HAC Group" 
                width={160}
                height={48}
                className="h-12 w-auto" 
              />
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-8 max-w-sm">
              African Canadian Holding Group — Pont stratégique entre le Canada,
              la République Démocratique du Congo et l&apos;Afrique.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-teal mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-brand-teal transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-teal mb-6">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a
                  href="mailto:gloria.co@hacgcongo.com"
                  className="hover:text-brand-teal transition-colors duration-300"
                >
                  gloria.co@hacgcongo.com
                </a>
              </li>
              <li>104, Colonel Ebeya, Golf</li>
              <li>Gombe, Kinshasa - RD Congo</li>
            </ul>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm text-brand-teal hover:text-white transition-colors duration-300"
              >
                Prendre contact
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container-hac flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} HAC Group. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
