import "../styles/globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import NavBar from "../components/NavBar";

// the overlay on all pages 
function MyApp({ Component, pageProps }) {
  return (
    <div className="flex">
      <ThemeProvider>
        <aside className="h-screen sticky top-0">
          <NavBar />
        </aside>
        <main>
          <Component {...pageProps}></Component>
        </main>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
