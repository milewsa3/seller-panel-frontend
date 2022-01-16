import React, { useState } from "react";
import {
  FormControl,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { availableOrdersTypes } from "./OrdersUtil";

const OrdersHeader = ({ ordersType, ...params }) => {
  const [selectOpened, setSelectOpened] = useState(false);
  const navigate = useNavigate();

  const handleSelectOpen = () => {
    setSelectOpened(true);
  };

  const handleSelectClose = () => {
    setSelectOpened(false);
  };

  const handleSelectChange = (e) => {
    const orderType = e.target.value;
    navigate("/orders/" + orderType + "/1");
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
      <Typography variant={"h5"} color={"text.primary"}>
        Orders <span style={{ color: "grey" }}>{ordersType}</span>
      </Typography>
      <IconButton size={"small"} sx={{ ml: 2 }} onClick={handleSelectOpen}>
        <KeyboardArrowDownIcon />
      </IconButton>
      <FormControl sx={{ minWidth: 120 }}>
        <Select
          open={selectOpened}
          onClose={handleSelectClose}
          value={ordersType}
          onChange={handleSelectChange}
          sx={{ width: "0px", overflow: "hidden" }}
        >
          {availableOrdersTypes.map((orderType) => (
            <MenuItem value={orderType}>{orderType}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default OrdersHeader;
