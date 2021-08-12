import React from 'react'
import styled from 'styled-components';


function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <iframe src={"https://github.com/blackonyyx/Stephen-Portfolio-Website/blob/master/src/img/Stephen%20Resume%20Y2%20Summer.pdf"} />
            </div>
            <div className="right-content">
                <div className="sub-title">
                    <h4> I am <span>Lorem Ipsum</span></h4>
                </div>
            </div>
            <p className="paragraph">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <div className="about-info">
                <div className="info">
                    <p> Stephen Tan Hin Khai </p>
                    <p> 23 </p>
                    <p> Singaporean </p>
                    <p> English, Chinese </p>
                    <p> Singapore, Singapore </p>
                    <p> Looking for Jobs in FrontEnd, Data Science and DevOps </p>
                </div>
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    .left-content {
        width: 100%;
        img {
            width: 90%;
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
            .info-title {
                padding-right: 2rem;
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
