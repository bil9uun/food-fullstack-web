"use client";
import React, { PropsWithChildren } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { CssBaseline } from "@mui/material";

const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <AppRouterCacheProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </AppRouterCacheProvider>
  );
};
export { ThemeProvider };
