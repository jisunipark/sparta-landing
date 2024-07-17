import { lnbItems } from '@/Lnb/copy';
import * as S from '@/Lnb/style';

export default function Lnb() {
  return (
    <S.Lnb>
      {lnbItems.map((item, index) => {
        return (
          <S.LnbItem key={index}>
            <span>{item}</span>
            <div />
          </S.LnbItem>
        );
      })}
    </S.Lnb>
  );
}
