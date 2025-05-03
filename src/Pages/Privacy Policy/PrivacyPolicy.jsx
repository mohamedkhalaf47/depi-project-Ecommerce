import React from "react";
import styles from "./privacyPolicy.module.css";

const PrivacyPolicy = () => {
	return (
		<div className={`container-xxl ${styles.privacy_container}`}>
			<header className={styles.privacy_header}>
				<h1>Privacy Policy</h1>
				<p className={styles.update_date}>Last updated: April 05, 2024</p>
			</header>

			<main className={styles.privacy_content}>
				<section className={styles.policy_section}>
					<h2>Collecting Personal Information</h2>
					<p>
						All the Lorem Ipsum generators on the internet tend to repeat
						predefined chunks as necessary, making this the first true generator
						on the internet. It uses a dictionary of over 200 Latin words,
						combined with a handful of model sentence structures, to generate
						Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
						therefore always free from repetition, injected humour, or
						non-characteristic words etc.
					</p>
					<ul className={styles.policy_list}>
						<li>
							There are many variations of passages of Lorem Ipsum available.
						</li>
						<li>Justo odio dignissimos ducimus qui blanditia.</li>
						<li>Prassentium voluptatum deleniti atque.</li>
						<li>Quas molestias excepturi sint occascati.</li>
					</ul>
					<p>
						The standard chunk of Lorem Ipsum used since the 1500s is reproduced
						below for those interested. Sections 1.10.32 and 1.10.33 from "de
						Finibus Bonorum et Malorum" by Cicero are also reproduced in their
						exact original form, accompanied by English versions from the 1914
						translation by H. Rackham.
					</p>
				</section>

				<section className={styles.policy_section}>
					<h2>Sharing Personal Information</h2>
					<p>
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered alteration in some form, by injected
						humour, or randomised words which don't look even slightly
						believable. If you are going to use a passage of Lorem Ipsum, you
						need to be sure there isn't anything embarrassing hidden in the
						middle of text.
					</p>
					<p>
						It was popularised in the 1960s with the release of Letraset sheets
						containing Lorem Ipsum passages, and more recently with desktop
						publishing software like Aldus PageMaker including versions of Lorem
						Ipsum.
					</p>
					<ol className={styles.numbered_list}>
						<li>sometimes on purpose.</li>
						<li>classNameical Latin literature from 45 BC.</li>
						<li>The Extremes of Good and Evil.</li>
						<li>This book is a treatise on the theory.</li>
					</ol>
					<p>
						Combined with a handful of model sentence structures, to generate
						Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
						therefore always free from repetition, injected humour, or
						non-characteristic words etc.
					</p>
				</section>
			</main>
		</div>
	);
};

export default PrivacyPolicy;
