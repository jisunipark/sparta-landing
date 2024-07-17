import Image from 'next/image';
import MenuIcon from '@/Gnb/components/MenuIcon';
import Logo from '../../public/assets/newLogo.a1d35235.svg';
import * as S from '@/Gnb/style';

export default function Gnb() {
  return (
    <S.Gnb>
      <Image src={Logo} alt="logo" width={134} height={40} />
      <MenuIcon />
    </S.Gnb>
  );
}
