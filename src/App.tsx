import { HashRouter, Routes, Route } from "react-router-dom";
import Test from "./views/test";
import Home from "./views/home";
import Header from "./components/header";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
