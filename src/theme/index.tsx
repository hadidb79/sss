import { ThemeOptions, ThemeProvider, createTheme } from "@mui/material";
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    neutral: true;
  }
}
const mainStyles: ThemeOptions = {
  typography: {
    fontFamily: "PT Sans Narrow, sans-serif",
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "neutral" },
          style: ({ theme }) => ({
            color: theme.palette.primary.contrastText,
          }),
        },
        {
          props: { variant: "text" },
          style: ({ theme }) => ({
            color: theme.palette.primary.main,
          }),
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: {},
      },
    },
    MuiTypography: {
      variants: [],
    },
  },
};

const theme = createTheme({
  ...mainStyles,
  palette: {
    mode: "light",
    primary: {
      main: "rgb(150, 152, 150)",
      contrastText: "#FFF",
    },
  },
});
export default function muiTheme({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
