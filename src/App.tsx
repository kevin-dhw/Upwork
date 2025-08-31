import { Routes, Route, BrowserRouter } from "react-router-dom";
import Test from "./views/test";
import Home from "./views/home";
import Header from "./components/header";
import BackToTop from "./components/backTop";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <BackToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
