import React, { useEffect } from "react";
import { isUserLoggedIn } from "../user/userUtils";
import { useNavigate } from "react-router-dom";
import ThemeSwitcher from "../navbar/ThemeSwitcher";
import { Container, Typography } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn()) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Container>
      <Typography variant="h2" color="text.primary">
        Welcome home
      </Typography>
    </Container>
  );
};

export default Home;
