import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./app/navbar/Navbar";
import Login from "./app/auth/Login";
import Dashboard from "./seller/Dashboard";
import Orders from "./seller/orders/Orders";
import RankingOfOffers from './seller/rankingOfOffers/RankingOfOffers';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders/:ordersType/:page" element={<Orders />} />
        <Route path="/ranking-of-offers/:page" element={<RankingOfOffers />} />
      </Routes>
    </Router>
  );
}

export default App;
