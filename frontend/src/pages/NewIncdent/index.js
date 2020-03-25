import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import './style.css';

export default function NewIncident() {
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

        <form>
          <input placeholder="Titulo do caso" />
          <textarea placeholder="Descrição" />
          <input placeholder="Valor em reais" /> 

          <button className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}