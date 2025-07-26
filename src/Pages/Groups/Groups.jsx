import React from 'react';
import { motion } from 'framer-motion';
import CustomNavbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import 'remixicon/fonts/remixicon.css';
import './Groups.css';

const groupsData = [
    {
        nombre: 'Vikingos - Caldas',
        direccion: 'Cra 54 # 124 sur - 62, Caldas Antioquia',
        contacto: '3193876916',
        reuniones: ['Lunes a Viernes - 7:30 PM', 'Sabado - 7:00 PM'],
        mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.269340022498!2d-75.6414611260278!3d6.094376428003405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46868de78b95c9%3A0xd26fd92cc5b8f24a!2sCra.%2054%20%23124%2C%20Caldas%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1753229734251!5m2!1ses!2sco',
        logo: '/Images/1-removebg-preview.png',
    },
    {
        nombre: 'Vikingos - Medellin',
        direccion: 'Calle 85 # 44 - 26, Medellin Antioquia',
        contacto: '3043368546',
        reuniones: ['Lunes a Viernes - 7:30 PM', 'Sabados - 7:00 PM'],
        mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8990067790687!2d-75.55724843030053!3d6.2770073121077425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428c7a324ee4b%3A0x6a180a77626a7e0b!2sCl.%2085%20%23%2044-26%2C%20Santa%20Ines%2C%20Medell%C3%ADn%2C%20Manrique%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1753229798255!5m2!1ses!2sco',
        logo: '/Images/2-removebg-preview.png',
    },
    {
        nombre: 'Vikingos - Barrancabermeja',
        direccion: 'Calle 52 vía pozo 7 Barrio las torres casa 1, Barrancabermeja Santander',
        contacto: '3003368546',
        reuniones: ['Lunes a Viernes - 7:30 PM', 'Sabados - 7:00 PM'],
        mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.5556306343883!2d-73.84178243025711!3d7.0613823011047785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4293543499edbd%3A0x14490a5c8e5a6297!2sCl.%2052%20%23%2038A-7%20casa%201%2C%20Barrancabermeja%2C%20Santander!5e0!3m2!1ses!2sco!4v1753230147805!5m2!1ses!2sco',
        logo: '/Images/4-removebg-preview.png',
    },
    {
        nombre: 'Vikingos - Un día a la vez',
        direccion: 'Transversal 146 # 60 - 31, El carmen Floridablanca, Santander',
        contacto: '3003368546',
        reuniones: ['Lunes a Viernes - 7:30 PM', 'Sabados - 7:00 PM'],
        mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.363173209932!2d-73.08614872602128!3d7.083828916400489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e68407936ec0d05%3A0x20b5fd3b3e340522!2sTv.%20146%20%23%2060-31%2C%20Floridablanca%2C%20Santander!5e0!3m2!1ses!2sco!4v1753230032357!5m2!1ses!2sco',
        logo: '/Images/3-removebg-preview.png',
    },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.1 * i, duration: 0.6 },
    }),
};

const Groups = () => {
    return (
        <>
            <CustomNavbar />
            <section className="grupos-section bg py-5">
                <div className="container">
                    <motion.h2
                        className="text-center mb-5 fw-bold display-5 "
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        style={{ color: '#e79702ff' }}
                    >
                        Nuestros Grupos
                    </motion.h2>
                    <motion.p
                        className="text-center text-white mb-4 col-lg-8 mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        En Vikingos Colombia contamos con diversos grupos a nivel nacional que se reúnen diariamente para brindar apoyo, compartir experiencias y continuar el proceso de recuperación en comunidad.
                    </motion.p>
                    <div className="row g-4">
                        {groupsData.map((grupo, idx) => (
                            <motion.div
                                className="col-md-6"
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * idx, duration: 0.6 }}
                            >
                                <div className="card grupo-card h-100 shadow-sm border-0">
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <div>
                                            <div className="text-center mb-3">
                                                <img
                                                    src={grupo.logo}
                                                    alt={`Logo de ${grupo.nombre}`}
                                                    className="grupo-logo img-fluid"
                                                />
                                            </div>

                                            <h5 className="card-title fw-bold text-accent mb-2">
                                                <i className="ri-group-line me-2"></i>
                                                {grupo.nombre}
                                            </h5>
                                            <p className="mb-1">
                                                <i className="ri-map-pin-line text-danger me-2"></i>
                                                {grupo.direccion}
                                            </p>
                                            <p className="mb-1">
                                                <i className="ri-phone-line text-success me-2"></i>
                                                <a
                                                    href={`tel:${grupo.contacto}`}
                                                    className="text-decoration-none text-white opacity-75"
                                                >
                                                    {grupo.contacto}
                                                </a>
                                            </p>
                                            <p className="mb-3">
                                                <i className="ri-whatsapp-line text-success me-2"></i>
                                                <a
                                                    href={`https://wa.me/${grupo.contacto.replace('+', '')}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-decoration-none text-white opacity-75"
                                                >
                                                    Chatear por WhatsApp
                                                </a>
                                            </p>

                                            {grupo.reuniones && grupo.reuniones.length > 0 && (
                                                <div className="mb-3">
                                                    <h6 className="text-warning fw-semibold">
                                                        <i className="ri-calendar-line me-2"></i>
                                                        Reuniones
                                                    </h6>
                                                    <ul className="list-unstyled mb-0">
                                                        {grupo.reuniones.map((hora, i) => (
                                                            <li key={i} className="text-white opacity-75">
                                                                🕒 {hora}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                        <div className="map-responsive mt-3">
                                            <iframe
                                                src={grupo.mapaEmbed}
                                                width="100%"
                                                height="200"
                                                frameBorder="0"
                                                style={{ border: 0 }}
                                                allowFullScreen=""
                                                loading="lazy"
                                                title={`mapa-${grupo.nombre}`}
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Groups;
