import React, { ReactNode } from "react";
import Link from "next/link";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { IconStyle } from "../create/pageStyle";

export default function AddButton(): ReactNode {
  return (
    <Link href="/create" passHref>
      <AddCircleIcon sx={{ ...IconStyle }} />
    </Link>
  );
}
