import { AnimatePresence,motion } from "framer-motion";
import { useEffect,useRef,useState } from "react";
import { Route,Routes,useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
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

const MAX_LOAD_TIME_MS = 8000;

function App() {
  const location = useLocation();
  const [isReady,setIsReady] = useState(false);
  const prevPathname = useRef(location.pathname);
  const [exitingFromContact,setExitingFromContact] = useState(false);
  const mainContentRef = useRef(null);

  useEffect(() => {
    if (prevPathname.current === "/contact" && location.pathname !== "/contact") {
      setExitingFromContact(true);
    }
    prevPathname.current = location.pathname;
  },[location.pathname]);

  const showFooter =
    location.pathname !== "/contact" && !exitingFromContact;

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

    const maxDelay = new Promise((r) => setTimeout(r,MAX_LOAD_TIME_MS));

    // Show content only when all images have preloaded (or 8s max), so images don't load in visibly
    Promise.race([Promise.all(preloadPromises),maxDelay]).then(() => setIsReady(true));
  },[]);

  // After full load (including images), put focus on main content with preventScroll: true
  // so the browser doesn't scroll to a top-of-page element (e.g. header link) when focus runs.
  // More noticeable on mobile where load is slower and focus may fire after the user has scrolled.
  useEffect(() => {
    if (!isReady) return;
    const onLoad = () => {
      mainContentRef.current?.focus({ preventScroll: true });
    };
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load",onLoad);
      return () => window.removeEventListener("load",onLoad);
    }
  },[isReady]);

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
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen"
    >
      <Header />
      <div
        ref={mainContentRef}
        className="pt-18 sm:pt-22"
        tabIndex={-1}
        style={{ outline: "none" }}
      >
        <AnimatePresence mode="wait" onExitComplete={() => setExitingFromContact(false)}>
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
      {showFooter && <Footer />}
    </motion.div>
  );
}

export default App
