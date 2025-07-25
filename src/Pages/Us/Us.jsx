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
                                Ser un espacio seguro y transformador para quienes buscan salir adelante. Promovemos la recuperación emocional, el crecimiento espiritual y el servicio comunitario mediante procesos humanos, reales y fraternos.
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
                                Ser la comunidad de recuperación más representativa en Colombia, un referente de transformación social a nivel nacional con impacto profundo y duradero en miles de vidas.
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
