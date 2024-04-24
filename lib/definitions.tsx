interface Product {
  id: string;
  slug: string;
  title: string;
  category: ProductCategory["slug"];
  qualities: ProductTag[];
  alerts: ProductTag[];
  pricing: {
    store: {
      unit: string;
      weight: string;
      price: string;
    };
    delivery: {
      unit: string;
      weight: string;
      price: string;
    };
  };
  conservation: string;
  content: string;
  ingredients: string;
  when: string;
  stores: Store[];
  images: FaturedImage[];
  featuredImage: FaturedImage;
}

interface ProductCard {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: FaturedImage;
  category: ProductCategory["slug"];
  featured: boolean;
  qualities: ProductCategory[];
}

interface ProductCategory {
  slug: string;
  id: string;
  name: string;
}

interface ProductTag {
  slug: string;
  id: string;
  name: string;
}

interface FaturedImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface Store {
  id: string;
  slug: string;
  title: string;
  featuredImage: {
    large: FaturedImage;
    small: FaturedImage;
    thumb: FaturedImage;
  };
  Logradouro: string;
  Bairro: string;
  Telefone: string;
  TuesdayToFridayHours: string;
  SaturdayHours: string;
  MapsLink: { title: string; url: string };
}
interface FAQ {
  id: string;
  title: string;
  content: string;
}
