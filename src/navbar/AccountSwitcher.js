import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { getUser, isUserLoggedIn } from "../user/userUtils";
import { NativeSelect } from "@mui/material";

const AccountSwitcher = () => {
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

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        {/*<InputLabel id="account-select-label">Account</InputLabel>*/}
        <NativeSelect value={currentAccount} onChange={handleAccountChange}>
          {accountNames.map((name) => (
            <option value={name}>{name}</option>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
};

export default AccountSwitcher;
