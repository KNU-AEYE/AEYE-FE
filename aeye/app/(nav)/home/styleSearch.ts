import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.info.main, // Use theme.palette.info.main
  marginLeft: 0,
  width: "100%",
  marginBottom: theme.spacing(2),
  transition: theme.transitions.create([
    "background-color",
    "box-shadow",
    "border",
  ]),
  border: `1px solid transparent`, // Default border
  "&:hover, &:focus-within": {
    backgroundColor: theme.palette.info.light,
    boxShadow: `0 0 0 1px ${alpha(theme.palette.info.contrastText, 0.5)}`,
    border: `1px solid ${theme.palette.info.main}`,
  },
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.info.contrastText, // Use theme.palette.info.contrastText for text color
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export { Search, SearchIconWrapper, StyledInputBase };
