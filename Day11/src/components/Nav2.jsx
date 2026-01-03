import { useContext } from "react";
import { ThemeDataContext } from "../contexts/ThemeContext";

export const Nav2 = () => {
  const [theme, setTheme] = useContext(ThemeDataContext);
  console.log(theme);

  return (
    <div>
      <h1>Theme is {theme}</h1>
      <button
        onClick={() => {
          if (theme === "light") {
            setTheme("Dark");
          } else {
            setTheme("light");
          }
        }}
      >
        Change Theme
      </button>
    </div>
  );
};
