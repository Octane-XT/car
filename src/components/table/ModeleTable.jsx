// CarburantTable.js

import React, { useState } from 'react';
import ModeleForm from '../forms/modele/ModeleForm';
/*import MarqueService from '../../services/MarqueService';
import CategorieService from '../../services/CategorieService';
import CarburantService from '../../services/CarburantService';
import VitesseService from '../../services/VitesseService';
import ClimatisationService from '../../services/ClimatisationService';*/


const ModeleTable = ({ data, onDelete }) => {
  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedRowData] = useState(null);
  const [filter, setFilter] = useState('');

  /*const [marque, setMarque] = useState([]);
  const [categorie, setCategorie] = useState([]);
  const [carburant, setCarburant] = useState([]);
  const [vitesse, setVitesse] = useState([]);
  const [climatisation, setClimatisation] = useState([]);

  useEffect(() => {
    const fetchMarques = async () => {
      const data1 = await MarqueService.getData();
      setMarque(data1);
    };

    const fetchCategories = async () => {
      const data2 = await CategorieService.getData();
      setCategorie(data2);
    };

    const fetchCarburants = async () => {
      const data3 = await CarburantService.getData();
      setCarburant(data3);
    };

    const fetchVitesse = async () => {
      const data4 = await VitesseService.getData();
      setVitesse(data4);
    };

    const fetchClimatisations = async () => {
      const data5 = await ClimatisationService.getData();
      setClimatisation(data5);
    };

    fetchMarques();
    fetchCategories();
    fetchCarburants();
    fetchVitesse();
    fetchClimatisations();
  }, []);*/

  /*const handleAdd = () => {
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
  };*/

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
    item.nommodel.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container mt-5">
      {/*<button className="btn btn-success" onClick={handleAdd}>
        + Ajouter
      </button>*/}
      <div className="mb-3 mt-5">
        <input
          type="text"
          className="form-control"
          placeholder="Filtre par nom du model"
          value={filter}
          onChange={handleFilterChange}
        />
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom Model</th>
            <th>Nom Categorie</th>
            <th>Nom Marque</th>
            <th>Nom Climatisation</th>
            <th>Nom Carburant</th>
            <th>Nom Vitesse</th>
            {/*<th>Actions</th>*/}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.idmodel}</td>
              <td>{item.nommodel}</td>
              <td>{item.nomcategorie}</td>
              <td>{item.nommarque}</td>
              <td>{item.nomclimatisation}</td>
              <td>{item.nomcarburant}</td>
              <td>{item.nomvitesse}</td>
              <td>
                {/*<button className="btn btn-primary mr-2" onClick={() => handleEdit(item)}>
                  Modifier
                </button>
                <button style={{ marginLeft: 15 }} className="btn btn-danger" onClick={() => handleDelete(item.idmodel)}>
                  Supprimer
                </button>*/}
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
                <ModeleForm
                  rowdata={selectedRowData}
                  /*marques={marque}
                  categories={categorie}
                  carburants={carburant}
                  vitesse={vitesse}
                  climatisation={climatisation}*/
                  onModalClose={handleCloseModal} 
                />
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

export default ModeleTable;
