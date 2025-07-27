import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Carousel } from 'bootstrap';
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
    useEffect(() => {
        const brigadasCarousel = document.querySelector('#brigadasCarousel');
        if (brigadasCarousel) {
            new Carousel(brigadasCarousel, {
                interval: 3000,
                ride: 'carousel',
            });
        }

        const gruposCarousel = document.querySelector('#gruposCarousel');
        if (gruposCarousel) {
            new Carousel(gruposCarousel, {
                interval: 4000,
                ride: 'carousel',
            });
        }
    }, []);


    return (
        <>
            <CustomNavbar />

            {/* Hero Section */}
            <header className="hero-section text-white d-flex align-items-center justify-content-center">
                <div className="text-center">
                    <div className="hero-logo-container mb-3">
                        <img
                            src="/Images/5-removebg-preview.png"
                            alt="Logo Vikingos Colombia"
                            className="hero-logo img-fluid"
                        />
                    </div>

                    <h1 className="display-4 fw-bold">
                        <span className="text-white">Bienvenidos a </span>
                        <span style={{ color: '#e79702ff' }}>Vikingos Colombia</span>
                    </h1>

                    <p className="lead">Recuperación. Comunidad. Transformación.</p>
                    <a href="#eventos" className="btn btn-danger mt-3 px-4 py-2">
                        Descubre más
                    </a>
                </div>
            </header>

            {/* Eventos Section */}
            <section className="media-preview bg-light py-5" id="eventos">
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
                            <div className="carousel-wrapper position-relative">
                                <div
                                    id="brigadasCarousel"
                                    className="carousel slide shadow-sm rounded"
                                    data-bs-ride="carousel"
                                    data-bs-interval="4000"
                                >
                                    <div className="carousel-indicators">
                                        {[0, 1, 2, 3, 4].map((index) => (
                                            <button
                                                key={index}
                                                type="button"
                                                data-bs-target="#brigadasCarousel"
                                                data-bs-slide-to={index}
                                                className={index === 0 ? 'active' : ''}
                                                aria-current={index === 0 ? 'true' : undefined}
                                                aria-label={`Slide ${index + 1}`}
                                            />
                                        ))}
                                    </div>

                                    <div className="carousel-inner rounded overflow-hidden">
                                        {[1, 2, 3, 4, 5].map((num, index) => (
                                            <div key={num} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                                <img
                                                    src={`/Images/${num}-removebg-preview.png`}
                                                    className="d-block w-100"
                                                    alt={`Brigada ${num}`}
                                                    style={{ maxHeight: '400px', objectFit: 'contain' }}
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        className="carousel-control-prev"
                                        type="button"
                                        data-bs-target="#brigadasCarousel"
                                        data-bs-slide="prev"
                                    >
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Anterior</span>
                                    </button>

                                    <button
                                        className="carousel-control-next"
                                        type="button"
                                        data-bs-target="#brigadasCarousel"
                                        data-bs-slide="next"
                                    >
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Siguiente</span>
                                    </button>
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
                                />
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

            {/* Sección: Nuestros Grupos */}
            <section className="bg-dark text-light py-5">
                <div className="container">

                    {/* Título con animación */}
                    <motion.h2
                        className="text-center mb-4 fw-bold"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        Nuestros Grupos
                    </motion.h2>

                    {/* Carrusel de grupos */}
                    <div className="carousel-wrapper position-relative">
                        <div
                            id="gruposCarousel"
                            className="carousel slide shadow-sm rounded"
                            data-bs-ride="carousel"
                            data-bs-interval="4000"
                        >
                            {/* Indicadores del carrusel */}
                            <div className="carousel-indicators">
                                {[0, 1, 2, 3, 4].map((index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        data-bs-target="#gruposCarousel"
                                        data-bs-slide-to={index}
                                        className={index === 0 ? 'active' : ''}
                                        aria-current={index === 0 ? 'true' : undefined}
                                        aria-label={`Grupo ${index + 1}`}
                                    />
                                ))}
                            </div>

                            {/* Imágenes del carrusel */}
                            <div className="carousel-inner rounded overflow-hidden">
                                {[
                                    '1-removebg-preview.png',
                                    '2-removebg-preview.png',
                                    '3-removebg-preview.png',
                                    '4-removebg-preview.png',
                                    '5-removebg-preview.png'
                                ].map((img, index) => (
                                    <div
                                        key={index}
                                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                                    >
                                        <img
                                            src={`/Images/${img}`}
                                            className="d-block w-100"
                                            alt={`Grupo ${index + 1}`}
                                            style={{ maxHeight: '400px', objectFit: 'cover' }}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Controles del carrusel */}
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#gruposCarousel"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Anterior</span>
                            </button>

                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#gruposCarousel"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Siguiente</span>
                            </button>
                        </div>
                    </div>

                    {/* Botón de enlace */}
                    <div className="text-center mt-4">
                        <Link to="/grupos" className="btn btn-outline-light btn-sm px-4 mt-2">
                            Conocer todos los grupos
                        </Link>
                    </div>

                </div>
            </section>

            {/* Anexos Section */}
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