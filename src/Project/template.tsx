import Image from 'next/image';
import ProjectItem from '@/Project/components/ProjectItem';
import RecruitImg from '../../public/assets/unity_sold_out_mo.webp';
import { projectExamples } from '@/Project/copy';
import * as S from '@/Project/style';

export default function Project() {
  return (
    <S.Background id={'project'}>
      <S.ProjectSection>
        <div>
          <h3>누구나 시작할 수 있도록</h3>
          <h2>
            게임 업계 취업을 위한
            <br /> 게임 서버 개발 부트캠프
          </h2>
        </div>
        <S.SoldoutContent>
          <Image src={RecruitImg} alt="recruit" width={328} height={234} />
          <strong>
            Node.js 게임 서버 개발자 국비부트캠프는
            <br />
            스파르타 내일배움캠프가 유일합니다.
          </strong>
        </S.SoldoutContent>
      </S.ProjectSection>
      <S.ProjectSection>
        <div>
          <h3>프로젝트 예시</h3>
          <h2>
            실제 현업과 동일한
            <br /> 게임 서버를 ‘직접’ 개발합니다
          </h2>
          <p>
            아래 프로젝트 외에도 풋살 게임, 액션 게임, 전략 게임 등<br /> 다양한 장르의 게임을 직접
            개발해봅니다.
          </p>
        </div>
        <S.ProjectExamples>
          {projectExamples.map((item, index) => (
            <ProjectItem key={index} item={item} />
          ))}
        </S.ProjectExamples>
      </S.ProjectSection>
    </S.Background>
  );
}
