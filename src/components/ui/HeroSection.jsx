import { FaLongArrowAltRight } from "react-icons/fa";

export const HeroSection = () => {
    return (
        <div className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">
                        Explore the Country with Us, One Country at a Time!
                    </h1>
                    <p className="paragraph">
                        Dive into up‑to‑date data on population, geography, culture, and economy—just enter a country name to unlock its story at a glance.
                    </p>
                    <button className="btn btn-darken btn-inline bg-white-box">
                        Explore Now <FaLongArrowAltRight />
                        {/* <span className="btn-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </span> */}
                    </button>
                </div>
                <div className="hero-image">
                    <img src="\images\hero.png" alt="Hero Image" />
                </div>
            </div>
        </div>
    );
}