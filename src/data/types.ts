export type CategoryIconName = 'plats' | 'chaudes' | 'aperitifs' | 'bieres' | 'vins' | 'softs' | 'cocktails';

export interface MenuItem {
  name: string;
  note?: string;
  price: string;
  featured?: boolean;
}

export interface MenuCategory {
  slug: string;
  eyebrow: string;
  title: string;
  icon: CategoryIconName;
  items: MenuItem[];
}

export interface MenuData {
  plats: {
    eyebrow: string;
    title: string;
    items: MenuItem[];
  };
  categories: MenuCategory[];
}
