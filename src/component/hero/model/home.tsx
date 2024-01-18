import Image from "next/image"
import Link from "next/link"

import { HeroRenderProps } from "@/assets/types"
import styles from "../Hero.module.scss"

const HeroHomeModel: React.FC<HeroRenderProps> = ({  description, id, imageHero, imageText }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__wrapper}>
        <div className={styles.hero__wrapper__text}>
          <Image width={576} height={228} alt="hero" src={imageText} />
          <p>{description}</p>
          <div className={styles.hero__wrapper__buttons}>
            <Link href={`/movies/${id}`}>
              <button className="primaryButton">Смотреть</button>
            </Link>
            <Link href={`/movies/${id}#description`}>
              <button className="secondaryButton">О фильме</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.hero__image}>
        <Image width={1205} height={800} alt="hero" src={imageHero} />
      </div>
    </section>
  )
}

export default HeroHomeModel

