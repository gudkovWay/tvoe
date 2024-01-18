import Image from 'next/image';
import { useState } from 'react';

import styles from './Episodes.module.scss'
import { checkWord } from '@/assets/checkWord';

interface EpisodesProps {
  parts: number;
  amountEpisodes: number[];
  amountTime: {
    firstEpisode: number[];
    secondEpisode: number[];
    thirdEpisode: number[];
  };
  episodesImage: string[]
}

const Episodes: React.FC<EpisodesProps> = ({ parts, amountEpisodes, amountTime, episodesImage }) => {

  const [currentEpisode, setCurrentEpisode] = useState(1);

  return (
    <section className={styles.episodes}>
      <div className="container">
        <div className={styles.episodes__wrapper}>
          <div className={styles.episodes__wrapper__header}>
            <h3>Сезоны</h3>
            <div className={styles.episodes__wrapper__header__content}>
              {amountEpisodes.map((_, index) => (
                <div className={`${styles.episodes__wrapper__header__content__part} ${++index === currentEpisode ? styles.part__active : null}`}
                  key={index}>{index}</div>
              ))}
            </div>
          </div>
          <div className={styles.episodes__wrapper__content}>
            <div className={styles.episodes__wrapper__content__image}>
              {episodesImage.map((image, index) => (
                <Image src={image} width={544} height={306} alt="Превью серии" key={index} />
              ))}
            </div>
            <div className={styles.episodes__wrapper__content__info}>
              <div className={styles.episodes__wrapper__content__info_episode}>
                {new Array(amountEpisodes[1]).fill(null).slice(0, 4).map((_, index) => (     // useMemo в продакшене 
                  <span key={index}>{++index} серия</span>
                ))}
              </div>
              <div className={styles.episodes__wrapper__content__info_time}>
                {amountTime.firstEpisode.slice(0, 4).map((time, index) => (
                  <p key={index}>{time} {checkWord(time, ["минуту", "минуты", "минут"])}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Episodes;
