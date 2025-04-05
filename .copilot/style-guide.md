# Guide de Style - CV et Dossier de Compétences

## Palette de couleurs
- **Couleur primaire**: #2563eb (Bleu royal)
  - Utilisée pour les titres, boutons et éléments d'accent
- **Couleur secondaire**: #4b5563 (Gris foncé)
  - Utilisée pour le texte et les éléments secondaires
- **Fond principal**: #f3f4f6 (Gris clair)
  - Utilisé comme couleur de fond de la page
- **Fond des sections**: #ffffff (Blanc)
  - Utilisé pour le fond des conteneurs
- **Accent tech**: #dbeafe (Bleu clair)
  - Pour les badges de compétences techniques
- **Accent soft**: #d1fae5 (Vert clair)
  - Pour les badges de compétences transversales

## Typographie
- **Police de titres**: 'Poppins', 'Helvetica', sans-serif
  - Poids: 600 (semi-gras) pour les titres
  - Tailles:
    - H1: 2.5rem
    - H2: 1.75rem
    - H3: 1.25rem
- **Police de texte**: 'Roboto', 'Arial', sans-serif
  - Poids: 400 (normal) pour le texte courant
  - Poids: 700 (gras) pour les éléments à mettre en valeur
  - Taille de base: 1rem (16px)
  - Interligne: 1.6

## Mise en page
- **Conteneur principal**: max-width: 1100px, marges auto
- **Espacement**:
  - Marge externe des sections: 2rem
  - Marge interne des conteneurs: 2rem
  - Espacement entre les éléments: 1.5rem
  - Espacement entre les items: 1.25rem
- **Grille**: Utilisation de flexbox pour les layouts
- **Bordures et coins**:
  - Border-radius: 8px pour les conteneurs
  - Border-radius: 4px pour les éléments plus petits

## Composants UI
### Badges de compétences
- Padding: 0.3rem 0.6rem
- Border-radius: 4px
- Taille de police: 0.9rem

### Barres de progression
- Hauteur: 8px
- Border-radius: 4px
- Background: #f3f4f6
- Progress: #2563eb

### Cartes de projet
- Border: 1px solid #e5e7eb
- Border-radius: 8px
- Padding: 1.5rem
- Transition sur hover pour effet d'élévation

### Boutons
- Padding: 0.5rem 1rem
- Border-radius: 4px
- Couleur de fond: #2563eb (primaire) ou #4b5563 (secondaire)
- Couleur de texte: #ffffff
- Transition sur hover

## Icônes
- Bibliothèque: Font Awesome 6.5.1
- Taille: 1rem pour les icônes inline
- Taille: 1.25rem pour les icônes de compétences

## Responsive Design
- **Breakpoint tablette**: max-width: 768px
  - Padding réduit: 1.5rem
  - Headers en colonnes plutôt qu'en ligne
- **Print**:
  - Background blanc
  - Suppression des ombres
  - Suppression des éléments de navigation

## Animations et transitions
- Transition des cartes de projet: transform 0.3s ease, box-shadow 0.3s ease
- Transition des boutons: background-color 0.3s ease
