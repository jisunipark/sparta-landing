import * as S from '@/Banner/style';
import BannerImg from '../../public/assets/event.png';
import Image from 'next/image';
import ArrowRight from '../../public/assets/arrow_right.svg';
import Link from 'next/link';

export default function Banner() {
  return (
    <S.Background>
      <S.Banner>
        <div>
          <Image src={BannerImg} alt="banner" />
          <h3>기간 한정 혜택</h3>
          <h2>
            이번주에 종료되는
            <br />
            혜택이 있어요!
          </h2>
        </div>
        <Link href="https://nbcamp.spartacodingclub.kr/gameserver-event" passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <S.Cta>
              <span>혜택 자세히 보기</span>
              <Image src={ArrowRight} alt="arrow" />
            </S.Cta>
          </a>
        </Link>
      </S.Banner>
    </S.Background>
  );
}
