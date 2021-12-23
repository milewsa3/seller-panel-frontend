import React, { useEffect } from "react";
import { isUserLoggedIn } from "../user/userUtils";
import { useNavigate } from "react-router-dom";
import ThemeSwitcher from "../navbar/ThemeSwitcher";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn()) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <ThemeSwitcher />
    </div>
  );
};

export default Home;
