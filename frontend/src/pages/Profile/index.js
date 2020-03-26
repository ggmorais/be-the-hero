import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import Incidents from './Incidents';

import './style.css';
import logoImg from '../../assets/logo.svg';

export default function Profile() {

  const history = useHistory();

  const authData = JSON.parse(localStorage.getItem('bethehero/auth'));

  const handleLogout = (e) => {
    localStorage.removeItem('bethehero/auth');
    history.push('/');
  }

  useEffect(() => {
    if (!authData) {
      history.push('/');
    }
  }, []);

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

      <Incidents />  
    </div>
  );
}