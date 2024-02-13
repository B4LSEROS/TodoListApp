import React, { ReactNode } from "react";
import Link from "next/link";
import { Box, Card, Container, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import useTasksStore from "../../store/useBearStore";

interface propInterface {
  searchQuery: string;
}

export default function TasksContainer({
  searchQuery,
}: propInterface): ReactNode {
  const { tasks, removeTask, updateTaskStatus } = useTasksStore((state) => ({
    tasks: state.tasks,
    removeTask: state.removeTask,
    updateTaskStatus: state.updateTaskStatus,
  }));

  const filteredTasks =
    searchQuery.length === 0
      ? tasks
      : tasks.filter(
          (task: any) =>
            task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (task.status &&
              task.status.toLowerCase().includes(searchQuery.toLowerCase()))
        );

  const cardStyles = {
    textAlign: "center",
    width: "50%",
    minHeight: "20%",
    "& h3": {
      color: "#333",
      fontSize: "1.5rem",
      marginBottom: "10px",
    },
    "& h2": {
      color: "#666",
      fontSize: "1.2rem",
    },
  };
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          height: "auto",
          gap: "5rem",
        }}
      >
        {filteredTasks.map((task: any) => (
          <Card
            key={task.id}
            variant="outlined"
            sx={{
              border: "none",
              backgroundColor: "white",
              opacity: task.status === "completed" ? 0.5 : 1,
              width: "80%",
              borderRadius: "20px",
              padding: "5%",
              boxShadow:
                task.status === "completed"
                  ? "2px 2px 20px 8px #2bdaa3"
                  : "2px 2px 20px 5px #EE4B2B",
              textAlign: "center",
              boxSizing: "content-box",
              backgroundSize: "cover",
              backgroundImage: `url(${task.backgroundImage})`,
              textDecoration:
                task.status === "completed" ? "line-through" : "none",
            }}
          >
            <Typography variant="h2" component="h2" gutterBottom>
              {task.title}
            </Typography>
            <Typography variant="body1" component="h4">
              {task.description}
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "10px",
              }}
            ></Box>

            <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
              <CheckCircleIcon
                sx={{ color: "#2bdaa3", fontSize: "40px", cursor: "pointer" }}
                onClick={() => {
                  const newStatus =
                    task.status === "completed" ? "in progress" : "completed";
                  updateTaskStatus(task.id, newStatus);
                }}
              />

              <DeleteIcon
                sx={{ cursor: "pointer", fontSize: "40px" }}
                onClick={() => removeTask(task.id)}
              />

            </Box>
          </Card>
        ))}
      </Container>
    </>
  );
}
