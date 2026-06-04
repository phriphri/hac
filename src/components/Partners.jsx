'use client';

import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

const partners = [
  {
    name: 'African Canadian Business Chamber',
    shortName: 'ACBC',
    logo: '/images/acbc.png',
    url: 'https://acbcbusiness.com/',
  },
  {
    name: 'OGEFREM',
    shortName: 'OGEFREM',
    logo: '/images/ogefrem.png',
    url: 'https://www.ogefrem.net/',
  },
  {
    name: 'Sharaf Shipping Agency',
    shortName: 'Sharaf',
    logo: '/images/sharaf.png',
    url: 'https://www.sharafshipping.com/',
  },
  {
    name: 'i.LeTransporteur',
    shortName: 'i.LeTransporteur',
    logo: '/images/iletransporteur.png',
    url: '#',
  },
];

export default function Partners() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-brand-off-white">
      <div className="container-hac">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-overline mb-4">Partenariats</p>
            <h2 className="text-heading-2 font-bold text-brand-teal mb-6 text-balance">
              Nos Partenaires
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {partners.map((partner, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <Link
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-center"
              >
                <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-6 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={192}
                    height={192}
                    className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<span class="text-brand-navy/40 text-xs text-center px-2">${partner.shortName}</span>`;
                    }}
                  />
                </div>
                <h3 className="text-heading-3 font-bold text-brand-teal mb-4 group-hover:text-brand-teal-dark transition-colors duration-300">
                  {partner.shortName}
                </h3>
                <p className="text-xs md:text-sm text-brand-navy/60 group-hover:text-brand-teal/80 transition-colors duration-300">
                  {partner.name}
                </p>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
