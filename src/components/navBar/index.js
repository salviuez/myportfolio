import React from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";
import { useState } from "react";
import "./style.css";

const data = [
    {
        label: "Home",
        to: "/"
    },
    {
        label: "About",
        to: "/about"
    },
    {
        label: "skills",
        to: "/skills"
    },
    {
        label: "Portfolio",
        to: "/portfolio"
    },
    {
        label: "Resume",
        to: "/resume"
    },
    {
        label: "Contact",
        to: "/contact"
    }
]

export function Navbar() {
    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    }

    return (
        <div>
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to={'/'} className="navbar__container__logo">
                        <FaReact size={30} />
                    </Link>
                </div>
                <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""} `}>
                    {
                        data.map((item, key) => (
                            <li key={key} className="navbar__container__menu__item">
                                <Link className="navbar__container__menu__item__links" to={item.to}>
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="nav-icon" onClick={handleToggleIcon}>

                    {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}

                </div>
            </nav>
        </div>
    )

}