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

export interface Photo {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
  url_l: string;
  height_l: number;
  width_l: number;
}

export interface ApiResponse {
  photos: {
    page: number;
    pages: number;
    perpage: number;
    total: number;
    photo: Photo[];
  };
  stat: string;
}

export interface PhotoState {
  photoArr: Photo[];
  isNotFind: boolean;
  isLoading: boolean;
}
