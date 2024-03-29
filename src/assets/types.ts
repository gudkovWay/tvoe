export type MoviesProps = {
  movieId: number;
  movieName: string;
  movieImage: string;
  movieRating: string;
  movieIndex?: number;
  category: "New" | "Watch";
}
export type HeroRenderProps = {
  id: number;
  name: string;
  image: string;
  rate: string;
  category: string;
  imageText: string;
  imageHero: string;
  description: string;
  characteristics: {
    year: string; parts: number; premiere: string; country: string; originalName: string; minAge: string; mainGenre: string; fullDescription: string;
    amountEpisodes: number[]; genres: string[]; language: string[]; quality: string[];
    amountTime: {
      firstEpisode: number[];
      secondEpisode: number[];
      thirdEpisode: number[]
    };
    episodesImage: string[]
  };
}

export type HeroHomeProps = {
  description: string;
  id: number;
  imageHero: string;
  imageText: string
}

export type HeroMovieModelProps = {
  rate: string;
  description: string;
  imageHero: string;
  imageText: string;
  characteristics: { year: string; parts: number; country: string; mainGenre: string; minAge: string; };
}
