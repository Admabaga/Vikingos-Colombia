import React from 'react';
import { motion } from 'framer-motion';
import CustomNavbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './Annexes.css';

const annexesData = [
    {
        nombre: "Centro Renacer",
        direccion: "Calle 45 # 12-34, Medellín",
        contacto: "+57 3001234567",
        whatsapp: "https://wa.me/573001234567",
        imagen: "/Images/df95ad24-023f-472e-872d-2b0d8cb7e25c.jpg",
        video: "",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.888508070837!2d-75.5792211852382!3d6.244198395478092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428281f3bd64d%3A0x6f0d6e2f1c9fba18!2sMedell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1686772026042!5m2!1ses!2sco"
    },
    {
        nombre: "Hogar Nueva Vida",
        direccion: "Cra 78 # 23B-56, Bogotá",
        contacto: "+57 3109876543",
        whatsapp: "https://wa.me/573109876543",
        video: "https://www.youtube.com/embed/Z9AYPxH5NTM",
        imagen: "/Images/df95ad24-023f-472e-872d-2b0d8cb7e25c.jpg",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.888508070837!2d-74.0792211852382!3d4.624198395478092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a1f3bd64d%3A0x6f0d6e2f1c9fba18!2sBogot%C3%A1%2C%20Cundinamarca!5e0!3m2!1ses!2sco!4v1686772026042!5m2!1ses!2sco"
    }
];

const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.2 * i, duration: 0.6 },
    }),
};

const Annexes = () => {
    return (
        <>
            <CustomNavbar />
            <section id="anexos" className="bg-dark text-light py-5">
                <div className="container">
                    <motion.h2
                        className="text-center mb-5 fw-bold display-5 text-white"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        Lugares de Recuperación
                    </motion.h2>
                    <motion.p
                        className="text-center mb-5 fs-6 text-white opacity-75"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        Nuestros centros de recuperación son espacios de ayuda mutua y transformación personal para personas con problemas de adicción.
                        A través de un enfoque espiritual y humano, promovemos el bienestar físico, mental, emocional y espiritual de cada individuo.
                        En un entorno fraternal y acogedor, ofrecemos un trato digno, hospitalidad, alojamiento adecuado, y acompañamiento constante.
                        Contamos con terapias individuales y grupales, reuniones basadas en los 12 pasos, experiencias espirituales,
                        actividades recreativas y físicas, todo pensado para brindar una recuperación integral que motive,
                        inspire y sostenga el camino hacia una vida plena.
                    </motion.p>
                    <div className="row">
                        {annexesData.map((anexo, index) => (
                            <motion.div
                                className="col-md-6 mb-4"
                                key={index}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeIn}
                            >
                                <div className="anexo-card bg-secondary text-light shadow-lg rounded-4 overflow-hidden">
                                    {anexo.video ? (
                                        <div className="video-container">
                                            <iframe
                                                src={anexo.video}
                                                title={anexo.nombre}
                                                frameBorder="0"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    ) : (
                                        <img
                                            src={anexo.imagen}
                                            alt={anexo.nombre}
                                            className="img-fluid w-100"
                                            style={{ maxHeight: '240px', objectFit: 'cover' }}
                                        />
                                    )}

                                    <div className="p-4">
                                        <h5 className="fw-bold">{anexo.nombre}</h5>
                                        <p className="mb-1">📍 {anexo.direccion}</p>
                                        <p className="mb-2">
                                            📞 <a href={`tel:${anexo.contacto}`} className="telefono">{anexo.contacto}</a>
                                        </p>
                                        <a
                                            href={anexo.whatsapp}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="whatsapp-link d-inline-block mb-3"
                                        >
                                            <i className="ri-whatsapp-line me-2"></i> Escribir por WhatsApp
                                        </a>

                                        <div className="map-container rounded overflow-hidden">
                                            <iframe
                                                src={anexo.mapa}
                                                width="100%"
                                                height="200"
                                                style={{ border: 0 }}
                                                allowFullScreen=""
                                                loading="lazy"
                                                title={`Mapa de ${anexo.nombre}`}
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

export default Annexes;
