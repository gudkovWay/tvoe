import { useEffect, useState } from "react"
import { useRouter } from "next/router"

import Header from "@/component/header"
import HeroMovieModel from "@/component/hero/model/movie"
import Episodes from "@/component/episodes"
import Description from "@/component/description"
import Similar from "@/component/similar"
import Information from "@/component/information"

import { HeroRenderProps } from "@/assets/types"
import movies from "@/assets/movies.json"

const Movies = () => {
  const router = useRouter()

  const [currentMovie, setCurrentMovie] = useState<HeroRenderProps>({
    id: 0,
    name: "",
    image: "",
    rate: "",
    category: "",
    imageText: "",
    imageHero: "",
    description: "",
    characteristics: {
      year: "", parts: 0, premiere: "", country: "", originalName: "", minAge: "", fullDescription: "", mainGenre: "",
      amountEpisodes: [], genres: [], language: [], quality: [],
      amountTime: {
        firstEpisode: [],
        secondEpisode: [],
        thirdEpisode: []
      },
      episodesImage: []
    }
  })

  useEffect(() => {
    movies.find((movie) => {
      if (movie.id == Number(router.query.id)) {
        setCurrentMovie(movie)
      }
    })
  }, [router.query.id])

  return (
    <>
      <Header />
      <HeroMovieModel
        rate={currentMovie.rate}
        imageHero={currentMovie.imageHero}
        imageText={currentMovie.imageText}
        description={currentMovie.description}
        characteristics={currentMovie.characteristics}
      />

      <Episodes
        parts={currentMovie.characteristics.parts}
        amountEpisodes={currentMovie.characteristics.amountEpisodes}
        amountTime={currentMovie.characteristics.amountTime}
        episodesImage={currentMovie.characteristics.episodesImage}
      />
      
      <Description description={currentMovie.characteristics.fullDescription} />

      <Similar id={currentMovie.id} genres={currentMovie.characteristics.genres} />

      <Information 
        premiere={currentMovie.characteristics.premiere}
        originalName={currentMovie.characteristics.originalName}
        country={currentMovie.characteristics.country}
        genres={currentMovie.characteristics.genres}
        languages={currentMovie.characteristics.language}
        quality={currentMovie.characteristics.quality}
      />

    </>
  )
}

export default Movies
