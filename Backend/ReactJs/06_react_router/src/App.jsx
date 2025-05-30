import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import "./App.css";
import Navbar from "./components/navBar";

function App() {
  return (
    <>
      <main>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
