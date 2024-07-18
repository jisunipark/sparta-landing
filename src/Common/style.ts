import styled from '@emotion/styled';

export const Inquiry = styled.button`
  position: fixed;
  bottom: 84px;
  right: 8px;
  z-index: 20;
  width: 64px;
  aspect-ratio: auto 64 / 70;
  height: 70px;
`;

export const Banner = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 19;
  position: fixed;
  width: 100%;
  bottom: 0px;
  background: rgba(0, 0, 0, 0.76);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 4px 24px 0px;
  backdrop-filter: blur(10px);
  display: initial;
  transition: all 0.2s ease 0s;
  height: 76px;
  padding: 12px 16px;
`;

export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 21px;
  width: fit-content;

  span:first-of-type {
    color: #ffffff !important;
  }

  span:last-of-type {
    color: #ff6666 !important;
    margin-top: 2px;
  }
`;

export const BannerCta = styled.button`
  position: absolute;
  right: 16px;
  top: 12px;
  padding: 13px 16px;
  margin: 0;
  width: fit-content;
  background-color: #e8344e;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #ffffff !important;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;
