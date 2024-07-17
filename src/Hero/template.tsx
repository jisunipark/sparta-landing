import Image from 'next/image';
import { heroCards, heroInfo } from '@/Hero/copy';
import HeroLogos from '../../public/assets/game_hero_logos.png';
import HeroBackground from '../../public/assets/hero_mo_grid.png';
import * as S from '@/Hero/style';
import { HeroInfo } from '@/Hero/components/HeroInfo';

export default function Hero() {
  return (
    <S.Hero>
      <Image src={HeroBackground} alt="hero-background" />
      <S.TitleSection>
        <Image src={HeroLogos} alt="hero-logos" width={247} height={26} />
        <S.HeroTitle>
          게임 업계 취업
          <br />
          <span>4개월</span>만에 현실로
        </S.HeroTitle>
        <S.Cta>참가 신청하기</S.Cta>
      </S.TitleSection>
      <S.CardWrapper>
        <S.HeroCards>
          {heroCards.map((card, index) => (
            <Image key={index} src={card} alt={'hero-card-' + index} width={135} height={141} />
          ))}
        </S.HeroCards>
      </S.CardWrapper>
      <S.InfoSection>
        <S.HeroInfo>
          {heroInfo.map((info) => (
            <HeroInfo key={info.label} label={info.label}>
              {info.value}
            </HeroInfo>
          ))}
        </S.HeroInfo>
      </S.InfoSection>
    </S.Hero>
  );
}
