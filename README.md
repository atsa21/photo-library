# Photo Library

An Angular photo library application with an infinite random photostream and the ability to save photos to a personal Favorites collection.

**[Live Demo](https://atsa21.github.io/photo-library/)**

## Features

- **Infinite Scroll** — custom directive using `IntersectionObserver`, no third-party libraries
- **Favorites** — add/remove photos, persisted in `localStorage` across sessions
- **Single Photo View** — full-screen photo page with remove from favorites action
- **Lazy-loaded Routes** — each feature loaded on demand via `loadComponent`
- **Responsive Grid** — 3-column layout adapting to viewport size

## Tech Stack

- Angular 21
- Angular Material
- SCSS
- Signals for reactive state management
- Standalone components architecture

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Install & Run

```bash
git clone https://github.com/atsa21/photo-library.git
cd photo-library
npm install
ng serve
```

Open [http://localhost:4200](http://localhost:4200)

### Run Tests

```bash
ng test                          # watch mode
ng test --watch=false            # single run
ng test --code-coverage          # with coverage report
```

## Project Structure

```
src/app/
├── core/
│   ├── constants/               # Breikpoint, filters, navList constants
│   ├── models/                  # Photo interfaces
│   ├── services/                # PhotosService, FavoritesService
│   ├── mocks/                   # PhotosMock
├── features/
│   ├── photos/                  # Photo grid with infinite scroll
│   ├── favorites/               # Saved photos list
│   └── photo-details/           # Single photo full-screen view
└── shared/
    └── components/              # Header with navigation, card grid, loader, photo card
    └── directives/              # InfiniteScrollDirective
```

## Routes

| Path | Description |
|------|-------------|
| `/` | Random photostream with infinite scroll |
| `/favorites` | List of saved favorite photos |
| `/photos/:id` | Single photo detail view |

## API

Images provided by [Lorem Picsum](https://picsum.photos):
- Photo list: `GET https://picsum.photos/v2/list?page={page}&limit={limit}`
- Sized image: `https://picsum.photos/id/{id}/{width}/{height}.webp`

API calls include a simulated 200–300ms delay to emulate real-world network conditions.

## Key Implementation Details

- **Infinite scroll** is implemented as a reusable standalone directive (`InfiniteScrollDirective`) that can be applied to any scrollable container
- **Favorites persistence** uses `localStorage` with Angular Signals (`signal`, `computed`) for reactive state
- **Image optimization** — grid uses 400×300 thumbnails in WebP format; detail view loads 1200×900
- **No external state management libraries** — lightweight signal-based service pattern