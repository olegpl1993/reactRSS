export interface FormData {
  name: string;
  date: string;
  music: string;
  gamer: boolean;
  red: boolean;
  green: boolean;
  image: string;
}

export interface Product {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  };
}
