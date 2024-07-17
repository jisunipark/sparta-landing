import LnbItem from '@/Lnb/components/LnbItem';
import { lnbItems } from '@/Lnb/copy';
import * as S from '@/Lnb/style';
import { useState } from 'react';

export default function Lnb() {
  const [activeItem, setActiveItem] = useState(lnbItems[0]);

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <S.Lnb>
      {lnbItems.map((item, index) => {
        return (
          <LnbItem key={index} isActive={item === activeItem} onClick={handleItemClick}>
            {item}
          </LnbItem>
        );
      })}
    </S.Lnb>
  );
}
