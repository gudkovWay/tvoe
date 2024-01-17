export type MoviesProps = {
  movieId: number;
  movieName: string;
  movieImage: string;
  movieRating: string;
  movieIndex?: number;
  category: "New" | "Watch";
}
export type HeroRenderProps = {
  description: string;
  rate: string;
  id: number;
  imageHero: string;
  imageText: string;
  characteristics: {
    year: string; parts: number; country: string; genres: string[]; minAge: string
  };
}
