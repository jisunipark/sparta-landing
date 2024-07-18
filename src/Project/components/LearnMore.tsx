import { useState } from 'react';
import ArrowDownIcon from '@/svg/ArrowDownIcon';
import * as S from '@/Project/style';
import ArrowUpIcon from '@/svg/ArrowUpIcon';

export default function LearnMore({ learnMore }: { learnMore: string[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleOpen = () => setIsOpen(!isOpen);

  return (
    <S.LearnMoreWrapper onClick={handleToggleOpen}>
      <div>
        <span>프로젝트 더 알아보기</span>
        {isOpen ? <ArrowUpIcon width={16} height={16} /> : <ArrowDownIcon width={16} height={16} />}
      </div>

      {isOpen && (
        <S.LearnMoreList>
          {learnMore.map((item, index) => (
            <li key={index}>
              <span>•</span>
              <span>{item}</span>
            </li>
          ))}
        </S.LearnMoreList>
      )}
    </S.LearnMoreWrapper>
  );
}
