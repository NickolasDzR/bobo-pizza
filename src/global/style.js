import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'M PLUS Rounded 1c';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/mplusrounded1c/v15/VdGEAYIAV6gnpUpoWwNkYvrugw9RuPWDzrkC76y6xQwhKyPOzVM3THyvqCUY2X5AHDM.1.woff2) format('woff2');
    unicode-range: U+1f235-1f23b, U+1f240-1f248, U+1f250-1f251, U+2000b, U+20089-2008a, U+200a2, U+200a4, U+200b0, U+200f5, U+20158, U+201a2, U+20213, U+2032b, U+20371, U+20381, U+203f9, U+2044a, U+20509, U+2053f, U+205b1, U+205d6, U+20611, U+20628, U+206ec, U+2074f, U+207c8, U+20807, U+2083a, U+208b9, U+2090e, U+2097c, U+20984, U+2099d, U+20a64, U+20ad3, U+20b1d, U+20b9f, U+20bb7, U+20d45, U+20d58, U+20de1, U+20e64, U+20e6d, U+20e95, U+20f5f, U+21201, U+2123d, U+21255, U+21274, U+2127b, U+212d7, U+212e4, U+212fd, U+2131b, U+21336, U+21344, U+213c4, U+2146d-2146e, U+215d7, U+21647, U+216b4, U+21706, U+21742, U+218bd, U+219c3, U+21a1a, U+21c56, U+21d2d, U+21d45, U+21d62, U+21d78, U+21d92, U+21d9c, U+21da1, U+21db7, U+21de0, U+21e33-21e34, U+21f1e, U+21f76, U+21ffa, U+2217b, U+22218, U+2231e, U+223ad, U+22609, U+226f3, U+2285b, U+228ab, U+2298f, U+22ab8, U+22b46, U+22b4f-22b50, U+22ba6, U+22c1d, U+22c24, U+22de1, U+22e42, U+22feb, U+231b6, U+231c3-231c4, U+231f5, U+23372, U+233cc, U+233d0, U+233d2-233d3, U+233d5, U+233da, U+233df, U+233e4, U+233fe, U+2344a-2344b, U+23451, U+23465, U+234e4, U+2355a, U+23594, U+235c4, U+23638-2363a, U+23647, U+2370c, U+2371c, U+2373f, U+23763-23764, U+237e7, U+237f1, U+237ff, U+23824, U+2383d, U+23a98, U+23c7f, U+23cbe, U+23cfe, U+23d00, U+23d0e, U+23d40, U+23dd3, U+23df9-23dfa, U+23f7e, U+2404b, U+24096, U+24103, U+241c6, U+241fe, U+242ee, U+243bc, U+243d0, U+24629, U+246a5, U+247f1, U+24896, U+248e9, U+24a4d, U+24b56, U+24b6f, U+24c16, U+24d14, U+24e04, U+24e0e, U+24e37, U+24e6a, U+24e8b, U+24ff2, U+2504a, U+25055, U+25122, U+251a9, U+251cd, U+251e5, U+2521e, U+2524c, U+2542e, U+2548e, U+254d9, U+2550e, U+255a7, U+2567f, U+25771, U+257a9, U+257b4, U+25874, U+259c4, U+259cc, U+259d4, U+25ad7, U+25ae3-25ae4, U+25af1, U+25bb2, U+25c4b, U+25c64, U+25da1, U+25e2e, U+25e56, U+25e62, U+25e65, U+25ec2, U+25ed8;
  }

  html {
    height: -webkit-fill-available;
  }

  html, body {
    width: 100%;
    height: 100%;
    background-color: #fff;
    margin: 0;
    padding: 0;
    color: #000;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-font-smoothing--moz-osx-font-smoothing: grayscale;
    line-height: 1.25;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    overflow-x: hidden;
  }

  .app {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  
  img {
    width: 100%;
    height: auto;
  }
  
  p {
    margin: 0;
    padding: 0;
  }
  
  ul, li, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  
  button {
    padding: 0;
    margin: 0;
  }
  
  .drag-scroll-inner {
    min-width: max-content;
  }
`