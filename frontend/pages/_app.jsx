import "../styles/globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import NavBar from "../components/NavBar";

// the overlay on all pages 
function MyApp({ Component, pageProps }) {
  return (
      <div className="flex">
        <ThemeProvider>
            <NavBar className="flex-1 "/>
            <Component {...pageProps} className="flex-1 grow"></Component>
        </ThemeProvider>
      </div>
  );
}

export default MyApp;
