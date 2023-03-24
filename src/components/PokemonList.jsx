import React, { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import CardPokemon from './CardPokemon'
import Loader from './Loader'

const PokemonList = () => {

    const {allPokemons} = useContext(PokemonContext)


  return (
  
   <>
   

    <div className='card-list-pokemon container'>
       {allPokemons.map(pokemon =>
        <CardPokemon pokemon={pokemon} key={pokemon.id} />
        )}
    </div>

   </>
   
  )
}

export default PokemonList
