'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Anchor, Shield, BarChart3, Globe2, Cpu, Truck, Leaf, Building2, HeartPulse, GraduationCap } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionImage from '@/components/SectionImage';

/* ======================================================
   PAGE D'ACCUEIL — HAC GROUP
   Contenu basé strictement sur le Business Plan PDF
   ====================================================== */

const secteurs = [
  { icon: Truck, title: 'Importation & Exportation', desc: 'Commerce général entre le Canada, la RDC et l\'Afrique.' },
  { icon: BarChart3, title: 'Hydrocarbures & Produits dérivés', desc: 'Secteur stratégique pour le développement économique.' },
  { icon: Leaf, title: 'Agro-industrie', desc: 'Soutenir la productivité agricole et l\'autonomie alimentaire.' },
  { icon: Globe2, title: 'Énergies renouvelables', desc: 'Innovation technologique et solutions énergétiques durables.' },
  { icon: Building2, title: 'Infrastructure & Développement', desc: 'Renforcement des infrastructures et développement durable.' },
  { icon: HeartPulse, title: 'Santé & Technologie', desc: 'Services de santé et technologies de pointe.' },
  { icon: GraduationCap, title: 'Formation & Compétences', desc: 'Transfert de connaissances entre les continents.' },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[60vh] md:min-h-[75vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <SectionImage
            src="/images/cooperation.jpg"
            alt="Coopération économique — African Canadian Holding"
            aspectRatio=""
            className="!absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-deep/95 via-brand-navy-deep/80 to-brand-navy-deep/50" />
        </div>

        <div className="container-hac relative z-10 pt-20 md:pt-32 pb-12 md:pb-20">
          <div className="max-w-4xl">
            <AnimatedSection>
              <p className="text-brand-teal font-medium tracking-widest uppercase text-sm mb-6">
                African Canadian Holding Group
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-[1.1] tracking-tight text-balance">
                Construire des ponts économiques durables entre{' '}
                <span className="font-normal">l&apos;Afrique</span> et le{' '}
                <span className="font-normal">Canada</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-base md:text-xl text-white/60 leading-relaxed max-w-2xl mb-6">
                HAC Group développe des relations commerciales, technologiques et stratégiques
                entre le Canada, la République Démocratique du Congo et l&apos;Afrique.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-wrap gap-3 sm:gap-4">
                <Link href="/a-propos" className="btn-primary w-full sm:w-auto justify-center">
                  Découvrir HAC Group
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="btn-outline !border-white/20 !text-white hover:!border-brand-teal hover:!text-brand-teal w-full sm:w-auto justify-center">
                  Nous contacter
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-white/30" />
        </div>
      </section>

      {/* ===== PRÉSENTATION ===== */}
      <section className="section-spacing">
        <div className="container-hac">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <p className="text-overline mb-3">À propos</p>
              <h2 className="text-heading-2 font-light text-brand-navy mb-6">
                Un acteur de confiance au cœur des échanges{' '}
                <span className="text-brand-teal">Canada–Afrique</span>
              </h2>
              <div className="space-y-4">
                <p className="text-editorial">
                  African-Canadian Holding Group est une société constituée selon le droit canadien et
                  membre actif de la prestigieuse chambre de commerce ACBC (African Canadian Business Chamber).
                </p>
                <p className="text-editorial">
                  Notre mission est de jouer un rôle de pont stratégique entre ces deux continents,
                  en créant des synergies concrètes et durables pour le développement économique tout en
                  facilitant les échanges commerciaux, les partenariats stratégiques et les opportunités d&apos;investissements.
                </p>
              </div>
              <div className="mt-6">
                <Link href="/a-propos" className="inline-flex items-center gap-2 text-sm font-medium text-brand-teal hover:text-brand-teal-dark transition-colors">
                  En savoir plus
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <SectionImage
                src="/images/about.jpg"
                alt="Réunion institutionnelle — collaboration Afrique Canada"
                aspectRatio="aspect-[4/5]"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="container-hac"><div className="separator" /></div>

      {/* ===== OBJECTIFS ===== */}
      <section className="section-spacing">
        <div className="container-hac">
          <AnimatedSection>
            <p className="text-overline mb-3">Notre vision</p>
            <h2 className="text-heading-2 font-light text-brand-navy mb-3 max-w-2xl">
              Des objectifs stratégiques au service du développement
            </h2>
            <div className="separator-short mb-12" />
          </AnimatedSection>

          <div className="space-y-0">
            {[
              {
                title: 'Facilitation des échanges commerciaux',
                text: 'Mettre en place des mécanismes et des plateformes pour renforcer les échanges économiques entre le Canada et les pays africains, avec une attention particulière portée à la RDC.',
              },
              {
                title: 'Développement de partenariats solides',
                text: 'Accompagner et soutenir les entreprises canadiennes et africaines dans la création de partenariats stratégiques, en identifiant des opportunités économiques clés.',
              },
              {
                title: 'Investissements durables',
                text: 'Dédier des ressources à des projets à fort impact social et économique, tout en mettant en avant la responsabilité sociale des entreprises.',
              },
              {
                title: 'Intégration économique',
                text: 'Agir en tant que plateforme d\'intégration économique pour réduire les obstacles aux échanges et encourager une collaboration harmonieuse.',
              },
              {
                title: 'Optimisation des performances',
                text: 'Apport des stratégies de gestion, l\'allocation des ressources, la gestion des risques et le suivi des résultats.',
              },
            ].map((obj, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="group flex items-start gap-4 md:gap-8 py-6 border-b border-brand-gray-line last:border-b-0 transition-colors hover:bg-brand-off-white/50">
                  <span className="text-caption text-brand-gray-mid font-medium mt-1 shrink-0 w-8">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-heading-3 font-normal text-brand-navy mb-2 group-hover:text-brand-teal transition-colors duration-300">
                      {obj.title}
                    </h3>
                    <p className="text-body text-brand-navy/50 max-w-xl">
                      {obj.text}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="container-hac"><div className="separator" /></div>

      {/* ===== SECTEURS VISÉS ===== */}
      <section className="section-spacing bg-brand-off-white">
        <div className="container-hac">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <p className="text-overline mb-3">Secteurs d&apos;activité</p>
                <h2 className="text-heading-2 font-light text-brand-navy max-w-lg">
                  Des secteurs stratégiques pour la croissance
                </h2>
              </div>
              <Link href="/secteurs" className="inline-flex items-center gap-2 text-sm font-medium text-brand-teal hover:text-brand-teal-dark transition-colors">
                Voir tous les secteurs
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {secteurs.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="group bg-white h-full p-6 md:p-8 border border-brand-gray-line transition-all duration-300 hover:border-brand-teal hover:shadow-lg">
                  <s.icon className="w-5 h-5 text-brand-teal mb-4 transition-colors duration-300 group-hover:text-brand-teal-dark" strokeWidth={1.5} />
                  <h3 className="text-base font-medium text-brand-navy mb-2 transition-colors duration-300 group-hover:text-brand-teal">
                    {s.title}
                  </h3>
                  <p className="text-sm text-brand-navy/50 leading-relaxed transition-colors duration-300 group-hover:text-brand-navy/70">
                    {s.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOLUTION NUMÉRIQUE ===== */}
      <section className="section-spacing bg-brand-navy-deep text-white">
        <div className="container-hac">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <p className="text-overline mb-3">Solution technologique</p>
              <h2 className="text-heading-2 font-light mb-4">
                Un logiciel de pointe pour la traçabilité
              </h2>
              <p className="text-lg text-white/50 leading-relaxed mb-6 max-w-xl">
                Notre solution logicielle sur mesure assure la traçabilité des cargaisons
                et la collecte de la FERI grâce à une technologie blockchain innovante.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {[
                  { label: 'Collecte des données', desc: 'Par pays et mandataires' },
                  { label: 'Traçabilité', desc: 'Suivi à chaque étape' },
                  { label: 'Statistiques intégrées', desc: 'Rapports détaillés' },
                  { label: 'Automatisation', desc: 'Réduction intervention humaine' },
                ].map((feat, i) => (
                  <div key={i} className="border-l-2 border-brand-teal/30 pl-4">
                    <p className="text-sm font-medium text-white mb-1">{feat.label}</p>
                    <p className="text-xs text-white/40">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <SectionImage
                src="/images/hero.jpg"
                alt="Logistique et suivi technologique"
                aspectRatio="aspect-[4/3]"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== AFRIQUE — RDC — CANADA ===== */}
      <section className="section-spacing">
        <div className="container-hac">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-overline mb-3">Vision internationale</p>
              <h2 className="text-heading-2 font-light text-brand-navy mb-4">
                Afrique — RDC — Canada
              </h2>
              <p className="text-editorial mx-auto">
                Grâce aux données recueillies, nous développons des projets sur mesure,
                parfaitement adaptés aux besoins identifiés sur le marché et à la réalité du terrain.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: 'République Démocratique du Congo',
                text: 'Croissance économique soutenue par le secteur minier, en particulier le cuivre et le cobalt. Modernisation des infrastructures et conformité aux normes internationales.',
              },
              {
                title: 'Afrique',
                text: 'Les secteurs minier et agricole jouent un rôle crucial. Les investissements dans les infrastructures et les réformes économiques soutiennent la croissance future.',
              },
              {
                title: 'Canada',
                text: 'Économie diversifiée avec des secteurs forts : énergie, technologies de l\'information et services financiers. Investissements dans les infrastructures et l\'innovation.',
              },
            ].map((region, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white h-full p-5 md:p-8 lg:p-10 hover:bg-brand-off-white transition-colors duration-500 flex flex-col justify-center">
                  <h3 className="text-lg font-medium text-brand-navy mb-3 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-px after:bg-brand-teal">
                    {region.title}
                  </h3>
                  <p className="text-body text-brand-navy/60 leading-relaxed">
                    {region.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="relative py-12 md:py-16 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy-deep to-brand-navy" />
        <div className="container-hac relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-heading-1 font-light text-white mb-6 max-w-2xl mx-auto text-balance">
              Prêt à développer vos projets entre l&apos;Afrique et le Canada ?
            </h2>
            <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
              Contactez HAC Group pour explorer les opportunités de partenariat et d&apos;investissement.
            </p>
            <Link href="/contact" className="btn-primary">
              Prendre contact
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
