# HAC Group - Site Web Corporate

Site web institutionnel moderne et responsive pour HAC Group (African Canadian Holding Group), développé avec Next.js, React, et Tailwind CSS.

## 🏢 À Propos

HAC Group est une société constituée selon le droit canadien et membre actif de la prestigieuse chambre de commerce ACBC (African Canadian Business Chamber). Notre mission est de jouer un rôle de pont stratégique entre le Canada et l'Afrique, en créant des synergies concrètes et durables pour le développement économique.

## ✨ Fonctionnalités

- **Design Moderne et Corporate** : Interface utilisateur soignée avec une palette de couleurs professionnelle (navy profond, teal, blanc)
- **Entièrement Responsive** : Optimisé pour mobile, tablette et desktop
- **Animations Fluides** : Transitions et animations subtiles utilisant Framer Motion
- **Navigation Intuitive** : Menu de navigation responsive avec menu mobile
- **Sections Clés** :
  - Page d'accueil avec présentation complète
  - Section "À propos" avec mission, vision et valeurs
  - Secteurs d'activité détaillés
  - Stratégie et projets avec timeline interactive
  - Formulaire de contact fonctionnel (mailto)
- **Optimisé pour la Performance** : Images optimisées avec Next.js Image
- **Accessibilité** : Structure sémantique et contrastes conformes aux standards

## 🛠️ Technologies Utilisées

- **Framework** : Next.js 14 (App Router)
- **Langage** : React 18
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **Icônes** : Lucide React
- **Optimisation Images** : Next.js Image

## 📋 Prérequis

- Node.js 18.x ou supérieur
- npm ou yarn
- Git

## 🚀 Installation

1. **Cloner le repository**
   ```bash
   git clone <repository-url>
   cd Hac
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Démarrer le serveur de développement**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Ouvrir le navigateur**
   ```
   http://localhost:3000
   ```

## 📁 Structure du Projet

```
Hac/
├── public/
│   └── images/              # Images statiques (logo, photos)
├── src/
│   ├── app/
│   │   ├── a-propos/        # Page À propos
│   │   ├── contact/         # Page Contact
│   │   ├── secteurs/        # Page Secteurs d'activité
│   │   ├── strategie/       # Page Stratégie
│   │   ├── globals.css     # Styles globaux
│   │   ├── layout.js        # Layout principal
│   │   └── page.js          # Page d'accueil
│   └── components/
│       ├── AnimatedSection.jsx  # Composant d'animation
│       ├── Footer.jsx          # Footer du site
│       ├── Navbar.jsx          # Barre de navigation
│       └── SectionImage.jsx    # Composant image avec overlay
├── tailwind.config.js       # Configuration Tailwind
├── next.config.mjs          # Configuration Next.js
├── package.json             # Dépendances du projet
└── README.md                # Documentation
```

## 🎨 Personnalisation

### Couleurs

Les couleurs du site sont définies dans `tailwind.config.js` :

```javascript
colors: {
  brand: {
    teal: '#00A896',           // Couleur principale (accent)
    'teal-dark': '#008F7F',    // Teal foncé (hover)
    'teal-light': '#E0F7F5',   // Teal clair (backgrounds)
    navy: '#0F2137',           // Navy principal (texte)
    'navy-deep': '#0A0F1A',    // Navy foncé (backgrounds)
    'off-white': '#F9FAFB',    # Blanc cassé (backgrounds)
    'gray-warm': '#F3F4F6',    // Gris chaud (backgrounds)
    'gray-mid': '#9CA3AF',     // Gris moyen (texte secondaire)
    'gray-line': '#E5E7EB',    // Gris clair (bordures)
    accent: '#C8A96E',         // Couleur d'accentuation
  },
}
```

### Typographie

La typographie utilise la police Inter avec les tailles personnalisées définies dans `tailwind.config.js` :

- `text-display` : 4.5rem (titres hero)
- `text-heading-1` : 3.25rem (titres principaux)
- `text-heading-2` : 2.5rem (sous-titres)
- `text-heading-3` : 1.75rem (titres de section)
- `text-body-lg` : 1.125rem (texte éditorial)
- `text-body` : 1rem (texte standard)
- `text-caption` : 0.875rem (légendes)

## 📱 Responsive Design

Le site est entièrement responsive avec les breakpoints suivants :

- **Mobile** : < 768px
- **Tablette** : 768px - 1024px
- **Desktop** : 1024px - 1280px
- **Large Desktop** : > 1280px

## 🌐 Déploiement

### Vercel (Recommandé)

1. Pusher le code sur GitHub/GitLab/Bitbucket
2. Importer le projet sur [Vercel](https://vercel.com)
3. Vercel détectera automatiquement Next.js et configurera le build
4. Déployer

### Autres Plateformes

Le site peut être déployé sur n'importe quelle plateforme supportant Node.js :

- Netlify
- AWS Amplify
- DigitalOcean
- Heroku

## 📧 Contact

Pour toute question ou suggestion concernant le site web :

- **Email** : hac@hacgroupcongo.com
- **Adresse** : 104, Colonel Ebeya, Golf, Gombe, Kinshasa - RD Congo

## 👨‍💻 Développement

### Scripts Disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Démarrer le serveur de production
npm start

# Linter
npm run lint
```

### Conventions de Code

- Utiliser des composants fonctionnels React avec hooks
- Suivre les conventions de nommage de React (PascalCase pour les composants)
- Utiliser Tailwind CSS pour le styling
- Maintenir une structure de composants modulaire et réutilisable
- Commenter le code complexe ou non évident

## 📝 Licence

© 2026 HAC Group. Tous droits réservés.

## 🙏 Remerciements

Développé par Phrasia Mosengo

---

**Note** : Ce projet est un site vitrine corporate pour HAC Group. Pour toute modification ou demande de fonctionnalité, veuillez contacter l'équipe de développement.
