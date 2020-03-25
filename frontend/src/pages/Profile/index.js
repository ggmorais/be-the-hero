import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './style.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {

  const history = useHistory();

  const authData = localStorage.getItem('bethehero/auth');

  const handleLogout = (e) => {
    localStorage.removeItem('bethehero/auth');
    history.push('/');
  }

  useEffect(() => {
    if (!authData) {
      history.push('/');
    }
  }, []);

  const Incident = (props) => (
    <li>
      <strong>CASO:</strong>
      <p>{props.name}</p>

      <strong>DESCRIÇÃO:</strong>
      <p>{props.description}</p>

      <strong>VALOR:</strong>
      <p>{props.price}</p>

      <button>
        <FiTrash2 size={20} color="#a8a8b3" />
      </button>
    </li>
  )

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, APAD</span>

        <Link className="button" to="/incidents/new">Cadastrar novo Caso</Link>
        
        <button onClick={handleLogout}>
          <FiPower size={18} color="#e02041" />
        </button>

      </header>

      <h1>Casos cadastrados</h1>
      <ul>
        <Incident />
      </ul>
    </div>
  );
}