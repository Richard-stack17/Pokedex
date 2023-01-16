import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokeCard from '../components/Pokedex/PokeCard'
import { useNavigate } from 'react-router-dom'
import Pagination from '../components/Pokedex/Pagination'
import NoExist from '../components/NoExist'
const Pokedex = () => {
    const {trainer} = useSelector(state =>state)
    const [pokemons, setPokemons] = useState()
    const [types, setTypes] = useState()
    const [typeSelected, setTypeSelected] = useState('All pokemons')//
    const navigate=useNavigate()
    const [inputValue, setInputValue] = useState("")

    //logica programacion
    const [page, setPage] = useState(1)
    const [pokePerPage, setpokePerPage] = useState(8)
    const [probanding, setProbanding] = useState(false)
    const [help, setHelp] = useState()
    const initalPoke=(page-1)*pokePerPage 
    const finalPoke=page * pokePerPage
    const maxPage = help && Math.ceil(help.length/pokePerPage)
    useEffect(() => {
        if(typeSelected!=="All pokemons"){
            //hacer la petición de los pokemones por tipo
            axios.get(typeSelected)
                .then(res => setHelp(res.data.pokemon.map(e=>e.pokemon)))
                .catch(err => console.log(err))
        }
        else{
            //hacer la petición de todos los pokemons
            const URL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=120'
            axios.get(URL)
            .then(res => {
                setPokemons(res.data.results)
                setHelp(res.data.results)
            })
            .catch(err => console.log(err))
          

        }
    }, [typeSelected])
    useEffect(()=>{
        const URL = 'https://pokeapi.co/api/v2/type'
        axios.get(URL)
        .then(res => setTypes(res.data.results))
        .catch(err => console.log(err))
    },[])

    const handleSubmit = e => {
        e.preventDefault()
        const input = e.target.search.value.trim().toLowerCase();
        navigate(`/pokedex/${input}`)
        console.log(input)    
    }
    const handleChange = e =>{
        setTypeSelected(e.target.value)
        setPage(1)
    }
    const handleChange2= e =>{
        const inputValue = e.target.value.toLowerCase().trim()
        const filter = pokemons?.filter(prod => prod.name.toLowerCase().includes(inputValue));
        setHelp(filter)
        setInputValue(e.target.value)
    }
    return (
    <div className='pokedex'>
        
        <h2 className='pokedex__title'>¡Welcome <span className='name'>{trainer}</span>! , here you can find your favorite pokemon. </h2>
        <form className='pokedex__form' onSubmit={handleSubmit}>
            <input placeholder='Only numbers(1-905)' className='pokedex__input' onChange={handleChange2} id='search'type='text' value={inputValue}/>
            <button className='pokedex__button'>Search</button>
        </form>
        <select className='pokedex__select' onChange={handleChange}>
            <option className='pokedex__option' value='All pokemons'>All pokemons</option>
            {
                types?.map(type=>(
                    <option className='pokedex__option' key={type.url} value={type.url}>
                        {type.name}
                    </option>
                ))
            }

        </select>
        <Pagination page={page} maxPage={maxPage} setPage={setPage}/>
        <div className='poke-container'>
            { 
                help?.length!=0?
                help?.slice(initalPoke,finalPoke).map(poke => (
                    <PokeCard 
                    key={poke.url} 
                    url={poke.url}
                    />
                ))
            : <NoExist/>
            }
            
        </div>
        <Pagination page={page} maxPage={maxPage} setPage={setPage}/>
    </div>
  )
}

export default Pokedex