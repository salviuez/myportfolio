import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { PageHeaderContent } from "../../components/pageHeaderContent";
import { skillsData } from "./utils";
import { Line } from "rc-progress";
import "./style.css";
export function Skills() {
    return (
        <section id="skills" className="skills">
            <PageHeaderContent headerText="skills" icon={<BsInfoCircleFill size={40} />} />

            <div className="skills__content-wrapper">
                {
                    skillsData.map((item, i) => (
                        <div key={i} className="skills__content-wrapper__inner-content">
                            <h3 className="skills__content-wrapper__inner-content__category-text">{item.label}</h3>
                            <div className="nameAndPercentage">
                                {
                                    item.data.map((skillItem, j) => (
                                        <div className="progressbar-wrapper" key={j}>
                                            <p className="skillName">{skillItem.skillName}</p>
                                            <Line
                                                percent={skillItem.percentage}
                                                strokeWidth="2"
                                                strokeColor="var(--yellow-theme-main-color)"
                                                trailWidth="2"
                                                strokeLinecap="square"
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}