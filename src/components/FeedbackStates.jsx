import { useGlobalContext } from "../context/Context";

const FeedbackStates = () => {
const { feedback } = useGlobalContext()

 let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating;
 }, 0) / feedback.length;

 average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <section className="state">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </section>
  )
}
export default FeedbackStates