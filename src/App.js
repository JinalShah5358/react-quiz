import { useEffect, useReducer } from "react";
import Header from "./Header";

const initialState = {
  questions: [],
  status: "loading",
};

function reducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    default:
    // throw new Error("action unknown");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    async function getQuestion() {
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (err) {
        dispatch({ type: "dataFailed" });
      }
    }
    getQuestion();
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <p>1/15</p>
        <p>Question</p>
      </main>
    </div>
  );
}
