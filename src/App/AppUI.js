import React, { useContext } from "react";
import { Header } from "../Header";
import { MainContent } from "../MainContent";
import { FeaturedContent } from "../FeaturedContent";
import { AboutUs } from "../AboutUs";
import { Carousel } from "../Carousel";
import { ItemCarousel } from "../ItemCarousel";
import { Footer } from "../Footer";
import { Context } from "../Context";
import "./index.css";

function AppUI() {
    const { items } = useContext(Context);

    return (
        <React.Fragment>
            <Header />
            <MainContent>
                <FeaturedContent />
                <AboutUs />
                <Carousel>
                    {items.map((item, key) => (
                        <ItemCarousel
                            key={key}
                            url={item.url}
                            title={item.title}
                            category={item.category}
                        />
                    ))}
                </Carousel>
            </MainContent>
            <Footer />
        </React.Fragment>
    );
}

export { AppUI };
