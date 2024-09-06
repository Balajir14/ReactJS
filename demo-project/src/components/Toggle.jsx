import { useState } from "react";

export default function Toggle () {
    const [visible, setVisible] = useState(true);
    console.log(visible);

    const toggle = () => {
        setVisible(!visible);
    }
  return(
    <>
      <button onClick={toggle}>
         {visible ? "Show": "Hide"} Text
      </button>
      {
        visible && <p>This text is visible</p>
      }
      {
        !visible && <p>This text is not visible</p>
      }
    </>
  )
}

