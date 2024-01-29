// CarburantTable.js

import React, { useState } from 'react';
import MoteurForm from '../forms/moteur/MoteurForm';

const MoteurTable = ({ data, onDelete }) => {
  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [filter, setFilter] = useState('');

  const handleAdd = () => {
    setSelectedRowData(null);
    setShowModal(true);
  };

  const handleEdit = (index) => {
    setSelectedRowData(index);
    setShowModal(true);
  };

  const handleDelete = (index) => {
    setSelectedRowData(index);
    setShowConfirmModal(true);
  };

  const handleDeleteConfirmed = () => {
    // Implement your delete logic here
    console.log('Delete functionality for index:', selectedRowData);
    onDelete(selectedRowData);
    // Close the confirmation modal
    setShowConfirmModal(false);
  };

  const handleDeleteCanceled = () => {
    // Close the confirmation modal
    setShowConfirmModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.nom.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container mt-5">
        <button className="btn btn-success" onClick={handleAdd}>
        + Ajouter
      </button>
      <div className="mb-3 mt-5">
        <input
          type="text"
          className="form-control"
          placeholder="Filtre par nom du moteur"
          value={filter}
          onChange={handleFilterChange}
        />
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom Moteur</th>
            <th>Capacite</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.idmoteur}</td>
              <td>{item.nom}</td>
              <td>{item.capacite}</td>
              <td>
                <button className="btn btn-primary mr-2" onClick={() => handleEdit(item)}>
                  Modifier
                </button>
                <button style={{ marginLeft: 15 }} className="btn btn-danger" onClick={() => handleDelete(item.idmoteur)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for adding/editing data */}
      {showModal && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedRowData ? 'Modification de donnee' : 'Ajout de donnee'}</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <MoteurForm rowdata={selectedRowData} onModalClose={handleCloseModal} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation modal for deleting */}
      {showConfirmModal && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirmation</h5>
                <button type="button" className="btn-close" onClick={handleDeleteCanceled}></button>
              </div>
              <div className="modal-body">
                <p>Êtes-vous sûr de vouloir supprimer cet élément?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleDeleteCanceled}>
                  Annuler
                </button>
                <button type="button" className="btn btn-danger" onClick={handleDeleteConfirmed}>
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoteurTable;
