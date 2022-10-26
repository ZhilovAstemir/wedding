import {green, purple} from '@mui/material/colors';
import {createTheme} from "@mui/system";

export default createTheme({
  palette: {
    classic: {
      main: "#322918",
      background: "#ECE3DC",
      fontFamily: 'Playfair Display',
      input: {
        border: "none",
        borderRadius: "none",
      },
      select: {
        border: "none",
        borderRadius: "none",
      },
    },

    aquarell: {
      main: "#030303",
      background: "#EFEEEC",
      fontFamily: 'Playfair Display',
      input: {
        border: "1px solid black",
        borderRadius: "50px",
      },
      select: {
        border: "1px solid black",
        borderRadius: "50px",
      },
    },

    gold: {
      main: {
        color: "#fff",
        fontFamily: 'Source Serif Pro',
      },
      background: "#1B1B1B"
    },

    blackAndWhite: {
      main: {
        color: "",
        fontFamily: 'Source Serif Pro',
      },
      background: "#"
    },

    modern: {
      main: {
        color: "#CBACAC",
        fontFamily: 'Gilda Display',
      },
      background: "#531F1F"
    },
  },
});