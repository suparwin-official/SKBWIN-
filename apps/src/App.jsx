import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Crash from "./pages/Crash";
import Slots from "./pages/Slots";
import Wallet from "./pages/Wallet";
import History from "./pages/History";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crash" element={<Crash />} />
        <Route path="/slots" element={<Slots />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/history" element={<History />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
