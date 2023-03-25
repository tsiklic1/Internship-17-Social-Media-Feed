import posts from "../../posts.json";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

const PostPage = () => {
  const location = useLocation();
  const { search } = location.state;
  const { postId } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState();

  const handleClick = () => {
    console.log("clicked", search);
    navigate(`/feed?search=${search}`);
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
      <Button onClick={() => handleClick()}>Back</Button>
      <img src={post.img} alt="profile picture" />
      <h1>{post.username}</h1>
      <p>{post.text}</p>
      <p>{post.timestamp}</p>
      <div>
        {post.comments.map((comment) => (
          <p key={comment.id}>{comment.text}</p>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
