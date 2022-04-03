import React, { createContext } from "react";

const Context = createContext();

const itemsData = [
    {
        url: "images/IMG_Cómoda.png",
        title: "Cómoda",
        category: "Dormitorio",
    },
    {
        url: "images/IMG_Sillon.png",
        title: "Silla",
        category: "Cocina",
    },
    {
        url: "images/IMG_MesaRatona.png",
        title: "Mesa Ratona",
        category: "Living/Comedor",
    },
    {
        url: "images/IMG_Cómoda.png",
        title: "Cómoda",
        category: "Dormitorio",
    },
    {
        url: "images/IMG_Sillon.png",
        title: "Silla",
        category: "Cocina",
    },
    {
        url: "images/IMG_MesaRatona.png",
        title: "Mesa Ratona",
        category: "Living/Comedor",
    },
    {
        url: "images/IMG_Cómoda.png",
        title: "Cómoda",
        category: "Dormitorio",
    },
    {
        url: "images/IMG_Sillon.png",
        title: "Silla",
        category: "Cocina",
    },
];

function Provider(props) {
    const [slice, setSlice] = React.useState([0, 3]);
    const [items, setItems] = React.useState(
        itemsData.slice(slice[0], slice[1])
    );
    const [isLimitItems, setLimitItems] = React.useState(false);

    const newItems = [...itemsData];
    let newSlice = [slice[0], slice[1]];

    const appendItems = () => {
        if (Math.round(items.length / 3) < Math.round(itemsData.length / 3)) {
            newSlice = [slice[0], slice[1] + 3];
            setSlice([newSlice[0], newSlice[1]]);
            const itemsIncorporated = newItems.slice(newSlice[0], newSlice[1]);
            setItems(itemsIncorporated);

            if (
                Math.round(items.length / 3) + 1 >=
                Math.round(itemsData.length / 3)
            ) {
                setLimitItems(true);
            }
        } else {
            setLimitItems(true);
        }
    };

    const hideItems = () => {
        setItems(itemsData.slice(0, 3));
        setLimitItems(false);
        setSlice([0, 3]);

        const element = document.querySelector("#itemsCarousel");
        element.scrollIntoView();
    };

    return (
        <Context.Provider
            value={{
                items,
                setItems,
                appendItems,
                isLimitItems,
                hideItems,
            }}
        >
            {props.children}
        </Context.Provider>
    );
}

export { Context, Provider };
