# Guide d'implémentation technique

Ce guide explique les étapes techniques pour implémenter le projet de CV et dossier de compétences.

## Structure des fichiers

```
cv-portfolio/
├── public/            # Fichiers statiques accessibles directement
│   ├── _redirects     # Configuration des redirections pour l'hébergement
│   ├── index.html     # Page de redirection vers le CV
│   ├── cv.html        # Page du CV
│   ├── competences.html # Page du dossier de compétences
│   └── styles.css     # Feuille de styles commune
├── src/               # Code source
│   ├── main.ts        # Point d'entrée JavaScript/TypeScript
│   ├── styles.css     # Styles (copiés dans public/)
│   ├── index.js       # Script de redirection
│   ├── cv.html        # Template du CV (copié dans public/)
│   └── competences.html # Template du dossier de compétences (copié dans public/)
└── package.json       # Configuration du projet
```

## Étapes de développement

1. **Configuration du projet**
   ```bash
   # Créer le projet de base
   mkdir -p cv-portfolio
   cd cv-portfolio

   # Initialiser avec Vite ou un autre bundler statique
   npm init -y
   npm install --save-dev vite
   ```

2. **Mise en place du HTML de base**
   - Créer la structure HTML pour le CV
   - Créer la structure HTML pour le dossier de compétences
   - Ajouter les balises meta pour SEO
   - Lier les polices Google Fonts
   - Lier les icônes Font Awesome

3. **Développement CSS**
   - Définir les variables CSS pour les couleurs et polices
   - Implémenter le reset CSS
   - Créer les styles de base (typographie, layout)
   - Développer les composants spécifiques (badges, barres de progression)
   - Ajouter les styles pour l'impression
   - Implémenter les media queries pour le responsive

4. **JavaScript minimal**
   - Script de redirection pour la page d'accueil
   - Fonction d'impression pour le CV
   - Éventuellement: interactions pour les barres de progression

5. **Optimisations**
   - Minification des assets
   - Compression des images si nécessaire
   - Tests cross-browser
   - Validation W3C

## Détails d'implémentation clés

### Variables CSS
```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #4b5563;
  --light-gray: #f3f4f6;
  --dark-gray: #374151;
  --accent-color: #3b82f6;
  --white: #ffffff;
  --font-main: 'Roboto', 'Arial', sans-serif;
  --font-heading: 'Poppins', 'Helvetica', sans-serif;
}
```

### Conteneur principal
```css
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
}
```

### Badges de compétences
```css
.skill-tag {
  background-color: var(--light-gray);
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.9rem;
}

.tech-skill {
  background-color: rgba(37, 99, 235, 0.1);
  color: var(--primary-color);
}

.soft-skill {
  background-color: rgba(16, 185, 129, 0.1);
  color: #059669;
}
```

### Barres de progression
```css
.progress-container {
  width: 100%;
  background-color: var(--light-gray);
  border-radius: 4px;
  margin: 0.5rem 0;
}

.progress-bar {
  height: 8px;
  border-radius: 4px;
  background-color: var(--primary-color);
}
```

### Styles d'impression
```css
@media print {
  body {
    background-color: white;
    font-size: 12pt;
  }

  .cv-container {
    box-shadow: none;
    padding: 0;
  }

  .no-print {
    display: none;
  }

  a {
    text-decoration: none;
    color: black;
  }
}
```

### Script d'impression
```javascript
// Bouton d'impression
document.getElementById('printButton').addEventListener('click', function() {
  window.print();
});
```

## Déploiement

1. **Préparation des fichiers**
   - Assurer que tous les fichiers sont dans le dossier `/public`
   - Vérifier les liens entre les pages

2. **Options de déploiement**
   - Netlify (facile et gratuit)
   - GitHub Pages
   - Vercel
   - Hébergement traditionnel

3. **Déploiement sur Netlify**
   ```bash
   # Installation des dépendances Netlify CLI
   npm install -g netlify-cli

   # Déploiement
   netlify deploy --prod
   ```

4. **Configuration des redirections**
   Créer un fichier `_redirects` dans le dossier `public`:
   ```
   /*    /index.html   200
   ```

## Tests et validation

- Tester sur différents navigateurs (Chrome, Firefox, Safari, Edge)
- Tester sur différents appareils (desktop, tablet, mobile)
- Tester l'impression du CV
- Valider HTML avec [W3C Validator](https://validator.w3.org/)
- Valider CSS avec [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
