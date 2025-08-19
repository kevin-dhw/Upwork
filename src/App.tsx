import { Routes, Route, BrowserRouter } from "react-router-dom";
import Test from "./views/test";
import Home from "./views/home";
import Header from "./components/header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
