import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const CustomNavbar = () => {
    const [expanded, setExpanded] = useState(false);

    const menuVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: "auto", transition: { type: "spring", stiffness: 100, damping: 15, staggerChildren: 0.1 } },
        exit: { opacity: 0, height: 0, transition: { duration: 0.3 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="py-3 shadow-lg" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
            <Container>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                >
                    <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 text-secondary">
                        Vikingos Colombia
                    </Navbar.Brand>
                </motion.div>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <AnimatePresence>
                        {expanded && (
                            <motion.div
                                key="mobile-nav-items"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={menuVariants}
                                className="w-100 w-lg-auto"
                            >
                                <Nav className="ms-auto">
                                    <LinkContainer to="/" onClick={() => setExpanded(false)}>
                                        <motion.div variants={itemVariants}>
                                            <Nav.Link className="me-3 fs-6">Inicio</Nav.Link>
                                        </motion.div>
                                    </LinkContainer>

                                    <LinkContainer to="/servicios" onClick={() => setExpanded(false)}>
                                        <motion.div variants={itemVariants}>
                                            <Nav.Link className="me-3 fs-6">Servicios</Nav.Link>
                                        </motion.div>
                                    </LinkContainer>

                                    <NavDropdown title="Productos" id="basic-nav-dropdown" className="me-3 fs-6">
                                        <LinkContainer to="/productos/electronica" onClick={() => setExpanded(false)}>
                                            <NavDropdown.Item>Electrónica</NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to="/productos/ropa" onClick={() => setExpanded(false)}>
                                            <NavDropdown.Item>Ropa</NavDropdown.Item>
                                        </LinkContainer>
                                        <NavDropdown.Divider />
                                        <LinkContainer to="/productos/ofertas" onClick={() => setExpanded(false)}>
                                            <NavDropdown.Item>Ofertas Especiales</NavDropdown.Item>
                                        </LinkContainer>
                                    </NavDropdown>

                                    <LinkContainer to="/acerca-de" onClick={() => setExpanded(false)}>
                                        <motion.div variants={itemVariants}>
                                            <Nav.Link className="me-3 fs-6">Acerca de</Nav.Link>
                                        </motion.div>
                                    </LinkContainer>

                                    <LinkContainer to="/contacto" onClick={() => setExpanded(false)}>
                                        <motion.div
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Nav.Link>
                                                <button className="btn btn-outline-light btn-sm px-3 py-1">
                                                    Contacto
                                                </button>
                                            </Nav.Link>
                                        </motion.div>
                                    </LinkContainer>
                                </Nav>
                            </motion.div>
                        )}
                        {!expanded && (
                            <Nav className="ms-auto d-none d-lg-flex">
                                <LinkContainer to="/">
                                    <Nav.Link className="me-3 fs-6">Inicio</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/servicios">
                                    <Nav.Link className="me-3 fs-6">Servicios</Nav.Link>
                                </LinkContainer>
                                <NavDropdown title="Productos" id="basic-nav-dropdown" className="me-3 fs-6">
                                    <LinkContainer to="/productos/electronica">
                                        <NavDropdown.Item>Electrónica</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/productos/ropa">
                                        <NavDropdown.Item>Ropa</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Divider />
                                    <LinkContainer to="/productos/ofertas">
                                        <NavDropdown.Item>Ofertas Especiales</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                                <LinkContainer to="/acerca-de">
                                    <Nav.Link className="me-3 fs-6">Acerca de</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/contacto">
                                    <Nav.Link>
                                        <button className="btn btn-outline-light btn-sm px-3 py-1">
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