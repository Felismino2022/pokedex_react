import { useEffect, useState } from "react"
import { useForm } from "../hook/useForm"
import { PokemonContext } from "./PokemonContext"

export const PokemonProvider = ({children}) =>{

    const [allPokemons, setPokemons] = useState([])
    const [globalPokemons, setGlobalPokemons] = useState([])
    const [offset, setOffset] = useState(0);

    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState(false)

    //useForm
    const {valueSearch, onInputChange, onResetForm} = useForm({
        valueSearch:'',
    })

    //Pega 50 pokemons na api
    const getPokemons = async(limit=50) =>{
        const baseUrl = 'https://pokeapi.co/api/v2/';

        const res = await fetch(
            `${baseUrl}pokemon?limit=${limit}&offset=${offset}`
            )

        const data = await res.json()
        
        const promises = data.results.map(async pokemon =>{
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })

        const results = await Promise.all(promises)

        setPokemons(results)
        setLoading(false)

       

    }

    //pega todos os pokemons da api
    const getGlobalPokemons = async() =>{
        const baseUrl = 'https://pokeapi.co/api/v2/';

        const res = await fetch(
            `${baseUrl}pokemon?limit=100000&offset=0`
            )

        const data = await res.json()
        
        const promises = data.results.map(async pokemon =>{
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })

        const results = await Promise.all(promises)

        setGlobalPokemons(results)
        setLoading(false)
    }

    //Pega o pokemon de um determinado id
    const getPokemonByID = async(id) =>{
        const baseUrl = 'https://pokeapi.co/api/v2/';

        const res = await fetch(`${baseUrl}pokemon/${id}`)
        const data = await res.json()
        return data
    }

    useEffect(() =>{
        getPokemons();
    }, [offset])

    useEffect(() =>{
        getGlobalPokemons()
    }, [])

    //btn carregar mais
    const onClickLoadMore = () =>{
        setOffset(offset + 50)
    }

    return(
       <PokemonContext.Provider value={{
        valueSearch,
        onResetForm,
        onInputChange,
        globalPokemons,
        allPokemons,
        getPokemonByID,
        onClickLoadMore,
        loading
       }}>
        {children}
       </PokemonContext.Provider>
    )
}