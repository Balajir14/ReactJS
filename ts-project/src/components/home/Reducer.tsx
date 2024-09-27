import { useReducer } from "react";

type State = {
  count: number;
};

type Action =
  | {
      type: "increment";
    }
  | { type: "decrement" }
  | { type: "reset" };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
  }
};

export default function Reducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <h1>Counter:{state.count}</h1>

      <button
        onClick={() =>
          dispatch({
            type: "increment",
          })
        }
      >
        Add Count Button
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "decrement",
          })
        }
      >
        Decrese Count Button
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "reset",
          })
        }
      >
        Reset Count Button
      </button>
    </>
  );
}
