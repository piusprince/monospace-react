import React from 'react'
import {
    Nav,
    NavLogo,
    NavMenu,
    NavLinks
} from './NavElements'

const Navbar = () => {
    return (
        <Nav>
            <NavLogo>monoSpace</NavLogo>

            <NavMenu>
                <NavLinks>About</NavLinks>
                <NavLinks>Services</NavLinks>
                <NavLinks>Contact</NavLinks>
                <NavLinks>FAQ</NavLinks>
            </NavMenu>
        </Nav>
    )
}

export default Navbar
