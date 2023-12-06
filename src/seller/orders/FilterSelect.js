import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";

const availableOptions = [
  "accuracy-the-greatest",
  "accuracy-the-smallest",
  "price-the-highest",
  "price-the-lowest",
];

const FilterSelect = ({ sx, ...props }) => {
  const [filter, setFilter] = useState(availableOptions[0]);
  const { t } = useTranslation();

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <FormControl sx={sx} size={"medium"}>
      <InputLabel id="filter-select-label">{t("orders-filter")}</InputLabel>
      <Select
        labelId="filter-select-label"
        id="filter-select"
        value={filter}
        label={t("orders-filter")}
        onChange={handleChange}
        color={"secondary"}
      >
        {availableOptions.map((option) => (
          <MenuItem value={option} key={option}>
            {t(`orders-${option}`)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterSelect;
