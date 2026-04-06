export default function useCreateComment() {
  const { gameId } = useParams();
  const [comment, setComment] = useState("");

  const changeHandler = (e) => {
    setComment(e.target.value);
  };

  const submitHandler = async (onCreate) => {
    try {
      await request("comments", "POST", {
        author: user.email,
        message: comment,
        gameId,
      });

      setComment("");
      onCreate();
    } catch (err) {
      alert(err.message);
    }
  };

  return { comment, changeHandler, submitHandler };
}
