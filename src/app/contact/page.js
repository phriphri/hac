'use client';

import { Mail, MapPin, Phone, Smartphone, ArrowUpRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Partners from '@/components/Partners';

export default function ContactPage() {
  return (
    <main className="min-h-[70vh] md:min-h-[85vh] flex flex-col">
      <section className="pt-20 md:pt-24 pb-10 md:pb-16 bg-brand-off-white">
        <div className="container-hac">
          <AnimatedSection>
            <p className="text-overline mb-4">Contact</p>
            <h1 className="text-heading-1 md:text-display font-bold text-brand-teal max-w-4xl text-balance mb-8">
              Nous contacter
            </h1>
            <p className="text-body text-brand-navy mt-6">
              Explorez les opportunités de partenariat avec HAC Group.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-hac">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 lg:gap-16">
            
            {/* Contact Info */}
            <div className="md:col-span-5 lg:col-span-5 space-y-6 md:space-y-8 order-2 md:order-1">
              <AnimatedSection>
                <h2 className="text-heading-2 font-bold text-brand-teal mb-6 text-balance">
                  HAC Group
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-brand-teal shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-brand-navy mb-1">Email général</p>
                      <a href="mailto:gloria.co@hacgcongo.com" className="text-brand-navy/60 hover:text-brand-teal transition-colors">
                        gloria.co@hacgcongo.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-brand-teal shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-brand-navy mb-1">Adresse</p>
                      <p className="text-brand-navy/60">
                        104, Colonel Ebeya, Golf<br/>
                        Gombe, Kinshasa - RD Congo
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="md:col-span-7 lg:col-span-7 order-1 md:order-2">
              <AnimatedSection delay={0.2}>
                <div className="bg-white p-6 md:p-8 border border-brand-gray-line shadow-sm">
                  <h2 className="text-heading-2 font-bold text-brand-teal mb-6 text-balance">
                    Envoyez-nous un message
                  </h2>
                  <form className="space-y-4" onSubmit={(e) => {
                    e.preventDefault();
                    const firstName = document.getElementById('firstName').value;
                    const lastName = document.getElementById('lastName').value;
                    const email = document.getElementById('email').value;
                    const subject = document.getElementById('subject').value;
                    const message = document.getElementById('message').value;
                    
                    const subjectText = subject ? 
                      (subject === 'partenariat' ? 'Demande de partenariat' :
                       subject === 'feri' ? 'Renseignements FERI / OGEFREM' :
                       subject === 'investissement' ? 'Projet d\'investissement' : 'Autre demande') 
                      : 'Contact depuis le site web';
                    
                    const body = `Nom: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`;
                    window.location.href = `mailto:gloria.co@hacgcongo.com?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(body)}`;
                  }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium text-brand-navy">Prénom</label>
                        <input 
                          type="text" 
                          id="firstName" 
                          className="w-full px-4 py-3 border border-brand-gray-line focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition-all"
                          placeholder="Votre prénom"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium text-brand-navy">Nom</label>
                        <input 
                          type="text" 
                          id="lastName" 
                          className="w-full px-4 py-3 border border-brand-gray-line focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition-all"
                          placeholder="Votre nom"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-brand-navy">Email professionnel</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 border border-brand-gray-line focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition-all"
                        placeholder="nom@entreprise.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-brand-navy">Sujet</label>
                      <select 
                        id="subject"
                        className="w-full px-4 py-3 border border-brand-gray-line focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition-all bg-white"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="partenariat">Demande de partenariat</option>
                        <option value="feri">Renseignements FERI / OGEFREM</option>
                        <option value="investissement">Projet d&apos;investissement</option>
                        <option value="autre">Autre demande</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-brand-navy">Message</label>
                      <textarea 
                        id="message" 
                        rows={5}
                        className="w-full px-4 py-3 border border-brand-gray-line focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition-all resize-y"
                        placeholder="Comment pouvons-nous vous aider ?"
                      ></textarea>
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center mt-4">
                      Envoyer le message
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

      <Partners />
    </main>
  );
}
