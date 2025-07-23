import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CustomNavbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import ResumenCard from '../../Components/ResumeCard/ResumenCard';
import './Home.css';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.1 * i, duration: 0.6 },
    }),
};

const Home = () => {
    return (
        <>
            <CustomNavbar />

            {/* HERO */}
            <header className="hero-section text-white d-flex align-items-center justify-content-center">
                <div className="text-center">
                    <h1 className="display-4 fw-bold">
                        <span className="text-white">Bienvenidos a </span>
                        <span style={{ color: '#e79702ff' }}>Vikingos Colombia</span>
                    </h1>
                    <p className="lead">Recuperación. Comunidad. Transformación.</p>
                    <Link to="/nosotros" className="btn btn-danger mt-3 px-4 py-2">
                        Conócenos
                    </Link>
                </div>
            </header>

            {/* EVENTOS */}
            <section className="media-preview bg-light py-5">
                <div className="container">
                    <motion.h2
                        className="text-center mb-4 fw-bold"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        Eventos Destacados
                    </motion.h2>

                    <div className="row g-4">
                        <div className="col-md-6">
                            <h5 className="text-danger mb-2">Brigadas</h5>
                            <div id="brigadasCarousel" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner rounded overflow-hidden">
                                    <div className="carousel-item active">
                                        <img src="/Images/brigada1.jpg" className="d-block w-100" alt="Brigada 1" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="/Images/brigada2.jpg" className="d-block w-100" alt="Brigada 2" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <h5 className="text-danger mb-2">Experiencias</h5>
                            <div className="ratio ratio-16x9 rounded overflow-hidden">
                                <iframe
                                    src="https://www.youtube.com/embed/Z9AYPxH5NTM"
                                    title="Experiencia Vikingos"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        <Link to="/eventos" className="btn btn-sm btn-outline-danger mt-3">
                            Conocer más sobre eventos
                        </Link>
                    </div>
                </div>
            </section>

            {/* GRUPOS */}
            <section className="bg-dark text-light py-5">
                <div className="container">
                    <motion.h2
                        className="text-center mb-4 fw-bold"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        Nuestros Grupos
                    </motion.h2>
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="rounded overflow-hidden">
                                <img src="/Images/grupo_vikingos.jpg" className="img-fluid rounded" alt="Grupo 1" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="rounded overflow-hidden">
                                <img src="/Images/grupo_vikingos2.jpg" className="img-fluid rounded" alt="Grupo 2" />
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <Link to="/grupos" className="btn btn-outline-light btn-sm px-4 mt-2">
                            Conocer todos los grupos
                        </Link>
                    </div>
                </div>
            </section>

            {/* ANEXOS */}
            <section className="resumen-section py-5" style={{ backgroundColor: '#f9f2e7' }}>
                <div className="container">
                    <motion.h2
                        className="text-center mb-4 fw-bold"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        Explora más
                    </motion.h2>
                    <div className="row justify-content-center g-4">
                        <div className="col-md-6 col-lg-4">
                            <ResumenCard
                                icon="ri-team-line"
                                titulo="Nosotros"
                                descripcion="Historia, misión, visión y valores que nos definen como comunidad."
                                link="/nosotros"
                            />
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <ResumenCard
                                icon="ri-home-heart-line"
                                titulo="Anexos"
                                descripcion="Centros de recuperación integral para sanación y acompañamiento."
                                link="/anexos"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Home;
