import TopMenu from "./shared/topMenu/TopMenu";
import HomePage from "./pages/homepage/HomePage";
import { HashRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import ScrollTop from "./components/scroll top/ScrollTop";
import { useEffect, useState } from "react";
import BottomSearch from "./components/bottomSearh/BottomSearch";

/*======================================*/
/*======================================*/
/*======================================*/

function App() {

  const [showBarIcon, setShowBarIcon] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 991) {
        //if the window less than 768,show the icon,otherwise hide it
        setShowBarIcon(true);
      } else {
        setShowBarIcon(false);
      }
    };

    window.addEventListener("resize", handleResize);

  }, []);

  return (
    <div className="App">
      <HashRouter>
        <TopMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <ScrollTop />
        {/* if showBarIcon is true that mean we resize the window,and show the BottomSearch comp */}
        {showBarIcon && <BottomSearch />}
      </HashRouter>
    </div>
  );
}

export default App;
