import * as S from '@/Common/style';

export default function PageBanner() {
  return (
    <S.Banner>
      <S.BannerText>
        <span>게임 서버 개발자 취업!</span>
        <span>남은 자리 20/100 🎮</span>
      </S.BannerText>
      <S.BannerCta>참가 신청하기</S.BannerCta>
    </S.Banner>
  );
}
