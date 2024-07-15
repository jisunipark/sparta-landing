import * as S from '@/Curriculums/style';

const lnbItems: string[] = ['프로젝트', '트랙 소개', '커리큘럼', '취업 서포트', '모집 개요'];

export default function Lnb() {
  return (
    <S.Lnb>
      {lnbItems.map((item, index) => {
        return (
          <S.LnbItem key={index}>
            <span>{item}</span>
            <div />
          </S.LnbItem>
        );
      })}
    </S.Lnb>
  );
}

/* 
  Item
    - span
    - div

*/
