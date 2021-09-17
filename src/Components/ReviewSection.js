import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts'
import ReviewItem from './ReviewItem';
import Title from './Title';


function ReviewSection() {
    return (
        <ReviewStyled>
            <Title title={'Reviews'} span={"Reviews"} />
            <InnerLayout>
                <div className={'reviews'}>
                    <ReviewItem text= {"Lorem ipsum dolor sit amet consectetur, adipisicing"} />
                    <ReviewItem text= {"Lorem ipsum dolor sit amet consectetur, adipisicinda dasdag"} />
                </div>
            </InnerLayout>
        </ReviewStyled>
    )
}

const ReviewStyled = styled.section ` 
    .reviews {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
        @media screen and (max-width:650px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default ReviewSection;
