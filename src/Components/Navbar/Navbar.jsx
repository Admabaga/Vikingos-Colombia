import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const CustomNavbar = () => {
    const [expanded, setExpanded] = useState(false);

    const menuVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: {
            opacity: 1,
            height: "auto",
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                staggerChildren: 0.1
            }
        },
        exit: { opacity: 0, height: 0, transition: { duration: 0.3 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <Navbar
            style={{ backgroundColor: '#121212' }}
            variant="dark"
            expand="lg"
            className="py-1 shadow-sm"
            expanded={expanded}
            onToggle={() => setExpanded(!expanded)}
        >
            <Container className="align-items-center">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    whileHover={{
                        scale: 1.05,
                        filter: "drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.5))",
                        transition: { duration: 0.3 }
                    }}
                    style={{ display: 'flex', alignItems: 'center' }}
                >
                    <Navbar.Brand
                        as={Link}
                        to="/"
                        className="d-flex align-items-center"
                        style={{ padding: 0 }}
                    >
                        <img
                            src="/Images/Logo_vikingos-removebg-preview.png"
                            style={{ height: "48px", objectFit: "contain" }}
                            alt="Logo"
                        />
                    </Navbar.Brand>
                </motion.div>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <AnimatePresence>
                        {expanded && (
                            <motion.div
                                key="mobile-nav"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={menuVariants}
                                className="w-100 bg-dark px-4 py-3 rounded-bottom"
                            >
                                <Nav className="flex-column">
                                    <LinkContainer to="/" onClick={() => setExpanded(false)}>
                                        <Nav.Link className="nav-item-animated">
                                            <motion.span variants={itemVariants}>Inicio</motion.span>
                                        </Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/anexos" onClick={() => setExpanded(false)}>
                                        <Nav.Link className="nav-item-animated">
                                            <motion.span variants={itemVariants}>Anexos</motion.span>
                                        </Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/eventos" onClick={() => setExpanded(false)}>
                                        <Nav.Link className="nav-item-animated">
                                            <motion.span variants={itemVariants}>Eventos</motion.span>
                                        </Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/grupos" onClick={() => setExpanded(false)}>
                                        <Nav.Link className="nav-item-animated">
                                            <motion.span variants={itemVariants}>Grupos</motion.span>
                                        </Nav.Link>
                                    </LinkContainer>

                                    <LinkContainer to="/nosotros" onClick={() => setExpanded(false)}>
                                        <Nav.Link className="nav-item-animated">
                                            <motion.span variants={itemVariants}>Nosotros</motion.span>
                                        </Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/" onClick={() => setExpanded(false)}>
                                        <Nav.Link>
                                            <motion.button
                                                variants={itemVariants}
                                                className="btn btn-accent w-100 mt-3"
                                            >
                                                Contacto
                                            </motion.button>
                                        </Nav.Link>
                                    </LinkContainer>
                                </Nav>
                            </motion.div>
                        )}
                        {!expanded && (
                            <Nav className="ms-auto d-none d-lg-flex align-items-center">
                                <LinkContainer to="/">
                                    <Nav.Link className="me-3 fs-6 nav-item-animated">Inicio</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/anexos">
                                    <Nav.Link className="me-3 fs-6 nav-item-animated">Anexos</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/eventos">
                                    <Nav.Link className="me-3 fs-6 nav-item-animated">Eventos</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/grupos">
                                    <Nav.Link className="me-3 fs-6 nav-item-animated">Grupos</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to="/nosotros">
                                    <Nav.Link className="me-3 fs-6 nav-item-animated">Nosotros</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/">
                                    <Nav.Link>
                                        <button className="btn btn-accent btn-sm px-3 py-1 rounded-pill">
                                            Contacto
                                        </button>
                                    </Nav.Link>
                                </LinkContainer>
                            </Nav>
                        )}
                    </AnimatePresence>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
