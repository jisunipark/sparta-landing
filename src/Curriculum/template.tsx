import CurriculumItem from '@/Curriculum/components/CurriculumItem';
import { curriculums } from '@/Curriculum/copy';
import * as S from '@/Curriculum/style';

export default function Curriculumn() {
  return (
    <S.Background>
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

{
  /* <S.CurriculumItem key={index}>
              <S.CurriculumItemNumber>{id}</S.CurriculumItemNumber>
              <S.CurriculumItemTitle>{title}</S.CurriculumItemTitle>
              <S.CurriculumItemDesc>{description}</S.CurriculumItemDesc>
              {tag.map((tag, index) => (
                <S.CurriculumItemTag key={index}>{tag}</S.CurriculumItemTag>
              ))}
              {details.map((detail, index) => {
                return detail.map((subDetail, index) => {
                  return
                });
              }}
            </S.CurriculumItem> */
}
