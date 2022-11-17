import "../styles/globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import NavBar from "../components/NavBar";
import Fotter from "../components/Fotter";

// the overlay on all pages 
function MyApp({ Component, pageProps }) {
  return (
        <ThemeProvider>
            <NavBar />
            <Component {...pageProps} />
            <Fotter />
        </ThemeProvider>
  );
}

export default MyApp;
