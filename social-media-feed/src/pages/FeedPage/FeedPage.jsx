import posts from "../../posts.json";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

import { Link, useParams, useSearchParams } from "react-router-dom";
import classes from "./index.module.css";

const FeedPage = () => {
  const [searchString, setSearchString] = useSearchParams();
  console.log("feed page search string", searchString.get("search"));

  return (
    <div className={classes.feedPageWrapper}>
      {posts.map((post) =>
        post.username.includes(searchString.get("search")) ? (
          <Link to={post.id.toString()}>
            <Card key={post.id} sx={{ maxWidth: 345 }}>
              <CardMedia sx={{ height: 140 }} image={post.img} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {post.username}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.text}
                </Typography>
              </CardContent>
              <CardActions>
                {/* <Link to={post.id.toString()}> */}
                <Button size="small">Share</Button>
                {/* </Link> */}
              </CardActions>
            </Card>
          </Link>
        ) : null
      )}
    </div>
  );
};

export default FeedPage;
