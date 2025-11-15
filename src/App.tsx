import Profile from "./components/Profile";
import Header from "./components/Header"
import Section01 from "./components/Section/Section01"
import Section02 from "./components/Section/Section02"
import Section03 from './components/Section/Section03';

function App() {
  return (
    <div className="bg-primary text-white min-h-screen">
      {/* Header */}
      <Header/>
      {/* Body */}
      <Section01/>
      <Section02/>
      {/* <Section03/> */}

      {/* Profile */}
      <Profile/>
    </div>
  )
}

export default App
