import React from "react";
import "./Footer.css";
import APIForm from "../APIForm";
import "../sendForm";

function Footer() {
    let provinces = [
        "Córdoba",
        "La Rioja",
        "Santiago del Estero",
        "Catamarca",
        "Jujuy",
        "Salta",
        "Formosa",
        "Tucumán",
        "San Juan",
        "Mendoza",
        "Neuquén",
        "La Pampa",
        "Buenos Aires",
        "Entre Ríos",
        "Corrientes",
        "Misiones",
        "Chaco",
        "Chubut",
        "Santa Cruz",
        "Tierra del Fuego",
    ];
    provinces = provinces.sort();

    let schedules = ["09:00 - 12:00", "12:00 - 16:00", "16:00 - 21:00"];

    return (
        <footer>
            <div className="container-footer">
                <div className="form">
                    <h3 className="titles-footer">Formulario</h3>
                    <form
                        id="formContact"
                        className="container-form"
                        action="POST"
                    >
                        <label htmlFor="name">
                            Nombre
                            <input name="name" type="text" />
                        </label>
                        <label htmlFor="province">
                            Provincia
                            <div className="content-select">
                                <select name="province" id="">
                                    <option value="" defaultValue>
                                        Seleccione una provincia
                                    </option>
                                    {provinces.map((province, key) => (
                                        <option key={key} value={key}>
                                            {province}
                                        </option>
                                    ))}
                                </select>
                                <i className="material-icons expand-more">
                                    expand_more
                                </i>
                            </div>
                        </label>
                        <label htmlFor="email">
                            E-mail
                            <input type="email" name="email" id="" />
                        </label>
                        <label htmlFor="schedule">
                            Horario de contacto
                            <div className="content-select">
                                <select name="schedule" id="">
                                    <option value="" defaultValue>
                                        Seleccione un horario
                                    </option>
                                    {schedules.map((schedule, key) => (
                                        <option key={key} value={key}>
                                            {schedule}
                                        </option>
                                    ))}
                                </select>
                                <i className="material-icons expand-more">
                                    expand_more
                                </i>
                            </div>
                        </label>
                        <label htmlFor="tel">
                            Teléfono
                            <input type="tel" name="tel" id="" />
                        </label>
                        <label htmlFor="tel">
                            Consulta
                            <textarea
                                name="consult"
                                id=""
                                cols="30"
                                rows="1"
                            ></textarea>
                        </label>
                        <button
                            className="primary-button send-button"
                            type="submit"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
                <div className="contact" id="contact">
                    <h3 className="titles-footer">Contacto</h3>
                    <ul className="list-contact">
                        <li>
                            <i className="material-icons">phone</i>
                            <a href="tel:0800-000-000">0800-000-0000</a>
                        </li>
                        <li>
                            <i className="material-icons">whatsapp</i>
                            <a
                                href="https://api.whatsapp.com/send?phone=1100000000&text=Hola,%20en%20que%20podemos%20ayudarte?"
                                target="_blank"
                                rel="noreferrer"
                            >
                                11-00000000
                            </a>
                        </li>
                        <li>
                            <i className="material-icons">room</i>
                            <a
                                href="https://goo.gl/maps/tgQnEzqEw9itZGa88"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Lorem ipsum 555
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="schedule">
                    <h3 className="titles-footer">Horarios</h3>
                    <p>Lunes a Viernes</p>
                    <p>10:00 - 19:00 hs.</p>
                </div>
            </div>
            <p className="derechos">Todos los derechos reservados</p>
        </footer>
    );
}

export { Footer };
