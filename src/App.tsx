import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import HomePage from "./pages/Homepage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;

