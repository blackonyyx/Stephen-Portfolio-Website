import React from 'react'
import avatar from '../img/avatar.jpg';
import styled from 'styled-components';
import Navigation from './Navigation';

function SideBar () {
    return (
        <SideBarStyled>
            <Navigation />
        </SideBarStyled>
  
    )
}

const SideBarStyled = styled.div`
    width: 16.3rem;
    height: 100vh;
    position: fixed;
    background-color: var(--sidebar-dark-color);
`;

export default SideBar;