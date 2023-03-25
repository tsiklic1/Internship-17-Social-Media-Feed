import posts from "../../posts.json";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

import classes from "./index.module.css";

const FeedPage = () => {
  return (
    <div className={classes.feedPageWrapper}>
      {posts.map((post) => (
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
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default FeedPage;
