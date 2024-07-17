import * as S from '@/Project/style';
import RecruitImg from '../../../public/assets/unity_sold_out_mo.webp';
import Image from 'next/image';

export default function Details() {
  return (
    <div>
      <S.DetailSection>
        <S.TitleWrapper>
          <h3>누구나 시작할 수 있도록</h3>
          <h2>
            게임 업계 취업을 위한
            <br />
            게임 서버 개발 부트캠프
          </h2>
        </S.TitleWrapper>
        <S.ContentWrapper>
          <Image src={RecruitImg} alt="recruit" width={328} height={234} />
          <strong>
            Node.js 게임 서버 개발자 국비부트캠프는
            <br />
            스파르타 내일배움캠프가 유일합니다.
          </strong>
        </S.ContentWrapper>
      </S.DetailSection>
      <S.DetailSection>
        <S.TitleWrapper>
          <h3>프로젝트 예시</h3>
          <h2>
            실제 현업과 동일한
            <br />
            게임 서버를 ‘직접’ 개발합니다
          </h2>
          <p>
            아래 프로젝트 외에도 풋살 게임, 액션 게임, 전략 게임 등<br /> 다양한 장르의 게임을 직접
            개발해봅니다.
          </p>
        </S.TitleWrapper>
        <S.ContentWrapper>
          <Image src={RecruitImg} alt="recruit" width={328} height={234} />
          <strong>
            Node.js 게임 서버 개발자 국비부트캠프는
            <br />
            스파르타 내일배움캠프가 유일합니다.
          </strong>
        </S.ContentWrapper>
      </S.DetailSection>
      <S.DetailSection>
        <S.TitleWrapper>
          <h3>왜 게임 서버 개발자인가요?</h3>
          <h2>
            높아지는 게임 업계 연봉
            <br />
            늘어나는 서버 개발자 수요
          </h2>
          <p>
            아래 프로젝트 외에도 풋살 게임, 액션 게임, 전략 게임 등<br /> 다양한 장르의 게임을 직접
            개발해봅니다.
          </p>
        </S.TitleWrapper>
        <S.ContentWrapper>
          <Image src={RecruitImg} alt="recruit" width={328} height={234} />
          <strong>
            Node.js 게임 서버 개발자 국비부트캠프는
            <br />
            스파르타 내일배움캠프가 유일합니다.
          </strong>
        </S.ContentWrapper>
      </S.DetailSection>
      <S.DetailSection>
        <S.TitleWrapper>
          <h3>트랙 소개</h3>
          <h2>
            시장이 원하는 기술로
            <br />
            대체 불가한 인재가 됩니다
          </h2>
        </S.TitleWrapper>
        <S.ContentWrapper>
          <Image src={RecruitImg} alt="recruit" width={328} height={234} />
          <strong>
            Node.js 게임 서버 개발자 국비부트캠프는
            <br />
            스파르타 내일배움캠프가 유일합니다.
          </strong>
        </S.ContentWrapper>
      </S.DetailSection>
    </div>
  );
}
