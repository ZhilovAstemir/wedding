import {styled} from "@mui/system";

export const StyledMain = styled('main')(({ theme }) => ({
  color: theme.palette.classic.main,
  // '& .reeed': {
  //   color: 'red',
  // }
  "& .header": {
    background: "#ECE3DC",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignCenter: "center",
    flexDirection: "column",
  }

}));