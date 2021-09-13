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
                    <ServiceCard 
                        image= {design}
                        title={"Web Design"}
                        paragraph={"Lorem ipsum dolor sit amet cosectetur adipisicing"}
                     />
                     <div className="mid-card" >
                        <ServiceCard 
                            image= {ai}
                            title={"Artificial Intelligence"}
                            paragraph={"Lorem ipsum dolor sit amet cosectetur adipisicing"}
                        />
                    </div>

                     <ServiceCard 
                        image= {cloud}
                        title={"Cloud Computing"}
                        paragraph={"Lorem ipsum dolor sit amet cosectetur adipisicing"}
                     />
                </div>
            </ServicesStyled>
        </InnerLayout>
    )
}

const ServicesStyled = styled.section `
    .services {
        display: flex;
        justify-content: space-between;
        margin: 0.5rem;
        .mid-card {
            margin: 0 1.2rem;
        }
    }
`;

export default ServicesSection
