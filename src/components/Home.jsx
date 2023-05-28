import React from "react";
import { FaInstagram } from "react-icons/fa";
import { handles } from "../data/data";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
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
				<div className="border border-[#0000004F] w-3/5 h-[80vh] rounded-xl p-2">
					<div className="blue-grad w-full h-full rounded-xl px-10 py-5 relative">
						<h2 className="text-[#0000005E] font-bold text-5xl text-right">
							PORTFOLIO
						</h2>
						<p className="text-white text-[40px] mt-6">
							<span className="tracking-[0.6em]">
								Hey
							</span>{" "}
							<br />
							Glad to have you here{" "}
							<br />
							I'm Peculiar, a Product
							Designer.
						</p>
						<ul className="flex justify-between items-center px-5 mt-5 text-white">
							<li>IDESIGN</li>
							<li>CREATE</li>
							<li>
								USER EXPERIENCES
								& INTERFACES
							</li>
						</ul>
						<div className="absolute bottom-10 right-0 w-full">
							<div className="flex justify-between items-center w-full px-8">
								<a
									href="#contact"
									className="bg-black text-white w-80 px-5 rounded-full py-3 text-center"
								>
									Work
									with me
								</a>
								<ul className="flex space-x-3 items-center w-2/5 ml-6">
									{handles.map(
										(
											handle,
											index
										) => (
											<li
												className="text-3xl w-16 h-16 bg-white rounded-full flex justify-center items-center"
												key={
													index
												}
											>
												<a
													target="_blank"
													rel="noreferrer"
													href={
														handle.link
													}
												>
													{
														handle.icon
													}
												</a>
											</li>
										)
									)}
								</ul>
								<div className="text-3xl w-16 h-16 bg-white rounded-full flex justify-center items-center cursor-pointer">
									<a
										href="https://www.behance.net/d_syndicate"
										target="_blank"
										rel="noreferrer"
									>
										<FaInstagram />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div
					className="h-[80vh] w-2/5 relative hover:scale-105 cursor-pointer"
					onClick={() => navigate("/about")}
				>
					<img
						src="/images/populachief.png"
						alt=""
						className="object-cover h-full w-full rounded-xl"
					/>
					<span className="babylonica text-4xl absolute bottom-2 right-10 text-white">
						PopulaChief
					</span>
				</div>
			</section>
			<section id="projects">
				<div className="flex items-center justify-between gap-5 mt-3">
					<div className="w-[759px] hover:scale-105">
						<a
							href="https://www.behance.net/gallery/155351461/Website-design-templates"
							target="_blank"
							rel="noreferrer"
						>
							<img
								src="/images/powertrack.png"
								alt=""
								className="object-contain"
							/>
						</a>
					</div>
					<div className="border border-[#0000004F] w-3/5 rounded-xl p-2 hover:scale-105">
						<a
							href="https://www.behance.net/gallery/162049651/Kenya-(story-telling-edition)"
							target="_blank"
							rel="noreferrer"
						>
							<img
								src="/images/kenya.png"
								alt=""
								className="object-contain"
							/>
						</a>
					</div>
				</div>
				<div className="flex items-center justify-between gap-5 mt-3 mb-5">
					<div className="w-[717px] hover:scale-105">
                        <a href="https://www.behance.net/gallery/168453929/food-branding-and-mock-ups" target="_blank"
							rel="noreferrer">
						<img
							src="/images/food.png"
							alt=""
							className="object-contain"
						/></a>
					</div>
					<div className="w-3/5 rounded-xl hover:scale-105">
						<a
							href="https://www.behance.net/gallery/165604115/Piggyvest-redesign-project"
							target="_blank"
							rel="noreferrer"
						>
							<img
								src="/images/piggy.png"
								alt=""
								className="object-contain"
							/>
						</a>
					</div>
				</div>
			</section>

			<footer
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
			</footer>
		</>
	);
};

export default Home;
