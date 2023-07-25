import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
export function Home() {
    const navigate = useNavigate();
    const goToContact = () => {
        navigate("./contact")

    }
    return (
        <section id="home" className="home">
            <div className="home__text-wrapper">
                <h1>
                    Hello, iam Arun
                    <br />
                    MERN STACK Developer
                </h1>
            </div>

            <div className="home__contact-me">
                <button className="gobtn" onClick={goToContact}>contact me  </button>
            </div>

        </section>
    )
}