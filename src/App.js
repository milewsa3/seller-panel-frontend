import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Login from "./auth/Login";
import Dashboard from "./seller/Dashboard";
import Orders from "./seller/orders/Orders";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders/:ordersType" element={<Orders />} />
      </Routes>
    </Router>
  );
}

export default App;
