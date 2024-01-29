import React, { useState } from 'react';
import DataService from '../../../services/CategorieService';
const CategorieForm = (props) => {
  const [idcategorie] = useState(props.rowdata ? props.rowdata.idcategorie || '' : '');
  const [nomcategorie, setNomcategorie] = useState(props.rowdata ? props.rowdata.nomcategorie || '' : '');

  const handleInputChange = (e) => {
    setNomcategorie(e.target.value);
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
        idcategorie: idcategorie,
        nomcategorie: nomcategorie,
        etat:1,
      };
      handleUpdateData(formData);
      console.log('Update API call:', JSON.stringify(formData));
    } else {
      // Create operation
      const formData = {
        nomcategorie: nomcategorie,
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
          <label className="form-label">Nom categorie</label>
          <input
            type="text"
            className="form-control"
            name="categorieName"
            value={nomcategorie}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary me-2">
          Valider
        </button>
      </form>
    </div>
  );
};

export default CategorieForm;
