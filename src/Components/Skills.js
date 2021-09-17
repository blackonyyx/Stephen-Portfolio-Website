import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from './Title';
import ProgressBar from './ProgressBar'

function Skills() {
    return (
        <SkillsStyled>
            <Title title={'Skill Proficiencies'} span={'Skill Proficiencies'} />
            <InnerLayout>
                <div className="skills">
                    <ProgressBar title={'CSS3'} width={"60%"} text={"60%"} />
                    <ProgressBar title={'Java'} width={"70%"} text={"70%"} />
                    <ProgressBar title={'JavaScript'} width={"65%"} text={"65%"} />
                    <ProgressBar title={'Python'} width={"90%"} text={"90%"} />
                    <ProgressBar title={'React JS'} width={"75%"} text={"75%"} />
                    <ProgressBar title={'HTML5'} width={"80%"} text={"80%"} />
                </div>
            </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
