import React from 'react'
import styled from 'styled-components';
import {InnerLayout, MainLayout} from "../styles/Layouts";
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import ServicesSection from '../Components/ServicesSection';
import ReviewSection from '../Components/ReviewSection';

function AboutPage() {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={"About Me"} span= {"About Me"} />
                <InnerLayout >
                    <ImageSection />
                    <ServicesSection />
                    <ReviewSection />
                </ InnerLayout>
            </AboutStyled>
        </MainLayout>
        
    )
}

const AboutStyled = styled.section ` 
    @media screen and (max-width: 1000px) {
        
    }
`;

export default AboutPage
