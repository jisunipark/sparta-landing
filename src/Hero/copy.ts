import { StaticImageData } from 'next/image';
import MobileCard00 from '../../public/assets/mo_card_0.png';
import MobileCard01 from '../../public/assets/mo_card_1.png';
import MobileCard02 from '../../public/assets/mo_card_2.png';
import MobileCard03 from '../../public/assets/mo_card_3.png';

type HeroInfoItem = {
  label: string;
  value: string;
};

export const heroInfo: HeroInfoItem[] = [
  { label: '교육 기간', value: '24.08.05(월) ~ 24.12.23(월)' },
  { label: '교육 방법', value: '100% 온라인 (평일 오전 9시 ~ 오후 9시)' },
  { label: '수강료', value: '전액 무료 (내일배움카드 국비지원)' },
  { label: '모집 마감', value: '24.08.02(금)' },
];

export const heroCards: StaticImageData[] = [
  MobileCard00,
  MobileCard01,
  MobileCard02,
  MobileCard03,
  MobileCard00,
  MobileCard01,
  MobileCard02,
  MobileCard03,
];
