import React, { useState, useEffect } from 'react';
import CarSalesChart from '../../components/dashboard/CarSalesChart';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DataService from '../../services/StatistiqueService'; 

// ... (previous imports)

const CarSalesDashboard = () => {
  const [selectedYear, setSelectedYear] = useState('2022');
  const years = ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await DataService.getvendu(selectedYear);
        setData(fetchedData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        // Handle error if necessary
      }
    };

    fetchData();  // Call fetchData inside the useEffect callback

  }, [selectedYear]); // Include 'selectedYear' in the dependency array

  return (
    <div className="main-wrapper">
      <Sidebar />
      <div className="page-wrapper">
        <Navbar />
        <div className="page-content">
          <div className="row">
            <div className="card">
              <div className="card-body">
                <h3>Voiture vendu par mois</h3>
                <div className="mb-3">
                  <form>
                    <label className="form-label" htmlFor="yearSelect">Select Year:</label>
                    <select className="form-control" id="yearSelect" value={selectedYear} onChange={handleYearChange}>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </form>
                  <CarSalesChart data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSalesDashboard;

