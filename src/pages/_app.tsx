import type { AppProps } from 'next/app';
import { Global, css } from '@emotion/react';

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Pretendard; /* TODO 이거 들어가 있는 다른 부분들 지우기 */
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    color: #333;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul,
  ol {
    list-style: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  );
}
