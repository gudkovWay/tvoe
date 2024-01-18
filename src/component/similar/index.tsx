import Image from "next/image";

import movies from "@/assets/movies.json"
import styles from "./Similar.module.scss";
import Link from "next/link";

interface SimilarProps {
  id: number;
  genres: string[];
}

const Similar: React.FC<SimilarProps> = ({ genres, id }) => {
  return (
    <section className={styles.similar}>
      <div className="container">
        <div className={styles.similar__wrapper}>
          <h3>Похожее</h3>
          <div className={styles.similar__wrapper_list}>
            {movies
              .filter((movie) => genres.includes(movie.characteristics.genres[0]))
              .filter((movie) => movie.id !== id)
              .slice(0, 7)
              .map((movie) => (
                <Link key={movie.id} href={`/movies/${movie.id}`}>
                  <div className={styles.similar__wrapper_card} key={movie.id}>
                    <Image src={movie.image} alt={movie.name} width={255} height={382} />
                    <div className="rating"><span className="rate">{movie.rate}</span></div>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Similar
