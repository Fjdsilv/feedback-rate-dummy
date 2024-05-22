import { useGlobalContext } from "../context/Context"
import FeedbackItem from "./FeedbackItem"

const FeedbackList = () => {
   const { feedback } = useGlobalContext()
    if (!feedback || feedback.length === 0) {
        return <p className="no-feedback">✌No Feedback Yet!😔</p>
    }

  return (
    <section>
        {
            feedback.map(item => {
                return <FeedbackItem 
                            key={item.id} 
                            item={item}
                            {...item}
                        />
            })
        }
    </section>
  )
}
export default FeedbackList