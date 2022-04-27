import React from 'react'
import { NavBarContainer, NavBarWrapper, IconLogo, Menu, MenuItem, MenuItemLink } from './NavBar.elements'
import { FaStore } from "react-icons/fa";

const NavBar = () => {
  return (
    <NavBarContainer >
      <NavBarWrapper>
        <IconLogo>
          <FaStore size={"2em"} />
          <h1> LOSTORE</h1>
        </IconLogo>
        <Menu>
          <MenuItem>
            <MenuItemLink href="#">HOME</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink href="AboutUs">SOBRE NOSOTROS</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink href="Contact">CONTACTO</MenuItemLink>
          </MenuItem>
        </Menu>
      </NavBarWrapper>
    </NavBarContainer>
  )
}

export default NavBar