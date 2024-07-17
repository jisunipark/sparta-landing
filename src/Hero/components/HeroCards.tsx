import Image from 'next/image';
import * as S from '@/Hero/style';
import { heroCards } from '@/Hero/copy';

export default function HeroCards() {
  return (
    <S.HeroCards>
      {heroCards.map((card, index) => (
        <Image key={index} src={card} alt={'hero-card-' + index} width={135} height={141} />
      ))}
    </S.HeroCards>
  );
}
