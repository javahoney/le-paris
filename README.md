# Le Pari's — site web

Site vitrine du bar-restaurant **Le Pari's** (49 Av. de Paris, 45000 Orléans), construit avec [Astro](https://astro.build).

4 pages statiques :

- **Accueil** (`/`)
- **Carte** (`/carte`) — plats et boissons
- **Traiteur** (`/traiteur`)
- **Karaoké** (`/karaoke`) — liste de chansons avec recherche et chargement progressif

## Structure du projet

```text
/
├── public/               fichiers statiques (favicon, logo)
├── src/
│   ├── components/       composants Astro réutilisables
│   │   ├── karaoke/      composants spécifiques à la page Karaoké
│   │   ├── menu/         composants spécifiques à la Carte
│   │   └── traiteur/     composants spécifiques au Traiteur
│   ├── data/             contenu éditable (voir ci-dessous)
│   ├── layouts/          Layout.astro (nav + footer communs)
│   ├── pages/             une page par route
│   └── styles/           global.css (variables de la charte graphique)
└── CLAUDE.md             charte graphique (couleurs, polices, tailles, composants)
```

## Mettre à jour le contenu

Deux fichiers de données pilotent le contenu des pages, sans toucher au code :

- **`src/data/menu.json`** — les plats et catégories de boissons affichés sur la page Carte.
- **`src/data/karaoke.json`** — la liste des chansons (tableau `{ "title": "...", "artist": "..." }`), affichée sur la page Karaoké.

Modifier ces fichiers directement (format JSON) suffit à mettre le site à jour ; aucune autre modification n'est nécessaire.

## Charte graphique

Toutes les règles de design (couleurs, polices, tailles de titres, radius, composants) sont documentées dans [`CLAUDE.md`](./CLAUDE.md). À consulter avant toute modification visuelle.

## Commandes

| Commande | Action |
| :--- | :--- |
| `npm install` | Installe les dépendances |
| `npm run dev` | Démarre le serveur de développement local |
| `npm run build` | Build de production dans `./dist/` |
| `npm run preview` | Prévisualise le build de production en local |
| `npm run check` | Vérifie les types TypeScript/Astro du projet |

## Stack technique

- [Astro](https://docs.astro.build) (sortie statique, sans framework JS)
- CSS pur avec variables (`src/styles/global.css`), pas de préprocesseur ni de Tailwind
- Un peu de JavaScript client vanilla pour la recherche et le défilement infini de la page Karaoké, et le menu burger mobile
