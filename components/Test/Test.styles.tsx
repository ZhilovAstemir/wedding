import {styled} from "@mui/system";
import "@fontsource/playfair-display";

export const StyledMain = styled('main')(({theme}) => ({
  color: theme.palette.classic.main,
  fontFamily: theme.palette.classic.fontFamily,
  background: theme.palette.classic.background,

  "& .header": {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignCenter: "center",
    flexDirection: "column",
    textAlign: "center",
    fontFamily: "playfair",
    padding: "20px",
  },

  "& .abbreviation": {
    margin: "0",
    fontWeight: "400",
    LineHeight: "25px",
    letterSpacing: "0",
    fontSize: "25px",
    marginBottom: "0",
  },

  "& .header > hr": {
    width: "49px",
    marginTop: "0",
  },

  "& .names": {
    fontSize: "35px",
    margin: "148px 0 0 0",
    fontWeight: "400",
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
    fontWeight: "400",
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
    lineHeight: "30px"
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

//  ========================= PLAN =======================

  "& .plan": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    lineHeight: "30px",
  },

  "& .plan > h1": {
    marginBottom: "0",
    padding: "0 20px 0 20px",
    textAlign: "center",
    fontSize: "30px",
    fontWeight: "400",
  },

  "& .plan_flex": {
    marginTop: "24px",
    gap: "25px",
    height: "100%",
    marginBottom: "175px"
  },

  "& .plan_flex > div": {
    display: "flex",
    margin: "0",
    padding: "0",
    gap: "5px",
    fontWeight: "400",
  },

  "& .plan_flex hr": {
    height: "25px",
    alignCenter: "center",
    transform: "rotate(15deg)",
    marginLeft: "15px",
    marginRight: "6px"
  },

  "& .plan_flex p": {
    margin: "0",
    padding: "0",
    fontWeight: "400",
    fontSize: "25px",
  },

  "& .plan_flex h6": {
    margin: "0",
    padding: "0",
    fontWeight: "400",
    alignSelf: "end",
  },

//  ========================= PLACE =======================

  "& .place": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px",
  },

  "& .place > h1": {
    fontSize: "30px",
    fontWeight: "400",
    textAlign: "center",
    lineHeight: "30px"
  },

  "& .place_img": {
    height: "160px",
    width: "160px",
    background: "#fff",
  },

  "& .place > p": {
    fontSize: "15px",
    textAlign: "center",
    fontStyle: "italic",
  },

  "& .place > button": {
    background: "transparent",
    border: "none",
    outline: "none",
    fontSize: "10px",
    letterSpacing: "20%",
  },

  "& .place > hr": {
    marginTop: "5px",
    width: "141px",
  },
//  =============================== CONFIRM =======================

  "& .confirm": {
    display: "flex",
    flexDirection: "column",
    padding: "40px"
  },





}));


