import React from "react";
import { Divider, Pagination, Paper, Stack } from "@mui/material";
import RankingOfOffersSearch from "./RankingOfOffersSearch";
import RankingOfOffersFilters from "./filter/RankingOfOffersFilters";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import RankingOfOffersPaper from "./RankingOfOffersPaper";
import Box from "@mui/material/Box";

const RankingOfOffersGrid = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const handlePageChange = (event, value) => {
    const pathname = location.pathname;
    navigate(pathname.slice(0, pathname.lastIndexOf("/")) + "/" + value);
  };

  return (
    <Paper
      sx={{
        mt: 3,
        p: 5,
        width: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <RankingOfOffersSearch sx={{ mb: 8 }} />
      <RankingOfOffersFilters sx={{ mb: 4 }} />
      <Divider />
      <Box display={"flex"} flexDirection={"column"} gap={7} sx={{ my: 3 }}>
        <RankingOfOffersPaper />
        <RankingOfOffersPaper />
      </Box>
      <Stack spacing={2} alignSelf={"center"}>
        <Pagination
          count={10}
          page={parseInt(params.page)}
          color="secondary"
          onChange={handlePageChange}
        />
      </Stack>
    </Paper>
  );
};

export default RankingOfOffersGrid;
