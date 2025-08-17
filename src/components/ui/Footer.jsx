import FooterContact from "../../apis/footerApi.json";
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export const Footer = () => {

    const footerIcons = {
        MdPlace: <MdPlace />,
        IoCallSharp: <IoCallSharp />,
        TbMailPlus: <TbMailPlus />
    }

    return (
        <footer className="footer-section">
            <div className="container grid grid-three-cols">
                {
                    FooterContact.map((curData, index) => {
                        return (
                            // <div key={index} className="footer-item">
                            //     <h3>{curData.title}</h3>
                            //     <p>{curData.description}</p>
                            //     {curData.links && (
                            //         <ul>
                            //             {curData.links.map((link, linkIndex) => (
                            //                 <li key={linkIndex}>
                            //                     <a href={link.url}>{link.text}</a>
                            //                 </li>
                            //             ))}
                            //         </ul>
                            //     )}
                            // </div>

                            <div className="footer-contact" key={index}>
                                <div className="icon"> {footerIcons[curData.icon]} </div>
                                <div className="footer-contact-text">
                                    <p>{curData.title}</p>
                                    <p>{curData.details}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>

            <div className="copyright-area">
                <div className="container">
                    <div className="grid grid-two-cols">
                        <div className="copyright-text">
                            <p>
                                &copy; {new Date().getFullYear()} All rights reserved | This project is made with <span className="heart">❤</span> by <NavLink to="/" target="_blank" rel="noopener noreferrer">Suvam Talukder</NavLink>
                                {/* <NavLink to="/">Your Name</NavLink> */}
                            </p>
                        </div>

                        <div className="footer-menu">
                            <ul>
                                <li>
                                    <NavLink to="/" target="_blank">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/" target="_blank">Social</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/" target="_blank">Source Code</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" target="_blank">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}