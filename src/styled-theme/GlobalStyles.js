import { createGlobalStyle } from "styled-components";
import MontserratRegular from "../assets/fonts/Montserrat/static/Montserrat-Regular.ttf"
import MontserratItalic from "../assets/fonts/Montserrat/static/Montserrat-Italic.ttf"
import MontserratMedium from "../assets/fonts/Montserrat/static/Montserrat-Medium.ttf"
import MontserratMediumItalic from "../assets/fonts/Montserrat/static/Montserrat-MediumItalic.ttf"
import FugazOne from "../assets/fonts/Fugaz_One/Fugaz_One/FugazOne-Regular.ttf"

export default createGlobalStyle`
@font-face {
  font-family: "FugazOne";
  src: url(${FugazOne}) format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Montserrat";
  src: url(${MontserratRegular}) format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Montserrat";
  src: url(${MontserratItalic}) format('truetype');
  font-weight: normal;
  font-style: italic;
}

@font-face {
  font-family: "Montserrat";
  src: url(${MontserratMedium}) format('truetype');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "Montserrat";
  src: url(${MontserratMediumItalic}) format('truetype');
  font-weight: 300;
  font-style: italic;
}

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

html, body, #root {
  min-height: 100%;
}

body {
  font-size: 1rem;
  margin: 0;
  font-family: Montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`