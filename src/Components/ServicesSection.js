import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import ServiceCard from './ServiceCard';
import Title from './Title';
import design from '../img/icons/web.png'
import ai from '../img/icons/ai.png'
import cloud from '../img/icons/web.png'


function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                    
                     <div className="mid-card" >
                        <ServiceCard 
                            image= {ai}
                            title={"Data Science"}
                            paragraph={"Data Analysis, Data Visualisation and Machine Learning"}
                        />
                    </div>

                     <ServiceCard 
                        image= {cloud}
                        title={"Cloud Computing"}
                        paragraph={"Cloud Services, Micro-services and Kubernetes"}
                     />
                     
                     <ServiceCard 
                        image= {design}
                        title={"Web Design"}
                        paragraph={"UX Design, React JS and Styled-Components"}
                     />
                </div>
            </ServicesStyled>
        </InnerLayout>
    )
}

const ServicesStyled = styled.section `
    .services {
        margin-top: 5rem;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        display: grid;
        @media screen and (max-width: 1000px) {
            flex-direction: column;

        }
        @media screen and (max-width: 950px) {
            flex-direction: column;
            grid-template-columns: repeat(2, 1fr);

        }
        @media screen and (max-width: 650px) {
            flex-direction: column;
            grid-template-columns: repeat(1, 1fr);

        }
    }
`;

export default ServicesSection
