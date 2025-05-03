import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [isSubmitted, setIsSubmitted] = useState(false);
	const [hasError, setHasError] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async(e) => {
		e.preventDefault();
		try {
			console.log("Form data submitted:", formData);
			setIsSubmitted(true);
			setHasError(false);
			setFormData({ name: "", email: "", message: "" });
		} catch (err) {
			setHasError(true);
      console.log(err)
		}
	};

	return (
		<>
			<div className="container_contact">
				<div className="contact-section">
					<h1>Getting in touch is easy!</h1>
					<div className="contact-info">
						<div className="contact-item">
							<div className="icon">
								<img src="src\assets\location.svg"></img>
							</div>
							<div className="text">
								<div className="title">Find Us</div>
								<div className="description">
									HS B14, Horton Ford Rd, Elston, TN, 37371
								</div>
							</div>
						</div>
						<div className="contact-item">
							<div className="icon">
								<img src="src\assets\call.svg"></img>
							</div>
							<div className="text">
								<div className="title">Call Us</div>
								<div className="description">+123 456 789</div>
							</div>
						</div>
						<div className="contact-item">
							<div className="icon">
								<img src="src\assets\mail.svg"></img>
							</div>
							<div className="text">
								<div className="title">Email Us</div>
								<div className="description">example@gmail.com</div>
							</div>
						</div>
					</div>
				</div>
				<div className="contact-form">
					<div className="contact-description">
						<p>
							Been tearing your hair out to find the perfect gift for your loved
							ones? Try visiting our nationwide local stores. You can also
							contact us to become a partner or distributor. Call us, send us an
							email, or make an appointment now.
						</p>
						<div className="social-item">
							<a
								href="https://facebook.com/"
								target="_blank"
								className="social-link"
							>
								Facebook
							</a>
							<a
								href="https://instagram.com/"
								target="_blank"
								className="social-link"
							>
								Instagram
							</a>
							<a
								href="https://twitter.com/"
								target="_blank"
								className="social-link"
							>
								Twitter
							</a>
							<a
								href="https://youtube.com/"
								target="_blank"
								className="social-link"
							>
								Youtube
							</a>
						</div>
						<div className="contact-form">
							<form
								id="Contact-Form"
								name="Contact-Form"
								data-name="Contact Form"
								method="post"
								onSubmit={handleSubmit}
							>
								<div className="input-group">
									<label htmlFor="name">Name</label>
									<input
										type="text"
										className="input"
										maxLength={256}
										name="name"
										data-name="Name"
										placeholder="Enter your name"
										id="name"
										required
										value={formData.name}
										onChange={handleChange}
									/>
								</div>
								<div className="input-group">
									<label htmlFor="email">Email</label>
									<input
										type="email"
										className="input"
										maxLength={256}
										name="email"
										data-name="Email"
										placeholder="Enter your Email"
										id="email"
										required
										value={formData.email}
										onChange={handleChange}
									/>
								</div>
								<div className="input-group">
									<label htmlFor="message">Message</label>
									<textarea
										id="message"
										name="message"
										maxLength={5000}
										data-name="Message"
										placeholder="Enter Your Message"
										className="input"
										required
										value={formData.message}
										onChange={handleChange}
									/>
								</div>
								<input type="submit" value="Submit"></input>
								{isSubmitted && !hasError && (
									<div
										className="success-message"
										aria-label="Contact Form success"
									>
										<p>Thank you! Your submission has been received</p>
									</div>
								)}
								{hasError && (
									<div
										className="error-message"
										aria-label="Contact Form error"
									>
										<p>Oops! Something went wrong while submitting the form</p>
									</div>
								)}
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Contact;
