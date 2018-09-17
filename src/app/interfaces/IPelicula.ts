export interface IPelicula {
  id: number;
  titulo: string;
  titulo_original: string;
  backdrop_path: string;
  poster_path: string;
  popularidad: number;
  vote_average: number;
  descripcion: string;
  frase_celebre?: string;
}
