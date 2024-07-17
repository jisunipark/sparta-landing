import styled from '@emotion/styled';

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
