import React from "react";
import Box from "@mui/material/Box";
import SortFilter from "./SortFilter";
import TimeFilter from "./TimeFilter";
import PropTypes from "prop-types";

const RankingOfOffersFilters = ({ sx = [], ...props }) => {
  return (
    <Box
      sx={sx}
      display={"flex"}
      gap={5}
      flexDirection={{ xs: "column", sm: "row" }}
    >
      <SortFilter />
      <TimeFilter />
    </Box>
  );
};

RankingOfOffersFilters.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default RankingOfOffersFilters;
