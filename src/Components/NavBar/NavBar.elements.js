import styled from "styled-components";

export const NavBarContainer = styled.div`
    width: 100%;
    height:90px;
    position:sticky;
    top:0;
    z-index:99;
    background-color: #49426c;
`

export const NavBarWrapper = styled.div`
    margin:auto;
    width:100%;
    max-width:1300px;
    height:100%;
    align-items:center;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`

export const IconLogo = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:flex-start;
    align-items:center;
    font-size:1rem;
    color:#ebc08b;
`
export const Menu = styled.ul`
    display:flex;
    justify-content:center;
    align-items:center;
`

export const MenuItem = styled.li`
    height:100%;
    padding:0.5rem 1.5rem;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1rem;
    &:hover {
        transform:scale(1.1);
    }
`

 export const MenuItemLink = styled.a`
    text-decoration:none;
    color: #ebc08b;
`

