import { Input, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import classes from "./index.module.css";
const HeaderPage = () => {
  const [searchString, setSearchString] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleClick = () => {
    // setSearchParams({ search: searchString });
    navigate(`/feed?search=${searchString}`);
  };

  useEffect(() => {
    console.log(searchString);
  }, [searchString]);

  return (
    <div className={classes.headerPageWrapper}>
      <Typography variant="h1" component="h1">
        Social Media Feed
      </Typography>
      <Input
        placeholder="Search..."
        variant="outlined"
        color="primary"
        onChange={(e) => setSearchString(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={() => handleClick()}>
        Submit
      </Button>
    </div>
  );
};

export default HeaderPage;
