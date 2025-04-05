# Structure des Thèmes pour CV et Dossier de Compétences

Ce dossier contient différents thèmes visuels qui peuvent être appliqués au CV et au dossier de compétences. Chaque thème est défini par un ensemble de variables CSS qui définissent les couleurs, les ombres, les bordures et d'autres caractéristiques visuelles.

## Comment fonctionnent les thèmes

Chaque thème est défini dans un fichier CSS distinct qui redéfinit les variables CSS principales du projet. Pour changer de thème, il suffit de charger le fichier CSS correspondant après le fichier CSS principal.

## Structure de variables d'un thème

Chaque thème définit les variables CSS suivantes :

### Couleurs principales
```css
--primary-color     /* Couleur principale, utilisée pour les titres, boutons, etc. */
--secondary-color   /* Couleur secondaire, utilisée pour le texte et éléments secondaires */
--light-gray        /* Couleur claire pour les fonds */
--dark-gray         /* Couleur foncée pour les textes */
--accent-color      /* Couleur d'accent pour les surbrillances */
--white             /* Couleur blanche pour les fonds */
--background-color  /* Couleur de fond de la page */
```

### Typographie
```css
--font-main         /* Police principale pour le texte */
--font-heading      /* Police pour les titres */
```

### Éléments spécifiques
```css
--card-background   /* Couleur de fond des cartes/conteneurs */
--card-shadow       /* Ombre portée des cartes */
--tech-skill-bg     /* Fond des badges de compétences techniques */
--tech-skill-color  /* Couleur du texte des badges de compétences techniques */
--soft-skill-bg     /* Fond des badges de compétences transversales */
--soft-skill-color  /* Couleur du texte des badges de compétences transversales */
--heading-border    /* Bordure sous les titres */
--button-hover      /* Couleur au survol des boutons */
--project-card-border /* Bordure des cartes de projet */
```

## Thèmes disponibles

### 1. Thème par défaut
Le thème standard utilisé par défaut, avec des couleurs professionnelles.
- Fichier: `default.css`
- Palette: Bleu royal, gris foncé, blanc

### 2. Thème Solar
Un thème clair avec des couleurs pastel douces et une ambiance aérée.
- Fichier: `solar.css`
- Palette: Bleu pastel, violet doux, fond très clair

### 3. Thème Dark
Une version sombre du CV avec un contraste élevé pour une meilleure lisibilité.
- Fichier: `dark.css`
- Palette: Fond sombre, texte clair, accents bleus

### 4. Thème Tech/Geek
Un thème futuriste inspiré des interfaces high-tech avec des touches de néon.
- Fichier: `tech.css`
- Palette: Noir, vert/cyan néon, effets lumineux

## Comment appliquer un thème

Il y a plusieurs façons d'appliquer un thème :

### 1. Méthode statique
Inclure le fichier CSS du thème après le CSS principal dans le HTML :
```html
<link rel="stylesheet" href="styles.css">
<link rel="stylesheet" href="themes/dark.css">
```

### 2. Méthode dynamique (JavaScript)
Utiliser JavaScript pour changer de thème à la volée :
```javascript
function setTheme(themeName) {
  const themeLink = document.getElementById('theme-css');
  if (themeLink) {
    themeLink.href = `themes/${themeName}.css`;
  } else {
    const link = document.createElement('link');
    link.id = 'theme-css';
    link.rel = 'stylesheet';
    link.href = `themes/${themeName}.css`;
    document.head.appendChild(link);
  }
  // Optionnel : sauvegarder la préférence
  localStorage.setItem('theme', themeName);
}
```

## Personnalisation

Pour créer un nouveau thème, dupliquez l'un des fichiers de thème existants et modifiez les valeurs des variables selon vos préférences. Les modifications prendront effet automatiquement lors du chargement de votre nouveau fichier de thème.
