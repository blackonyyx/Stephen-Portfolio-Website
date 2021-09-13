import React from 'react'
import styled from 'styled-components';
import resume from '../img/portfolioimage.jpg'
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt = "resume" />
            </div>
            <div className="right-content">
                <h4> I am <span>Lorem Ipsum</span></h4>
                <p className="paragraph">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name </p>
                        <p>Age </p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location </p>
                        <p>Service </p>
                    </div>
                    <div className="info">
                        <p>: Stephen Tan Hin Khai </p>
                        <p>: 23 </p>
                        <p>: Singaporean </p>
                        <p>: English, Chinese </p>
                        <p>: Singapore, Singapore </p>
                        <p>: Looking for Jobs in FrontEnd, Data Science and DevOps </p>
                    </div>
                </div>
                <PrimaryButton title={"Download CV"}/>
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    .left-content {
        width: 100%;
        height: 40vh;
        img {
            width: 90%;
            height: 100%;
            object-fit: cover;
        }
    }

    .right-content {
        h4 {
            font-size: 2rem;
            color: var(--white-color);
            span {
                font-size: 2rem;
            }
        }
        .paragraph {
            padding: 1rem 0;
        }

        .about-info {
            display: flex;
            padding-bottom: 1.4rem;
            .info-title {
                padding-right: 2rem;
                p {
                    font-weight: 600;
                }
            }
            .info-title, .info {
                p {
                    padding: 0.3rem 0;
                }
            }


        }
    }
`;

export default ImageSection;
