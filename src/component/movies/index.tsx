import MoviesCard from './Card'
import movies from '@/assets/movies.json'
import styles from './Movie.module.scss'

type MovieProps = {
  category: "New" | "Watch"
}

const Movie: React.FC<MovieProps> = ({ category }) => {
  return (
    <>
      {category === "New" ? (
        <article>
          <div className="container"><h3 className={styles.movie__title}>Новинки</h3></div>
          <section className={styles.movie}>
            <div className="container">
              <div className={styles.movie__wrapper}>
                {movies
                  .filter((movie) => movie.category?.includes("new"))
                  .slice(0, 4)
                  .map((movie) => (
                    <MoviesCard
                      movieId={movie.id}
                      movieName={movie.name}
                      movieRating={movie.rate}
                      movieImage={movie.image}
                      key={movie.id}
                      category="New"
                    />
                  ))}
              </div>
            </div>
          </section>
        </article >
      ) : (
        <article className="last">
          <div className="container" style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '20px' }}>
            <span className={styles.movie__titleDecor}>топ-10</span>
            <h3 className={styles.movie__title}>просмотров за неделю</h3>
          </div>
            <section className={styles.movie}>
              <div className="container">
                <div className={styles.movie__wrapper}>
                  {movies
                    .filter((movie) => movie.category?.includes("watch"))
                    .slice(0, 3)
                    .map((movie, index) => (
                      <MoviesCard
                        movieId={movie.id}
                        movieName={movie.name}
                        movieRating={movie.rate}
                        movieImage={movie.image}
                        key={movie.id}
                        movieIndex={index + 1}
                        category="Watch"
                      />
                    ))}
                </div>
              </div>
            </section>
        </article>
      )}
    </>
  )
}

export default Movie
