import React from 'react';

const Pokemon = ( { pokemon } ) => {
  return (
    <>
      <div className="pokemon">
        <div className="pokemon-name">
          <h3>{pokemon.name}</h3>
        </div>
        <div className="pokemon-meta">
          <span>{pokemon.maxHP}</span>
          <span>{pokemon.maxCP}</span>
        </div>
        <div className="pokemon-image">
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
        <div className="pokemon-attacks">
          {pokemon.attacks.special.slice( 0, 3 ).map( attack => (
            <span key={`${attack.name}-${attack.damage} `}>{`${attack.name}: ${attack.damage} `}</span>
          ) )}
        </div>
      </div>
    </>
  )
}

export default Pokemon