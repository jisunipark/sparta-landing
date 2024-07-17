import styled from '@emotion/styled';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
  background-color: rgb(20, 22, 23);
`;

export const IntoduceTrackSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 328px;

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
`;

export const WhyGameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
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
