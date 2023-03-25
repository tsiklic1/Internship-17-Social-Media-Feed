import posts from "../../posts.json";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

import {
  Link,
  useParams,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import classes from "./index.module.css";
import { useEffect } from "react";

const FeedPage = () => {
  const [searchString, setSearchString] = useSearchParams();
  const navigate = useNavigate();
  console.log("feed page search string", searchString.get("search"));

  return (
    <div className={classes.feedPageWrapper}>
      <Typography variant="h1" component="h1">
        Posts:
      </Typography>
      {posts.map(
        (post) =>
          (post.username.includes(searchString.get("search")) ||
            post.text.includes(searchString.get("search"))) && (
            <Link
              key={post.id}
              to={post.id.toString()}
              state={{ search: searchString.get("search") }}
            >
              <Card className={classes.feedCard}>
                <CardMedia className={classes.feedCardImg} image={post.img} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {post.username}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.text}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          )
      )}
    </div>
  );
};

export default FeedPage;
