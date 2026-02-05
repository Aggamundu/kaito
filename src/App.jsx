import { AnimatePresence,motion } from 'framer-motion'
import { Route,Routes,useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import About from './pages/About'
import Bvlgari from './pages/Bvlgari'
import BvlgariViewer from './pages/BvlgariViewer'
import Contact from './pages/Contact'
import Covers from './pages/Covers'
import CoversViewer from './pages/CoversViewer'
import Illustration from './pages/Illustration'
import IllustrationViewer from './pages/IllustrationViewer'

function App() {
  const location = useLocation()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.11 }}
      className="w-full min-h-screen"
    >
      <Header />
      <div className="pt-22">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full"
          >
            <Routes location={location}>
              <Route path="/" element={<Illustration />} />
              <Route path="/illustration" element={<Illustration />} />
              <Route path="/illustration/:index" element={<IllustrationViewer />} />
              <Route path="/covers" element={<Covers />} />
              <Route path="/covers/:index" element={<CoversViewer />} />
              <Route path="/bvlgari" element={<Bvlgari />} />
              <Route path="/bvlgari/:index" element={<BvlgariViewer />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default App
