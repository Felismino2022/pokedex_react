import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import CardPokemon from '../components/CardPokemon'
import { PokemonContext } from '../context/PokemonContext'

const Search = () => {

  const location = useLocation()
 
  const {globalPokemons} = useContext(PokemonContext)
  const filterPokemon = globalPokemons.filter(pokemon => pokemon.name.includes(location.state.toLowerCase()))
  return (
    <div className='container'>
      <p className='p-search'>
        Foram encontrados <span>{filterPokemon.length}</span> {' '}
        resultados:
      </p>
      <div className='card-list-pokemon container'>
          {filterPokemon.map(pokemon =>(
            <CardPokemon pokemon={pokemon} key={pokemon.id} />
          ))}
      </div>
    </div>
  )
}

export default Search
