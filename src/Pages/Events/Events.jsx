import React from 'react';
import { motion } from 'framer-motion';
import CustomNavbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './Events.css';

const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.2 * i, duration: 0.6 },
    }),
};

const eventsData = [
    {
        tipo: "Brigada",
        logo: "/Images/b12.jpg",
        nombre: "Brigada 12 Colombia",
        descripcion: "Jornada de recuperación en zonas vulnerables con acompañamiento terapéutico, alimentación, cortes de cabello y actividades de apoyo espiritual.",
        fecha: "Agosto 24, 2025",
        lugar: "Plazoleta estacion prado, Medellín",
    },
    {
        tipo: "Experiencia",
        logo: "/Images/logo_experiencia.png",
        nombre: "Experiencia Espiritual",
        descripcion: "Un retiro de 3 días en entorno natural con talleres de introspección, charlas espirituales, dinámicas de grupo y acompañamiento emocional.",
        fecha: "Agosto 15, 16 y 17 2025",
        lugar: "Finca El Polo, Piedecuesta - Santander",
    }
];

const Events = () => {
    return (
        <>
            <CustomNavbar />
            <section id="eventos" className="bg-dark text-light py-5">
                <div className="container">
                    <motion.h2
                        className="text-center fw-bold mb-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        Nuestros Eventos
                    </motion.h2>
                    <motion.p
                        className="text-center mb-5 fs-6 text-white"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        En Vikingos Colombia realizamos eventos que fortalecen la recuperación y la transformación personal. Nuestras brigadas y experiencias están diseñadas para brindar ayuda real, amor y propósito. La información sobre reuniones puedes encontrarla en la sección "Grupos".
                    </motion.p>
                    <div className="row">
                        {eventsData.map((evento, index) => (
                            <motion.div
                                className="col-md-6 mb-4"
                                key={index}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeIn}
                            >
                                <div className="event-card bg-secondary text-light shadow-lg rounded-4 overflow-hidden d-flex flex-column align-items-center text-center p-4">
                                    <img
                                        src={evento.logo}
                                        alt={evento.tipo}
                                        className="img-fluid w-100 mb-3 rounded-top"
                                        style={{ height: '240px', objectFit: 'contain', backgroundColor: '#111' }}
                                    />
                                    <h5 className="fw-bold">{evento.nombre}</h5>
                                    <p className="text-muted small mb-1">📅 {evento.fecha}</p>
                                    <p className="text-muted small mb-3">📍 {evento.lugar}</p>
                                    <p className="text-light">{evento.descripcion}</p>
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

export default Events;
