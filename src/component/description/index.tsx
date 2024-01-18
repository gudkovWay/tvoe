import Icons from "../icons"
import styles from "./Description.module.scss"

interface DescriptionProps {
  description: string
}

const Description: React.FC<DescriptionProps> = ({ description }) => {
  return (
    <section className={styles.description}>
      <div className="container">
        <div className={styles.description__wrapper}>
          <h3>Описание</h3>
          <span>{description}</span>
          <div className={styles.description__wrapper_warning}>
            <Icons iconName="warning" />
            <p>Контент может содержать сцены курения и употребления спиртных напитков. Курение и чрезмерное употребление алкоголя вредит вашему здоровью.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Description
