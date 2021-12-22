import React, {useEffect} from "react";
import {isUserLoggedIn} from "../user/userUtils";
import {useNavigate} from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn()) {
      navigate("/login");
    }
  }, [navigate]);

  return <div>Hello home</div>;
};

export default Home;
