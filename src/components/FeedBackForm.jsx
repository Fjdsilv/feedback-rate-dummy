import { useState, useEffect } from "react"
import RatingSelect from "./RatingSelect";
import { useGlobalContext } from "../context/Context";
import { toast } from "react-toastify";

const FeedBackForm = () => {
  const { addFeedback, feedbackEdit, updateFeedback } = useGlobalContext();

  const [text, setText] = useState("");
  const [rating , setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    }
    else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 characters.");
      setBtnDisabled(true);
    }
    else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating,
      }

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      }
      else {
        addFeedback(newFeedback);
        toast.success("Review Add");
    
      }
      
      setText("");
      setRating(10);
      setIsEdit(false);
      setBtnDisabled(true);

    }
  }

  useEffect(() => {
      if (feedbackEdit.edit === true) {
        setBtnDisabled(false);
        setIsEdit(true);
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
      }
   }, [feedbackEdit])

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect setRating={setRating} rating={rating} />
        <div className="input-group">
          <input 
            className="input"
            type="text"
            placeholder="Write a Review"
            value={text}
            onChange={(e) => handleTextChange(e)} 
          />
          <button 
            className="btn"
            type="submit" 
            disabled={btnDisabled}>
            {isEdit ? "Edit Review" : "Add Review"}
          </button>
        </div>
        {message && <p>{message}</p>}
      </form>
    </section>
  )
}
export default FeedBackForm