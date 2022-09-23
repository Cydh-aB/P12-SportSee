import React from "react";
import Logo from "../../assets/Image/Logo.png";
import styled from "styled-components";

/**Style**/

const StyleHeader = styled.header `
display: flex;
justify-content: space-between;
background-color: black;
padding-top: 1%;
padding-bottom: 1%;
`

const StyleLogo = styled.img`
width: 178px;
margin-left: 2%;
`

const StyleNav = styled.nav`
width: 100%;
`

const StyleUl = styled.ul`
display: flex;
justify-content: space-evenly;

a {
    font-size: 24px;
    font-weight: 500;
    color: #FFF;
    text-decoration: none;
}
`
/****/

function Header() {
    /**
    * Not refreshing the page
    * @param {event} e - Event
    * @returns {void}
    */
  const NotRefresh = (e) => e.preventDefault();
    return(
        <StyleHeader>
            <StyleLogo src={Logo} alt="SportSee Logo"/>
            <StyleNav>
                <StyleUl>
                    <li>
                        <a href="*" onClick={NotRefresh}>Accueil</a>
                    </li>
                    <li>
                        <a href="*" onClick={NotRefresh}>Profil</a>
                    </li><li>
                        <a href="*" onClick={NotRefresh}>Réglage</a>
                    </li><li>
                        <a href="*" onClick={NotRefresh}>Communauté</a>
                    </li>
                </StyleUl>
            </StyleNav>
        </StyleHeader>
    )
}

export default Header