import { PageHeaderContent } from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import {
    VerticalTimeline,

    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'
import { data } from "./utils";
import './style.css';
import { MdWork } from 'react-icons/md';
import resume from "../../images/updatedcv.pdf";
export function Resume() {
    return (
        <section id="resume" className="resume">
            <PageHeaderContent headerText="resume" icon={<BsInfoCircleFill size={40} />} />
            <a href={resume} download="Resume"><button className="resumeBtn">Download My Resume</button></a>
            <div className="timeline">
                <div className="timeline__experience">

                    <h3 className="timeline__experience__header-text">Experience</h3>
                    <VerticalTimeline
                        layout={"1-column"}
                        lineColor="var(--yellow-theme-main-color)"
                    >
                        {data.experience.map((item, i) => (
                            <VerticalTimelineElement
                                key={i}
                                className="timeline__experience__vertical-timeline-element"
                                contentStyle={{
                                    background: 'none',
                                    color: 'var(--yellow-theme-sub-text-color)',
                                    border: '1.5px solid var(--yellow-theme-main-color)'
                                }}

                                icon={<MdWork />}
                                iconStyle={{
                                    background: '#181818',
                                    color: 'var(--yellow-theme-main-color)',

                                }}
                            >
                                <div className="vertical-timeline-element-title-wrapper">
                                    <h3 className="item-title">
                                        {item.title}
                                    </h3>

                                    <h4 className="item-subtitle">
                                        {item.subTitle}
                                    </h4>
                                </div>
                                <p className="vertical-timeline-element-title-wrapper-description">{item.description} </p>

                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
                <div className="timeline__education">
                    <h3 className="timeline__education__header-text">Education</h3>
                    <VerticalTimeline
                        layout={"1-column"}
                        lineColor="var(--yellow-theme-main-color)"
                    >
                        {data.education.map((item, i) => (
                            <VerticalTimelineElement
                                key={i}
                                className="timeline__experience__vertical-timeline-element"
                                contentStyle={{
                                    background: 'none',
                                    color: 'var(--yellow-theme-sub-text-color)',
                                    border: '1.5px solid var(--yellow-theme-main-color)'
                                }}

                                icon={<MdWork />}
                                iconStyle={{
                                    background: '#181818',
                                    color: 'var(--yellow-theme-main-color)',

                                }}
                            >
                                <div className="vertical-timeline-element-title-wrapper">
                                    <h3>
                                        {item.title}
                                    </h3>

                                    <h4>
                                        {item.subTitle}
                                    </h4>
                                </div>
                                <p className="vertical-timeline-element-title-wrapper-description">{item.description} </p>

                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    )
}