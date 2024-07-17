import * as S from '@/Lnb/style';

export default function LnbItem({ children }: { children: string }) {
  return (
    <S.LnbItem>
      <span>{children}</span>
      <div />
    </S.LnbItem>
  );
}
