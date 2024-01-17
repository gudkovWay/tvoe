import Image from "next/image"

import { HeroRenderProps } from "@/assets/types"
import { checkWord } from "@/assets/checkWord"
import styles from "./Hero.module.scss"

const HeroMovieModel: React.FC<HeroRenderProps> = ({ description, id, imageHero, imageText, characteristics, rate }) => {
  return (
    <section className={styles.hero__movie}>
      <div className="container">
        <div className={styles.hero__movie__wrapper}>
          <div className={styles.hero__movie__wrapper_text}>
            <Image src={imageText} width={367} height={132} alt="movie text" className={styles.hero__movie__wrapper_textImage}/>
            <div className={styles.hero__movie__wrapper_text_characteristic}>
              <p className={styles.rating__movie}>{rate}</p>
              <p>{characteristics.year}</p>
              <p>{characteristics.parts} {checkWord(characteristics.parts, ['сезон', 'сезона', 'сезонов'])}</p>
              <p>{characteristics.country}</p>
              <p>{characteristics.genres[0]}</p>
              <p>{characteristics.minAge}</p>
            </div>
            <p>{description}</p>
          </div>
          <div className={styles.hero__movie__wrapper_buttons}>
            Смотреть
            Трейлер
            Закладки
            Любимый
          </div>
          <Image src={imageHero} width={1400} height={780} alt="Preview movie" />
        </div>
      </div>
    </section>
  )
}

export default HeroMovieModel
