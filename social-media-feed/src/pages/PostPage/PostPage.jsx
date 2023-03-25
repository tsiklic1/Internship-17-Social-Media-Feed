import posts from "../../posts.json";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const PostPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState();

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
