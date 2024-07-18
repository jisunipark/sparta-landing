import Image from 'next/image';
import inquiryImg from '../../../public/assets/channelTalkBtnMobileImage.png';
import * as S from '@/Common/style';

export default function Inquiry() {
  return (
    <S.Inquiry>
      <Image src={inquiryImg} alt="inquiry" width={64} height={70} />
    </S.Inquiry>
  );
}
