import "../styles/globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import NavBar from "../components/NavBar";

// the overlay on all pages 
function MyApp({ Component, pageProps }) {
  return (
        <ThemeProvider>
            <NavBar />
            <Component {...pageProps} />
        </ThemeProvider>
  );
}

export default MyApp;
