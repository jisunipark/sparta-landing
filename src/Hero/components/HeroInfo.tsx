import * as S from '@/Hero/style';

export function HeroInfo({ label, children }: { label: string; children: string }) {
  return (
    <S.HeroInfoItem>
      <span>{label}</span>
      <span>{children}</span>
    </S.HeroInfoItem>
  );
}
