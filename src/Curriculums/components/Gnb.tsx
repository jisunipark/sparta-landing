import Image from 'next/image';
import Logo from '../../../public/assets/newLogo.a1d35235.svg';
import * as S from '@/Curriculums/style';

function MenuIcon() {
  return (
    <S.MenuButton>
      <S.MenuIconBarItem />
      <S.MenuIconBarItem />
      <S.MenuIconBarItem />
    </S.MenuButton>
  );
}

export default function Gnb() {
  return (
    <S.Gnb>
      <Image src={Logo} alt="logo" width={134} height={40} />
      <MenuIcon />
    </S.Gnb>
  );
}
