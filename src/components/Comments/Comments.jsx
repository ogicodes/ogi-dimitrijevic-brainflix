import CommentsForm from '../CommentsForm/CommentsForm.jsx';




export default function Comments() {

    return (
        <div className="comments">
            <h2 className="comments__title">3 Comments</h2>
            <CommentsForm />
            <CommentsList />
        </div>
    )
}