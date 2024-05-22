import Header from "./components/Header";
import FeedBackForm from "./components/FeedBackForm";
import FeedbackStates from "./components/FeedbackStates";
import FeedbackList from "./components/FeedbackList";

const App = () => {

  return (
    <main>
      <Header />
      <div className="wrapper">
        <FeedBackForm />
        <FeedbackStates />
        <FeedbackList />
      </div>
    </main>
  )
}

export default App