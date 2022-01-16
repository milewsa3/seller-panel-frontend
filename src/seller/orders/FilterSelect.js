import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import { InputLabel, MenuItem, Select } from "@mui/material";

const availableOptions = [
  "accuracy: the greatest",
  "accuracy: the smallest",
  "price: the highest",
  "price: the lowest",
];

const FilterSelect = ({ sx, ...props }) => {
  const [filter, setFilter] = useState(availableOptions[0]);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <FormControl sx={sx} size={"medium"}>
      <InputLabel id="filter-select-label">Filter</InputLabel>
      <Select
        labelId="filter-select-label"
        id="filter-select"
        value={filter}
        label="Filter"
        onChange={handleChange}
      >
        {availableOptions.map((option) => (
          <MenuItem value={option} key={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterSelect;
