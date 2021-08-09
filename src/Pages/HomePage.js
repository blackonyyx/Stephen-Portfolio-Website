import React from 'react'
import Particle from "../Components/Particles"
import styled from 'styled-components'
import { Instagram, GitHub, LinkedIn } from '@material-ui/icons'


function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Lorem Ipsum</span></h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Atque nihil voluptates ea dolore vel 
                    repellat? Quia tenetur non quam exercitationem. Lorem ipsum dolor sit amet.
                </p>
                <div className="icons">
                    <a href="https://www.instagram.com/hinkhai/" className="icon i-instagram">
                        <Instagram />
                    </a>
                    <a href="https://github.com/blackonyyx/" className="icon i-github">
                        <GitHub />
                    </a>
                    <a href="https://www.linkedin.com/in/stephen-tan-hin-khai/" className="icon i-linkedin">
                        <LinkedIn />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    .p-particles {
        position: absolute;
        top: 0;
        left: 0;

    }
    .typography {
        position: absolute;
        top: 50%;
        left:50%;
        transform: translate(-50%,-50%);
        text-align: center;
        width: 80%;

        .icons {
            display: flex;
            justify-content: center;
            .icon {
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                &:hover {
                    border: 2px solid var(--border-color);
                    color: var(--primary-color);
                }

                &:not(:last-child) {
                    margin-right: 1rem;
                    cursor: pointer;
                }
                svg {
                    margin: .5rem;
                }
            }
            .i-linkedin {
                &:hover {
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
            }
            .i-github {
                &:hover {
                    border: 2px solid whitesmoke;
                    color: whitesmoke;
                }
            }
            .i-instagram {
                &:hover {
                    border: 2px solid purple;
                    color: purple;
                }
            }
        }
    }
`;

export default HomePage
