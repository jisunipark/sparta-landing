import * as S from '@/Curriculums/styles/Common.style';

export function HeroInfo({ label, children }: { label: string; children: string }) {
  return (
    <S.HeroInfoItem>
      <span>{label}</span>
      <span>{children}</span>
    </S.HeroInfoItem>
  );
}