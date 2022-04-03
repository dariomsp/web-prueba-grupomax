import React from "react";
import "./AboutUs.css";

function AboutUs() {
    return (
        <section id="aboutUs">
            <div className="content-about-us">
                <img
                    className="logo-about-us"
                    src="images/ICONO_Sillon.png"
                    alt="Logo Sillon"
                />
                <div className="text-about-us">
                    <h1 className="title-about-us">Nosotros</h1>
                    <p>
                        Nos dedicamos al diseño y restauración de muebles a
                        pedido y a tu gusto, para que sean únicos, irrepetibles
                        y funcionales. Nuestros diseños nacen de la imaginación
                        y la pasión que sentimos al crearlos. Buscamos generar
                        piezas únicas en tu espacio, priorizando sobre todo el
                        confort. Trabajamos muebles con espejos, con pintura
                        glitter y con resina epóxica.
                    </p>
                </div>
            </div>
        </section>
    );
}

export { AboutUs };
