# Charte graphique — Le Pari's

Bar-Restaurant, 49 Av. de Paris, 45000 Orléans

## Polices
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Permanent+Marker&family=Work+Sans:wght@400;500;600&display=swap" rel="stylesheet">
```
- Titres, logo, prix : `'Cormorant Garamond', serif` — 600/700
- Tags manuscrits (eyebrows courts uniquement) : `'Permanent Marker', cursive` — 400
- Corps de texte, boutons, nav : `'Work Sans', sans-serif` — 400/500/600

## Couleurs
- Bordeaux (primaire) : `#7A1735`
- Orange (accent) : `#E8821E`
- Crème (fond clair) : `#FBF3E7`
- Brun bois (hover primaire) : `#5C3A21`
- Texte courant : `#3A1F1F`
- Texte secondaire : `#8a6a5a`
- Texte clair sur fond bordeaux/sombre : `#F3E4D2`
- Blanc pur (labels sur fond bordeaux) : `#FFFFFF`

### Mode sombre (page Karaoké uniquement)
- Fond page : `#2E1710`
- Fond nav : `#241209`
- Fond carte/input : `#3A2015`
- Fond hover carte : `#4a2a1a`
- Texte secondaire clair : `#c9a888`

Répartition : fond clair/sombre dominant, bordeaux en structure, orange en accent seulement (jamais en grande surface).

## Radius
`border-radius: 0` partout. Seules exceptions :
- Barre de recherche : `30px` (pilule)
- Icônes réseaux sociaux (footer) : `50%` (cercle)

## Tailles de titres
- H1 hero home : `clamp(3.2rem, 9vw, 5rem)`
- H1 page interne : `clamp(3.2rem, 8vw, 4.4rem)` clair / `clamp(2.6rem, 7vw, 3.6rem)` sombre
- H2 section : `2rem` à `2.3rem`
- H2 catégorie : `1.65rem`
- Logo nav : `1.5rem` à `1.7rem`
- Tag manuscrit : `0.85rem` à `1.15rem`
- Corps de texte : `0.9rem` à `1.05rem`
- Prix : `1.1rem`, Cormorant Garamond bold

## Composants

**Boutons**
- `.btn--primary` : fond `#7A1735`, texte `#FBF3E7`, hover fond `#E8821E`
- `.btn--secondary` : fond transparent, bordure + texte `#7A1735`, hover fond `#7A1735` texte `#FBF3E7`
- Padding `14px 30px`, Work Sans 600, `0.9rem`

**Navlinks**
- Fond clair : fond blanc, texte bordeaux, bordure `1.5px solid #7A173522`, hover/actif fond bordeaux texte crème
- Fond sombre : fond `#3A2015`, texte crème, bordure `1.5px solid #E8821E44`, hover/actif fond orange texte `#241209`
- Padding `8px 18px`

**Cartes**
- Standard : dégradé `linear-gradient(160deg, #ffffff, #fdf8f1)`, ombre `0 2px 14px rgba(122,23,53,0.08)`
- Mise en avant (1 seule par page max) : dégradé radial bordeaux `radial-gradient(circle at 15% 15%, #8a1e3f, #7A1735, #6b1430)`, ombre `0 8px 28px rgba(122,23,53,0.25)`

**Liste menu**
Nom — ligne pointillée (`1.5px dotted #5C3A2144`, flex:1) — prix (Cormorant Garamond bold)

**Badge flottant** (type "réserver une soirée")
`position:fixed`, incliné `rotate(-4deg)`, fond orange (variante verte `#3F6B4A` pour "réserver une table"), ombre portée, icône téléphone + numéro cliquable (`tel:`). Desktop : centré sur le bord droit. Mobile (`<760px`) : ancré en bas à droite.

**Icônes**
- Filigrane décoratif (fond de carte) : opacité `0.07–0.10`, rotation `-14deg`
- Fonctionnelles discrètes : opacité `0.35`, rotation variée `-12deg` à `+12deg`
- Réseaux sociaux : cercle plein bordeaux, hover orange, icône crème

## Grilles
- Largeur max contenu : `1000px` (Home/Carte) / `900px` (Karaoké)
- Galerie photos : `repeat(3,1fr)` → `1fr` mobile (<700px)
- Catégories boissons : `1fr 1fr` → `1fr` mobile (<760px)
- Infos pratiques : `1fr 1fr 1fr` → `1fr` mobile (<700px)
- Padding horizontal standard : `24px` desktop → `12px` mobile (<760px)

## Mobile (<760px)
- Bords d'écran (`.wrap`, `.section`, hero, nav, footer, cards…) : `12px` au lieu de `24px`.
- Nav : menu burger (3 barres) ouvrant un panneau déroulant avec les 4 liens ; les liens desktop sont masqués.
- Footer : les 4 liens de nav restent visibles (mêmes boutons qu'en desktop), pas de masquage.
- Titres H1/H2/H3 réduits d'un cran par rapport au desktop (ex. H1 hero home `2.6rem`, H2 section `1.6rem`, H2 catégorie `1.4rem`, H3 `1.2rem`).
- Cartes (menu, prestations, formule) : padding réduit à `20px 16px` pour laisser de la place aux prix.
- Liste menu : le nom passe à la ligne (`white-space: normal`) si trop long plutôt que de pousser le prix hors de la carte.
- Badges villes (Traiteur) : taille réduite (`0.72rem`, padding `6px 12px`).

## Règle clé
Orange (`#E8821E`) et Permanent Marker restent identiques sur toutes les pages, clair ou sombre — ce sont les fils conducteurs de la marque.

## CSS variables

```css
:root {
  --color-bordeaux: #7A1735;
  --color-bordeaux-dark: #5C3A21;
  --color-orange: #E8821E;
  --color-creme: #FBF3E7;
  --color-text: #3A1F1F;
  --color-text-secondary: #8a6a5a;
  --color-text-on-dark: #F3E4D2;
  --color-white: #FFFFFF;

  --color-dark-bg: #2E1710;
  --color-dark-nav: #241209;
  --color-dark-card: #3A2015;
  --color-dark-card-hover: #4a2a1a;
  --color-dark-text-secondary: #c9a888;

  --color-green: #3F6B4A;

  --font-title: 'Cormorant Garamond', serif;
  --font-hand: 'Permanent Marker', cursive;
  --font-body: 'Work Sans', sans-serif;

  --radius-none: 0;
  --radius-pill: 30px;
  --radius-circle: 50%;
}
```
