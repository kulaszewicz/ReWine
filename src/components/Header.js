import React from "react";
import logo from '../resources/wine-bottle.png'

const Header = (props) =>  (
    <div className={"header"}>
        <ul className="header__main-nav">
            <li><a>About</a></li>
            <li><a href="https://github.com/kulaszewicz" target="_blank">Github</a></li>
        </ul>
        <div className={"container"}>
            <h1 className={"header__title"}>{props.title}  <img className={"header__logo"} src={logo}/> </h1>
            {props.subtitle && <h2 className={"header__subtitle"}>{props.subtitle}</h2>}
        </div>
    </div>
);



Header.defaultProps = {
    title: 'ReWine',
    subtitle: 'Let me review your wine!'
};


export default Header;