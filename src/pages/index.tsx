import Banner from '@/Banner/template';
import Curriculumn from '@/Curriculum/template';
import Gnb from '@/Gnb/template';
import Hero from '@/Hero/template';
import IntroduceTrack from '@/IntroduceTrack/template';
import Lnb from '@/Lnb/template';
import Project from '@/Project/template';
import Inquiry from '@/Common/components/Inquiry';
import PageBanner from '@/Common/components/PageBanner';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  return (
    <>
      <Gnb />
      <Hero />
      <Lnb />
      <Project />
      <IntroduceTrack />
      <Banner />
      <Curriculumn />
      <Inquiry />
      {isVisible && <PageBanner />}
    </>
  );
}
