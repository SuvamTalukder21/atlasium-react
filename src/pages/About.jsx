import { Globe } from "../components/ui/Globe";

export const About = () => {
	return (
		<section id="about-section" className="section-about container">
			<h2 className="container-title">
				Discover, explore, and learn about our world <br /> one country
				at a time.
			</h2>

			<Globe />

			<div className="about-section">
				<div className="layout-content">
					{/* <!-- Hero Banner --> */}
					{/* <div className="hero-banner">
						<h1 className="hero-title">About 🌍</h1>
					</div> */}

					{/* <!-- Intro Text --> */}
					<p className="body-text">
						Discover, explore, and learn about our world — one
						country at a time. This app offers curated information
						on every nation, including geography, population, flags,
						and key facts — all beautifully organized and easy to
						navigate, inspired by apps like Global Factbook.
						Experience interactive maps and dynamic data updates.
					</p>

					{/* <!-- Why This App Exists --> */}
					<h2 className="section-heading">Why this app exists</h2>
					<p className="body-text">
						We built this as a one-stop destination for students,
						travelers, teachers, curious minds, and trivia lovers
						who want accurate and engaging country data at their
						fingertips. Explore interactive maps and real-time
						updates.
					</p>

					{/* <!-- What We Provide --> */}
					<h2 className="section-heading">What we provide</h2>
					<div className="features-grid">
						<div className="feature-card container-card bg-white-box">
							<div className="feature-icon">
								{/* <!-- MapTrifold SVG --> */}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="currentColor"
									viewBox="0 0 256 256"
								>
									<path d="M228.92,49.69a8,8,0,0,0-6.86-1.45L160.93,63.52,99.58,32.84a8,8,0,0,0-5.52-.6l-64,16A8,8,0,0,0,24,56V200a8,8,0,0,0,9.94,7.76l61.13-15.28,61.35,30.68A8.15,8.15,0,0,0,160,224a8,8,0,0,0,1.94-.24l64-16A8,8,0,0,0,232,200V56A8,8,0,0,0,228.92,49.69ZM104,52.94l48,24V203.06l-48-24ZM40,62.25l48-12v127.5l-48,12Zm176,131.5-48,12V78.25l48-12Z" />
								</svg>
							</div>
							<div className="feature-text">
								<h3>
									Interactive choropleth maps with real-time
									population stats
								</h3>
								<p>
									Explore detailed maps with up-to-date
									population data for each country.
								</p>
							</div>
						</div>

						<div className="feature-card container-card bg-white-box">
							<div className="feature-icon">
								{/* <!-- CursorClick SVG --> */}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="currentColor"
									viewBox="0 0 256 256"
								>
									<path d="M169.64,134.33l44.77-19.46A16,16,0,0,0,213,85.07L52.92,32.8A16,16,0,0,0,32.8,52.92L85.07,213a15.83,15.83,0,0,0,14.41,11l.79,0a15.83,15.83,0,0,0,14.6-9.59h0l19.46-44.77L184,219.31a16,16,0,0,0,22.63,0l12.68-12.68a16,16,0,0,0,0-22.63Zm-69.48,73.76.06-.05Zm95.15-.09-49.66-49.67a16,16,0,0,0-26,4.94l-19.42,44.65L48,48l159.87,52.21-44.64,19.41a16,16,0,0,0-4.94,26L208,195.31ZM88,24V16a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0ZM8,96a8,8,0,0,1,8-8h8a8,8,0,0,1,0,16H16A8,8,0,0,1,8,96ZM120.85,28.42l8-16a8,8,0,0,1,14.31,7.16l-8,16a8,8,0,1,1-14.31-7.16Zm-81.69,96a8,8,0,0,1-3.58,10.74l-16,8a8,8,0,0,1-7.16-14.31l16-8A8,8,0,0,1,39.16,124.42Z" />
								</svg>
							</div>
							<div className="feature-text">
								<h3>
									Country hover tooltips that reveal details
									dynamically
								</h3>
								<p>
									Hover over any country to instantly view key
									information and statistics.
								</p>
							</div>
						</div>

						<div className="feature-card container-card bg-white-box">
							<div className="feature-icon">
								{/* <!-- MagnifyingGlass SVG --> */}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="currentColor"
									viewBox="0 0 256 256"
								>
									<path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
								</svg>
							</div>
							<div className="feature-text">
								<h3>
									Auto-generated insights and user-driven
									search
								</h3>
								<p>
									Get insights automatically or search for
									specific information about any country.
								</p>
							</div>
						</div>
					</div>

					{/* <!-- Our Mission --> */}
					<h2 className="section-heading">Our mission</h2>
					<p className="body-text">
						To make global knowledge accessible, visually intuitive,
						and constantly up to date—so you can stay informed and
						inspired every day. Engage with interactive elements and
						animations for a richer experience.
					</p>
				</div>
			</div>
		</section>
	);
};
