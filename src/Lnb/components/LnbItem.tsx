import { lnbItemId } from '@/Lnb/copy';
import * as S from '@/Lnb/style';
import Link from 'next/link';

export default function LnbItem({
  isActive,
  onClick,
  children,
}: {
  isActive: boolean;
  onClick: (item: string) => void;
  children: string;
}) {
  const handleItemClick = () => {
    onClick(children);
  };

  return (
    <Link href={lnbItemId[children]}>
      <S.LnbItem isActive={isActive} onClick={handleItemClick}>
        <span>{children}</span>
        <div />
      </S.LnbItem>
    </Link>
  );
}
