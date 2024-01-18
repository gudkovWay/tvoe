import { useEffect, useState } from "react"

import Header from "@/component/header"
import Hero from "./hero"
import movies from "@/assets/movies.json"
import { useRouter } from "next/router"
import Episodes from "@/component/episodes"
import { HeroRenderProps } from "@/assets/types"

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
      <Hero
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

    </>
  )
}

export default Movies
