import styled from '@emotion/styled';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f9fa;
  padding: 60px 16px;
`;

export const CurriculumSection = styled.section`
  h2 {
    padding: 8px 0 40px;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    text-align: center;
    color: #141617 !important;
  }

  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #ff6c7a !important;
    margin-bottom: 8px;
  }
`;

export const CurriculumItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const CurriculumItem = styled.div`
  display: grid;
  width: 100%;
  min-width: 328px;
  max-width: 600px;
  padding: 16px 20px;
  background-color: #ffffff;
  border: 1px solid #e4ebf0;
  box-shadow: 0 8px 24px rgba(129, 137, 143, 0.12);
  border-radius: 12px;
  cursor: pointer;
  word-break: keep-all;

  & > div:first-of-type {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
`;

export const CurriculumItemNumber = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #e8344e !important;
  margin-bottom: 4px;
  font-weight: 600;
`;

export const CurriculumItemTitle = styled.h4`
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #141617;
`;

export const CurriculumItemDesc = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 21px;
  color: #3a3e41 !important;
  padding-top: 4px;
  white-space: pre-wrap;
`;

export const CurriculumItemTags = styled.div`
  display: flex;
  gap: 8px;
  height: 38px;
  align-items: end;

  div {
    background-color: #fff1f4;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #e8344e !important;
    border-radius: 4px;
    padding: 2px 6px;
    width: fit-content;
    height: fit-content;
    flex-shrink: 0;
  }
`;

export const CurriculumItemDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`;

export const DetailBox = styled.div`
  background-color: #f6f9fa;
  border-radius: 8px;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  div:last-of-type div:last-of-type div:last-of-type {
    display: none;
  }
`;

export const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  & > div:first-of-type {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
`;

export const DetailSubheading = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #141617 !important;
`;

export const DetailTitle = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #3a3e41 !important;
`;

export const DetailGoals = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    font-weight: 400;
    font-size: 13px;
    line-height: 21px;
    color: #81898f !important;
    display: flex;
    gap: 4px;
  }
`;

export const Separator = styled.div`
  width: 100%;
  min-height: 1px;
  background: #e4ebf0;
  margin-top: 20px;
`;
