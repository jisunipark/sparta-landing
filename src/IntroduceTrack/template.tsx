import { whyGame } from '@/IntroduceTrack/copy';
import * as S from '@/IntroduceTrack/style';
import Image from 'next/image';

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
    </S.Background>
  );
}
