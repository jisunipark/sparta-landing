import Image from 'next/image';
import { aboutTrack, whyGame } from '@/IntroduceTrack/copy';
import CheckIcon from '../../public/assets/check_icon.svg';
import * as S from '@/IntroduceTrack/style';

export default function IntroduceTrack() {
  return (
    <S.Background>
      <S.IntoduceTrackSection>
        <div>
          <h3>왜 게임 서버 개발자인가요?</h3>
          <h2>
            높아지는 게임 업계 연봉
            <br />
            늘어나는 서버 개발자 수요
          </h2>
        </div>
        <S.WhyGameWrapper>
          {whyGame.map((item, index) => (
            <S.WhyGameItem key={index}>
              <Image src={item.image} alt="whyGameImg" />
              <div>
                <S.WhyGameItemTitle>{item.title}</S.WhyGameItemTitle>
                <S.WhyGameItmeDesc>{item.description}</S.WhyGameItmeDesc>
              </div>
            </S.WhyGameItem>
          ))}
        </S.WhyGameWrapper>
      </S.IntoduceTrackSection>
      <S.IntoduceTrackSection>
        <div>
          <h3>트랙 소개</h3>
          <h2>
            시장이 원하는 기술로
            <br />
            대체 불가한 인재가 됩니다
          </h2>
        </div>
        <div>
          <h6>게임 서버의 대세, Node.js</h6>
          <S.AboutTrackWrapper>
            {aboutTrack['nodeJs'].map((item, index) => (
              <S.AboutTrackItem key={index}>
                <S.AboutTrackItemTitle>{item.title}</S.AboutTrackItemTitle>
                <S.AboutTrackItemDesc>{item.description}</S.AboutTrackItemDesc>
              </S.AboutTrackItem>
            ))}
          </S.AboutTrackWrapper>
        </div>
        <div>
          <h6>4개월 후, 더 많은 취업 기회</h6>
          <S.AboutTrackWrapper>
            {aboutTrack['careerOpportunity'].map((item, index) => (
              <S.AboutTrackItem key={index}>
                <Image src={item.image} alt="aboutTrackImg" />
                <S.AboutTrackItemTitle>{item.title}</S.AboutTrackItemTitle>
                <S.AboutTrackItemDesc>{item.description}</S.AboutTrackItemDesc>
                <S.AboutTrackCheckList>
                  {item.checkList.map((check, index) => (
                    <li key={index}>
                      <Image src={CheckIcon} alt="체크표시 아이콘" />
                      <span>{check}</span>
                    </li>
                  ))}
                </S.AboutTrackCheckList>
              </S.AboutTrackItem>
            ))}
          </S.AboutTrackWrapper>
        </div>
      </S.IntoduceTrackSection>
    </S.Background>
  );
}
