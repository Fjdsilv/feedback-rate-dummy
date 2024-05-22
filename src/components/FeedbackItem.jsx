import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import Card from "./shared/Card"
import { useGlobalContext } from "../context/Context";

const FeedbackItem = ({ id, text, rating, item }) => {
 const { deleteFeedback, editFeedback } = useGlobalContext()

  return (
    <Card>
      <div className="rate">{rating}</div>
      <p>{text}</p>
      <div className="buttons">
        <button
          className="icon" 
          type="button"
          onClick={() => deleteFeedback(id)}
        >
          <RiDeleteBinLine />
        </button>
        <button 
          className="icon"
          type="button"
          onClick={() => editFeedback(item)}
        >
          <FaRegEdit />
        </button>
      </div>
    </Card>
  )
}
export default FeedbackItem