import { Button, styled, Typography } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export default function Intro() {
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: "tomato",
    margin: 5,
    "&:hover": {
      background: theme.palette.primary.light,
    },

    "&:disabled": {
      background: "gray",
      color: "#FFF",
    },
  }));

  return (
    <div className="App">
      <Button variant="text" startIcon={<SettingsOutlinedIcon />}>
        Text
      </Button>
      <Button variant="contained" color="primary">
        Contained
      </Button>
      <Button variant="outlined" size="small" color="otherColor">
        Outlined
      </Button>
      <Typography variant="h1" component="p">
        h1. Heading
      </Typography>

      <Button variant="contained">My Unique btn</Button>
      <BlueButton>my gray btn</BlueButton>
    </div>
  );
}
