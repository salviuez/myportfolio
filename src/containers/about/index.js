import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { PageHeaderContent } from "../../components/pageHeaderContent";
import "./style.css";
import image1 from "./pic/profilepic.jpg"

const personalDetails = [
    {
        label: "Name",
        value: "- Arun Salviues",
    },
    {
        label: "DOB",
        value: "- 13/08/1994",
    },
    {
        label: "Address",
        value: "- Chennai , India",
    },
    {
        label: "Preferred work location",
        value: "- Anywhere in India",
    },
    {
        label: "Email",
        value: "- salviuez19@gmail.com",
    },
    {
        label: "contact no",
        value: "-  +918883408445 and +916374679095",
    },


]

const jobSummary = "A MERN Stack Certified Fresher aim to be Placed in a challenging organization that gives me scope to enhance my knowledge and skills in accordance with the latest trends and to be a part of the team that dynamically works towards the growth of organization"

export function About() {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />} />

            <div className="about__content">
                <div className="about__content__personalWrapper">


                    <h3 className="atitle">MERN STACK Developer</h3>
                    <p className="jsummary">{jobSummary}</p>



                    <h3 className="atitle">Personal Information</h3>
                    <ul>
                        {
                            personalDetails.map((item, i) => (
                                <li className="liClass" key={i}>
                                    <span className="stitle">{item.label}</span>
                                    <span className="stitle">{item.value}</span>
                                </li>
                            ))
                        }
                    </ul>

                </div>
                <div className="about__content__servicesWrapper">
                    <img className="serviceimage" src={image1} />
                </div>

            </div>


        </section>
    )
}