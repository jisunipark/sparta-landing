import Gnb from '@/Gnb/template';
import Hero from '@/Hero/template';
import Lnb from '@/Lnb/template';
import Details from '@/Project/components/Details';

export default function Home() {
  return (
    <>
      <Gnb />
      <Hero />
      <Lnb />
      <Details />
    </>
  );
}
