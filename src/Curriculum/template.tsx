import CurriculumItem from '@/Curriculum/components/CurriculumItem';
import { curriculums } from '@/Curriculum/copy';
import * as S from '@/Curriculum/style';

export default function Curriculumn() {
  return (
    <S.Background id={'curriculum'}>
      <S.CurriculumSection>
        <h3>상세 커리큘럼</h3>
        <h2>
          포트폴리오까지 한 번에, <br />
          프로젝트 기반의 커리큘럼
        </h2>
        <S.CurriculumItemWrapper>
          {curriculums.map((curriculum, index) => (
            <CurriculumItem key={index} curriculum={curriculum} />
          ))}
        </S.CurriculumItemWrapper>
      </S.CurriculumSection>
    </S.Background>
  );
}
