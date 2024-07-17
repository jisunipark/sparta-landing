import Details from '@/Curriculum/components/Details';
import Gnb from '@/Curriculum/components/Gnb';
import Hero from '@/Curriculum/components/Hero';
import Lnb from '@/Curriculum/components/Lnb';

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
