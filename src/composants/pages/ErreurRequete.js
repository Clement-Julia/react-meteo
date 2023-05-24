import React from 'react';

const ErreurRequete = ({ error }) => {
  return (
    <div>
      <h2>Erreur de requête</h2>
      <p>{error.message}</p> {/* Affiche le message d'erreur */}
    </div>
  );
};

export default ErreurRequete;
