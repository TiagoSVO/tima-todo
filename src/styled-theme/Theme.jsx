import React from "react"
import { ThemeProvider } from "styled-components"

const sizes = {
  mobileSmall: '320px',
  mobileMedium: '375px',
  mobileLarge: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopLarge: '1440px',
  desktop: '2560px'
}

const myTheme = {
    borderRadius: '5px',

    colors: {
      main: '#AF028E',
      darkMain: '#5001CD',
      secondary: '#00D79D',
      darkSecondary: '#02B7BA',
      background: '#FEFEFE',
      default: '#CCCCCC',
      darkDefault: '#AAAAAA',
      info: '#F89F5B',
      darkInfo: '#254d95',
      warning: '#FFC70D',
      darkWarning: '#e2ad00',
      text: '#777777',
      black: '#333333',
      darkBlack: '#000000'
    },

    sizes: {
      mobileSmall: sizes.mobileSmall,
      mobileMedium: sizes.mobileMedium,
      mobileLarge: sizes.mobileLarge,
      tablet: sizes.tablet,
      laptop: sizes.laptop,
      laptopLarge: sizes.laptopLarge,
      desktop: sizes.desktop
    },

    devices: {
      mobileSmall: `(min-width: ${sizes.mobileSmall})`,
      mobileMedium: `(min-width: ${sizes.mobileMedium})`,
      mobileLarge: `(min-width: ${sizes.mobileLarge})`,
      tablet: `(min-width: ${sizes.tablet})`,
      laptop: `(min-width: ${sizes.laptop})`,
      laptopLarge: `(min-width: ${sizes.laptopLarge})`,
      desktop: `(min-width: ${sizes.desktop})`,
    }
}

function Theme({children}) {
    return <ThemeProvider theme={myTheme}>{children}</ThemeProvider>
}

export default Theme
