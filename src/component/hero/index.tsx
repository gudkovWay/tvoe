import movies from "@/assets/movies.json";
import HeroHomeModel from "./model/home";

const Hero = () => {
  return (
    <>
      {movies
        .filter((movie) => movie.id !== 0)
        .slice(0, 1)
        .map((movie) => (
          <HeroHomeModel
            key={movie.id}
            id={movie.id}
            imageHero={movie.imageHero}
            imageText={movie.imageText}
            description={movie.description}
          />
        ))}
    </>
  )
};

export default Hero;
