import React from 'react'
// import styles from "./blogDisplay.module.css"

const BlogDisplay = ({ blog }) => {
  console.log(blog)
  return (
    <img src={blog.img} alt='blog image' width={120} height={120}/>
  )
}

export default BlogDisplay