import { useParams } from "react-router";
import { useState } from "react";
import request from "../../../utils/request";
import useCreateComment from "../../../hooks/useCreateComment";

export default function CreateComment({ user, onCreate }) {
  const { comment, changeHandler, submitHandler } = useCreateComment();

  // Add Comment ( Only for logged-in users, which is not creators of the current game )
  return (
    <article className="create-comment">
      <label>Add new comment:</label>
      <form className="form" action={() => submitHandler(onCreate)}>
        <textarea
          onChange={changeHandler}
          value={comment}
          name="comment"
          placeholder="Comment......"
        ></textarea>
        <input
          disabled={!user}
          className="btn submit"
          type="submit"
          value="Add Comment"
        />
      </form>
    </article>
  );
}
