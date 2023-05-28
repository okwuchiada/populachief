import React from "react";
import resume from "../data/resume.pdf";
import { Link, useNavigate } from "react-router-dom";

const Contact = () => {
	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = resume;
		link.download = "Ijoma-Peculiar.pdf";
		link.target = "_blank";
		link.click();
	};
	const navigate = useNavigate();

	return (
		<>
			<header className="py-7 px-5 flex justify-between items-center">
				<div onClick={() => navigate("/")}>
					<img
						src="/logo.svg"
						alt="logo"
						className="h-16"
					/>
				</div>
				<nav className="w-1/3">
					<ul className="flex justify-between items-center font-[500] text-xl">
						<li className="cursor-pointer">
							<Link to={"/about"}>
								About
							</Link>
						</li>
						<li className="cursor-pointer">
							<a href="#projects">
								Project
							</a>
						</li>
						<li className="cursor-pointer">
							<a href="#contact">
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</header>
			<section className="flex items-center justify-between gap-5">
				<div className="h-[80vh] w-1/2 relative">
					<img
						src="/images/populachief.png"
						alt=""
						className="object-cover h-full w-full rounded-xl"
					/>
					<span className="babylonica text-4xl absolute bottom-2 right-10 text-white">
						PopulaChief
					</span>
				</div>
				<div className="h-[80vh] bg-[#252422] w-1/2 rounded-xl text-white px-12 pb-8 pt-16 font-[400] relative">
					<p className="tracking-[19%] uppercase text-2xl">
						Ijoma Peculiar
					</p>
					<p className="tracking-[17%]  text-2xl mt-20">
						Entry Level Product designer
						dedicated to creating impactful
						and user-centered solutions.
					</p>
					<p className="tracking-[17%]  text-2xl mt-16">
						My goal is to contribute to the
						local design scene by creating
						innovative products that
						resonate with the Nigerian
						market while also making a
						global impact.
					</p>

					<button
						onClick={handleDownload}
						className="font-semibold text-[#0752B0] text-2xl tracking-[17%] absolute bottom-10"
					>
						VIEW MY RESUME
					</button>
				</div>
			</section>
			<section>
				<div>
					<a
						href="https://www.behance.net/gallery/170495987/K-IC-k-shoe-brand"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="/images/milestone.png"
							alt=""
							className="mt-4"
						/>
					</a>
				</div>
				<div className="mt-4 mb-6 font-semibold">
					<h3 className="tracking-[17%] text-2xl mb-4">
						COMING SOON
					</h3>
					<div className="babybg bg-gray-600 rounded-lg px-2 py-4 h-[656px] flex justify-center items-center">
						{/* <img src="/images/baby-step-1.png" alt="" /> */}
						<img
							src="/images/baby-steps.png"
							alt=""
							className=""
						/>
					</div>
				</div>
			</section>

			{/* <footer
				className="px-8 bg-[#0D1321] py-11 mb-2 rounded-lg text-white relative overflow-hidden"
				id="contact"
			>
				<h4 className="text-3xl font-bold mb-6">
					REACH OUT LETS WORK TOGETHER
				</h4>
				<a
					href="mailto:IJOMAPECULIAR@GMAIL.COM"
					className="lowercase"
				>
					IJOMAPECULIAR@GMAIL.COM
				</a>
				<a
					href="tel:+2347042900691"
					className="block mt-6"
				>
					+234 704 2900 691{" "}
				</a>
				<img
					src="/images/contact-3.svg"
					alt=""
					className="absolute -top-2 z-10 right-0"
				/>
			</footer> */}
		</>
	);
};

export default Contact;
