import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 0 3rem;
    position: relative;
    z-index: 1;
`

export const NavLogo = styled(Link)`
    font-size: 3.6rem;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
`

export const NavMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    
`

export const NavLinks = styled(Link)`
    padding: 1rem;
    text-decoration: none;
    font-size: 1.8rem;
    color: #000;
`