import CurriculumDetail from '@/Curriculum/components/CurriculumDetail';
import { Curriculum } from '@/Curriculum/copy';
import * as S from '@/Curriculum/style';
import ArrowDownIcon from '@/svg/ArrowDownIcon';
import ArrowUpIcon from '@/svg/ArrowUpIcon';
import { useState } from 'react';

export default function CurriculumItem({ curriculum }: { curriculum: Curriculum }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleOpen = () => setIsOpen(!isOpen);

  const { id, title, description, tag, details } = curriculum;

  return (
    <S.CurriculumItem onClick={handleToggleOpen}>
      <div>
        <div>
          <S.CurriculumItemNumber>{id}</S.CurriculumItemNumber>
          <S.CurriculumItemTitle>{title}</S.CurriculumItemTitle>
          <S.CurriculumItemDesc>{description}</S.CurriculumItemDesc>
          <S.CurriculumItemTags>
            {tag.map((tag, index) => (
              <div key={index}>{tag}</div>
            ))}
          </S.CurriculumItemTags>
        </div>
        <button>
          {isOpen ? (
            <ArrowUpIcon width={20} height={20} />
          ) : (
            <ArrowDownIcon width={20} height={20} />
          )}
        </button>
      </div>
      {isOpen && (
        <S.CurriculumItemDetailWrapper>
          {details.map((detail, index) => (
            <CurriculumDetail key={index} details={detail} />
          ))}
        </S.CurriculumItemDetailWrapper>
      )}
    </S.CurriculumItem>
  );
}
