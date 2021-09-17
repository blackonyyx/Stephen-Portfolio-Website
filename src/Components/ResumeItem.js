import React from 'react'
import styled from 'styled-components'

function ResumeItem({date, title, subTitle, text, link}) {
    return (
        <ResumeItemStyled>
            <div className='left-content'>
                <p>{date}</p>
            </div>
            <div className="right-content">
                <h5>{title}</h5>
                <a href={link}><h6>{subTitle}</h6></a>
                <ul>
                {
                text.map((point)=> {
                    return <li>{point}</li>
                    })}
                </ul>
                
            </div>
        </ResumeItemStyled>
    )
}

const ResumeItemStyled = styled.div`
    display: flex;
    @media screen and (max-width:420px) {
        p, h5, h6 {
            font-size: 80%;
        }
    }
    &:not(:last-child) {
        padding-bottom: 3rem;
    }
    .left-content {
        width: 30%;
        padding-left: 20px;
        position: relative;
        &::before {
            content: "";
            position: absolute;
            left: -10px;
            top: 5px;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            border: 2px solid var(--border-color);
            background-color: var(--background-dark-color);
        }
        p {
            display: inline-block;
        }
    }
    .right-content {
        padding-left: 3rem;
        position: relative;
        &::before {
            content: "";
            position: relative;
            left: -10px;
            top: 20px;
            width: 3rem;
            height: 2px;
            background-color: var(--border-color);
        }
        h5 {
            color: var(--primary-color);
            font-size: 2rem;
            padding-bottom: .4rem;
        }
        h6 {
            padding-bottom: 0.6rem;
            font-size: 1.8rem;
        }
        ul{
            li {
            list-style-type: circle;
            color: var(--background-color);
            }
        }

    }
`;

export default ResumeItem;

