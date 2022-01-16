import React, { useState } from "react";
import { IconButton, MenuItem, Select, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { availableOrdersTypes } from "./OrdersUtil";
import { useTranslation } from "react-i18next";

const OrdersHeader = ({ ordersType, ...params }) => {
  const [selectOpened, setSelectOpened] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

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
        {t("orders")}{" "}
        <span style={{ color: "grey" }}>
          {t(`orders-${ordersType}`).toLowerCase()}
        </span>
      </Typography>
      <IconButton size={"small"} sx={{ ml: 1 }} onClick={handleSelectOpen}>
        <KeyboardArrowDownIcon />
      </IconButton>
      <Select
        open={selectOpened}
        onClose={handleSelectClose}
        value={ordersType}
        onChange={handleSelectChange}
        sx={{ width: "0px", overflow: "hidden" }}
      >
        {availableOrdersTypes.map((orderType) => (
          <MenuItem value={orderType}>{t(`orders-${orderType}`)}</MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default OrdersHeader;
