import "../styles/globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import NavBar from "../components/NavBar";

// the overlay on all pages 
function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row flex-1">
        <ThemeProvider>
          <aside className="w-full md:w-auto">
            <NavBar />
          </aside>
          <main className="flex-1">
            <Component {...pageProps}></Component>
          </main>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default MyApp;
