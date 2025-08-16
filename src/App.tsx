import { HashRouter, Routes, Route } from "react-router-dom";
import Test from "./views/test";
import Home from "./views/home";

function App() {
  return (
    <>
      <HashRouter>
        {/* <div>233</div> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/test" element={<Home />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
