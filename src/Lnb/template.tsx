import LnbItem from '@/Lnb/components/LnbItem';
import { lnbItems } from '@/Lnb/copy';
import * as S from '@/Lnb/style';

export default function Lnb() {
  return (
    <S.Lnb>
      {lnbItems.map((item, index) => {
        return <LnbItem key={index}>{item}</LnbItem>;
      })}
    </S.Lnb>
  );
}
