import {
  NavBarContainer,
  NavBarWrapper,
  IconLogo,
  Menu,
  MenuItem,
  MenuItemLink,
} from "./NavBar.elements";
import Cart from "./Cart/Cart";
import { FaStore } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBarWrapper>
        <IconLogo>
          <FaStore size={"2em"} />
          <Link to={"/"}>
            <span> LOSTORE</span>
          </Link>
        </IconLogo>
        <Menu>
          <MenuItem>
            <MenuItemLink href="#">HOME</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink href="AboutUs">SOBRE NOSOTROS</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <Cart href="Cart"></Cart>
          </MenuItem>
        </Menu>
      </NavBarWrapper>
    </NavBarContainer>
  );
};

export default NavBar;
