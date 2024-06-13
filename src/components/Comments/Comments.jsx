import CommentsForm from "../CommentsForm/CommentsForm.jsx";
import Comment from "../Comment/Comment.jsx";
import "./Comments.scss";

export default function Comments(props) {
  const comments = props.comments;

  return (
    <div className="comments">
      <p className="comments__title">{comments.length} Comments</p>
      <CommentsForm />
      {comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            name={comment.name}
            timestamp={comment.timestamp}
            comment={comment.comment}
          />
        );
      })}
    </div>
  );
}
