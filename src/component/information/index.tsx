import styles from "./Information.module.scss"

interface InformationProps {
  premiere: string;
  originalName: string;
  country: string;
  genres: string[];
  languages: string[];
  quality: string[];
}

const Information: React.FC<InformationProps> = ({premiere, originalName, country, genres, languages, quality}) => {
  return (
    <section className={styles.information}>
      <div className="container">
        <div className={styles.information__wrapper}>
          <h3>Информация</h3>
          <ul className={styles.information__wrapper__list}>
            <li>
              <span>Премьера в мире</span>
              <p>{premiere}</p>
            </li>
            <li>
              <span>Страна</span>
              <p>{country}</p>
            </li>
            <li>
              <span>Язык аудиодорожки</span>
              <p>{languages.join(', ')}</p>
            </li>
            <li>
              <span>Оригинальное название</span>
              <p>{originalName}</p>
            </li>
            <li>
              <span>Жанры</span>
              <p>{genres.join(', ')}</p>
            </li>
            <li>
              <span>Качество</span>
              <p className={styles.quality}>{quality}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Information
