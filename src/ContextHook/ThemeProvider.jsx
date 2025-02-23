import {useState} from 'react';
import ThemeContext from './ThemeContext';

const ThemeProvider = ({children}) => {
    let [themes, setTheme] = useState("light");
    
     function themeToggles() {
       setTheme((prevTheme) => (prevTheme == "light" ? "dark" : "light"));
     }
     return (
      <ThemeContext.Provider value={{themes,themeToggles}}>
        {children}
       </ThemeContext.Provider>
     );
}

export default ThemeProvider
