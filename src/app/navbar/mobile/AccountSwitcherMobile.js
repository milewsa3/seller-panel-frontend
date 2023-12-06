import React from "react";
import { ListItem, ListItemText } from "@mui/material";
import AccountSwitcher from "../desktop/AccountSwitcher";
import { useTranslation } from "react-i18next";

const AccountSwitcherMobile = () => {
  const { t } = useTranslation();

  return (
    <ListItem sx={{ flexDirection: "column" }} divider={true}>
      <AccountSwitcher sx={{ mb: 1 }} />
      <ListItemText primary={t("account-switcher")} />
    </ListItem>
  );
};

export default AccountSwitcherMobile;
