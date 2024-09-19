import Button from "@mui/material/Button";
import { useTheme } from "../../context/ThemeContext";
import Container from "@mui/material/Container";

export default function ThemeToogleButton() {
  const data = useTheme();
  const colors = data?.theme === "light" ? "white" : "black";

  return (
    <>
      <Container maxWidth="sm" sx={{ backgroundColor: colors, padding: 20 }}>
        <Button onClick={data?.toggleTheme} sx={{ backgroundColor: colors }}>
          Current Theme: {data?.theme}
        </Button>
      </Container>
    </>
  );
}
