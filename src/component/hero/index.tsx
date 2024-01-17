import Hero from "./Hero";
import movies from "@/assets/movies.json";

const HeroContainer = () => {
  return (
    <>
      {movies
        .filter((movie) => movie.id !== 0)
        .slice(0,1)
        .map((movie) => (
          <Hero
            key={movie.id}
            id={movie.id}
            imageHero={movie.imageHero}
            imageText={movie.imageText}
            rate={movie.rate}
            characteristic={movie.characteristics}
            description={movie.description}
          />
        ))}
    </>
  )
};

export default HeroContainer;
