
const MoteurService = {
    getData: async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('https://carselling-production-25cb.up.railway.app/api/moteurcontroller/moteurs', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response && response.status === 401) {
                console.log("Token expired. Removing from local storage.");
                localStorage.removeItem("token");
            }
            if (!response.ok) {
                throw new Error(`Failed to fetch data. Status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    },

    postData: async (newData) => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('https://carselling-production-25cb.up.railway.app/api/moteurcontroller/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(newData),
            });
            if (response && response.status === 401) {
                console.log("Token expired. Removing from local storage.");
                localStorage.removeItem("token");
            }
            if (!response.ok) {
                throw new Error(`Failed to add data. Status: ${response.status}`);
            }

            const addedData = await response.json();
            return addedData;
        } catch (error) {
            console.error('Error adding data:', error);
            throw error;
        }
    },

    updateData: async (updatedData) => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`https://carselling-production-25cb.up.railway.app/api/moteurcontroller/update`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(updatedData),
            });
            if (response && response.status === 401) {
                console.log("Token expired. Removing from local storage.");
                localStorage.removeItem("token");
            }
            if (!response.ok) {
                throw new Error(`Failed to update data. Status: ${response.status}`);
            }

            const updatedItem = await response.json();
            return updatedItem;
        } catch (error) {
            console.error('Error updating data:', error);
            throw error;
        }
    },

    deleteData: async (id) => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`https://carselling-production-25cb.up.railway.app/api/moteurcontroller/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });
            if (response && response.status === 401) {
                console.log("Token expired. Removing from local storage.");
                localStorage.removeItem("token");
            }
            if (!response.ok) {
                throw new Error(`Failed to delete data. Status: ${response.status}`);
            }

            return true; // Indicate successful deletion
        } catch (error) {
            console.error('Error deleting data:', error);
            throw error;
        }
    },
};

export default MoteurService;
