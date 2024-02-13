"use client";

import React, { useState, FormEvent, ReactElement } from "react";
import { Button, Container, Card, Typography, TextField } from "@mui/material";
import {
  containerStyle,
  cardStyle,
  buttonStyle,
  IconStyle,
} from "./pageStyle.js";
import useTasksStore from "../../store/useBearStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CancelIcon from "@mui/icons-material/Cancel";

export default function NewTask(): ReactElement {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [backgroundImage, setBackgroundImage] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);

  const router = useRouter();

  const addTask = useTasksStore((state: any) => state.addTask);

  function handleTaskCreation(event: FormEvent) {
    event.preventDefault();

    const taskId = Date.now().toString();

    const task = {
      id: taskId,
      title,
      description,
      backgroundImage: imageURL,
      status: "In Progres...",
    };

    addTask(task);

    setTitle("");
    setDescription("");
    setBackgroundImage("");

    router.push("/");
  }

  return (
    <Container
      sx={{
        ...containerStyle,
      }}
    >
      <Card variant="outlined" sx={cardStyle}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign="center"
        >
          New Task
        </Typography>
        <form onSubmit={handleTaskCreation}>
          <TextField
            required
            id="titleTask"
            label="Title of New Task"
            variant="outlined"
            color="success"
            sx={{ width: "100%", backgroundColor: "white" }}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <TextField
            multiline
            maxRows={5}
            id="descriptionTask"
            label="Description"
            variant="outlined"
            color="success"
            sx={{ width: "100%", marginTop: "1rem", backgroundColor: "white" }}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />

          <input
            type="file"
            accept="image/*"
            onChange={(event) => {
              if (event.target.files && event.target.files[0]) {
                const file = event.target.files[0];
                if (imageURL) URL.revokeObjectURL(imageURL);
                setImageFile(file);
                setImageURL(URL.createObjectURL(file));
              }
            }}
            style={{
              display: "block",
              alignContent: "center",
              marginLeft: "auto",
              marginTop: "1rem",
            }}
          />

          <Button type="submit" sx={{ ...buttonStyle, marginTop: "1rem" }}>
            Create
          </Button>
        </form>
      </Card>

      <Link href="/" passHref>
        <CancelIcon sx={{ ...IconStyle }} />
      </Link>
    </Container>
  );
}
