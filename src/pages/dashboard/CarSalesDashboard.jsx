import React, { useState, useEffect } from 'react';
import CarSalesChart from '../../components/dashboard/CarSalesChart';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DataService from '../../services/StatistiqueService'; 

const CarSalesDashboard = () => {
  const [selectedYear, setSelectedYear] = useState('2022');
  const years = ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []); // Fetch data on component mount

  const fetchData = async () => {
    try {
      const fetchedData = await DataService.getvendu(selectedYear);
      setData(fetchedData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
      // Handle error if necessary
    }
  };

  // Example data for each year
  const salesData = {
    '2021': {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      sales: [15, 20, 30, 25, 18, 35, 40, 38, 28, 22, 15, 10],
    },
    '2022': {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      sales: [12, 18, 25, 28, 22, 38, 45, 40, 30, 28, 20, 15],
    },
    '2023': {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      sales: [18, 25, 35, 40, 30, 50, 55, 50, 40, 35, 28, 20],
    },
  };

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
