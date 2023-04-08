import React from 'react';

function Clients() {
  return (
    <div className="clients">
      <div>
      <h1 className="client-title">Cadastro de Clientes</h1>
      <p className="cliente-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id vehicula est.</p>
      </div>
      <div>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSd5DOzvcZHjwvPV79gAlcFiFiNfpvKDquBPlK55pu0tgNVUiQ/viewform" target="_blank" rel="noopener noreferrer">
        <button className="button-client">Clique aqui para se cadastrar!</button>
      </a>
      </div>
    </div>
  );
}

export default Clients;