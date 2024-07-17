import Details from '@/Project/Details';
import Hero from '@/Hero/components/Hero';
import Lnb from '@/Lnb/components/Lnb';
import Gnb from '@/Gnb/components/Gnb';

export default function Home() {
  return (
    <div>
      <Gnb />
      <Hero />
      <Lnb />
      <Details />
    </div>
  );
}
