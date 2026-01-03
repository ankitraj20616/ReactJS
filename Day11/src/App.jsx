import { useState } from "react";
import { Navbar } from "./components/Navbar.jsx";
import { Nav2 } from "./components/Nav2.jsx";
function App() {
  // const [theme, setTheme] = useState("light");
  return (
    <>
      <div>
        {/* <h1>Theme is {theme}</h1> */}
        {/* <Navbar theme={theme} setTheme={setTheme} /> */}
        <Nav2 />
      </div>
    </>
  );
}

export default App;
