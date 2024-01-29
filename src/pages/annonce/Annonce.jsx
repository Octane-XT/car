import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import AnnonceTable from '../../components/table/AnnonceTable';
import DataService from '../../services/AnnonceService'; 

const CarSalesListPage = () => {
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

    const handleValider = async (index) => {
        // Handle validation logic here
        try {
            await DataService.validateData(index);
        } catch (error) {
            console.error('Failed :', error);
            // Handle error if necessary
        }
        console.log(`Annonce at index ${index} validated`);
    };

    const handleRefuser = (index) => {
        // Handle refusal logic here
        console.log(`Annonce at index ${index} refused`);
    };
    return (
        <div className="main-wrapper">
            <Sidebar />
            <div className="page-wrapper">
                <Navbar />
                <div className="page-content">
                    <AnnonceTable annonces={data} onValider={handleValider} onRefuser={handleRefuser} />
                </div>
            </div>
        </div>
    );
};

export default CarSalesListPage;
