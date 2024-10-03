import { useMemo, useState } from "react";

export default function useMemoFilter() {
  const [search, setSearch] = useState("");

  // const [items, setItems] = useState([
  //   "apple",
  //   "banana",
  //   "pineapple",
  //   "mango",
  //   "grapes",
  //   "orange",
  //   "kiwi",
  //   "apple1",
  // ]);

  const items = [
    "apple",
    "banana",
    "pineapple",
    "mango",
    "grapes",
    "orange",
    "kiwi",
    "apple1",
  ];

  const filterItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, items]);

  return (
    <>
      <input
        type="text"
        placeholder="Search Fruits..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filterItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
