import React from "react";
import blog_details from "../../assets/blog";
import styles from "./blog.module.css";
import { Link } from "react-router-dom";

const Blog = () => {
	return (
		<>
			<section className={`${styles.blog_section}`}>
				<div className={`${styles.container}`}>
					<h1 className={`${styles.title}`}>Blog</h1>
				</div>
			</section>

			<section className={`${styles.blog_container}`}>
				{blog_details.map((blog) => (
					<div href={blog.link} key={blog.id} className={`${styles.blog_post}`}>
						<div className={`${styles.blog_image_wrapper}`}>
							<Link to={`/blog/${blog.name}`}>
								<img src={blog.img} alt={blog.name} />
								<div className={`${styles.category_overlay}`}>
									<span className={`${styles.category}`}>{blog.category}</span>
								</div>
							</Link>
						</div>
						<h6>{blog.name}</h6>
					</div>
				))}
			</section>
		</>
	);
};

export default Blog;
