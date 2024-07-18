import styled from '@emotion/styled';

export const Background = styled.div`
  background-color: rgb(20, 22, 23);
  width: 100%;
`;

export const ProjectSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 80px 0px;

  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    text-align: center;
    margin: 8px 0px 16px;
    color: white !important;
  }

  h3 {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: rgb(255, 108, 122) !important;
    margin-bottom: 8px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: rgb(157, 167, 174) !important;
  }
`;
export const SoldoutContent = styled.div`
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

export const ProjectExamples = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const ProjectItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  transform: translateZ(0px);
  gap: 32px;

  video {
    margin-bottom: -30px;
  }
`;

export const ProjectItemMainInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 16px;
  padding: 32px 20px 0px;
  background: linear-gradient(rgba(20, 22, 23, 0) 0%, rgb(20, 22, 23) 22%);
  z-index: 5;

  & > div:first-of-type {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  & > img {
    height: 30px;
    width: auto;
  }
`;

export const ProjectItemSubheading = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: rgb(255, 108, 122) !important;
`;

export const ProjectItemTitle = styled.h4`
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  color: rgb(255, 255, 255) !important;
`;

export const ProjectItemDesc = styled.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 21px;
  text-align: justify !important;
  white-space: pre-wrap;
  word-break: keep-all;
  color: rgb(157, 167, 174) !important;
`;

export const LearnMoreWrapper = styled.div`
  border-radius: 12px;
  background: rgb(37, 40, 42);
  height: fit-content;
  width: 600px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;

  & > div:first-of-type {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 21px;
    color: rgb(228, 235, 240) !important;
  }
`;

export const LearnMoreList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 400;
  font-size: 13px;
  line-height: 21px;
  word-break: keep-all;
  color: rgb(157, 167, 174) !important;

  & > li {
    display: flex;
    gap: 4px;
  }
`;
