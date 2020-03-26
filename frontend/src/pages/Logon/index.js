import React, { useState, useEffect } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './style.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {

  const [id, setId] = useState('');

  const history = useHistory();

  const userData = JSON.parse(localStorage.getItem('bethehero/auth'));

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post('/sessions', { id });
      
      localStorage.setItem('bethehero/auth', JSON.stringify({ id: id, name: res.data.name }));

      history.push('/profile');
    } catch(err) {
      alert('ID invalido, tente novamente.');
    }
  }

  useEffect(() => {
    if (userData) {
      history.push('/profile');
    }
  }, []);

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input 
            onChange={e => setId(e.target.value)} 
            placeholder="Sua ID"
          />
          
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn 
              size={16}
              background="#e02041"
            />
            Não tenho cadastro
          </Link>
        </form>

      </section>
      <img src={heroesImg} />
    </div>
  );
}