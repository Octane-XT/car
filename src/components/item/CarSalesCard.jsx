// CarSalesCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './CarSalesCard.css'

const CarSalesCard = ({ car }) => {
    return (
        <div className="card">
            <img src={`data:image/png;base64, ${car.image}`} className="card-img-top" alt={car.model} />
            <div className="card-body">
                <h5 className="card-title">{car.model}</h5>
                <p className="card-text mb-3">{car.description}</p>
                <div className='btn-container' >
                    <Link to={`validate/`}>
                        <button type="button" className="btn btn-outline-success">
                            valider
                        </button>
                    </Link>
                    <Link to={`refuse/`}>
                        <button type="button" className="btn btn-outline-danger btn-refuse">
                            refuser
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CarSalesCard;
