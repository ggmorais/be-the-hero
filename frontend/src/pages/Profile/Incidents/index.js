import React, { useState, useEffect } from 'react';
import { FiTrash2 } from 'react-icons/fi';

import api from '../../../services/api';

export default function Incident() {

  const [incidents, setIncidents] = useState([]);
  
  const { id } = JSON.parse(localStorage.getItem('bethehero/auth'));

  const deleteIncident = async (incident_id) => {
    try {
      await api.delete('/incidents/' + incident_id, {
        headers: {
          Authorization: id
        }
      });

      setIncidents(incidents.filter(inc => inc.id !== incident_id));

    } catch(err) {
      alert('Erro ao deletar o caso, por favor tente novamente mais tarde.')
    }
  }

  const fetchIncidents = async () => {
    const res = await api.get('/profile/', {
      headers: {
        Authorization: id
      }
    });

    setIncidents(res.data);
  }

  useEffect(() => {
    fetchIncidents();
  }, []);

  return (
    <div className="incident-container">
      <h1>Casos cadastrados</h1>
      <ul>
        {incidents && incidents.map(({id, title, description, value }) => (
          <li key={id}>
            <strong>CASO:</strong>
            <p>{title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{description}</p>

            <strong>VALOR:</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)}</p>

            <button onClick={() => deleteIncident(id)}>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
    
  );
}