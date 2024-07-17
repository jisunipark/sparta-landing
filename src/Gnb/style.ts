import styled from '@emotion/styled';

export const calcRem = (px: number) => `${px / 16}rem`;

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
