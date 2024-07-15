import * as S from '@/Curriculums/style';
import RecruitImg from '../../../public/assets/unity_sold_out_mo.webp';
import Image from 'next/image';

export default function Details() {
  return (
    <div>
      <S.DetailSection>
        <S.Wrapper>
          <S.Subtitle>누구나 시작할 수 있도록</S.Subtitle>
          <S.Title>
            게임 업계 취업을 위한
            <br />
            게임 서버 개발 부트캠프
          </S.Title>
        </S.Wrapper>
        <S.ContentWrapper>
          <Image src={RecruitImg} alt="recruit" width={328} height={234} />
          <S.Strong>
            Node.js 게임 서버 개발자 국비부트캠프는
            <br />
            스파르타 내일배움캠프가 유일합니다.
          </S.Strong>
        </S.ContentWrapper>
      </S.DetailSection>
    </div>
  );
}
