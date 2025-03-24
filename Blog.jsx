import React from 'react';
import blog_details from '../assets/blog';
import './blog.css';

const Blog = () => {
  return (
    <>
      <section className="blog-section">
        <div className="container">
          <h1 className="title">Blog</h1>
        </div>
      </section>

      <section className="blog-container">
        {blog_details.map((blog) => (
          <a href={blog.link} key={blog.id} className="blog-post">
            <div className="blog-image-wrapper">
              <img src={blog.img} alt={blog.name} />
              <div className="category-overlay">
                <span className="category">{blog.category}</span>
              </div>
            </div>
            <h2>{blog.name}</h2>
          </a>
        ))}
      </section>
    </>
  );
};

export default Blog;
