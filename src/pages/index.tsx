import Banner from '@/Banner/template';
import Curriculumn from '@/Curriculum/template';
import Gnb from '@/Gnb/template';
import Hero from '@/Hero/template';
import IntroduceTrack from '@/IntroduceTrack/template';
import Lnb from '@/Lnb/template';
import Project from '@/Project/template';

export default function Home() {
  return (
    <>
      <Gnb />
      <Hero />
      <Lnb />
      <Project />
      <IntroduceTrack />
      <Banner />
      <Curriculumn />
    </>
  );
}
