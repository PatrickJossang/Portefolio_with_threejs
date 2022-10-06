import React from 'react';
import { useContext } from 'react';
//Darkmode function 

// to check what theme is curently on 
const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('current-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }
    //what it shoud swith to 
    if (('(prefers-color-scheme: dark)').match) {
      return 'dark';
    }
  }
  return 'light';
};
// export value 
export const ThemeContext = React.createContext();


export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = React.useState(getInitialTheme);

  const checkTheme = (existing) => {
    const root = window.document.documentElement;
    const isDark = existing === 'dark';
    //the switch function 
    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(existing);

    localStorage.setItem('current-theme', existing);
  };

  if (initialTheme) {
    checkTheme(initialTheme);
  }

  React.useEffect(() => {
    checkTheme(theme);
  }, [theme]);
  //create visual representation 
  //TODO wrap it over the current parents 
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};