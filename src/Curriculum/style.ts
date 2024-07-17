import styled from '@emotion/styled';

export const calcRem = (px: number) => `${px / 16}rem`;

/* Gnb */

export const Gnb = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  padding: 0 ${calcRem(16)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${calcRem(50)};
  z-index: 10;
`;

export const MenuIconBarItem = styled.div`
  width: ${calcRem(18)};
  height: ${calcRem(2)};
  background-color: '#141617';
`;

export const MenuButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${calcRem(14)};
`;

/* Hero */

export const Hero = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  height: ${calcRem(733)};
  background: radial-gradient(
    159.82% 159.82% at 50% 166.08%,
    rgb(109, 119, 207) 0%,
    rgb(20, 22, 23) 85.5%
  );

  & > img {
    position: absolute;
    bottom: 77px;
    left: 50%;
    transform: translate(-50%, 0px);
    bottom: ${calcRem(77)};
    width: 1024px;
    aspect-ratio: auto 1024 / 656;
    height: 656px;
  }
`;

export const HeroCards = styled.ul`
  display: flex;

  & > img {
    margin-right: ${calcRem(7)};
  }
`;

export const HeroTitle = styled.h1`
  font-family: Pretendard;
  font-weight: 700;
  font-size: ${calcRem(28)};
  line-height: ${calcRem(39)};
  text-align: center;
  height: ${calcRem(78)};
  color: white !important;

  span {
    color: #ff6c7a;
  }
`;

export const Button = styled.button`
  z-index: 10;
  font-family: Pretendard;
  font-weight: 600;
  font-size: ${calcRem(16)};
  line-height: ${calcRem(26)};
  border-radius: ${calcRem(8)};
  background: rgb(232, 52, 78);
  display: flex;
  width: ${calcRem(164)};
  height: ${calcRem(54)};
  padding: ${calcRem(16)} ${calcRem(20)};
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  gap: ${calcRem(10)};
  flex-shrink: 0;
  margin-top: ${calcRem(8)};
  color: rgb(255, 255, 255) !important;
`;

export const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${calcRem(12)};
  width: 100%;
  margin-top: ${calcRem(120)};
`;

export const InfoSection = styled.section`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(20, 22, 23, 0.64);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: fit-content;
`;

export const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${calcRem(12)};
  margin: 0 ${calcRem(21)};
  padding: ${calcRem(32)} ${calcRem(16)};
`;

export const HeroInfoItem = styled.div`
  display: flex;
  gap: ${calcRem(20)};
  white-space: nowrap;
  word-break: keep-all;
  font-size: ${calcRem(14)};
  line-height: ${calcRem(22)};
  font-family: Pretendard;

  span:nth-of-type(1) {
    width: ${calcRem(52)};
    color: rgb(129, 137, 143);
  }

  span:nth-of-type(2) {
    color: rgb(215, 224, 230) !important;
  }
`;

export const CardWrapper = styled.div`
  margin-top: ${calcRem(55)};
`;

/* Lnb */

export const Lnb = styled.nav`
  position: sticky;
  display: flex;
  align-items: center;
  gap: 2px;
  border-bottom: 1px solid rgb(215, 224, 230);
  background-color: white;
  overflow-x: scroll;
  padding: 10px 16px 0px;
  top: 0px;
  z-index: 20;
`;

export const LnbItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & > span {
    white-space: nowrap;
    display: flex;
    padding: 6px 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    /* color: rgb(255, 108, 122); */
    color: rgb(157, 167, 174);
    border-radius: 10px;
    position: relative;

    &:hover {
      color: rgb(58, 62, 65);
      background-color: rgb(242, 246, 248);
    }
  }

  & > div {
    width: 100%;
    height: 2px;
    /* background-color: rgb(255, 108, 122); */
    background-color: white;
    opacity: 1;
  }
`;

/* Section */

export const DetailSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 20px 16px;
  background-color: rgb(20, 22, 23);
  padding: 80px 0px;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h2 {
    font-family: Pretendard;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    text-align: center;
    color: white !important;
  }

  & > h3 {
    font-family: Pretendard;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: rgb(255, 108, 122) !important;
    margin-bottom: 8px;
  }

  & > p {
    font-family: Pretendard;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: rgb(157, 167, 174) !important;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > strong {
    font-family: Pretendard;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    margin-top: 40px;
    text-align: center;
    color: rgb(242, 246, 248) !important;
    display: inline-block;
  }
`;