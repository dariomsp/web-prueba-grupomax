import React from "react";
import "./FeaturedContent.css";

function FeaturedContent() {
    return (
        <section id="featuredContent">
            <div className="featured-content">
                <h1 className="title-featured-content">
                    Marca tu
                    <br />
                    <span>Estilo propio</span>
                </h1>
                <img
                    className="image-featured-content"
                    src="images/SLIDER.png"
                    alt="Banner"
                />
            </div>
        </section>
    );
}

export { FeaturedContent };
