import * as S from '@/Project/style';
import Image from 'next/image';
import LearnMore from '@/Project/components/LearnMore';
import { ProjectExample } from '@/Project/copy';

export default function ProjectItem({ item }: { item: ProjectExample }) {
  const { id, title, description, video, techStack, learnMore } = item;

  return (
    <S.ProjectItemWrapper>
      <div>
        <video autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
        </video>
        <S.ProjectItemMainInfo>
          <div>
            <S.ProjectItemSubheading>프로젝트 {id}</S.ProjectItemSubheading>
            <S.ProjectItemTitle>{title}</S.ProjectItemTitle>
          </div>
          <S.ProjectItemDesc>{description}</S.ProjectItemDesc>
          <Image src={techStack} alt="stackstack" />
        </S.ProjectItemMainInfo>
      </div>
      <LearnMore learnMore={learnMore} />
    </S.ProjectItemWrapper>
  );
}
