import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import ResponsiveAppBar from '../src/components/Header/HeaderContainer'
import GlobalStyle from '../src/components/Shared/globalstyles'
import { theme } from '../src/theme'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ResponsiveAppBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
