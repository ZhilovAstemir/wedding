import {styled} from "@mui/system";
import {rotate} from "next/dist/server/lib/squoosh/impl";

export const StyledMain = styled('main')(({theme}) => ({
  color: theme.palette.classic.main,
  fontFamily: theme.palette.classic.fontFamily,
  background: "#ECE3DC",

  "& .header": {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignCenter: "center",
    flexDirection: "column",
    fontFamily: "Pla",
    textAlign: "center",
    padding: "20px",
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

  "& .flex_container": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "25px",
    marginTop: "10px",
  },

  "& .flex_container > h5": {
    margin: "0 15px",
    fontSize: "35px",
  },

  "& .main_container > hr": {
    width: "35px",
    marginTop: "10px",
    marginBottom: "0",
  },

  "& .year": {
    fontSize: "15px",
    marginTop: "8px",
  },

  "& .restTime": {
    display: "flex",
    margin: "0 auto",
    gap: "15px"
  },

  "& .restTitle": {
    fontSize: "15px",
    marginTop: "134px",
    marginBottom: "12px",
    fontStyle: "italic"
  },

  "& .restTime > div > p": {
    margin: "0",
  },

  "& .restTime > hr": {
    margin: "0",
    transform: "rotate(15deg)",
    background: "#322918",
    height: "25px",
  },

  "& .days": {
    fontSize: "25px",
  },

  "& .time": {
    fontSize: "10px",
  },

//  ========================= WELCOME =======================

  "& .welcome": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "40px",
    width: "100%",
  },

  "& .welcomeTitle": {
    marginBottom: "22px",
    marginTop: "93px",
    fontStyle: "italic",
    fontSize: "30px",
    fontWeight: "400",
  },

  "& .news": {
    fontFamily: "Gilroy",
    fontSize: "14px",
    padding: "5px",
    fontWeight: "400",
    marginTop: "0",
  },

  "& .welcome > h2": {
    fontSize: "30px",
    marginTop: "18px",
    fontStyle: "italic",
    fontWeight: "400",
    margin: "0",
  },

  "& .welcome > h4": {
    fontFamily: "Gilroy",
    fontSize: "14px",
    padding: "5px",
    fontWeight: "400",
    marginTop: "22px",
  },

  "& .welcome > h5": {
    marginTop: "99px",
    fontFamily: "Gilroy",
    fontSize: "15px",
    padding: "15px",
    fontStyle: "italic",
    fontWeight: "400",
  },

}));