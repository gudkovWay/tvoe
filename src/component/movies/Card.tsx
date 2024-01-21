import Image from 'next/image'
import Link from 'next/link'

import styles from './Movie.module.scss'
import { MoviesProps } from '@/assets/types'

const MoviesCard: React.FC<MoviesProps> = ({ movieId, movieName, movieImage, movieRating, movieIndex, category }) => {
  return (
    <div className={styles.movie__content}>
      <Link href={`/movies/${movieId}`}>
        <div className={{
          New: `${movieId === 1 ? styles.movie__content_image_active : styles.movie__content_image}`,
          Watch: `${styles.movie__content_image + " " + styles.movie__content_imageDecor}`
        }[category]}>

          {category === "Watch" ? (
            <span className={styles.movie__content_imageDecor_top}>{movieIndex}</span>
          ) : null}

          <div className={styles.movie__content_rate}>
            <Image width={398} height={597} alt="Превью фильма" src={movieImage} />
            <div className="rating">
              <span className="rate">{movieRating}</span>
            </div>
          </div>
        </div>

        {category === "New" ? (
          <p>{movieName}</p>
        ) : null}

      </Link>
    </div>
  )
}

export default MoviesCard
