import React from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { logout } from "../../util/user/userUtils";

const LogoutMobile = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <ListItemButton divider={true} onClick={() => logout(navigate)}>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary={t("logout")} />
    </ListItemButton>
  );
};

export default LogoutMobile;
