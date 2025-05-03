import React from "react";
import styles from "./faqs.module.css";

const FAQs = () => {
	return (
		<section className={`container-fluid ${styles.section_top}`}>
			<div className={`${styles.title_container}`}>
				<div className={`${styles.faqs_title}`}>
					<h2>FAQs</h2>
				</div>
			</div>
			<div className={`${styles.generals}`}>
				<h2>General</h2>
				<div class="accordion accordion-flush" id="accordionFlushExample">
					<div className={styles.accordion_wrapper}>
						<div class={`${styles.accordion_holder} accordion-item`}>
							<h2 class={`${styles.accordion_holder} accordion-header`}>
								<button
									class={`${styles.accordion_holder} accordion-button collapsed fw-medium`}
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#flush-collapseOne"
									aria-expanded="false"
									aria-controls="flush-collapseOne"
								>
									Is my personal information secure on your site?
								</button>
							</h2>
							<div
								id="flush-collapseOne"
								className="accordion-collapse collapse"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									Yes, we take your privacy seriously. Our website uses advanced
									encryption protocols to secure your personal information, and
									we do not share your data with third parties.
								</div>
							</div>
						</div>
					</div>
					<div className={styles.accordion_wrapper}>
						<div class={`${styles.accordion_holder} accordion-item`}>
							<h2 className={`${styles.accordion_holder} accordion-header`}>
								<button
									class={`${styles.accordion_holder} accordion-button collapsed fw-medium`}
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#flush-collapseTwo"
									aria-expanded="false"
									aria-controls="flush-collapseTwo"
								>
									How can I reset my password?
								</button>
							</h2>
							<div
								id="flush-collapseTwo"
								class="accordion-collapse collapse"
								data-bs-parent="#accordionFlushExample"
							>
								<div class="accordion-body">
									If you forget your password, click on the "Forgot Password"
									link on the login page. Follow the instructions in the email
									we send you to reset your password securely.
								</div>
							</div>
						</div>
					</div>
					<div className={styles.accordion_wrapper}>
						<div class={`${styles.accordion_holder} accordion-item`}>
							<h2 class={`${styles.accordion_holder} accordion-header`}>
								<button
									class={`${styles.accordion_holder} accordion-button collapsed fw-medium`}
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#flush-collapseThree"
									aria-expanded="false"
									aria-controls="flush-collapseThree"
								>
									What payment methods do you accept?
								</button>
							</h2>
							<div
								id="flush-collapseThree"
								class="accordion-collapse collapse"
								data-bs-parent="#accordionFlushExample"
							>
								<div class="accordion-body">
									We accept a variety of payment methods, including credit
									cards, debit cards, and PayPal. You can find the full list of
									accepted payment methods during the checkout process.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`${styles.generals}`}>
				<h2>Shipping and returns</h2>
				<div class="accordion accordion-flush" id="accordionFlushExample">
					<div className={styles.accordion_wrapper}>
						<div class={`${styles.accordion_holder} accordion-item`}>
							<h2 class={`${styles.accordion_holder} accordion-header`}>
								<button
									class={`${styles.accordion_holder} accordion-button collapsed fw-medium`}
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#flush-collapseFour"
									aria-expanded="false"
									aria-controls="flush-collapseFour"
								>
									What are your shipping options and delivery times?
								</button>
							</h2>
							<div
								id="flush-collapseFour"
								class="accordion-collapse collapse"
								data-bs-parent="#accordionFlushExample"
							>
								<div class="accordion-body">
									We offer standard and express shipping options. Delivery times
									vary based on your location and the chosen shipping method.
									You can view estimated delivery times during the checkout
									process.
								</div>
							</div>
						</div>
					</div>
					<div className={styles.accordion_wrapper}>
						<div class={`${styles.accordion_holder} accordion-item`}>
							<h2 class={`${styles.accordion_holder} accordion-header`}>
								<button
									class={`${styles.accordion_holder} accordion-button collapsed fw-medium`}
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#flush-collapseFive"
									aria-expanded="false"
									aria-controls="flush-collapseFive"
								>
									How can I track my order?
								</button>
							</h2>
							<div
								id="flush-collapseFive"
								class="accordion-collapse collapse"
								data-bs-parent="#accordionFlushExample"
							>
								<div class="accordion-body">
									Once your order is shipped, you will receive a tracking number
									via email. Use this number on our "Track Order" page to
									monitor the status and location of your shipment.
								</div>
							</div>
						</div>
					</div>
					<div className={styles.accordion_wrapper}>
						<div class={`${styles.accordion_holder} accordion-item`}>
							<h2 class={`${styles.accordion_holder} accordion-header`}>
								<button
									class={`${styles.accordion_holder} accordion-button collapsed fw-medium`}
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#flush-collapseSix"
									aria-expanded="false"
									aria-controls="flush-collapseSix"
								>
									What is your return policy?
								</button>
							</h2>
							<div
								id="flush-collapseSix"
								class="accordion-collapse collapse"
								data-bs-parent="#accordionFlushExample"
							>
								<div class="accordion-body">
									Our return policy allows you to return items within 30 days of
									purchase for a full refund. Please review our "Returns and
									Exchanges" page for detailed instructions and conditions.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQs;
