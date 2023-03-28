export interface FormData {
  name: string;
  date: string;
  music: string;
  gamer: boolean;
  color: 'red' | 'green';
  image: FileList;
}

export interface FormStateData {
  name: string;
  date: string;
  music: string;
  gamer: boolean;
  color: 'red' | 'green';
  image: string;
}

export interface Product {
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
}
