import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "To-Do List - ClearBlade",
  description:
    "Created utilizing NextJs, React, TypeScript, Zustand and MaterialUI to allow creation, deletion, and searchingn of to-do tasks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
