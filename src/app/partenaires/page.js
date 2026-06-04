import Link from 'next/link';
import { Mail, Phone, Smartphone, Globe, ArrowUpRight, ChevronRight, Building2, Ship, FileText, Users } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionImage from '@/components/SectionImage';
import Partners from '@/components/Partners';

export const metadata = {
  title: 'Partenaires & Représentations — HAC Group',
  description:
    'OGEFREM, Sharaf Shipping Agency, ACBC : découvrez les partenaires stratégiques et représentations de HAC Group.',
};

export default function PartenairesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-20 md:pt-24 pb-10 md:pb-16">
        <div className="container-hac">
          <AnimatedSection>
            <p className="text-overline mb-4">Partenariats</p>
            <h1 className="text-heading-1 md:text-display font-bold text-brand-teal max-w-4xl text-balance mb-8">
              Partenaires & Représentations
            </h1>
            <p className="text-editorial mt-6 max-w-2xl">
              Des collaborations stratégiques pour assurer la réussite de nos opérations internationales.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Représentation OGEFREM & FERI */}
      <section className="section-spacing bg-brand-off-white">
        <div className="container-hac">
          <AnimatedSection>
            <p className="text-overline mb-4 font-semibold text-brand-teal">Représentation</p>
            <h2 className="text-heading-2 font-bold text-brand-teal mb-6 text-balance">
              Représentation OGEFREM / FERI
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-start">
            <AnimatedSection delay={0.1} className="order-2 lg:order-1">
              <div className="space-y-6">
                <p>
                  HAC Group intervient en tant que mandataire et sous‑agent de la Représentation OGEFREM RAN, aussi bien dans la zone Europe, au Moyen‑Orient que dans la région (Représentation d&apos;Anvers / Belgique).
                </p>
                <p >
                  Notre expertise nous permet d&apos;assurer une gestion professionnelle et fiable des opérations
                  portuaires et commerciales, garantissant conformité et traçabilité à chaque étape.
                </p>

                <div className="mt-6 space-y-3">
                  <h3 className="text-heading-3 font-bold text-brand-teal mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-brand-teal" />
                    Nos services
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Collecte des données FERI',
                      'Suivi des cargaisons',
                      'Traçabilité des opérations commerciales',
                      'Coordination logistique internationale',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-brand-navy/70">
                        <ChevronRight className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <SectionImage
                src="/images/feri.jpg"
                alt="Opérations logistiques — Représentation OGEFREM"
                aspectRatio="aspect-[4/3]"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="container-hac"><div className="separator" /></div>

      {/* Partenaire opérationnel — EAU & Moyen-Orient */}
      <section className="section-spacing">
        <div className="container-hac">
          <AnimatedSection>
            <p className="text-overline mb-4">Partenaire stratégique</p>
            <h2 className="text-heading-2 font-bold text-brand-teal mb-6 text-balance">
              Agents portuaires
            </h2>
            <h3 className="text-heading-3 font-bold text-brand-teal mb-4">
              Zone EAU & Moyen-Orient
            </h3>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="bg-white border border-brand-gray-line p-6 md:p-10 lg:p-12 relative overflow-hidden">
                {/* Decorative subtle background element */}
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                  <Ship className="w-64 h-64 text-brand-navy" strokeWidth={1} />
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center border border-brand-gray-line bg-brand-off-white">
                    <Building2 className="w-6 h-6 text-brand-teal" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-heading-3 font-bold text-brand-teal mb-4">
                      Sharaf Shipping Agency
                    </h3>
                    <p className="text-sm text-brand-teal font-medium">Émirats Arabes Unis & Moyen-Orient</p>
                  </div>
                </div>

                <p className="text-editorial mb-6 relative z-10">
                  Sharaf Shipping Agency est un acteur international reconnu dans les domaines du transport maritime,
                  de la logistique et des opérations portuaires au Moyen-Orient et dans plusieurs zones stratégiques internationales.
                </p>

                <div className="mb-6">
                  <h4 className="text-heading-3 font-bold text-brand-teal mb-4 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-brand-teal" />
                    Domaines d&apos;intervention
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Shipping',
                      'Cargo',
                      'Suivi logistique',
                      'Coordination portuaire',
                      'Transport international de marchandises',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-brand-navy/70">
                        <ChevronRight className="w-4 h-4 text-brand-teal shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-brand-navy/60 leading-relaxed mb-6">
                  Dans le cadre des opérations HAC Group, Sharaf Shipping Agency intervient comme partenaire terrain
                  pour les opérations liées au fret et au suivi des cargaisons.
                </p>

                <Link
                  href="https://www.sharafshipping.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand-teal hover:text-brand-teal-dark transition-colors"
                >
                  Visiter le site officiel
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="container-hac"><div className="separator" /></div>

      {/* Contacts opérationnels */}
      <section className="section-spacing bg-brand-off-white">
        <div className="container-hac">
          <AnimatedSection>
            <p className="text-overline mb-4">Contact</p>
            <h2 className="text-heading-2 font-bold text-brand-teal mb-6 text-balance">
              Contacts ops
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                name: 'Ms Lynette Varghese',
                role: 'Congo Operations',
                email: 'congoops@sharafshipping.com',
                direct: '043130384',
                mobile: '+971564458599',
              },
              {
                name: 'Mr Pradeep Netthikumara',
                role: 'Head of Department',
                email: 'pradeepnetthikumara@sharafshipping.com',
                direct: '043130230',
                mobile: '+971506552179',
              },
            ].map((contact, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white border border-brand-gray-line p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center border border-brand-gray-line bg-brand-off-white">
                      <Users className="w-6 h-6 text-brand-teal" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-heading-3 font-bold text-brand-teal mb-4">{contact.name}</h3>
                      <p className="text-sm text-brand-teal">{contact.role}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-brand-teal shrink-0 mt-1" />
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-sm text-brand-navy/70 hover:text-brand-teal transition-colors"
                      >
                        {contact.email}
                      </a>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-brand-teal shrink-0 mt-1" />
                      <div>
                        <p className="text-xs text-brand-navy/50 mb-1">Direct</p>
                        <p className="text-sm text-brand-navy/70">{contact.direct}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Smartphone className="w-4 h-4 text-brand-teal shrink-0 mt-1" />
                      <div>
                        <p className="text-xs text-brand-navy/50 mb-1">Mobile</p>
                        <p className="text-sm text-brand-navy/70">{contact.mobile}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-12 md:py-16 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy-deep to-brand-navy" />
        <div className="container-hac relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-heading-2 font-bold text-brand-teal mb-6 max-w-2xl mx-auto text-balance">
              Intéressé par nos partenariats ?
            </h2>
            <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
              Contactez HAC Group pour explorer les opportunités de collaboration.
            </p>
            <Link href="/contact" className="btn-primary mt-6">
              Nous contacter
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Partners />
    </>
  );
}
