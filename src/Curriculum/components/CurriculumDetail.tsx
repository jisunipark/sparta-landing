import { CurriculumDetails } from '@/Curriculum/copy';
import * as S from '@/Curriculum/style';

export default function CurriculumDetail({ details }: { details: CurriculumDetails }) {
  return (
    <S.DetailBox>
      {details.map((detail, index) => {
        const { subheading, title, goals } = detail;
        return (
          <S.DetailItem key={index}>
            <div>
              {subheading && <S.DetailSubheading>{subheading}</S.DetailSubheading>}
              <S.DetailTitle>{title}</S.DetailTitle>
            </div>
            <div>
              <S.DetailGoals>
                {goals.map((goal, index) => (
                  <li key={index}>
                    <span>•</span>
                    <span>{goal}</span>
                  </li>
                ))}
              </S.DetailGoals>
              <S.Separator />
            </div>
          </S.DetailItem>
        );
      })}
    </S.DetailBox>
  );
}
