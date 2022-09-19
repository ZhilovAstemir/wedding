import {styled} from "@mui/system";

export const StyledMain = styled('main')(({ theme }) => ({
  color: theme.palette.gggg.main,
  '& .reeed': {
    color: 'red',
  }
}));