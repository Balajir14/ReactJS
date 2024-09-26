import { useContext } from "react";
import { BlogContext } from "../../context/BlogContext";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid2,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BlogList() {
  const blogContext = useContext(BlogContext);
  const blogsList = blogContext?.blogs;
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ padding: 4 }}>
        {blogsList?.map((blog: any) => (
          <Grid2 container spacing={1} sx={{ margin: 1 }}>
            <Card
              sx={{
                display: "flex",
                height: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <CardContent>
                <Typography variant="h6">{blog.title}</Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => navigate(`/blog-detail/${blog.id}`)}>
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid2>
        ))}
      </Box>
      <Button onClick={() => navigate("/add-blog")}>Add Blog</Button>
    </>
  );
}
