import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomeCopy from "./pages/HomeCopy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeCopy />} />
        <Route path="/devsprint" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;