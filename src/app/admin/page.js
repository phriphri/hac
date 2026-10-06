'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  PlusCircle, Trash2, ArrowLeft, Lock, CheckCircle2, 
  AlertCircle, RefreshCw, Calendar, Tag, FileText, 
  Eye, EyeOff, ExternalLink, ShieldCheck, Image as ImageIcon,
  Clock, User, Sparkles, Upload
} from 'lucide-react';

const availableImages = [
  { label: 'Coopération & Échanges', path: '/images/cooperation.jpg' },
  { label: 'Stratégie & Institution', path: '/images/about.jpg' },
  { label: 'Logistique & Traçabilité (FERI)', path: '/images/feri.jpg' },
  { label: 'Commerce & Fret Maritime', path: '/images/hero.jpg' },
];

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [actualites, setActualites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [notification, setNotification] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Formulaire d'ajout
  const [formData, setFormData] = useState({
    title: '',
    category: 'Partenariat',
    date: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }),
    image: '/images/cooperation.jpg',
    readTime: '3 min de lecture',
    author: 'Communication HAC Group',
    desc: '',
    content: '',
  });

  // Charger les actualités
  const loadActualites = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/actualites');
      const data = await res.json();
      if (Array.isArray(data)) {
        setActualites(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch('/api/admin/session', { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated) {
          setIsAuthenticated(true);
          loadActualites();
        }
      })
      .catch((err) => console.error('Vérification de la session administrateur:', err));
  }, []);

  // Auto-dismiss notification après 4s
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setPasswordError(false);

    try {
      const res = await fetch('/api/admin/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: passwordInput }),
      });

      if (res.ok) {
        setIsAuthenticated(true);
        setPasswordInput('');
        loadActualites();
      } else if (res.status === 401) {
        setPasswordError(true);
      } else {
        const data = await res.json();
        setNotification({ type: 'error', text: data.error || 'Connexion administrateur impossible.' });
      }
    } catch (err) {
      console.error('Connexion administrateur:', err);
      setNotification({ type: 'error', text: 'Erreur réseau ou serveur inaccessible.' });
    }
  };

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/admin/session', { method: 'DELETE' });
      if (!res.ok) {
        throw new Error('Impossible de fermer la session administrateur.');
      }
      setIsAuthenticated(false);
      setPasswordInput('');
    } catch (err) {
      console.error('Déconnexion administrateur:', err);
      setNotification({ type: 'error', text: 'Erreur lors de la déconnexion.' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.desc.trim()) {
      setNotification({ type: 'error', text: 'Le titre et le résumé sont obligatoires.' });
      return;
    }

    setSubmitting(true);
    setNotification(null);

    try {
      const res = await fetch('/api/actualites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setNotification({ type: 'success', text: 'Article publié avec succès sur le site !' });
        setFormData({
          title: '',
          category: 'Partenariat',
          date: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }),
          image: '/images/cooperation.jpg',
          readTime: '3 min de lecture',
          author: 'Communication HAC Group',
          desc: '',
          content: '',
        });
        loadActualites();
      } else {
        setNotification({ type: 'error', text: 'Erreur lors de la publication.' });
      }
    } catch (err) {
      setNotification({ type: 'error', text: 'Erreur réseau ou serveur inaccessible.' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
      setNotification({ type: 'error', text: 'Choisissez une image au format JPG, PNG ou WebP.' });
      e.target.value = '';
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setNotification({ type: 'error', text: 'La photo ne doit pas dépasser 5 Mo.' });
      e.target.value = '';
      return;
    }

    setUploadingImage(true);
    setNotification(null);

    try {
      const formData = new FormData();
      formData.append('image', file);
      const res = await fetch('/api/actualites/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Impossible d’importer cette photo.');
      }

      setFormData((current) => ({ ...current, image: data.url }));
      setNotification({ type: 'success', text: 'Photo importée et prête à être publiée.' });
    } catch (err) {
      setNotification({ type: 'error', text: err.message || 'Erreur lors de l’import de la photo.' });
    } finally {
      setUploadingImage(false);
      e.target.value = '';
    }
  };

  const handleDelete = async (id, title) => {
    if (!confirm(`Supprimer définitivement l'article :\n"${title}" ?`)) {
      return;
    }

    try {
      const res = await fetch(`/api/actualites?id=${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setNotification({ type: 'success', text: 'Article retiré avec succès.' });
        loadActualites();
      } else {
        const data = await res.json();
        setNotification({ type: 'error', text: data.error || 'Impossible de supprimer cet article.' });
      }
    } catch (err) {
      setNotification({ type: 'error', text: 'Erreur de connexion.' });
    }
  };

  const filteredActualites = actualites.filter((item) =>
    item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Écran de connexion discret
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#070b12] flex items-center justify-center p-4 selection:bg-brand-teal selection:text-white">
        <div className="bg-white p-8 sm:p-10 w-full max-w-md shadow-2xl border-t-4 border-brand-teal relative">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-brand-teal/10 text-brand-teal flex items-center justify-center mx-auto mb-4">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-brand-navy tracking-tight">Accès Sécurisé</h1>
            <p className="text-xs text-brand-gray-mid mt-1">Espace réservé à l&apos;équipe de rédaction</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-2">
                Clé d&apos;authentification
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    setPasswordError(false);
                  }}
                  placeholder="Entrez votre mot de passe..."
                  className="w-full px-4 py-3 border border-brand-gray-line text-sm text-brand-navy focus:border-brand-teal focus:outline-none pr-10"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-gray-mid hover:text-brand-navy transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {passwordError && (
                <p className="text-red-600 text-xs mt-2 flex items-center gap-1.5 font-medium">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  Code d&apos;accès incorrect.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full btn-primary justify-center cursor-pointer shadow-md"
            >
              Déverrouiller le panneau
            </button>

            <div className="text-center pt-3">
              <Link href="/" className="text-xs text-brand-gray-mid hover:text-brand-teal transition-colors inline-flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                Retourner au site
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Interface de gestion complète (Uniquement ce menu-ci, aucun menu du site)
  return (
    <div className="min-h-screen bg-[#F4F6F8] text-brand-navy pb-16 font-sans">
      {/* Barre de navigation interne */}
      <header className="bg-brand-navy-deep text-white sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" title="Session active" />
            <h1 className="text-sm sm:text-base font-bold tracking-tight text-white flex items-center gap-2">
              HAC Group <span className="text-brand-teal font-normal hidden sm:inline">| Gestionnaire des Publications</span>
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-white px-3 py-1.5 bg-white/10 hover:bg-white/15 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Retourner au site
            </Link>
            <button
              onClick={handleLogout}
              className="text-xs bg-red-500/20 hover:bg-red-500/30 text-red-200 hover:text-white px-3 py-1.5 transition-colors cursor-pointer"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Toast Notification */}
        {notification && (
          <div
            className={`p-4 mb-6 flex items-center justify-between shadow-sm border transition-all ${
              notification.type === 'success'
                ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                : 'bg-red-50 border-red-300 text-red-900'
            }`}
          >
            <div className="flex items-center gap-3">
              {notification.type === 'success' ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
              )}
              <p className="text-sm font-medium">{notification.text}</p>
            </div>
            <button onClick={() => setNotification(null)} className="text-xs font-bold text-gray-500 hover:text-black">
              ✕
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Formulaire de Rédaction (Gauche) */}
          <div className="lg:col-span-5 bg-white border border-brand-gray-line p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-brand-gray-line">
              <h2 className="text-base font-bold text-brand-teal flex items-center gap-2">
                <PlusCircle className="w-5 h-5" />
                Rédiger un nouvel article
              </h2>
              <span className="text-[11px] text-brand-gray-mid">Directement synchronisé</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Titre */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1.5 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-brand-teal" /> Titre de l&apos;actualité *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Ex: Nouvelle mission économique en RDC..."
                  className="w-full px-3.5 py-2.5 border border-brand-gray-line text-sm text-brand-navy focus:border-brand-teal focus:outline-none"
                />
              </div>

              {/* Catégorie & Date */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1.5 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-brand-teal" /> Catégorie
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2.5 border border-brand-gray-line text-sm text-brand-navy focus:border-brand-teal focus:outline-none bg-white"
                  >
                    <option value="Partenariat">Partenariat</option>
                    <option value="Innovation">Innovation</option>
                    <option value="Développement">Développement</option>
                    <option value="Événement">Événement</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Formation">Formation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-brand-teal" /> Date affichée
                  </label>
                  <input
                    type="text"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    placeholder="Ex: 15 Mars 2025"
                    className="w-full px-3 py-2.5 border border-brand-gray-line text-sm text-brand-navy focus:border-brand-teal focus:outline-none"
                  />
                </div>
              </div>

              {/* Image de couverture & Temps de lecture */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1.5 flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5 text-brand-teal" /> Photo de l&apos;article
                  </label>
                  <select
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="w-full px-2.5 py-2.5 border border-brand-gray-line text-xs text-brand-navy focus:border-brand-teal focus:outline-none bg-white"
                  >
                    {!availableImages.some((img) => img.path === formData.image) && (
                      <option value={formData.image}>Photo importée</option>
                    )}
                    {availableImages.map((img) => (
                      <option key={img.path} value={img.path}>
                        {img.label}
                      </option>
                    ))}
                  </select>
                  <div className="mt-2 flex items-center gap-3">
                    <label
                      htmlFor="article-image-upload"
                      className={`inline-flex items-center gap-1.5 border border-brand-gray-line px-2.5 py-2 text-[11px] font-medium text-brand-teal hover:border-brand-teal transition-colors cursor-pointer ${uploadingImage ? 'opacity-50 pointer-events-none' : ''}`}
                    >
                      <Upload className="w-3.5 h-3.5" />
                      {uploadingImage ? 'Import en cours…' : 'Importer une photo'}
                    </label>
                    <input
                      id="article-image-upload"
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      onChange={handleImageUpload}
                      disabled={uploadingImage}
                      className="sr-only"
                    />
                    <span className="text-[10px] text-brand-gray-mid">JPG, PNG ou WebP · 5 Mo max.</span>
                  </div>
                  {formData.image && (
                    <div className="relative mt-3 h-24 overflow-hidden border border-brand-gray-line bg-brand-off-white">
                      <Image
                        src={formData.image}
                        alt="Aperçu de la photo de l’article"
                        fill
                        unoptimized
                        sizes="200px"
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-brand-teal" /> Temps de lecture
                  </label>
                  <input
                    type="text"
                    value={formData.readTime}
                    onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                    placeholder="Ex: 3 min de lecture"
                    className="w-full px-3 py-2.5 border border-brand-gray-line text-sm text-brand-navy focus:border-brand-teal focus:outline-none"
                  />
                </div>
              </div>

              {/* Résumé pour la Card */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1.5">
                  Résumé (affiché dans la Card sur l&apos;accueil) *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.desc}
                  onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                  placeholder="2 ou 3 phrases accrocheuses pour présenter l'actualité..."
                  className="w-full px-3.5 py-2.5 border border-brand-gray-line text-sm text-brand-navy focus:border-brand-teal focus:outline-none"
                />
              </div>

              {/* Corps complet de l'article */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-navy mb-1.5">
                  Texte complet de l&apos;article
                </label>
                <textarea
                  rows={6}
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Rédigez l'article complet ici. Séparez les paragraphes en sautant une ligne.&#10;&#10;Vous pouvez utiliser « Une citation » ou • Une liste à puces."
                  className="w-full px-3.5 py-2.5 border border-brand-gray-line text-sm text-brand-navy focus:border-brand-teal focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting || uploadingImage}
                className="w-full btn-primary justify-center mt-2 cursor-pointer shadow-sm disabled:opacity-50"
              >
                {submitting ? 'Publication en direct...' : 'Publier l\'article'}
              </button>
            </form>
          </div>

          {/* Liste des Articles Publiés (Droite) */}
          <div className="lg:col-span-7 bg-white border border-brand-gray-line p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 mb-6 border-b border-brand-gray-line">
              <div>
                <h2 className="text-base font-bold text-brand-teal">
                  Articles en ligne ({actualites.length})
                </h2>
                <p className="text-xs text-brand-gray-mid mt-0.5">
                  Ces actualités défilent sur l&apos;accueil et disposent de leur page dédiée.
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="px-3 py-1.5 border border-brand-gray-line text-xs focus:border-brand-teal focus:outline-none w-full sm:w-40"
                />
                <button
                  onClick={loadActualites}
                  disabled={loading}
                  title="Rafraîchir"
                  className="p-2 border border-brand-gray-line hover:border-brand-teal text-brand-gray-mid hover:text-brand-teal transition-colors"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
                </button>
              </div>
            </div>

            {filteredActualites.length === 0 ? (
              <div className="text-center py-16 text-brand-gray-mid">
                <p className="text-sm">Aucun article trouvé.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredActualites.map((item) => (
                  <div
                    key={item.id}
                    className="border border-brand-gray-line p-4 sm:p-5 bg-brand-off-white/40 hover:bg-brand-off-white transition-all flex flex-col sm:flex-row justify-between gap-4 items-start group"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-teal bg-brand-teal-light px-2 py-0.5">
                          {item.category}
                        </span>
                        <span className="text-xs text-brand-gray-mid">{item.date}</span>
                      </div>

                      <h3 className="text-sm font-bold text-brand-navy mb-1 group-hover:text-brand-teal transition-colors leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-xs text-brand-navy/70 line-clamp-2 leading-relaxed mb-3">
                        {item.desc}
                      </p>

                      <div className="flex items-center gap-4 text-xs">
                        <Link
                          href={`/actualites/${item.id}`}
                          target="_blank"
                          className="text-brand-teal font-semibold hover:underline inline-flex items-center gap-1"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          Consulter l&apos;article ↗
                        </Link>
                      </div>
                    </div>

                    <button
                      onClick={() => handleDelete(item.id, item.title)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-red-600 border border-red-200 bg-red-50 hover:bg-red-100 transition-colors shrink-0 cursor-pointer self-end sm:self-center"
                      title="Supprimer définitivement"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Supprimer
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
