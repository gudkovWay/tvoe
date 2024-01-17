import HeroHomeModel from './model/home';
import { HeroRenderProps } from '@/assets/types';

const Hero: React.FC<HeroRenderProps> = ({ description, id, imageHero, imageText, characteristic, rate }) => {
  return (
    <HeroHomeModel
      description={description}
      id={id}
      imageHero={imageHero}
      imageText={imageText}
    />
  )
}

export default Hero
