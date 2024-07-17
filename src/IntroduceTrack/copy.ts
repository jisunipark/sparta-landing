import { StaticImageData } from 'next/image';
import whyGameImg01 from '../../public/assets/game_server_market_1.webp';
import whyGameImg02 from '../../public/assets/game_server_market_2.webp';
import aboutTrackImg01 from '../../public/assets/programmer.png';
import aboutTrackImg02 from '../../public/assets/pm.png';
import aboutTrackImg03 from '../../public/assets/qa.png';

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

export const aboutTrack: {
  nodeJs: { title: string; description: string }[];
  careerOpportunity: {
    image: StaticImageData;
    title: string;
    description: string;
    checkList: string[];
  }[];
} = {
  nodeJs: [
    {
      title: '클라이언트 호환성',
      description: 'Node.js는 Unity, Unreal과 같은 게임 클라이언트와 빠르고 쉽게 통신합니다.',
    },
    {
      title: 'JavaScript 언어',
      description:
        'JavaScript는 쉽게 배우고 사용할 수 있는 전 세계 사용량 1위 프로그래밍 언어입니다.',
    },
    {
      title: '쉬운 학습 곡선',
      description:
        '쉽고 빠르게 익힐 수 있어 입문 장벽이 낮으며 사용자 친화적인 인터페이스를 제공합니다.',
    },
  ],
  careerOpportunity: [
    {
      image: aboutTrackImg01,
      title: '게임 서버 개발자',
      description: '개발 클라이언트와 서버 간의 통신 담당',
      checkList: [
        '기능, 시스템, 트래픽 관리',
        '게임 서비스의 Infrastructure 관리, 강화',
        '모니터링 및 로깅 시스템을 구성',
      ],
    },
    {
      image: aboutTrackImg02,
      title: '게임 Tech PM',
      description: '프로젝트의 기술적 목표 및 실행 계획 수립',
      checkList: [
        '개발자와 협업하여 원활한 프로젝트 진행',
        '프로젝트 일정, 예산, 리소스, 위험 요소 등을 관리하고, 진행 상황을 모니터링',
      ],
    },
    {
      image: aboutTrackImg03,
      title: '백엔드 개발자',
      description: '웹 프론트엔드와 서버 간의 통신 개발 담당',
      checkList: [
        'Node.js를 활용한 서버 어플리케이션 개발',
        'JavaScript를 기반으로 대규모 트래픽 처리',
      ],
    },
  ],
};
