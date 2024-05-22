import { createContext, useContext, useState, useEffect } from "react";
import data from "../assets/data/Data";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";


const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [feedback, setFeedback] = useState(data);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    });

    // console.log(feedback)

    const deleteFeedback = (id) => {
        if(confirm("Are you sure Do you want to delete?")) {
          const newFeedkback = feedback.filter(item => item.id !== id);
          setFeedback(newFeedkback);
          toast.error("Review Deleted");
        }
      }
    
      const addFeedback = (newFeedbacok) => {
        setFeedback([{id: nanoid(), ...newFeedbacok} , ...feedback]);
      }
    
      const editFeedback = (item) => {
        setFeedbackEdit({
            item: item,
            edit: true,
        })
      }

      const updateFeedback = (id, upItem) => {
        // console.log(upItem);
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...upItem } : item))
        toast.warn("Review Edited");
        setFeedbackEdit({
            item: {},
            edit: false,
        })
      }
 
    return (
        <AppContext.Provider value={
            { 
                feedback,
                setFeedback,
                deleteFeedback,
                addFeedback,
                editFeedback,
                feedbackEdit,
                updateFeedback,
            }
        }>
        {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };


// if (item.id === id) {
//   // const itemEdited = { id: item.id, ...upItem }
//   // console.log(itemEdited)
//   console.log({ ...item , ...upItem });
//   return { ...item , ...upItem }
//   // return itemEdited
// }
// else {
//   return item;
// }
