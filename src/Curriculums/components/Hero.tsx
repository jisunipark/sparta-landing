import React from 'react';
import HeroLogos from '../../../public/assets/game_hero_logos.png';
import HeroBackground from '../../../public/assets/hero_mo_grid.png';
import Image, { StaticImageData } from 'next/image';
import * as S from '@/Curriculums/style';
import { HeroInfo } from '@/Curriculums/copy';
import MobileCard0 from '../../../public/assets/mo_card_0.png';
import MobileCard1 from '../../../public/assets/mo_card_1.png';
import MobileCard02 from '../../../public/assets/mo_card_2.png';
import MobileCard03 from '../../../public/assets/mo_card_3.png';

type HeroInfoItem = {
  label: string;
  value: string;
};

const heroInfo: HeroInfoItem[] = [
  { label: '교육 기간', value: '24.08.05(월) ~ 24.12.23(월)' },
  { label: '교육 방법', value: '100% 온라인 (평일 오전 9시 ~ 오후 9시)' },
  { label: '수강료', value: '전액 무료 (내일배움카드 국비지원)' },
  { label: '모집 마감', value: '24.08.02(금)' },
];

const heroCards: StaticImageData[] = [MobileCard0, MobileCard1, MobileCard02, MobileCard03];

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
        <S.Button>참가 신청하기</S.Button>
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
