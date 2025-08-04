import React from 'react';
import { motion } from 'framer-motion';
import CustomNavbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './Us.css'; // Estilos personalizados

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.1 * i, duration: 0.6 },
    }),
};

const Us = () => {
    return (
        <>
            <CustomNavbar />
            <section id="nosotros" className="us-section">
                <div className="container py-5">
                    <motion.h2
                        className="text-center mb-5 fw-bold display-5 "
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        style={{ color: '#e79702ff' }}
                    >
                        Sobre Nosotros
                    </motion.h2>

                    <motion.div
                        className="mb-5 us-block"
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <i className="ri-book-2-line us-icon text-accent"></i>
                        <div>
                            <h4 className="fw-bold text-accent">Nuestra Historia</h4>
                            <p className="text-light">
                                Vikingos Colombia nace como un movimiento de recuperación y transformación personal.
                                Desde nuestros inicios, hemos acompañado a cientos de personas en su camino de cambio a través de experiencias, encuentros, brigadas y apoyo mutuo en diferentes ciudades del país.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="mb-5 us-block"
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <i className="ri-compass-3-line us-icon text-accent"></i>
                        <div>
                            <h4 className="fw-bold text-accent">Misión</h4>
                            <p className="text-light">
                                Brindar apoyo integral a personas que enfrentan el alcoholismo,
                                la drogadicción y otras adicciones, a través del acompañamiento de adictos en recuperación que comparten su experiencia,
                                fortaleza y esperanza. Nuestra labor se basa en el trabajo espiritual y personal del programa de los 12 pasos,
                                fomentando la comprensión, la tolerancia, el perdón y el respeto como pilares fundamentales del proceso de recuperación.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="mb-5 us-block"
                        custom={3}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <i className="ri-eye-line us-icon text-accent"></i>
                        <div>
                            <h4 className="fw-bold text-accent">Visión</h4>
                            <p className="text-light">
                                Ser una fraternidad de recuperación reconocida a nivel nacional por transformar vidas,
                                promoviendo una comunidad solidaria donde cada persona encuentre una oportunidad real de cambio, libertad y propósito,
                                guiada por el ejemplo de quienes han recorrido el mismo camino de recuperación.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="mb-5 us-block"
                        custom={4}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <i className="ri-team-line us-icon text-accent"></i>
                        <div>
                            <h4 className="fw-bold text-accent">Nuestros Valores</h4>
                            <ul className="text-light">
                                <li>Empatía y solidaridad</li>
                                <li>Compromiso con el cambio</li>
                                <li>Servicio y entrega</li>
                                <li>Confianza y transparencia</li>
                                <li>Amor propio y respeto mutuo</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Us;
