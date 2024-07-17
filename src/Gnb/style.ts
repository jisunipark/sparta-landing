import styled from '@emotion/styled';

export const Gnb = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.125rem;
  z-index: 10;
`;

export const MenuIconBarItem = styled.div`
  width: 18px;
  height: 2px;
  border-radius: 16px;
  transform-origin: 0.6px;
  background-color: #141617;
  transform: rotate(0);
  transition: all 0.3s linear;
`;

export const MenuButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 14px;
`;
