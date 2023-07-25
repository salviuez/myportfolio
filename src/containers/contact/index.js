import React from "react";
import { PageHeaderContent } from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import "./style.css";


export function Contact() {
    return (
        <section id="contact" className="contact">
            <PageHeaderContent
                headerText="My Contact"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="contact__content">

                <h3 className="contact__content__header-text">Let's Talk</h3>


                <div className="contact__content__form">
                    <div className="contact__content__form__controlswrapper">
                        <div className="credentials">
                            <input
                                required
                                name="name"
                                className="inputName"
                                type={"text"}
                            />
                            <label htmlFor="name" className="nameLabel">
                                Name
                            </label>
                        </div>
                        <div>
                            <input
                                required
                                name="email"
                                className="inputEmail"
                                type={"text"}
                            />
                            <label htmlFor="email" className="emailLabel">
                                Email
                            </label>
                        </div>
                        <div>
                            <textarea
                                required
                                name="description"
                                className="inputDescription"
                                type={"text"}
                                rows="5"
                            />
                            <label htmlFor="description" className="descriptionLabel">

                            </label>
                        </div>
                    </div>
                    <button className="submit">Submit</button>
                </div>

            </div>

        </section>
    )
}