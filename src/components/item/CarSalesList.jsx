// CarSalesList.jsx
import React from 'react';
import CarSalesCard from './CarSalesCard';

const CarSalesList = ({ carSalesData }) => {
    return (
        <div className="row">
            {carSalesData.map((car, index) => (
                <div key={index} className="col-md-4 mb-4">
                    <CarSalesCard car={car} />
                </div>
            ))}
        </div>
    );
};

export default CarSalesList;
