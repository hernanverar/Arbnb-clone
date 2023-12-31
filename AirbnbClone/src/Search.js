import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./Search.css";
import { Button } from "@mui/material";
import HailSharpIcon from "@mui/icons-material/HailSharp";

// DATE COMPONENT

function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelectDay(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelectDay} />
      <h2>
      <input min={0} defaultValue={2} type="number" />
        Number of Guests
        <HailSharpIcon />
      </h2>
      <Button>Search Airbnb</Button>
    </div>
  );
}

export default Search;
