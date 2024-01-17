import { useEffect, useState } from "react"

import Header from "@/component/header"
import Hero from "./hero"
import movies from "@/assets/movies.json"
import { useRouter } from "next/router"

const Movies = () => {
  const router = useRouter()
  const [movieId, setMovieId] = useState(0)
  const [movieName, setMovieName] = useState("")
  const [movieRate, setMovieRate] = useState("")
  const [heroImage, setHeroImage] = useState("")
  const [heroText, setHeroText] = useState("")
  const [movieDescription, setMovieDescription] = useState("")
  const [movieCharacteristics, setMovieCharacteristics] = useState({})

  useEffect(() => {
    movies.map((movie) => {
      if (movie.id == router.query.id) {
        setMovieId(movie.id)
        setMovieName(movie.name)
        setMovieRate(movie.rate)
        setHeroImage(movie.imageHero)
        setHeroText(movie.imageText)
        setMovieDescription(movie.description)
        setMovieCharacteristics(movie.characteristics)
      }
    })
  }, [router.query.id])

  return (
    <>
      <Header />
      <Hero 
        characteristics={movieCharacteristics}
        description={movieDescription}
        imageText={heroText}
        imageHero={heroImage}
        rate={movieRate}
        id={movieId}
      />
    </>
  )
}

export default Movies
