import { Input, Typography, Button } from "@mui/material";
import classes from "./index.module.css";
const HeaderPage = () => {
  return (
    <div className={classes.headerPageWrapper}>
      <Typography variant="h1" component="h1">
        Social Media Feed
      </Typography>
      <Input placeholder="Search..." variant="outlined" color="primary" />
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </div>
  );
};

export default HeaderPage;
