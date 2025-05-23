import commentService from "../../services/commentService.js";

export default function CommentsCreate({email, spiceId, onCreate,}) {
    const commentAction = async (formData) => {
        const comment = formData.get('comment');

        const createdComment = await commentService.create(email, spiceId, comment);

        onCreate(createdComment);
    }

    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" action={commentAction}>
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article>
    )
}