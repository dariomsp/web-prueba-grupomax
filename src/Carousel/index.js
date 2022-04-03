import React from "react";
import "./Carousel.css";
import { Context } from "../Context";

function Carousel(props) {
    const { appendItems, isLimitItems, hideItems } = React.useContext(Context);

    return (
        <section id="products">
            <div className="featured-content carousel-content">
                <div className="header-carousel">
                    <h1 className="title-featured-content carousel-title">
                        Novedosos y brillantes
                    </h1>
                    <img
                        className="image-featured-content"
                        src="images/BANNER_Sillon.png"
                        alt="Banner Sillon"
                    />
                </div>
                <ul className="items-carousel" id="itemsCarousel">
                    {props.children}
                </ul>
                {isLimitItems ? (
                    <button
                        onClick={() => hideItems()}
                        className="primary-button view-more-button"
                        type="button"
                    >
                        Ver menos
                    </button>
                ) : (
                    <button
                        onClick={() => appendItems()}
                        className="primary-button view-more-button"
                        type="button"
                    >
                        Ver más
                    </button>
                )}
            </div>
        </section>
    );
}

export { Carousel };
