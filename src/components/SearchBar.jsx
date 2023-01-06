import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

export default function SearchBar() {

  const [searchTErm, setSEarchTerm] = useState("");

  const navigate = useNavigate();


  const handleSubmit = (e) =>{
    e.preventDefault();

    navigate(`search/${searchTErm}`)

    setSEarchTerm("")

  }

  return (
    <div>
      <Paper
        component={"form"}
        onSubmit={handleSubmit}
        sx={{
          borderRadius: 20,
          border: "1px solid #e3e3e3",
          pl: 2,
          boxShadow: "none",
          mr: { sm: 5 },
        }}
      >
        <input
          className="search-bar"
          placeholder="Search..."
          value={searchTErm}
          onChange={(e) => setSEarchTerm(e.target.value)}
        />
        <IconButton
          type="submit"
          sx={{ p: "10px", color: "red" }}
          aria-label="search"
        >
          <Search />
        </IconButton>
      </Paper>
    </div>
  );
}
