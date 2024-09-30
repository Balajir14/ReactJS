import { useEffect, useMemo, useState } from "react";

export default function UseMemoExample() {
  const [fieldValue, setFieldValue] = useState<string>("");

  const [count, setCount] = useState(0);

  const calculation = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <h3>Calculation Result: {calculation}</h3>

      <input type="text" onChange={(e) => setFieldValue(e.target.value)} />
      <p>Input: {fieldValue}</p>
    </>
  );
}
