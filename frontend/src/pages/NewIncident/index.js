import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import './style.css';

export default function NewIncident() {

  const [incident, setIncident] = useState({});

  const history = useHistory();

  const { id } = JSON.parse(localStorage.getItem('bethehero/auth'));

  const handleChanges = (e) => {
    const { name, value } = e.target;

    setIncident({
      ...incident,
      [name]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post('/incidents', incident, {
        headers: {
          Authorization: id
        }
      });

      alert('Caso adicionado com sucesso!');

      setIncident({});

      history.push('/profile');
    } catch(err) {
      alert('Desculpe, ocorreu um erro, tente novamente mais tarde.');
    }
  }

  return (
    <div className="newIncident-container">
      <div className="content">
        <section>
          <img src={logoImg} />

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>          

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} background="#e02041" />
            Voltar para home
          </Link>

        </section>

        <form onSubmit={handleSubmit}>
          <input type="text" name="title" value={incident.title || ''} onChange={handleChanges} placeholder="Titulo do caso" />
          <textarea name="description" value={incident.description || ''} onChange={handleChanges} placeholder="Descrição" />
          <input type="text" name="value" value={incident.value || ''} onChange={handleChanges} placeholder="Valor em reais" /> 

          <button className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}