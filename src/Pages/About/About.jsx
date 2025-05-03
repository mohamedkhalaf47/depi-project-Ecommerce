import React from "react";
import styles from "./about.module.css";
import mainImage from "../../assets/about-image-01.jpg";
import smallImage from "../../assets/about-image-02.jpg";
import { features, stats } from "../../assets/about";

const About = () => {
	return (
		<div className={`container-xxl py-5 ${styles.about_container}`}>
			<div className={`${styles.top_section} row align-items-center gx-5 gy-4`}>
				<div className="col-12 col-lg-6">
					<div className={styles.main_image_wrapper}>
						<img
							src={mainImage}
							alt="About our journey"
							loading="lazy"
							className={`${styles.main_image} rounded-3 shadow`}
						/>
					</div>
				</div>
				<div className="col-12 col-lg-6">
					<div className={styles.content_wrapper}>
						<h1 className={styles.section_title}>
							Our Journey of tee creation from concept to cotton
						</h1>
						<div className={styles.small_image_wrapper}>
							<img
								src={smallImage}
								alt="Our process"
								loading="lazy"
								className={`${styles.small_image} rounded-3 shadow-sm`}
							/>
						</div>
						<p className={styles.section_text}>
							Pleasure and so read the was hope entire first decided the so must
							have as on was want up of I will rival in came this touched got a
							physics to traveling so all especially refinement monstrous desk
							they was arrange the overall helplessly out of particularly ill
							are purer
						</p>
					</div>
				</div>
			</div>

			<div className={`${styles.features_section} row g-4 my-5`}>
				{features.map((feature, index) => (
					<div className="col-12 col-md-6 col-lg-3" key={index}>
						<div className={`${styles.feature_card} h-100 p-4 rounded-4`}>
							<img
								src={feature.icon}
								alt={feature.title}
								className={styles.feature_icon}
							/>
							<h3 className={styles.feature_title}>{feature.title}</h3>
							<p className={styles.feature_text}>{feature.desc}</p>
						</div>
					</div>
				))}
			</div>

			<div className={`${styles.stats_section} row g-4 my-5`}>
				{stats.map((stat, index) => (
					<div className="col-12 col-md-6 col-lg-3" key={index}>
						<div className={styles.stat_card}>
							<h2 className={styles.stat_number}>{stat.number}</h2>
							<p className={styles.stat_text}>{stat.desc}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default About;
