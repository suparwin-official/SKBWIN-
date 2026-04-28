import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import LiveCrash from "./pages/LiveCrash";
import Bets from "./pages/Bets";
import Logs from "./pages/Logs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/crash" element={<LiveCrash />} />
        <Route path="/bets" element={<Bets />} />
        <Route path="/logs" element={<Logs />} />
      </Routes>
    </BrowserRouter>
  );
}
