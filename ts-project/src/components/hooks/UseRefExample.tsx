import Button from "@mui/material/Button";
import { useRef } from "react";

export default function UseRefExample() {
  const paragrapghRef = useRef<HTMLParagraphElement>(null);

  const changeColor = () => {
    if (paragrapghRef.current) {
      paragrapghRef.current.style.color = "red";
    }
  };

  return (
    <div>
      <p ref={paragrapghRef}>This is the example for useRef Hook in React</p>
      <Button variant="contained" onClick={changeColor}>
        Change Color
      </Button>
    </div>
  );
}
