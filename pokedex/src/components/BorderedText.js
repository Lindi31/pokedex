import React from 'react';

const BorderedText = ({ text }) => {
  const style = {
    border: '0.4mm solid black',
    borderRadius: '100px',
    backgroundColor: '#f2f2f2', // leicht grauer Hintergrund
    padding: '3px',
    maxWidth: '300px', // maximale Breite des Containers
    margin: 'auto',
    textAlign: 'center'
  };

  return (
    <div style={style}>
      {text}
    </div>
  );
};

export default BorderedText;
