import React from 'react';
import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import './Resumen.css';

const ResumenCard = ({ icon, titulo, descripcion, link }) => {
  return (
    <div className="resumen-card card h-100 shadow-sm text-center">
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <i className={`ri ${icon} icono-resumen mb-3`}></i>
          <h5 className="fw-bold mb-2 text-uppercase">{titulo}</h5>
          <p className="text-muted mb-4">{descripcion}</p>
        </div>
        <div>
          <Link to={link} className="btn btn-outline-danger btn-sm rounded-pill">
            Conocer más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResumenCard;
