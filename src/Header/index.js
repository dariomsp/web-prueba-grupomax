import React from "react";
import "./Header.css";

const itemsMenu = [
    {
        url: "/",
        title: "Inicio"
    },
    {
        url: "#products",
        title: "Productos"
    },
    {
        url: "#contact",
        title: "Contacto"
    },
];

function Header() {
    return (
        <header>
            <div className="logo-container">
                <a href="/">
                    <img src="images/LOGO.png" alt="Logo" />
                </a>
            </div>
            <div className="toggleMunu-and-list-items-menu">
                <label className="toggle-menu" htmlFor="toggle">
                    <i className="material-icons">menu</i>
                </label>
                <input type="checkbox" name="" id="toggle" />

                <div className="container-items-menus">
                    <ul className="menuItemsList">
                        {itemsMenu.map((itemMenu, key) => {
                            return (
                                <a href={itemMenu.url}>
                                    <li key={key} className="menuItem">
                                        {itemMenu.title}
                                    </li>
                                </a>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </header>
    );
}

export { Header };
