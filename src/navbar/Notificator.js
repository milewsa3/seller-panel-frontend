import React, { Fragment } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import { Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";

const Notificator = () => {
  const { t } = useTranslation();
  const [openedSnackbar, setOpenedSnackbar] = React.useState(false);

  const openSnackbar = () => {
    setOpenedSnackbar(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenedSnackbar(false);
  };

  const notificationAction = (
    <Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleSnackbarClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Fragment>
  );

  return (
    <div>
      <IconButton color="inherit" onClick={openSnackbar}>
        <NotificationsIcon />
      </IconButton>
      <Snackbar
        open={openedSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={t("notification-empty")}
        action={notificationAction}
      />
    </div>
  );
};

export default Notificator;
