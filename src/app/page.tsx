"use client";

import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import AddButton from "./components/AddButton";
import TasksContainer from "./components/TasksContainer";

import { Container, Typography, useTheme, useMediaQuery } from "@mui/material";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const isLg = useMediaQuery(theme.breakpoints.down("lg"));

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    width: "100%",
    backgroundSize: "cover",
    backgroundImage: "url(https://i.imgur.com/Ka0FsiI.jpg)",
    color: "white",
    padding: isXs
      ? "20px"
      : isSm
      ? "40px"
      : isMd
      ? "60px"
      : isLg
      ? "80px"
      : "100px",
  };

  return (
    <Container sx={containerStyle}>
      <Typography variant="h2" component="h2" gutterBottom>
        My To-Do List
      </Typography>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <TasksContainer searchQuery={searchQuery} />

      <AddButton />
    </Container>
  );
}
