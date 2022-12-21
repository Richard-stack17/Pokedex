import React, { useEffect,useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const PokeCard = ({url}) => {

    const [pokemon, setPokemon] = useState()

    useEffect(() =>{
        axios.get(url)
        .then(res=>setPokemon(res.data))
        .catch(err => console.log(err))
    },[])
    const navigate = useNavigate()
    const handleClick = ( ) => {
        navigate(`/pokedex/${pokemon.id}`)
    }


  return (
    <article className='pokecard' onClick={handleClick}>
        <header className={`pokecard__header ${pokemon?.types[0].type.name}`}>
            <img className='pokecard__img' src={pokemon?.sprites.other['official-artwork'].front_default} alt=''/>
        </header>
        <section className='pokecard__sup'>
            <h3 className='pokecard__name'>{pokemon?.name}</h3>
            <div className='pokecard__type'>
                
                        <span>{pokemon?.types[0].type.name}</span>
                        <span className='pokeType'>/{pokemon?.types[1]?.type.name}</span>
                    
                    
                
            </div>
        </section>
        <footer className='pokecard__footer'>
            <ul className='pokecard__stats'>
            {
                    
                    <li key={pokemon?.stats[0].stat.url} className='pokecard__list'>
                        <label className='pokecard__label'>{pokemon?.stats[0].stat.name} </label>
                        <span className='pokecard__span'>{pokemon?.stats[0].base_stat} </span>
                        <label className='pokecard__label'>{pokemon?.stats[1].stat.name} </label>
                        <span className='pokecard__span'>{pokemon?.stats[1].base_stat}</span>
                        <label className='pokecard__label'>{pokemon?.stats[2].stat.name} </label>
                        <span className='pokecard__span'>{pokemon?.stats[2].base_stat}</span>
                        <label className='pokecard__label'>{pokemon?.stats[5].stat.name} </label>
                        <span className='pokecard__span'>{pokemon?.stats[5].base_stat}</span>
                        
                    </li>
                
            }
            </ul>
        </footer>
    </article>
  )
}

export default PokeCard