
const JanteService = {
    getData: async () => {
        try {
            const response = await fetch('https://carselling-production.up.railway.app/api/jantecontroller/jantes', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
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
            const response = await fetch('https://carselling-production.up.railway.app/api/jantecontroller/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any other headers as needed
                },
                body: JSON.stringify(newData),
            });

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
            const response = await fetch(`https://carselling-production.up.railway.app/api/jantecontroller/update`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any other headers as needed
                },
                body: JSON.stringify(updatedData),
            });

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
            const response = await fetch(`https://carselling-production.up.railway.app/api/jantecontroller/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any other headers as needed
                },
            });

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

export default JanteService;
