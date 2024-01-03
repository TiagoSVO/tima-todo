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
      main: '#2f9e41',
      darkMain: '#28732A',
      secondary: '#cd191e',
      darkSecondary: '#aa1315',
      background: '#fefefe',
      default: '#fafafa',
      darkDefault: '#dddddd',
      info: '#346ACC',
      darkInfo: '#254d95',
      warning: '#FFC70D',
      darkWarning: '#e2ad00',
      black: '#777777',
      darkBlack: '#333333'
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
