import Profile from "./components/Profile";
import Header from "./components/Header"
import Section01 from "./components/Section/Section01"
import Section02 from "./components/Section/Section02"
import Section03 from './components/Section/Section03';
import { useEffect, useState } from "react";
import { Section04 } from "./components/Section/Section04";
function App() {
  const [hash, setHash] = useState(window.location.hash || "#home");

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash || "#home");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isHome = hash === "#home" || hash === "";
  const isProfile = hash === "#profile";

  return (
    <div className="bg-primary text-white min-h-screen">
      {/* Header */}
      <Header/>
      {/* Body */}
      {isHome && 
        <div id= "home">
          <Section01/>
          <Section02/>
          <Section03/>
          <Section04/>
        </div>
      }

      {/* Profile */}
      {isProfile && <Profile />}
    </div>
  )
}

export default App
