import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import MenuIcon from '@/Gnb/components/MenuIcon';
import Logo from '../../public/assets/newLogo.a1d35235.svg';
import * as S from '@/Gnb/style';

export default function Gnb() {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');

  const lastScrollY = useRef(0);

  const { ref } = useInView({ threshold: 0 });

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY.current && scrollDirection !== 'down') {
      setScrollDirection('down');
      setIsVisible(false);
    } else if (currentScrollY < lastScrollY.current && scrollDirection !== 'up') {
      setScrollDirection('up');
      setIsVisible(true);
    }
    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollDirection]);

  return (
    <S.Gnb ref={ref} isVisible={isVisible}>
      <Image src={Logo} alt="logo" width={134} height={40} />
      <MenuIcon />
    </S.Gnb>
  );
}
