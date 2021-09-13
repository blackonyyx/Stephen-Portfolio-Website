import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts'
import ReviewItem from './ReviewItem';
import Title from './Title';


function ReviewSection() {
    return (
        <ReviewStyled>
            <Title title={'Reviews'} span={"About Me"} />
            <InnerLayout>
                <div className={'reviews'}>
                    <ReviewItem text= {"Lorem ipsum dolor sit amet consectetur, adipisicing"} />
                </div>
                <div className={'reviews'}>
                    <ReviewItem text= {"Lorem ipsum dolor sit amet consectetur, adipisicinda dasdag"} />
                </div>
            </InnerLayout>
        </ReviewStyled>
    )
}

const ReviewStyled = styled.section ` 
    .reviews {
        display: grid;
    }
`;

export default ReviewSection;
