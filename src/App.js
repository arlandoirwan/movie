import './App.css'
import NavigationBar from './components/NavigationBar'
import './style/LandingPage.css'
import Intro from './components/Intro'
import Trending from './components/Trending'
import SuperHero from './components/SuperHero'
import Footer from './components/Footer'
function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>

      <div className="trending">
        <Trending />
      </div>

      <div className="super">
        <SuperHero />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default App
