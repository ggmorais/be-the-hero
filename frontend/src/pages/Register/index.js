import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './style.css';
import logoImg from '../../assets/logo.svg';

export default function Register() {

  const [fields, setFields] = useState({ /* name: ..., email: ..., password: ..., etc */ });

  const history = useHistory();

  const handleFieldChanges = (e) => {
    const { name, value } = e.target;

    setFields({
      ...fields,
      [name]: value
    });
  }

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post('/ongs', fields);

      alert(`Seu ID de acesso: ${res.data.id}`);

      history.push('/');
    } catch(err) {
      alert('Erro no cadastro, tente novamente.')
    }
    
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} />
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>          

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} background="#e02041" />
            Já tenho cadastro
          </Link>

        </section>

        <form onSubmit={handleRegister}>
          <input onChange={handleFieldChanges} name="name" placeholder="Nome da ONG" />
          <input onChange={handleFieldChanges} name="email" type="email" placeholder="E-mail" />
          <input onChange={handleFieldChanges} name="whatsapp" placeholder="Whasapp" /> 

          <div className="input-group">
            <input onChange={handleFieldChanges} name="city" placeholder="Cidade" />
            <input onChange={handleFieldChanges} name="uf" placeholder="UF" style={{ width: 80 }} />
          </div>

          <button className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}