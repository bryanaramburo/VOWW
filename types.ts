
export type Language = 'en' | 'es';

export interface NavLink {
  key: string;
  path: string;
  en: string;
  es: string;
  subLinks?: NavLink[];
}

export interface LocationInfo {
  id: string;
  badge: { en: string; es: string };
  address: string;
  phone: string;
  hours: {
    en: string[];
    es: string[];
  };
  note: { en: string; es: string };
  mapUrl: string;
}

export interface Review {
  id: number;
  author: string;
  time: string;
  text: { en: string; es: string };
  rating: number;
}

export interface Service {
  id: number;
  title: { en: string; es: string };
  description: { en: string; es: string };
  icon: string;
}

export interface Category {
  id: string;
  name: { en: string; es: string };
  image: string;
}
