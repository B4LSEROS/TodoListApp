import React, { ReactNode } from "react";
import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function SearchBar({
  searchQuery,
  setSearchQuery,
}: SearchBarProps): ReactNode {
  return (
    <Box sx={{ mb: 2, width: "35%" }}>
      <TextField
        type="search"
        label="Search by Title or Status"
        color="success"
        variant="filled"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{
          width: "100%",
          marginBottom: "1rem",
          borderRadius: "10px",
          backgroundColor: "white",
          color: "none",
        }}
      />
    </Box>
  );
}
