import React, { useState } from 'react';
import DataService from '../../../services/MoteurService';
const MoteurForm = (props) => {
  const [idmoteur] = useState(props.rowdata ? props.rowdata.idmoteur || '' : '');
  const [nom, setNom] = useState(props.rowdata ? props.rowdata.nom || '' : '');
  const [capacite, setCapacite] = useState(props.rowdata ? props.rowdata.capacite || '' : '');


  const handleInputChange = (e) => {
    setNom(e.target.value);
  };

  const handleCapaciteChange = (e) => {
    setCapacite(e.target.value);
  };

  const handleCreateData = async (newData) => {
    try {
      await DataService.postData(newData);
    } catch (error) {
      console.error('Failed to add data:', error);
      // Handle error if necessary
    }
  };

  const handleUpdateData = async (id, updatedData) => {
    try {
      await DataService.updateData(id, updatedData);
    } catch (error) {
      console.error('Failed to update data:', error);
      // Handle error if necessary
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (props.rowdata && Object.keys(props.rowdata).length > 0) {
      // Update operation
      const formData = {
        idmoteur: idmoteur,
        nom: nom,
        capacite: capacite,
        etat:1,
      };
      handleUpdateData(formData);
      console.log('Update API call:', JSON.stringify(formData));
    } else {
      // Create operation
      const formData = {
        nom: nom,
        capacite: capacite,
      };
      handleCreateData(formData);
      console.log('Create API call:', JSON.stringify(formData));
    }
    if (props.onModalClose) {
      props.onModalClose();
    }
  };

  return (
    <div>
      <form className="forms-sample" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nom moteur</label>
          <input
            type="text"
            className="form-control"
            name="moteurName"
            value={nom}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Capacite</label>
          <input
            type="number"
            className="form-control"
            name="capacite"
            value={capacite}
            onChange={handleCapaciteChange}
          />
        </div>
        <button type="submit" className="btn btn-primary me-2">
          Valider
        </button>
      </form>
    </div>
  );
};

export default MoteurForm;
