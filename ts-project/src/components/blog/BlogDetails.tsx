import { Typography } from "@mui/material";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { BlogContext } from "../../context/BlogContext";

export default function BlogDetail() {
  const blogContext = useContext(BlogContext);
  const { id } = useParams();

  if (!id) return;

  const numberFormat = parseInt(id);

  const blogDetails = blogContext?.getBlog(numberFormat);

  if (!blogDetails) return <Typography>Blog Not Found.</Typography>;

  return (
    <>
      <Typography variant="h5">Blog Detail</Typography>

      <Typography variant="subtitle1">{blogDetails.title}</Typography>
      <Typography variant="subtitle1">{blogDetails.content}</Typography>
      <Typography variant="subtitle1">{blogDetails.location}</Typography>
      <Typography variant="subtitle1">{blogDetails.tag}</Typography>

      <Link to={"/blog-list"}>Blog List</Link>
    </>
  );
}
