import HeroCards from '@/Hero/components/HeroCards';
import * as S from '@/Hero/style';

export default function AnimatedHeroCards() {
  return (
    <S.CardWrapper>
      <HeroCards />
      <HeroCards />
    </S.CardWrapper>
  );
}
