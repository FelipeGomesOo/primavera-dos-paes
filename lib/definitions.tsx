interface Product {
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  id: string;
  content: string;
  status: string;
}

interface ProductCard {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: string;
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
