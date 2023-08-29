import { createGlobalStyle } from 'styled-components'

export const SReset = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
  }
`

export const SFont = createGlobalStyle`
  @font-face {
    font-family: 'Johnnie Walker Regular';
    src: url('/inc/fonts/johnnie-walker-regular/JWJohnnieWeb-Regular.eot?#iefix');
    src: url('/inc/fonts/johnnie-walker-regular/JWJohnnieWeb-Regular.eot?#iefix')
        format('eot'),
      url('/inc/fonts/johnnie-walker-regular/JWJohnnieWeb-Regular.woff2')
        format('woff2'),
      url('/inc/fonts/johnnie-walker-regular/JWJohnnieWeb-Regular.woff')
        format('woff'),
      url('/inc/fonts/johnnie-walker-regular/JWJohnnie-Regular.ttf')
        format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Johnnie Walker Sans Headline';
    src: url('/inc/fonts/johnnie-walker-sans/JohnnieWalkerWeb-Headline.eot?#iefix');
    src: url('/inc/fonts/johnnie-walker-sans/JohnnieWalkerWeb-Headline.eot?#iefix')
        format('eot'),
      url('/inc/fonts/johnnie-walker-sans/JohnnieWalkerWeb-Headline.woff2')
        format('woff2'),
      url('/inc/fonts/johnnie-walker-sans/JohnnieWalkerWeb-Headline.woff')
        format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'Johnnie Walker Serif Book';
    src: url('/inc/fonts/johnnie-walker-serif/JohnnieWalkerSerifWeb-Book.eot?#iefix');
    src: url('/inc/fonts/johnnie-walker-serif/JohnnieWalkerSerifWeb-Book.eot?#iefix')
        format('eot'),
      url('/inc/fonts/johnnie-walker-serif/JohnnieWalkerSerifWeb-Book.woff2')
        format('woff2'),
      url('/inc/fonts/johnnie-walker-serif/JohnnieWalkerSerifWeb-Book.woff')
        format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'jw-icon';
    src: url('/inc/fonts/jw-icon.ttf?1bezz3')
        format('truetype'),
      url('/inc/fonts/jw-icon.woff?1bezz3')
        format('woff'),
      url('/inc/fonts/jw-icon.svg?1bezz3#jw-icon')
        format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }
`
