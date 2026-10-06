import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, User, ArrowRight, Share2, Sparkles, Building2 } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { getActualiteById, getActualites } from '@/lib/actualites';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const article = await getActualiteById(params.id);
  if (!article) return { title: 'Article non trouvé — HAC Group' };

  return {
    title: `${article.title} — HAC Group`,
    description: article.desc,
  };
}

export default async function ArticlePage({ params }) {
  const article = await getActualiteById(params.id);

  if (!article) {
    notFound();
  }

  const allArticles = await getActualites();
  // Articles récents suggérés (excluant l'actuel)
  const otherArticles = allArticles
    .filter((item) => item.id.toString() !== params.id.toString())
    .slice(0, 3);

  return (
    <main className="bg-white min-h-screen">
      {/* ===== HERO ARTICLE ===== */}
      <section className="bg-brand-navy-deep text-white pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
        <div className="container-hac relative z-10">
          {/* Fil d'ariane */}
          <div className="flex items-center gap-2 text-xs text-white/50 mb-6">
            <Link href="/" className="hover:text-brand-teal transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <span className="text-white/80">Actualités</span>
            <span>/</span>
            <span className="text-brand-teal truncate max-w-[200px] sm:max-w-xs">{article.category}</span>
          </div>

          <AnimatedSection>
            {/* Badges & Méta-données */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-teal/15 border border-brand-teal/30 px-3 py-1">
                {article.category}
              </span>
              <span className="text-xs text-white/60 flex items-center gap-1.5 font-medium">
                <Calendar className="w-3.5 h-3.5 text-brand-teal" />
                {article.date}
              </span>
              {article.readTime && (
                <span className="text-xs text-white/60 flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-brand-teal" />
                  {article.readTime}
                </span>
              )}
            </div>

            {/* Titre principal */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-tight mb-6 text-balance">
              {article.title}
            </h1>

            {/* Chapeau / Résumé */}
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed">
              {article.desc}
            </p>

            {/* Auteur */}
            {article.author && (
              <div className="flex items-center gap-2 mt-6 pt-6 border-t border-white/10 text-xs text-white/50">
                <User className="w-4 h-4 text-brand-teal" />
                <span>Publié par <strong className="text-white/80 font-medium">{article.author}</strong></span>
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CONTENU DE L'ARTICLE ===== */}
      <section className="py-12 md:py-16">
        <div className="container-hac">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Colonne Principale : Texte de l'article */}
            <article className="lg:col-span-8">
              {article.image && (
                <figure className="relative mb-8 aspect-[16/9] overflow-hidden border border-brand-gray-line bg-brand-off-white">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                  />
                </figure>
              )}

              {/* Corps de l'article */}
              <div className="space-y-6 text-brand-navy leading-relaxed text-base md:text-lg">
                {(article.content || article.desc)
                  .split('\n\n')
                  .map((paragraph, index) => {
                    if (paragraph.startsWith('•')) {
                      const listItems = paragraph.split('\n');
                      return (
                        <ul key={index} className="space-y-2 my-4 pl-4 border-l-2 border-brand-teal/40">
                          {listItems.map((li, liIdx) => (
                            <li key={liIdx} className="text-sm md:text-base text-brand-navy flex items-start gap-2">
                              <span className="text-brand-teal font-bold shrink-0">•</span>
                              <span>{li.replace('•', '').trim()}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    }

                    if (paragraph.startsWith('«') || paragraph.startsWith('"')) {
                      return (
                        <blockquote
                          key={index}
                          className="my-6 p-6 bg-brand-off-white border-l-4 border-brand-teal italic text-brand-navy font-serif text-lg leading-relaxed"
                        >
                          {paragraph}
                        </blockquote>
                      );
                    }

                    return (
                      <p key={index} className="text-body text-brand-navy">
                        {paragraph}
                      </p>
                    );
                  })}
              </div>

              {/* Barre de fin d'article */}
              <div className="mt-12 pt-8 border-t border-brand-gray-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-teal hover:text-brand-teal-dark transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Retour à l&apos;accueil
                </Link>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <Link
                    href="/contact"
                    className="btn-primary w-full sm:w-auto justify-center !px-5 !py-2.5 text-xs"
                  >
                    Nous contacter pour ce sujet
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>

            {/* Colonne Latérale : Informations et Contact */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Carte À propos de HAC Group */}
              <div className="bg-brand-off-white border border-brand-gray-line p-6 md:p-8">
                <div className="w-10 h-10 bg-brand-teal/10 text-brand-teal flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-brand-teal mb-3">
                  African Canadian Holding Group
                </h3>
                <p className="text-xs text-brand-navy/70 leading-relaxed mb-6">
                  HAC Group développe des synergies concrètes et durables entre le Canada, la République Démocratique du Congo et le continent africain.
                </p>
                <Link
                  href="/a-propos"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-brand-teal hover:underline"
                >
                  Découvrir notre mission
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              {/* Boîte Contact rapide */}
              <div className="bg-brand-navy-deep text-white p-6 md:p-8">
                <p className="text-xs uppercase tracking-wider text-brand-teal font-semibold mb-2">
                  Partenariats
                </p>
                <h3 className="text-lg font-bold mb-3">
                  Un projet à concrétiser ?
                </h3>
                <p className="text-xs text-white/60 leading-relaxed mb-6">
                  Nos équipes vous accompagnent dans l&apos;analyse d&apos;opportunités et la réalisation de vos ambitions.
                </p>
                <Link
                  href="/contact"
                  className="btn-primary w-full justify-center !text-xs"
                >
                  Échanger avec nos experts
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ===== AUTRES ACTUALITÉS ===== */}
      {otherArticles.length > 0 && (
        <section className="py-12 md:py-16 bg-brand-off-white border-t border-brand-gray-line">
          <div className="container-hac">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-brand-teal">
                Autres actualités
              </h2>
              <Link
                href="/"
                className="text-xs font-semibold text-brand-teal hover:text-brand-teal-dark flex items-center gap-1"
              >
                Retour à l&apos;accueil
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherArticles.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-brand-gray-line flex flex-col justify-between transition-all hover:border-brand-teal hover:shadow-md group"
                >
                  {item.image && (
                    <div className="relative aspect-[16/9] overflow-hidden bg-brand-off-white">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  )}
                  <div>
                    <div className="p-6 flex-1">
                      <div className="flex items-center justify-between text-xs text-brand-gray-mid mb-3">
                        <span className="text-[10px] font-bold uppercase text-brand-teal bg-brand-teal-light px-2 py-0.5">
                          {item.category}
                        </span>
                        <span>{item.date}</span>
                      </div>
                      <h3 className="text-sm font-bold text-brand-teal mb-2 group-hover:text-brand-teal-dark transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-brand-navy/70 line-clamp-3 leading-relaxed mb-4">
                        {item.desc}
                      </p>
                      <Link
                        href={`/actualites/${item.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-teal group-hover:text-brand-teal-dark transition-colors"
                      >
                        Lire l&apos;article
                        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
