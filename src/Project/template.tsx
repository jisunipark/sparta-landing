import ProjectItem from '@/Project/components/ProjectItem';
import { projectExamples } from '@/Project/copy';
import * as S from '@/Project/style';

export default function Project() {
  return (
    <S.Background id={'project'}>
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
