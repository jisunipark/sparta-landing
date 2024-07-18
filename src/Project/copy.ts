import { StaticImageData } from 'next/image';
import stackImg01 from '../../public/assets/project_logo1.png';
import stackImg02 from '../../public/assets/project_logo2.png';
import stackImg03 from '../../public/assets/project_logo3.png';

export const lnbItems: string[] = ['프로젝트', '트랙 소개', '커리큘럼', '취업 서포트', '모집 개요'];

export type ProjectExample = {
  id: string;
  title: string;
  description: string;
  video: string;
  techStack: StaticImageData;
  learnMore: string[];
};

export const projectExamples: ProjectExample[] = [
  {
    id: '01',
    title: '아이템 시뮬레이터 서비스',
    description:
      '현재 게임 아이템 상황 및 다른 사람들의 게임 아이템 상황을\n볼 수 있도록 정보를 제공하는 서비스',
    video:
      'https://static.spartacodingclub.kr/nbcamp/landing/gameLanding/gameServerProject/resized_game_video_1.mp4',
    techStack: stackImg01,
    learnMore: [
      '웹 프레임워크 - Node.js에서 가장 대표적인 웹 프레임워크인 Express.js 사용',
      '패키지 매니저 - 빠른 설치 속도와 우수한 패키지 관리를 지원하는 npm 또는 yarn 패키지 매니저 사용',
      '모듈 시스템 - 최신 JS 문법을 지원하는 ES6 모듈 시스템 또는 기본 CommonJS 모듈 시스템을 사용',
      '데이터베이스 - MongoDB Cloud에서 대여한 대표적인 NoSQL인 MongoDB Atlas 사용',
      'ODM - MongoDB의 데이터를 쉽게 읽고 쓰게 해주는 mongoose ODM 사용',
    ],
  },
  {
    id: '02',
    title: '데이터베이스 모델링',
    description:
      '로그인/인증 기능을 통해 게임 아이템 시뮬레이터 고도화\n(아이템 테이블과 유저 데이터베이스 모델링)',
    video:
      'https://static.spartacodingclub.kr/nbcamp/landing/gameLanding/gameServerProject/resized_game_video_2.mp4',
    techStack: stackImg02,
    learnMore: [
      '웹 프레임워크 - Node.js에서 가장 대표적인 웹 프레임워크인 Express.js 사용',
      '패키지 매니저 - 빠른 설치 속도와 우수한 패키지 관리를 지원하는 npm 또는 yarn 패키지 매니저 사용',
      '모듈 시스템 - 기본 모듈 시스템(CommonJS, type: "commonjs") 또는 ES6 부터 도입 된 모듈 시스템(ESModule, type: "module") 이용',
      '데이터베이스 - AWS RDS를 이용하여 MySQL사용',
      'ORM(Object Relational Mapping) : MySQL의 데이터를 쉽게 읽고 쓰게 해주는 Prisma 사용',
    ],
  },
  {
    id: '03',
    title: '타워 디펜스 게임',
    description:
      '실제 게임 서버를 구현하고 클라이언트 코드에 연결하기\n(인증/관리, WebSocket 통신, 클라이언트 연동)',
    video:
      'https://static.spartacodingclub.kr/nbcamp/landing/gameLanding/gameServerProject/resized_game_video_3.mp4',
    techStack: stackImg03,
    learnMore: [
      '게임 서버의 주요 기능인 회원가입, 로그인, 게임 데이터 관리 등을 설계',
      'Node.js에서 WebSocket 서버를 구축하고 클라이언트와 서버 간의 실시간 데이터 전송을 구현',
      'JWT를 이용한 사용자 인증을 구현하고 유저 별 게임 데이터를 관리',
      '서버에서 게임 상태를 관리하고 클라이언트와 동기화하고 게임 오버 조건, 스코어 관리 기능 구현',
      'Git을 사용해 소스 코드 버전 관리를 하고 제공된 게임 클라이언트를 통해 서버와 WebSocket 기반으로 통신',
    ],
  },
];
