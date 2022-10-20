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
        color: "linear-gradient(90deg, #BA6B08 0%, #D29632 11%, #E6B954 22%, #F4D26D 33%, #FCE17C 42%, #FFE681 50%, #FEE27B 61%, #FCD56A 75%, #F8C04E 92%, #F6B53E 100%)",
      },
      background: "#"
    },

    blackAndWhite: {
      main: purple[500],
      background: "#"
    },

    modern: {
      main: purple[500],
      background: "#"
    },
  },
});