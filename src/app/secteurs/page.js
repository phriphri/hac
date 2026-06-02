'use client';

import Link from 'next/link';
import { ArrowUpRight, Truck, BarChart3, Leaf, Globe2, Building2, HeartPulse, GraduationCap } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionImage from '@/components/SectionImage';
import Partners from '@/components/Partners';

const secteurs = [
  {
    icon: Truck,
    title: 'Importation & Exportation',
    text: 'Commerce général favorisant les échanges fluides de biens et services entre les marchés canadiens, congolais et africains, avec une gestion logistique optimisée.',
  },
  {
    icon: BarChart3,
    title: 'Hydrocarbures & Produits dérivés',
    text: 'Implication stratégique dans le secteur de l\'énergie, incluant le stockage, la distribution et l\'optimisation des ressources en hydrocarbures.',
  },
  {
    icon: Leaf,
    title: 'Agro-industrie',
    text: 'Soutien aux initiatives qui augmentent la productivité agricole, favorisent le développement rural et renforcent l\'autonomie alimentaire sur le continent.',
  },
  {
    icon: Globe2,
    title: 'Énergies renouvelables',
    text: 'Accompagnement de l\'innovation technologique et développement de solutions énergétiques durables pour l\'avenir.',
  },
  {
    icon: Building2,
    title: 'Infrastructure & Développement',
    text: 'Participation active à la modernisation et à la construction d\'infrastructures essentielles, respectueuses de l\'environnement et des normes internationales.',
  },
  {
    icon: HeartPulse,
    title: 'Santé & Technologie',
    text: 'Investissement dans les services de santé modernes, le transfert de technologies médicales et le déploiement de solutions de pointe.',
  },
  {
    icon: GraduationCap,
    title: 'Formation & Transfert',
    text: 'Mise en place de programmes favorisant l\'éducation, le renforcement des capacités et le transfert de connaissances entre professionnels canadiens et africains.',
  },
];

export default function SecteursPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-20 md:pt-24 pb-10 md:pb-16">
        <div className="container-hac">
          <AnimatedSection>
            <p className="text-overline mb-4">Secteurs visés</p>
            <h1 className="text-heading-1 md:text-display font-light text-brand-navy max-w-4xl text-balance">
              Des investissements stratégiques pour une croissance partagée
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Secteurs Grid */}
      <section className="pb-10 md:pb-16 lg:pb-20 bg-white pt-10 md:pt-16">
        <div className="container-hac">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {secteurs.map((secteur, i) => (
              <AnimatedSection key={i} delay={i * 0.05} className="h-full">
                <div className="bg-white border border-brand-gray-line shadow-sm p-5 md:p-8 lg:p-10 h-full flex flex-col group hover:bg-brand-navy-deep transition-colors duration-500">
                  <div className="w-14 h-14 flex items-center justify-center border border-brand-gray-line bg-brand-off-white mb-6 group-hover:border-white/10 group-hover:bg-white/5 transition-colors duration-500">
                    <secteur.icon className="w-7 h-7 text-brand-teal" strokeWidth={1} />
                  </div>
                  
                  <h2 className="text-lg font-medium text-brand-navy mb-3 group-hover:text-white transition-colors duration-500">
                    {secteur.title}
                  </h2>
                  <p className="text-body text-brand-navy/60 leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                    {secteur.text}
                  </p>
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
            <h2 className="text-heading-2 font-light text-white mb-6 max-w-2xl mx-auto text-balance">
              Une expertise au service du développement
            </h2>
            <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
              HAC Group et ses alliés conçoivent et investissent dans des projets ciblés afin de stimuler la croissance des flux commerciaux émergents.
            </p>
            <Link href="/contact" className="btn-primary">
              Prendre contact
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Partners />
    </>
  );
}
