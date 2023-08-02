import React from 'react';
import '../Clients.css';
import PropTypes from 'prop-types';

function Clients({ prevScrollPos }) {
  return (
    <div
    className={`clients-container ${prevScrollPos > 2570 && `animation`}`}
    id='cadastro'
    >
      <div className="left-container">
      <h1 className="client-title">Cadastro de Clientes</h1>
      <p className="cliente-p">Essas informações serão utilizadas para criação de contratos, peças técnicas, e para o contato com o cliente.</p>
      </div>
      <div className="right-container">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSd5DOzvcZHjwvPV79gAlcFiFiNfpvKDquBPlK55pu0tgNVUiQ/viewform" target="_blank" rel="noopener noreferrer">
        <button
        className='button-client'
        >Clique aqui para se cadastrar!</button>
      </a>
      </div>
    </div>
  );
}
Clients.propTypes = {
  prevScrollPos: PropTypes.number.isRequired
};

export default Clients;