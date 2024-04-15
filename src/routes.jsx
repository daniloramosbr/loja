import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/loja" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default RoutesApp;