import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const calcRem = (px: number) => `${px / 16}rem`;

const aniScroll = keyframes`
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(-100%);
    }
`;

const aniScroll2 = keyframes`
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(0%);
    }
`;

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
  overflow: hidden;

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

  ul:first-of-type {
    animation: 12s linear 0s infinite normal none running ${aniScroll};
  }

  ul:last-of-type {
    animation: 12s linear 0s infinite normal none running ${aniScroll2};
  }
`;

export const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${calcRem(12)};
  width: 100%;
  margin-top: ${calcRem(120)};

  & + div {
    position: relative;
    width: 100%;
  }
`;

export const CardWrapper = styled.div`
  position: absolute;
  left: 0;
  margin-top: 55px;
  height: fit-content;
  width: 100%;
`;

export const HeroCards = styled.ul`
  position: absolute;
  display: flex;
  width: max-content;

  & > img {
    margin-right: ${calcRem(7)};
    width: 135px;
    aspect-ratio: auto 135 / 141;
    height: 141px;
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

export const Cta = styled.button`
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
  justify-content: center;
  align-items: center;
  gap: ${calcRem(10)};
  flex-shrink: 0;
  margin-top: ${calcRem(8)};
  color: rgb(255, 255, 255) !important;
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
