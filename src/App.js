import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./app/navbar/Navbar";
import Login from "./app/auth/Login";
import Dashboard from "./seller/Dashboard";
import Orders from "./seller/orders/Orders";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders/:ordersType/:page" element={<Orders />} />
      </Routes>
    </Router>
  );
}

export default App;
