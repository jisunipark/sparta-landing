import styled from '@emotion/styled';

/* TODO style 이름 통일하기 */

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: rgb(20, 22, 23);
`;

export const IntoduceTrackSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 80px 0;
  width: 100%;

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    text-align: center;
    color: white !important;
  }

  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: rgb(255, 108, 122) !important;
    margin-bottom: 8px;
  }

  h6 {
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    color: white !important;
    text-align: center;
  }
`;

export const WhyGameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 328px;
`;

export const WhyGameItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 328px;

  img {
    width: 100%;
    height: auto;
  }
`;

export const WhyGameItemTitle = styled.h5`
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #141617;
  color: white !important;
  margin-bottom: 16px;
  text-align: left;
`;

export const WhyGameItmeDesc = styled.p`
  color: white !important;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #141617;
  text-align: left;
  margin: 0;
  opacity: 0.7;
`;

export const AboutTrackWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  gap: 14px;
  overflow-x: scroll; /* TODO 스크롤 문제 해결해야 함 */

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const AboutTrackItem = styled.div`
  width: 280px;
  flex-shrink: 0;
  padding: 24px;
  border-radius: 12px;
  background: #25282a;

  & > img {
    /* TODO 배경색 깔아줘야 함 */
    width: 56px;
    aspect-ratio: auto 56 / 56;
    height: 56px;
  }
`;

export const AboutTrackItemTitle = styled.h5`
  margin: 0 0 4px;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #141617;
  color: white !important;
`;

export const AboutTrackItemDesc = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 21px;
  color: #141617;
  color: white !important;
  opacity: 0.7;
`;

export const AboutTrackCheckList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #141617;
  gap: 8px;

  li {
    display: flex;
    gap: 6.5px;
    font-size: 12px;
    color: white;
  }
`;
