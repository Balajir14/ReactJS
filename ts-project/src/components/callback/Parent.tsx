import { useState } from "react";
import Child from "./Child";
import { Typography } from "@mui/material";

export default function Parent() {
  const [data, setData] = useState<string>("");

  const handleValueChange = (newValue: string) => {
    setData(newValue);
  };

  return (
    <>
      <Typography variant="h3">Parent component</Typography>
      <Typography variant="h5">My First Name is: {data} </Typography>
      <Child onValueChange={handleValueChange} />
    </>
  );
}
