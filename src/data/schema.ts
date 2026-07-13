import { business } from './business';
import type { MenuData } from './types';

function parsePrice(price: string): string {
  const match = price.match(/[\d,.]+/);
  if (!match) return price;
  return parseFloat(match[0].replace(',', '.')).toFixed(2);
}

function postalAddress() {
  return {
    '@type': 'PostalAddress',
    streetAddress: business.address.streetAddress,
    postalCode: business.address.postalCode,
    addressLocality: business.address.addressLocality,
    addressCountry: business.address.addressCountry,
  };
}

export function buildRestaurantSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Restaurant', 'BarOrPub'],
    '@id': `${business.url}#restaurant`,
    name: business.name,
    url: business.url,
    telephone: business.telephone,
    priceRange: '€€',
    servesCuisine: 'Brasserie',
    address: postalAddress(),
    openingHoursSpecification: business.openingHours.map((spec) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: spec.days,
      opens: spec.opens,
      closes: spec.closes,
    })),
    amenityFeature: {
      '@type': 'LocationFeatureSpecification',
      name: 'Karaoké',
      value: true,
    },
    hasMenu: `${business.url}carte/`,
    hasMap: business.hasMap,
    sameAs: business.sameAs,
  };
}

function buildMenuSection(name: string, items: { name: string; price: string }[]) {
  return {
    '@type': 'MenuSection',
    name,
    hasMenuItem: items.map((item) => ({
      '@type': 'MenuItem',
      name: item.name,
      offers: {
        '@type': 'Offer',
        price: parsePrice(item.price),
        priceCurrency: 'EUR',
      },
    })),
  };
}

export function buildMenuSchema(menu: MenuData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: `La Carte — ${business.name}`,
    url: `${business.url}carte/`,
    hasMenuSection: [
      buildMenuSection(menu.plats.title, menu.plats.items),
      ...menu.categories.map((cat) => buildMenuSection(cat.title, cat.items)),
    ],
  };
}

export function buildTraiteurServiceSchema(zones: string[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Traiteur événementiel',
    name: `Traiteur — ${business.name}`,
    url: `${business.url}traiteur/`,
    areaServed: zones,
    provider: {
      '@type': 'Restaurant',
      name: business.name,
      telephone: business.telephone,
      url: business.url,
      address: postalAddress(),
    },
  };
}
