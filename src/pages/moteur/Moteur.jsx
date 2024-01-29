

import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import MoteurTable from '../../components/table/MoteurTable';
import DataService from '../../services/MoteurService'; 

const MoteurPage = () => {
  const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []); // Fetch data on component mount

    const fetchData = async () => {
        try {
            const fetchedData = await DataService.getData();
            setData(fetchedData);
        } catch (error) {
            console.error('Failed to fetch data:', error);
            // Handle error if necessary
        }
    };

    const handleDelete = async (id) => {
      try {
          await DataService.deleteData(id);
          setData(prevData => prevData.filter(item => item.id !== id));
      } catch (error) {
          console.error('Failed to delete data:', error);
          // Handle error if necessary
      }
  };

  return (
    <div className="main-wrapper">
      <Sidebar />
      <div className="page-wrapper">
        <Navbar />
        <div className="page-content">
          <MoteurTable data={data} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default MoteurPage;
