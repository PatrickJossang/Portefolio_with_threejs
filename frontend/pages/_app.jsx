import '../styles/globals.css'
import { ThemeProvider } from '../context/ThemeContext'
import NavBar from '../components/NavBar'
import ToggleTheme from '../components/ToggleTheme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ToggleTheme />
      <NavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp