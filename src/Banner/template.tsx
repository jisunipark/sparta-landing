import * as S from '@/Banner/style';
import BannerImg from '../../public/assets/event.png';
import Image from 'next/image';
import ArrowRight from '../../public/assets/arrow_right.svg';

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
        <S.Cta>
          <span>혜택 자세히 보기</span>
          <Image src={ArrowRight} alt="arrow" />
        </S.Cta>
      </S.Banner>
    </S.Background>
  );
}
