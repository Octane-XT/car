import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const AnnonceTable = ({ annonces, onValider, onRefuser }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [actionType, setActionType] = useState(null);

    const openModal = (index, type) => {
        setSelectedIndex(index);
        setActionType(type);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedIndex(null);
        setActionType(null);
        setShowModal(false);
    };

    const handleActionClick = () => {
        if (actionType === 'valider') {
            console.log("valider",selectedIndex);
            onValider(selectedIndex);
        } else if (actionType === 'refuser') {
            console.log("refuser",selectedIndex);
            onRefuser(selectedIndex);
        }
        closeModal();
    };

    return (
        <div className="container mt-4">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>Modele</th>
                        <th>Marque</th>
                        <th>Kilometrage</th>
                        <th>Moteur</th>
                        <th>Prix</th>
                        <th>Etat</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {annonces.map((annonce, index) => (
                        <tr key={index}>
                            <td>{annonce.modele.nommodel}</td>
                            <td>{annonce.modele.marque.nommarque}</td>
                            <td>{annonce.kilometrage}</td>
                            <td>{annonce.moteur.nom}</td>
                            <td>{annonce.prix}</td>
                            <td>{annonce.etat}</td>
                            <td>{annonce.date}</td>
                            <td>
                                <button
                                    className="btn btn-success mr-2"
                                    onClick={() => openModal(annonce._id.timestamp, 'valider')}
                                >
                                    Valider
                                </button>
                                <button
                                    style={{ marginLeft: "15px" }}
                                    className="btn btn-danger"
                                    onClick={() => openModal(annonce._id.timestamp, 'refuser')}
                                >
                                    Refuser
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal for confirmation */}
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to {actionType === 'valider' ? 'Valider' : 'Refuser'}?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={actionType === 'valider' ? 'success' : 'danger'} onClick={handleActionClick}>
                        {actionType === 'valider' ? 'Valider' : 'Refuser'}
                    </Button>
                    <Button variant="secondary" onClick={closeModal}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AnnonceTable;
