import Image from "next/image"

import Icons from "@/component/icons"
import styles from "./HeroMovie.module.scss"
import { HeroMovieModelProps } from "@/assets/types"
import { checkWord } from "@/utils/checkWord"


const HeroMovieModel: React.FC<HeroMovieModelProps> = ({ rate, description, imageHero, imageText, characteristics }) => {

  return (
    <section className={styles.hero__movie}>
      <div className="container">
        <div className={styles.hero__movie__wrapper}>
          <div className={styles.hero__movie__wrapper_text}>
            <Image src={imageText} width={367} height={132} alt="movie text" className={styles.hero__movie__wrapper_textImage} />
            <div className={styles.hero__movie__wrapper_text_characteristic}>
              <div className={styles.hero__movie__wrapper_text_characteristic_items}>
                <p className={styles.rating__movie}>{rate}</p>
                <p>{characteristics.year}</p>
                <p>{characteristics.parts} {checkWord(characteristics.parts, ['сезон', 'сезона', 'сезонов'])}</p>
                <p>{characteristics.country}</p>
                <p>{characteristics.mainGenre}</p>
                <p>{characteristics.minAge}</p>
              </div>
              <div className={styles.hero__movie__wrapper_text_characteristic_description}>
                <p>{description}</p>
              </div>
            </div>
          </div>
          <div className={styles.hero__movie__wrapper_buttons}>
            <button className="primaryButton">Смотреть</button> 
            <button className="secondaryButton">Трейлер</button> 
            <button className="secondaryButton miniButton"><Icons iconName="favorite"/></button> 
            <button className="secondaryButton miniButton"><Icons iconName="likeMovie"/></button> 
          </div>
        </div>
        <Image src={imageHero} width={1400} height={780} alt="Preview movie" className={styles.hero__movie__wrapper_image} />
      </div>
    </section>
  )
}

export default HeroMovieModel
