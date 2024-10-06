import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function MenuAppBar(props: { title: string }) {
  return (
    <Box
      sx={{
        flexGrow: 3,
        width: "100%",
      }}
    >
      <AppBar
        position="static"
        sx={{
          flexGrow: 3,
          backgroundColor: "teal",
          width: "100%",
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
