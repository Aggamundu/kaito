import { Route,Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import About from './pages/About'
import Bvlgari from './pages/Bvlgari'
import Contact from './pages/Contact'
import Covers from './pages/Covers'
import CoversViewer from './pages/CoversViewer'
import Home from './pages/Home'
import Illustration from './pages/Illustration'
import IllustrationViewer from './pages/IllustrationViewer'

function App() {
  return (
    <>
      <Header />
      <div className="pt-22">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/illustration" element={<Illustration />} />
          <Route path="/illustration/:index" element={<IllustrationViewer />} />
          <Route path="/covers" element={<Covers />} />
          <Route path="/covers/:index" element={<CoversViewer />} />
          <Route path="/bvlgari" element={<Bvlgari />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
