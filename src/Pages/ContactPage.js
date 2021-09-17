import React from 'react'
import styled from 'styled-components'
import PrimaryButton from '../Components/PrimaryButton';
import Title from '../Components/Title';
import { InnerLayout, MainLayout } from '../styles/Layouts'
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ContactItem from '../Components/ContactItem';

function ContactPage() {
    const email = <EmailIcon />
    const location = <LocationOnIcon/>
    const linkedin = <LinkedInIcon/>

    return (
        <MainLayout>
            <Title title={"Contact"} span={"Contact"} />
            <ContactPageStyled> 
                <InnerLayout className={'contact-section'}>
                    <div className="left-content">
                        <div className="contact-title">
                            <h4> Get In Touch </h4>
                        </div>
                        <form className="form" >
                            <div className="form-field">
                                <label htmlFor="name"> Enter your name:</label>
                                <input type="text" id="name" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email"> Enter your email: </label>
                                <input type="email" id="email" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="subject"> Enter your subject: </label>
                                <input type="text" id="subject" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="text-area"> Enter your message: </label>
                                <textarea type="textarea" id="textarea" cols="30" rows="10" />
                            </div>
                            <div className="f-button">
                                <PrimaryButton title={"Send Email"} />
                            </div>
                        </form>
                    </div>
                    <div className="right-content">
                        <ContactItem icon={linkedin} title={"LinkedIn"} contact={ <a href="https://www.linkedin.com/in/stephen-tan-hin-khai/">Stephen Tan</a>} />
                        <ContactItem icon={email} title={"Email"} contact={<a href="mailto:stephen.tanhkhai@gmail.com">stephen.tanhkhai@gmail.com</a>} />
                        <ContactItem icon={location} title={"Location"} contact={"Singapore, Singapore"}
                        />
                        
                    </div>
                </InnerLayout>
                
            </ContactPageStyled>
        </MainLayout>
            
    )
}

const ContactPageStyled = styled.section`
    .contact-section {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        .right-content {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 500px) {
                width: 70%;
            }
        }
        @media screen and (max-width: 1370px) {
            grid-template-columns: repeat(1, 1fr);
            .f-button {
                margin-bottom: 3rem;
            }
        }
        .map-responsive{
        overflow:hidden;
        padding-bottom:56.25%;
        position:relative;
        height:0;
        }

        .map-responsive iframe{
        left:0;
        top:0;
        height:100%;
        width:100%;
        position:absolute;
        }

        .form {
            width: 100%;
            @media screen and (max-width:510px) {
                width: 100%;
            }   
            .contact-title {
                h4 {
                    color: var(--white-color);
                    padding: 1rem 0;
                    font-size: 1.8rem;
                }
            }
            .form-field {
                margin-top: 2rem;
                position: relative;
                width: 100%;

                label {
                    position: absolute;
                    left: 0rem;
                    top: -2rem;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding: 0rem .5rem;
                    color: inherit;
                    /* opacity: 30%; */
                }
                input {
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 60px;
                    padding: 0.5rem 15px;
                    color: inherit;
                    width: 100%;

                }
                textarea {
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;

                }
                form-field {
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 60px;
                    padding: 0 15px;
                }
            }
            .f-button {
                margin-bottom: 2rem;
            }
        }
    }
`;

export default ContactPage;