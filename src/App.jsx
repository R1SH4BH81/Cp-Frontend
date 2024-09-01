import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css"; // Import your CSS here

const App = () => {
  const pcImages = [
    "https://firebasestorage.googleapis.com/v0/b/pixelbit-eight.appspot.com/o/circlepe%2FScreenshot%202024-09-01%20231803.png?alt=media&token=34c6b01a-b213-41cd-bb7f-081495a960aa",
    "https://firebasestorage.googleapis.com/v0/b/pixelbit-eight.appspot.com/o/circlepe%2FMacBook%20Pro%2014_%20-%2010.png?alt=media&token=a3c3afcd-9878-4b07-9563-4d5c5076a523",
    "https://firebasestorage.googleapis.com/v0/b/pixelbit-eight.appspot.com/o/circlepe%2FMacBook%20Pro%2014_%20-%2011.png?alt=media&token=5175b177-49e9-4b58-803d-705716bb0bdd",
    "https://firebasestorage.googleapis.com/v0/b/pixelbit-eight.appspot.com/o/circlepe%2FMacBook%20Pro%2014_%20-%2012.png?alt=media&token=eaf4163f-f3cd-4210-8353-063bb5315848",
    "https://firebasestorage.googleapis.com/v0/b/pixelbit-eight.appspot.com/o/circlepe%2FMacBook%20Pro%2014_%20-%2013.png?alt=media&token=d981beb8-1c4c-4637-b424-59e3899b1194",
    "https://firebasestorage.googleapis.com/v0/b/pixelbit-eight.appspot.com/o/circlepe%2FMacBook%20Pro%2014_%20-%2014.png?alt=media&token=20bedab3-b038-43ef-b147-4707c8a24ea4",
  ];

  const mobileImages = [
    "https://firebasestorage.googleapis.com/v0/b/pixelbit-eight.appspot.com/o/circlepe%2FGroup%201116599851.png?alt=media&token=78994061-00a3-42be-a6a5-f963b2eea5bc",
    "https://firebasestorage.googleapis.com/v0/b/pixelbit-eight.appspot.com/o/circlepe%2FGroup%201116599852.png?alt=media&token=17675d02-c0e7-4da0-8d07-44e73d00581f",
    "https://firebasestorage.googleapis.com/v0/b/pixelbit-eight.appspot.com/o/circlepe%2FGroup%201116599853.png?alt=media&token=ab0933ba-c564-4666-94e7-50aa121ee9a0",
    "https://firebasestorage.googleapis.com/v0/b/pixelbit-eight.appspot.com/o/circlepe%2FGroup%201116599854.png?alt=media&token=e0f8a119-0ff5-4582-b406-11e33efe9d49",
    "https://firebasestorage.googleapis.com/v0/b/pixelbit-eight.appspot.com/o/circlepe%2FGroup%201116599855.png?alt=media&token=82925225-9c1c-4558-843b-1b7b0ff536df",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const isMobile = window.innerWidth <= 768;

  const images = isMobile ? mobileImages : pcImages;

  useEffect(() => {
    const loadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
      });
    };

    const loadAllImages = async () => {
      await Promise.all(images.map((src) => loadImage(src)));
      setLoading(false);
    };

    loadAllImages();
  }, [images]);

  useEffect(() => {
    if (!loading) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [loading, images.length]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const index =
        Math.floor(scrollPosition / window.innerHeight) % images.length;
      setCurrentIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [images.length]);

  return (
    <div className="showcase-container">
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex} // Ensure unique key to trigger animation
            src={images[currentIndex]}
            alt="App showcase"
            className="showcase-image"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      )}
    </div>
  );
};

export default App;
