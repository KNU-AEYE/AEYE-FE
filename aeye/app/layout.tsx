"use client";
import { RecoilRoot } from "recoil";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#65d586",
      light: "#D6FADC",
      dark: "#62956E",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#52589E",
      dark: "#00114A",
      light: "#00114A",
      contrastText: "#ffffff",
    },
    info: {
      main: "#EFEFEF",
      contrastText: "#000000",
    },
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <ThemeProvider theme={theme}>
          <RecoilRoot>{children}</RecoilRoot>
        </ThemeProvider>
      </body>
    </html>
  );
}
