import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";

const availableOptions = ["in-last-10-days", "in-last-month"];

const TimeFilter = () => {
  const [filter, setFilter] = useState(availableOptions[0]);
  const { t } = useTranslation();

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <FormControl>
      <InputLabel id="time-filter-select-label">
        {t("ranking-of-offers-time-filter")}
      </InputLabel>
      <Select
        labelId="time-filter-select-label"
        id="time-filter-select"
        value={filter}
        label={t("ranking-of-offers-time-filter")}
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

export default TimeFilter;
