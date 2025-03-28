import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import BlogDisplay from '../../Components/BlogDisplay/BlogDisplay';
// import styles from "./singleBlog.module.css"

const SingleBlog = () => {
  const { blog_details } = useContext(ShopContext);
  const { blogName } = useParams();
  const blog = blog_details.find((e) => e.name == blogName);
  return (
    <BlogDisplay blog={blog}/>
  )
}

export default SingleBlog