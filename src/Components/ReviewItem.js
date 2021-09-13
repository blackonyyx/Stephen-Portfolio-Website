import React from 'react'
import styled from 'styled-components';

function ReviewItem({text}) {
    return (
        <ReviewItemStyled>
            <p>{text}</p>
        </ReviewItemStyled>
    )
}

const ReviewItemStyled = styled.div`
    padding: 2rem 1rem;
    border-left: 6px solid var(--border-color);
    background-color: var(--background-dark-grey);
    position: relative;
    width: 100%;
    &::not(::first-child) {

    }
    &::after {
        content: "";
        position: absolute;
        left: 1rem;
        width: .8rem;
        bottom: 1rem;
        top: 100%;
        border-color: var(--background-dark-grey) transparent transparent var(--background-dark-grey);
    }
    &:hover {
        border-left: 8px solid var(--primary-color);
        transform: translateY(2px);
    }
    p {
        padding: 1rem 0;
    }
`

export default ReviewItem;
