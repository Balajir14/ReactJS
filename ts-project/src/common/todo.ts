export function getColor(status: string) {
  let color = "";

  // if (status == "started") {
  //   color = "blue";
  // } else if (status == "progress") {
  //   color = "red";
  // } else if (status == "completed") {
  //   color = "yellow";
  // } else {
  //   color = "black";
  // }

  switch (status) {
    case "started":
      color = "blue";
      break;
    case "progress":
      color = "red";
      break;
    case "completed":
      color = "yellow";
      break;
  }

  return color;
}
