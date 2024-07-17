import styled from '@emotion/styled';

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 60px 0;
  background: linear-gradient(180deg, #0f16ae 0%, #031d44 100%);
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    color: #fff !important;
    text-align: center;
  }

  h3 {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #80c2ff !important;
    margin: 8px 0 12px 0;
    text-align: center;
  }

  div > img {
    width: 288px;
    aspect-ratio: auto 288 / 184;
    height: 184px;
  }
`;

export const Cta = styled.button`
  display: flex;
  width: 240px;
  min-width: 100px;
  padding: 13px 20px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 8px;
  border: 1px solid #e4ebf0;
  background: #fff;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  color: #3a3e41 !important;
`;
