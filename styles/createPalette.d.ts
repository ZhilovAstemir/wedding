import * as createPalette from '@material-ui/core/styles/createPalette';
import {PaletteColorOptions} from "@mui/material";

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    classic?: PaletteColorOptions;
    aquarell?: PaletteColorOptions;
    gold?: PaletteColorOptions;
    blackAndWhite?: PaletteColorOptions;
    modern?: PaletteColorOptions;
  }
}