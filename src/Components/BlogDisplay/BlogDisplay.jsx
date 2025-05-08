import React from "react";
import styles from "./blogDisplay.module.css";
import blog_details from "../../assets/blog";
import { Link } from "react-router-dom";
const BlogDisplay = ({ blog }) => {
	return (
		<div className={styles.blog_display}>
			<section>
				<div className={styles.blog_box}>
					<div className={styles.blog_inline}>
						<div className={styles.blog_category}>style</div>
						<p className={styles.blog_date}>May 3, 2024</p>
					</div>
					<p className={styles.blog_name}>{blog.name}</p>
					<p className={styles.blog_description}>{blog.description}</p>
				</div>
			</section>

			<section>
				<div className={styles.blog_div}>
					<div className={styles.blog_img}>
						<img src={blog.img} alt="blog image" width={120} height={120} />
					</div>

					<div className={styles.blog_content}>
						<h5>Up-coming business bloggers, you need to watch</h5>
						<p>
							The printing and typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s, when an
							unknown printer took a galley of type and scrambled it to make a
							type specimen book. It has survived not only five centuries, but
							also the leap into electronic typesetting, remaining essentially
							unchanged. It was popularised in the 1960s with the release of
							Letraset sheets containing Lorem Ipsum passages, and more recently
							with desktop publishing software like Aldus PageMaker including
							versions of Lorem Ipsum.
						</p>
						<ul>
							<li>The standard chunk of Lorem Ipsum used since the 1500s.</li>
							<li>reproduced below for those interested.</li>
							<li>It is a long-established fact that a reader will.</li>
							<li>
								distracted by the readable content of a page when looking at its
								layout
							</li>
						</ul>
						<p>
							The standard chunk of Lorem Ipsum used since the 1500s is
							reproduced below for those interested. Sections 1.10.32 and
							1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
							reproduced in their exact original form, accompanied by English
							versions from the 1914 translation by H. Rackham.
						</p>
						<figure className={styles.blog_fig}>
							<div>
								<iframe
									allowFullScreen="true"
									src="https://www.youtube.com/embed/-ChLT7b2Gj8"
									frameborder="0"
									scrolling="no"
								>
									#document (https://www.youtube.com/embed/-ChLT7b2Gj8)
								</iframe>
							</div>
						</figure>
						<h5>10 tell-tale signs you need to get a new business</h5>
						<p>
							But because those who do not know how to pursue pleasure
							rationally encounter extremely painful consequences. Nor again is
							there anyone who loves or pursues or desires to obtain pain of
							itself, because it is pain, but because occasionally circumstances
							occur in which toil and pain can procure him some great pleasure.
							To take a trivial example, which of us ever undertakes laborious
							physical exercise, except to obtain some advantage from it? But
							who has any right to find fault with a man who chooses to enjoy a
							pleasure that has no annoying consequences, or one who avoids a
							pain that produces no resultant pleasure?
						</p>
						<blockquote>
							At vero eos et accusamus et iusto odio dignissimos ducimus qui
							blanditiis praesentium voluptatum deleniti atque corrupti quos
							dolores et quas molestias excepturi sint occaecati cupiditate non
							provident, similique sunt.
						</blockquote>
						<p>
							These cases are perfectly simple and easy to distinguish. In a
							free hour, when our power of choice is untrammeled and when
							nothing prevents our being able to do what we like best, every
							pleasure is to be welcomed and every pain avoided. But in certain
							circumstances and owing to the claims of duty or the obligations
							of business it wil l frequently occur that pleasures have to be
							repudiated and annoyances accepted. The wise man therefore always
							holds in these matters to this principle of selection: he rejects
							pleasures to secure other greater pleasures, or else he endures
							pains to avoid worse pains.
						</p>
					</div>
				</div>
			</section>

			<section className={styles.blog_container}>
				<div className={styles.blog_header}>
					<h2>Related Blog</h2>
				</div>

				<div className={styles.blog_grid}>
					{blog_details.slice(0, 3).map((blog) => (
						<div key={blog.id} className={styles.blog_post}>
							<div className={styles.blog_image_wrapper}>
								<Link to={`/blog/${blog.name}`}>
									<img src={blog.img} alt={blog.name} />
									<div className={styles.category_overlay}>
										<span className={styles.category}>{blog.category}</span>
									</div>
								</Link>
							</div>
							<h2>{blog.name}</h2>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default BlogDisplay;
