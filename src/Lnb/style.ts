import styled from '@emotion/styled';

export const Lnb = styled.nav`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  border-bottom: 1px solid rgb(215, 224, 230);
  background-color: white;
  padding: 10px 0px 0px;
  top: 0px;
  z-index: 10;
`;

type LnbItemProps = {
  isActive: boolean;
};

export const LnbItem = styled.div<LnbItemProps>`
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
    color: ${(props) => (props.isActive ? 'rgb(255, 108, 122)' : 'rgb(157, 167, 174)')};
    border-radius: 10px;
    position: relative;
    transition: all 0.3s ease-in-out;

    &:hover {
      ${(props) =>
        props.isActive ||
        'color: rgb(58, 62, 65); background-color: rgb(242, 246, 248); & + div {background-color: white;}'}
    } /* 가독성이 영.. */
  }

  & > div {
    width: 100%;
    height: 2px;
    background-color: ${(props) => (props.isActive ? 'rgb(255, 108, 122)' : 'white')};
    opacity: 1;
  }
`;
