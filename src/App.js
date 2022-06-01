import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";

function App() {
  return (
    <section className="main_container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </section>
  );
}

export default App;
