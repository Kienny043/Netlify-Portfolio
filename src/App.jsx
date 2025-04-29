import './App.css'
import About from './components/about'
import Contacts from './components/contact'
import Footer from './components/footer'
import Landing from './components/landing'
import Navbar from './components/navbar'
import Projects from './components/projects'
import Services from './components/services'

function App() {

  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Services />
      <Projects />
      <Contacts />
      <Footer />
    </>
  )
}

export default App
