import { TextField } from "@mui/material";
import { ChangeEvent } from "react";

interface ChildProps {
  onValueChange: (value: string) => void;
}

export default function Child({ onValueChange }: ChildProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onValueChange(event.target.value);
  };

  return (
    <>
      <TextField
        type="text"
        placeholder="Enter Child Data"
        onChange={handleChange}
      />
    </>
  );
}
