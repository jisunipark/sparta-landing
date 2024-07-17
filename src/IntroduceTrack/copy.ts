import { StaticImageData } from 'next/image';
import whyGameImg01 from '../../public/assets/game_server_market_1.webp';
import whyGameImg02 from '../../public/assets/game_server_market_2.webp';

export const whyGame: {
  image: StaticImageData;
  title: string;
  description: string;
}[] = [
  {
    image: whyGameImg01,
    title: '국내 게임 산업의 성장세',
    description:
      '국내 게임 시장은 계속해서 가파르게 성장하고 있고, 시장 규모가 커짐에 따라 자연스레 게임 개발자 수요도 늘어나고 있습니다.',
  },
  {
    image: whyGameImg02,
    title: '스타트업부터 대기업까지',
    description:
      '대형 게임 개발사뿐만 아니라 많은 스타트업에서도 Node.js를 활용하는 게임 서버 개발자를 찾고 있습니다.',
  },
];
