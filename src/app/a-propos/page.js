'use client';

import Link from 'next/link';
import { ArrowUpRight, ChevronRight, Target, Eye, Handshake, Lightbulb, ShieldCheck, Sprout, Database, Anchor, BarChart } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionImage from '@/components/SectionImage';
import Partners from '@/components/Partners';

const valeurs = [
  { icon: Lightbulb, title: 'Innovation', text: 'Solutions technologiques de pointe pour moderniser les échanges commerciaux.' },
  { icon: ShieldCheck, title: 'Transparence', text: 'Pratiques commerciales éthiques et gestion rigoureuse des opérations.' },
  { icon: Handshake, title: 'Coopération', text: 'Partenariats mutuellement bénéfiques entre le Canada et l\'Afrique.' },
  { icon: Sprout, title: 'Développement durable', text: 'Responsabilité sociale et pratiques respectueuses de l\'environnement.' },
];

export default function AProposPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-20 md:pt-32 pb-10 md:pb-16">
        <div className="container-hac">
          <AnimatedSection>
            <p className="text-overline mb-4">À propos</p>
            <h1 className="text-heading-1 md:text-display font-light text-brand-navy max-w-3xl text-balance">
              African Canadian Holding Group
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Présentation */}
      <section className="pb-12 md:pb-20">
        <div className="container-hac">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-16">
            <AnimatedSection>
              <SectionImage
                src="/images/about.jpg"
                alt="Architecture corporate — business international"
                aspectRatio="aspect-[3/4]"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="lg:pt-6">
                <div className="separator-short mb-8" />
                <p className="text-editorial mb-4">
                  African-Canadian Holding Group est une société constituée selon le droit canadien et
                  membre actif de la prestigieuse chambre de commerce ACBC (African Canadian Business Chamber).
                </p>
                <p className="text-editorial mb-4">
                  Grâce à son engagement dans le développement économique, la société aspire à devenir un acteur
                  clé dans la promotion des relations commerciales, industrielles et financières entre le Canada,
                  la République Démocratique du Congo et, plus largement, le continent africain.
                </p>
                <p className="text-editorial mb-4">
                  Avec une expertise avérée dans le domaine des relations internationales et un réseau solide de
                  partenaires dans les secteurs clés, African-Canadian Holding Group se distingue comme un acteur
                  de confiance, capable de favoriser un impact économique tangible entre le Canada et l&apos;Afrique.
                </p>
                <p className="text-editorial">
                  L&apos;objectif ultime est de construire un avenir prospère, en mutualisant les forces des deux continents.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="container-hac"><div className="separator" /></div>

      {/* Mission & Vision */}
      <section className="section-spacing">
        <div className="container-hac">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            <AnimatedSection>
              <div className="flex items-start gap-4 mb-4">
                <Target className="w-6 h-6 text-brand-teal shrink-0 mt-1" strokeWidth={1.5} />
                <h2 className="text-heading-2 font-light text-brand-navy">Mission</h2>
              </div>
              <p className="text-editorial">
                Jouer un rôle de pont stratégique entre le Canada et l&apos;Afrique, en créant des synergies
                concrètes et durables pour le développement économique, tout en facilitant les échanges
                commerciaux, les partenariats stratégiques et les opportunités d&apos;investissements.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="flex items-start gap-4 mb-4">
                <Eye className="w-6 h-6 text-brand-teal shrink-0 mt-1" strokeWidth={1.5} />
                <h2 className="text-heading-2 font-light text-brand-navy">Vision</h2>
              </div>
              <p className="text-editorial">
                Devenir la plateforme stratégique de référence qui soutient et accélère le développement
                de projets innovants, en reliant entrepreneurs, investisseurs et partenaires des régions
                ciblées pour créer des synergies économiques, technologiques et sociales.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="container-hac"><div className="separator" /></div>

      {/* Objet social */}
      <section className="section-spacing">
        <div className="container-hac">
          <AnimatedSection>
            <p className="text-overline mb-3">Objet social</p>
            <h2 className="text-heading-2 font-light text-brand-navy mb-3 max-w-2xl">
              Nos domaines d&apos;intervention
            </h2>
            <div className="separator-short mb-12" />
          </AnimatedSection>

          <div className="space-y-0">
            {[
              {
                title: 'Représentation OGEFREM',
                text: 'Faire office de représentant et mandataire FERI de l\'OGEFREM au Canada et ailleurs, des cargaisons transitant en République Démocratique du Congo.',
              },
              {
                title: 'Inspection & Certification',
                text: 'L\'inspection et la certification des cargaisons entrant en RDC via une société du groupe HAC ayant une personnalité morale à part entière.',
              },
              {
                title: 'Incubation de projets',
                text: 'Incubateurs et développeurs des projets innovants entre la RDC, l\'Afrique et le Canada, créant des synergies économiques et technologiques.',
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4 md:gap-8 py-6 border-b border-brand-gray-line last:border-b-0">
                  <span className="text-caption text-brand-gray-mid font-medium mt-1 shrink-0 w-8">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-heading-3 font-normal text-brand-navy mb-2">
                      {item.title}
                    </h3>
                    <p className="text-body text-brand-navy/50 max-w-xl">
                      {item.text}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section-spacing bg-brand-off-white">
        <div className="container-hac">
          <AnimatedSection>
            <p className="text-overline mb-3">Nos valeurs</p>
            <h2 className="text-heading-2 font-light text-brand-navy mb-12 max-w-lg">
              Les fondements de notre engagement
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {valeurs.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center border border-brand-gray-line bg-white">
                    <v.icon className="w-5 h-5 text-brand-teal" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-brand-navy mb-2">{v.title}</h3>
                    <p className="text-sm text-brand-navy/50 leading-relaxed">{v.text}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation */}
      <section className="section-spacing">
        <div className="container-hac">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedSection>
              <p className="text-overline mb-4">Innovation</p>
              <h2 className="text-heading-2 font-light text-brand-navy mb-6">
                Le Logiciel HAC Group
              </h2>
              <p className="text-editorial mx-auto">
                Notre solution logicielle sur mesure assure la traçabilité des cargaisons de près et la collecte 
                de la FERI. Une technologie avancée pour réduire la dépendance à l&apos;intervention humaine.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Database, title: 'Collecte de données', text: 'Référencement des données de cargaison et du fret par pays et mandataires.' },
              { icon: Anchor, title: 'Traçabilité intégrale', text: 'Suivi rigoureux des cargaisons à chaque étape du transit maritime ou aérien.' },
              { icon: BarChart, title: 'Statistiques & Paiement', text: 'Statistiques intégrées et système de paiement sécurisé au verrouillage de la cargaison.' }
            ].map((feature, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="p-8 border border-brand-gray-line h-full hover:border-brand-teal transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-brand-teal mb-6" strokeWidth={1.5} />
                  <h3 className="text-lg font-medium text-brand-navy mb-3">{feature.title}</h3>
                  <p className="text-sm text-brand-navy/60 leading-relaxed">{feature.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ACBC */}
      <section className="section-spacing">
        <div className="container-hac">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-8">
                <p className="text-overline mb-3">Partenariat stratégique</p>
                <h2 className="text-heading-2 font-light text-brand-navy mb-4">
                  Membre de l&apos;ACBC
                </h2>
                <div className="separator-short mx-auto" />
              </div>
              
              <div className="bg-white border border-brand-gray-line p-6 md:p-10 lg:p-12 relative overflow-hidden">
                {/* Decorative subtle background element */}
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                  <Handshake className="w-64 h-64 text-brand-navy" strokeWidth={1} />
                </div>
                
                <p className="text-editorial md:text-xl text-center mb-8 relative z-10 mx-auto">
                  Depuis sa création, l&apos;ACBC (African Canadian Business Chamber) cherche à chapeauter
                  de nombreuses initiatives clés pour améliorer les résultats des entreprises africaines
                  et canadiennes sur les deux continents.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                  {[
                    'Garantir des relations commerciales entre États et entreprises',
                    'Renforcement en capacité (ressources humaines et technologiques)',
                    'Production d\'opportunités pour les entreprises',
                    'Compréhension de la dynamique des deux marchés',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-brand-off-white">
                      <ChevronRight className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                      <span className="text-brand-navy/80 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-12 md:py-16 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy-deep to-brand-navy" />
        <div className="container-hac relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-heading-1 font-light text-white mb-6 max-w-2xl mx-auto text-balance">
              Construisons ensemble l&apos;avenir économique
            </h2>
            <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
              Rejoignez HAC Group dans sa mission de pont stratégique entre le Canada et l&apos;Afrique.
            </p>
            <Link href="/contact" className="btn-primary">
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
