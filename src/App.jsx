import "./App.css";
import { Navbar, Hero, About,Education, Skills,Project,Resume,Blog,Contact, Footer } from "./components";
import { useState } from "react";
const App = () => {
 const [theme, setTheme] = useState("light");
 
   const toggleTheme = () => {
     setTheme((prev) => (prev === "light" ? "dark" : "light"));
   };

  return (
    <>
      <div className={theme}>
        <section className="container">
          <Navbar onToggleTheme={toggleTheme} theme={theme} />
          <Hero />
          <About />
          <Education />
          <Skills />
          <Project />
          <Resume />
          <Blog />
          <Contact />
          <Footer />
        </section>
      </div>
    </>
  );
};

export default App;
