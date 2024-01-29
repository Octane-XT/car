import React, { useState, useEffect } from 'react';
import MarqueService from '../../../services/MarqueService';
import CategorieService from '../../../services/CategorieService';
import CarburantService from '../../../services/CarburantService';
import VitesseService from '../../../services/VitesseService';
import ClimatisationService from '../../../services/ClimatisationService';
import DataService from '../../../services/ModeleService';

const ModeleForm = (props) => {
  const { marques, categories, carburants, vitesse, climatisation } = props;
  console.log('Marques:', JSON.stringify(marques));
  console.log('Categories:', JSON.stringify(categories));
  console.log('Carburants:', JSON.stringify(carburants));
  console.log('Vitesse:', JSON.stringify(vitesse));
  console.log('Climatisations:', JSON.stringify(climatisation));
  const [idmodel, setIdmodel] = useState(props.rowdata ? props.rowdata.idmodel || '' : '');
  const [nommodel, setNommodel] = useState(props.rowdata ? props.rowdata.nommodel || '' : '');
  const [idmarque, setIdmarque] = useState(props.rowdata ? props.rowdata.idmarque || '' : '');
  const [idcategorie, setIdcategorie] = useState(props.rowdata ? props.rowdata.idcategorie || '' : '');
  const [idcarburant, setIdcarburant] = useState(props.rowdata ? props.rowdata.idcarburant || '' : '');
  const [idvitesse, setIdvitesse] = useState(props.rowdata ? props.rowdata.idvitesse || '' : '');
  const [idclimatisation, setIdclimatisation] = useState(props.rowdata ? props.rowdata.idclimatisation || '' : '');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
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
        idmodel: idmodel,
        nommodel: nommodel,
        categorie: { 
          idcategorie: idcategorie,
        },
        marque:{ 
          idmarque: idmarque ,
        },
        vitesse:{
          idvitesse: idvitesse,
        },
        carburant:{
          idcarburant: idcarburant,
        },
        climatisation:{
          idclimatisation: idclimatisation,
        },
      };
      handleUpdateData(formData);
      console.log('Update API call:', JSON.stringify(formData));
    } else {
      // Create operation
      const formData = {
        nommodel: nommodel,
        categorie: { 
          idcategorie: idcategorie,
        },
        marque:{ 
          idmarque: idmarque ,
        },
        vitesse:{
          idvitesse: idvitesse,
        },
        carburant:{
          idcarburant: idcarburant,
        },
        climatisation:{
          idclimatisation: idclimatisation,
        },
      };
      handleCreateData(formData);
      console.log('Create API call:', JSON.stringify(formData));
    }

    // Additional logic if needed

    if (props.onModalClose) {
      props.onModalClose();
    }
  };

  return (
    <div>
      <form className="forms-sample" onSubmit={handleSubmit}>
      <div className="mb-3">
          <label className="form-label">Nom modele</label>
          <input
            type="text"
            className="form-control"
            name="nommodel"
            value={nommodel}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Marque</label>
          <select
            className="form-control"
            name="idmarque"
            value={idmarque}
            onChange={handleInputChange}
          >
            <option value="">Select Marque</option>
            {marques.map((marque) => (
              <option key={marque.idmarque} value={marque.idmarque}>
                {marque.nommarque}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Categorie</label>
          <select
            className="form-control"
            name="idcategorie"
            value={idcategorie}
            onChange={handleInputChange}
          >
            <option value="">Select Categorie</option>
            {categories.map((categorie) => (
              <option key={categorie.idcategorie} value={categorie.idcategorie}>
                {categorie.nomcategorie}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Carburant</label>
          <select
            className="form-control"
            name="idcarburant"
            value={idcarburant}
            onChange={handleInputChange}
          >
            <option value="">Select Carburant</option>
            {carburants.map((carburant) => (
              <option key={carburant.idcarburant} value={carburant.idcarburant}>
                {carburant.nomcarburant}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Vitesse</label>
          <select
            className="form-control"
            name="idvitesse"
            value={idvitesse}
            onChange={handleInputChange}
          >
            <option value="">Select Vitesse</option>
            {vitesse.map((v) => (
              <option key={v.idvitesse} value={v.idvitesse}>
                {v.nomvitesse}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Climatisation</label>
          <select
            className="form-control"
            name="idclimatisation"
            value={idclimatisation}
            onChange={handleInputChange}
          >
            <option value="">Select Climatisation</option>
            {climatisation.map((c) => (
              <option key={c.idclimatisation} value={c.idclimatisation}>
                {c.nomclimatisation}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary me-2">
          Valider
        </button>
      </form>
    </div>
  );
};

export default ModeleForm;
