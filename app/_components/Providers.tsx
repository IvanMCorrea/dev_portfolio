"use client";

import { ThemeProvider } from "next-themes";
import Sidebar from "./Sidebar";
import AppBar from "./AppBar";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem attribute="class" defaultTheme="system">
      <Sidebar />
      {children}
      <AppBar />
    </ThemeProvider>
  );
}
