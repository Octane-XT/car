// DataTable.js
import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const DataTable = ({ id, data, onDeleteData, FormComponent }) => {
    const [showModal, setShowModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [selectedData, setSelectedData] = useState({});
    const [formData, setFormData] = useState({});

    const columns = Object.keys(data[0] || {}).filter(key => key !== 'id');

    const idKey = id; 

    const handleShowModal = (action, rowData) => {
        if (action === 'edit') {
            setSelectedData(rowData);
            setFormData(rowData);
        } else {
            setSelectedData({});
            setFormData({});
        }
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setDeleteId(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleDeleteData = (id) => {
        setDeleteId(id);
        setShowModal(true);
    };

    const confirmDelete = () => {
        onDeleteData(deleteId);
        console.log('Delete API call:', deleteId);
        setDeleteId(null);
        setShowModal(false);
    };

    const handleCreateData = () => {
        handleShowModal('create', {});
    };

    return (
        <div >
            <Button variant="success" onClick={handleCreateData} style={{ marginBottom: '15px' }}>
                + Ajouter
            </Button>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        {columns.map(column => (
                            <th key={column}>
                                {column}
                            </th>
                        ))}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(row => (
                        <tr key={row[idKey]}>
                            {columns.map(column => (
                                <td key={column}>{row[column]}</td>
                            ))}
                            <td>
                                <Button variant="info" onClick={() => handleShowModal('edit', row)}>
                                    Modifier
                                </Button>{' '}
                                <Button style={{ marginLeft: "15px" }} variant="danger" onClick={() => handleDeleteData(row[idKey])}>
                                    Supprimer
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{deleteId ? 'Suppression' : (selectedData[idKey] ? 'Modification' : 'Ajout') + ' Donnee'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {deleteId ? (
                        <p>Etes vous sur ?</p>
                    ) : (

                        <FormComponent
                            rowdata={selectedData}
                            onModalClose={handleCloseModal}
                        />

                    )}
                </Modal.Body>
                <Modal.Footer>
                    {deleteId ? (
                        <Button variant="danger" onClick={confirmDelete}>
                            Confirmer
                        </Button>
                    ) : null /* If deleteId is truthy, don't render the "Valider" button */}

                    {/* Other buttons or components in the Modal.Footer if needed */}
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default DataTable;
