import "./App.css";
import Content from "./components/Content/Content";
import Navbar from "./components/Navbar/Navbar";
import Slogan from "./components/Slogan/Slogan";
import { useEffect, useState } from "react";
function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);
  useEffect(() => {
    if (windowSize.width < 500) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowSize]);
  useEffect(() => {
    console.log(window.innerWidth);
  });
  return (
    <div className="md:px-20 font-sora overflow-auto-y overflow-x-hidden h-screen px-4 py-8 bg-gradient-to-b dark:from-purple-900 dark:to-purple-700 from-white to-purple-500 dark:text-white">
      <Navbar isMobile={isMobile} />
      <Slogan />
      <Content />
    </div>
  );
}

export default App;
