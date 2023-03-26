import posts from "../../posts.json";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Button,
  CardMedia,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import classes from "./index.module.css";

const PostPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { postId } = useParams();

  const [post, setPost] = useState();

  const handleClick = () => {
    if (!location.state) {
      navigate(`/feed?search=`);
    } else {
      const { search } = location.state;
      console.log("clicked", search);
      navigate(`/feed?search=${search}`);
    }
  };

  useEffect(() => {
    const post = posts.find((post) => post.id.toString() === postId);
    if (!post) {
      navigate("/404");
    }
    setPost(post);
  }, [postId]);

  if (!post) return null;

  return (
    <div>
      <div>
        <Button onClick={() => handleClick()}>Back</Button>
      </div>
      <Card className={classes.feedCard}>
        <CardMedia className={classes.feedCardImg} image={post.img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.username}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.timestamp}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.text}
          </Typography>
        </CardContent>
      </Card>
      <div className={classes.commentsWrapper}>
        <h1 className={classes.commentsTitle}>Comments:</h1>
        {post.comments.map((comment) => (
          <Card key={comment.id} className={classes.commentCard}>
            <CardMedia className={classes.feedCardImg} image={comment.img} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {comment.username}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {comment.timestamp}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {comment.text}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
