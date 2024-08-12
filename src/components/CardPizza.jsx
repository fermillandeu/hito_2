import React from 'react';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Ingredientes: {ingredients.join(', ')}</p>
        <p className="card-text"><strong>Precio: ${price.toLocaleString()}</strong></p>
        <button className="btn btn-primary">Ver más</button>
        <button className="btn btn-success ms-2">Añadir</button>
      </div>
    </div>
  );
}

export default CardPizza;
