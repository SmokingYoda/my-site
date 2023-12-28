import {Link, Route, Routes, useLocation} from "react-router-dom";

import React from "react";
import Homepage from "./Homepage";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Contact from "./Contact";

const Navigation = () => {
    const location = useLocation();

    const isActive = (pathName: string) => {
        return location.pathname === pathName ? 'active' : '';
    };

    return (
        <section>
            <nav>
                <ul>
                    <li className={isActive('/') || isActive("/my-site")}>
                        <Link to="/">Homepage</Link>
                    </li>
                    <li className={isActive('/skills')}>
                        <Link to="/skills">Skills</Link>
                    </li>
                    <li className={isActive('/experience')}>
                        <Link to="/experience">Experience</Link>
                    </li>
                    <li className={isActive('/education')}>
                        <Link to="/education">Education</Link>
                    </li>
                    <li className={isActive('/about')}>
                        <Link to="/about">About</Link>
                    </li>
                    <li className={isActive('/contact')}>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/experience" element={<Experience/>}/>
                <Route path="/education" element={<Education/>}/>
                <Route path="/skills" element={<Skills/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </section>
    );
}

export default Navigation;