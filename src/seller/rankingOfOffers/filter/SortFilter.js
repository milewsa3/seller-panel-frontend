import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";

const availableOptions = [
  "buying-frequency-the-largest",
  "buying-frequency-the-smallest",
];

const SortFilter = () => {
  const [filter, setFilter] = useState(availableOptions[0]);
  const { t } = useTranslation();

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <FormControl>
      <InputLabel id="sort-filter-select-label">
        {t("ranking-of-offers-sort-filter")}
      </InputLabel>
      <Select
        labelId="sort-filter-select-label"
        id="sort-filter-select"
        value={filter}
        label={t("ranking-of-offers-sort-filter")}
        onChange={handleChange}
        color={"secondary"}
      >
        {availableOptions.map((option) => (
          <MenuItem value={option} key={option}>
            {t(`ranking-of-offers-${option}`)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SortFilter;
