import { Button, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { ChangeEvent, useContext, useState } from "react";
import { BlogContext } from "../../context/BlogContext";
import { useNavigate } from "react-router-dom";

export default function AddBlog() {
  const blogContext = useContext(BlogContext);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    location: "",
    tag: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    const finalData = { ...formData, id: Date.now() };
    blogContext?.addBlog(finalData);
    navigate("/blog-list");
  };

  return (
    <>
      <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
        <Typography variant="h5" gutterBottom>
          Add Your Blog
        </Typography>

        <TextField
          variant="outlined"
          label="Title"
          type="text"
          name="title"
          onChange={handleChange}
          value={formData.title}
        />
        <TextField
          variant="outlined"
          label="Content"
          type="text"
          name="content"
          onChange={handleChange}
          value={formData.content}
        />
        <TextField
          variant="outlined"
          label="Location"
          type="text"
          name="location"
          onChange={handleChange}
          value={formData.location}
        />
        <TextField
          variant="outlined"
          label="Tag"
          type="text"
          name="tag"
          onChange={handleChange}
          value={formData.tag}
        />

        <Button variant="contained" onClick={handleSubmit}>
          Add Blog
        </Button>
      </Box>
    </>
  );
}
