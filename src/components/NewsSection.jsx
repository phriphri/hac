'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

export default function NewsSection({ initialData = [] }) {
  const [actualites, setActualites] = useState(initialData);
  const [isPaused, setIsPaused] = useState(false);

  // Charger les actualités mises à jour depuis l'API
  useEffect(() => {
    fetch('/api/actualites')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setActualites(data);
        }
      })
      .catch((err) => {
        console.warn('Chargement des actualités:', err);
      });
  }, []);

  if (!actualites || actualites.length === 0) return null;

  // Dupliquer la liste pour un défilement infini sans coupure
  const duplicatedList = [...actualites, ...actualites, ...actualites];

  return (
    <section className="py-12 md:py-16 bg-brand-off-white border-t border-brand-gray-line overflow-hidden">
      <div className="container-hac mb-8">
        <AnimatedSection>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-teal tracking-tight">
              Actualités
            </h2>
            <span className="text-xs text-brand-gray-mid hidden sm:inline-block">
              Défilement automatique • Survolez pour figer
            </span>
          </div>
          <div className="w-16 h-0.5 bg-brand-teal mt-3" />
        </AnimatedSection>
      </div>

      {/* Conteneur du défilement continu infini */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Ombres de fondu sur les bords pour un fini impeccable */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-brand-off-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-brand-off-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 md:gap-6 w-max px-4"
          animate={{
            x: isPaused ? undefined : ['0%', '-33.333%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: Math.max(20, actualites.length * 6), // Vitesse fluide
              ease: 'linear',
            },
          }}
        >
          {duplicatedList.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[280px] sm:w-[320px] md:w-[340px] h-[240px] shrink-0 bg-white border border-brand-gray-line p-5 flex flex-col justify-between transition-all duration-300 hover:border-brand-teal hover:shadow-md group select-none"
            >
              <div>
                {/* En-tête de la Card : Badge & Date */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-teal bg-brand-teal-light px-2 py-0.5">
                    {item.category || 'Actualité'}
                  </span>
                  <span className="text-[11px] text-brand-gray-mid font-medium flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>
                </div>

                {/* Titre calibré */}
                <h3 className="text-sm md:text-base font-bold text-brand-teal line-clamp-2 leading-snug mb-2 group-hover:text-brand-teal-dark transition-colors">
                  {item.title}
                </h3>

                {/* Résumé calibré */}
                <p className="text-xs text-brand-navy/75 line-clamp-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Pied de la Card */}
              <div className="pt-3 border-t border-brand-gray-line/60 flex items-center justify-between">
                <Link
                  href={`/actualites/${item.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-teal group-hover:text-brand-teal-dark transition-colors"
                >
                  Lire la suite
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
