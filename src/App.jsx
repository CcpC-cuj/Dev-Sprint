import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomeCopy from "./pages/HomeCopy";
import DevSprint3 from "./pages/DevSprint3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main landing route now defaults to DevSprint 3.0 */}
        <Route path="/" element={<DevSprint3 />} />
        <Route path="/devsprint3" element={<DevSprint3 />} />
        <Route path="/devsprint-3" element={<DevSprint3 />} />
        <Route path="/devsprint3.0" element={<DevSprint3 />} />
        <Route path="/devsprint2" element={<DevSprint3 />} />
        <Route path="/3.0" element={<DevSprint3 />} />

        {/* Previous editions */}
        <Route path="/devsprint" element={<Home />} />
        <Route path="/devsprint1" element={<Home />} />
        <Route path="/tech-unlocked" element={<HomeCopy />} />
        <Route path="/techunlocked" element={<HomeCopy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
