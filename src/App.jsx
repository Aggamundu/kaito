import { AnimatePresence,motion } from "framer-motion";
import { useEffect,useState } from "react";
import { Route,Routes,useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { bvlgari } from "./data/bvlgari";
import { covers } from "./data/covers";
import { illustrations } from "./data/illustrations";
import About from "./pages/About";
import Bvlgari from "./pages/Bvlgari";
import BvlgariViewer from "./pages/BvlgariViewer";
import Contact from "./pages/Contact";
import Covers from "./pages/Covers";
import CoversViewer from "./pages/CoversViewer";
import Illustration from "./pages/Illustration";
import IllustrationViewer from "./pages/IllustrationViewer";

const MIN_LOAD_TIME_MS = 400;
const MAX_LOAD_TIME_MS = 8000;

function App() {
  const location = useLocation();
  const [isReady,setIsReady] = useState(false);

  useEffect(() => {
    const allImages = [
      ...illustrations.map((i) => i.image),
      ...covers.map((c) => c.image),
      ...bvlgari.map((b) => b.image),
    ];
    const uniqueUrls = [...new Set(allImages)];
    const preloadPromises = uniqueUrls.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve;
          img.src = src;
        })
    );

    const minDelay = new Promise((r) => setTimeout(r,MIN_LOAD_TIME_MS));
    const maxDelay = new Promise((r) => setTimeout(r,MAX_LOAD_TIME_MS));

    Promise.race([
      Promise.all([Promise.all(preloadPromises),minDelay]),
      maxDelay,
    ]).then(() => setIsReady(true));
  },[]);

  if (!isReady) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black min-h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white text-lg"
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
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
  );
}

export default App
