import {styled} from "@mui/system";
import {rotate} from "next/dist/server/lib/squoosh/impl";

export const StyledMain = styled('main')(({ theme }) => ({
  color: theme.palette.classic.main,
  "& .header": {
    background: "#ECE3DC",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignCenter: "center",
    flexDirection: "column",
    fontFamily: "Pla",
    textAlign: "center",
    padding: "20px",
    color: "#322918",
  },

  "& .abbreviation": {
    margin: "0",
  },

  "& .header > hr": {
    width: "49px",
  },

  "& .names": {
    fontSize: "35px",
    margin: "148px 0 0 0"
  },

  ".flex_container": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "25px",
    marginTop: "10px",
  },

  ".flex_container > h5": {
    margin: "0 15px",
    fontSize: "35px",
  },

  ".main_container > hr": {
    width: "35px",
    marginTop: "10px",
    marginBottom: "0",
  },

  ".year": {
    fontSize: "15px",
    marginTop: "8px",
  },

  ".restTime": {
    display: "flex",
    margin: "0 auto",
  },

  ".restTitle": {
    fontSize: "15px",
    marginTop: "144px",
    marginBottom: "3px",
  },

  ".restTime > div > p": {
    margin: "0",
  },

  ".restTime > hr": {
    margin: "0",
    transform: "rotate(15deg)",
    background: "#322918",
    height: "25px",
  },

  ".days": {
    fontSize: "25px",
  },

  ".time": {

  }

}));