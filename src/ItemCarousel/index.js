import React from "react";
import "./ItemCarousel.css";

function ItemCarousel(props) {
    return (
        <li className="item-carousel" key={props.key}>
            <article>
                <img className="" src={props.url} alt="" />
                <h4 className="title-item">{props.title}</h4>
                <h4 className="category-item">{props.category}</h4>
            </article>
        </li>
    );
}

export { ItemCarousel };
