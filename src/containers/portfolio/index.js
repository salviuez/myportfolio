import React from "react";
import { PageHeaderContent } from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.png";
import ImageTwo from "../../images/image3.png";
import ImageThree from "../../images/image4.png";
import ImageFour from "../../images/image5.png";
import ImageFive from "../../images/image6.png";
import "./style.css";

import { useState } from "react";
import { Link } from "react-router-dom";

const portfolioData = [

    {
        id: 1,
        name: "Movie App",
        image: ImageOne,
        link: "https://idyllic-jalebi-f2bff5.netlify.app/",
        github: "https://github.com/salviuez/new-app.git"
    },
    {
        id: 3,
        name: "Calculator",
        github: "https://github.com/salviuez/calculator-task.git",
        image: ImageTwo,
    },
    {
        id: 2,
        name: "Shopping Cart",
        image: ImageThree,
        link: "https://sweet-meerkat-baf409.netlify.app/",
        github: "https://github.com/salviuez/addtocart.git"
    },
    {
        id: 4,
        name: "Dictionary",
        image: ImageFour,
        github: "https://github.com/salviuez/tasks.git",
        link: "https://boisterous-cheesecake-20b833.netlify.app/",
    },
    {
        id: 3,
        name: "Register / Login",
        image: ImageFive,
        link: "https://ephemeral-mousse-1bc0c5.netlify.app/signin",
        github: "https://github.com/salviuez/psreset.git"
    },
];

// const filterData = [
//     {
//         filterId: 1,
//         label: "All",
//     },
//     {
//         filterId: 2,
//         label: "Developement",
//     },
//     {
//         filterId: 3,
//         label: "Design",
//     },
// ];


export function Portfolio() {

    const [filteredvalue, setFilteredValue] = useState(1);
    const [hoveredValue, setHoveredValue] = useState(null);

    function handleFilter(currentId) {
        setFilteredValue(currentId);
    }

    function handleHover(index) {
        setHoveredValue(index);
    }

    console.log("====================================");
    console.log(hoveredValue);
    console.log("====================================");

    const filteredItems =
        filteredvalue === 1
            ? portfolioData
            : portfolioData.filter((item) => item.id === filteredvalue);

    console.log(filteredItems);

    return (
        <section id="portfolio" className="portfolio">
            {/* <PageHeaderContent headerText="portfolio" icon={<BsInfoCircleFill size={40} />} /> */}


            <PageHeaderContent
                headerText="My Portfolio"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="portfolio__content">
                {/* <ul className="portfolio__content__filter">
                    {filterData.map((item) => (
                        <li
                            className={item.filterId === filteredvalue ? "active" : ""}
                            onClick={() => handleFilter(item.filterId)}
                            key={item.filterId}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul> */}
                <div className="portfolio__content__cards">
                    {filteredItems.map((item, index) => (
                        <div
                            className="portfolio__content__cards__item"
                            key={`cardItem${item.name.trim()}`}
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={() => handleHover(null)}
                        >
                            <div className="portfolio__content__cards__item__img-wrapper">
                                <a className="project-images">
                                    <img alt="dummy data" className="every-images" src={item.image} />
                                </a>
                            </div>
                            <div className="overlay">
                                {index === hoveredValue && (
                                    <div className="nameAndButton">
                                        <p className="iName">{item.name}</p>
                                        <a href={item.link}><button className="visitBtn">Visit  </button></a>
                                        <a href={item.github}><button className="visitBtn">Github </button></a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}