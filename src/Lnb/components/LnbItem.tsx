import * as S from '@/Lnb/style';

export default function LnbItem({
  isActive,
  onClick,
  children,
}: {
  isActive: boolean;
  onClick: (item: string) => void;
  children: string;
}) {
  const handleItemClick = () => onClick(children);

  return (
    <S.LnbItem isActive={isActive} onClick={handleItemClick}>
      <span>{children}</span>
      <div />
    </S.LnbItem>
  );
}
