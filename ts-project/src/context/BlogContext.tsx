import { createContext, ReactNode, useState } from "react";

interface Blog {
  id: number;
  title: string;
  content: string;
  location: string;
  tag: string;
}

interface BlogContextType {
  blogs: Blog[];
  addBlog: (blog: Blog) => void;
  getBlog: (id: number) => Blog | undefined;
}

// STEP : 1 -> Create Context
const BlogContext = createContext<BlogContextType | undefined>(undefined);

// STEP : 2 -> Create Provider (connect between store/context and components)
export default function BlogProvider({ children }: { children: ReactNode }) {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const addBlog = (blog: Blog) => {
    setBlogs([...blogs, { ...blog, id: Date.now() }]);
  };

  const getBlog = (id: number) => {
    return blogs.find((blog) => blog.id === id);
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, getBlog }}>
      {children}
    </BlogContext.Provider>
  );
}
