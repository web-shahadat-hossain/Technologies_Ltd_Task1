import { Route, Routes } from "react-router-dom";
import "./App.css";
import BannerAd from "./Component/BannerAd/BannerAd";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Native from "./Component/Native/Native";
import PopUnder from "./Component/PopUnder/PopUnder";
import Skim from "./Component/Skim/Skim";
import TopHeader from "./Component/TopHeader/TopHeader";

function App() {
  return (
    <section className="main_container">
      <TopHeader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<PopUnder />} />
          <Route path="banner-ad" element={<BannerAd />} />
          <Route path="native" element={<Native />} />
          <Route path="skim" element={<Skim />} />
        </Route>
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
