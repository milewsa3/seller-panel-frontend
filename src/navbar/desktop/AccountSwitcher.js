import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { getUser, isUserLoggedIn } from "../../util/user/userUtils";
import { MenuItem, Select } from "@mui/material";

const AccountSwitcher = ({ ...props }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [accountNames, setAccountNames] = useState([]);

  useEffect(() => {
    if (isUserLoggedIn()) {
      const user = getUser();
      const names = [];
      user.accounts.forEach((account) => {
        names.push(account.name);
      });
      setAccountNames(names);
      setCurrentAccount(names[0] === undefined ? "None" : names[0]);
    }
  }, []);

  const handleAccountChange = (e) => {
    setCurrentAccount(e.target.value);
  };

  const styles = {
    select: {
      opacity: 0.8,
      transition: "0.3s",
      "&:hover": { opacity: 0.95 },
      "& .MuiSelect-select": { py: 3, bgcolor: "background.paper" },
    },
  };

  return (
    <Box {...props}>
      <FormControl variant="outlined">
        <Select
          className="select-secondary"
          sx={styles.select}
          color="secondary"
          value={currentAccount}
          onChange={handleAccountChange}
        >
          {accountNames.map((name) => (
            <MenuItem value={name}>{name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default AccountSwitcher;
