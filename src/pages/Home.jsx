import React from 'react'
import { setTrainerGlobal } from '../store/slices/trainer.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setTrainerGlobal(e.target.name.value.trim()))
        e.target.name.value=''
        navigate('/pokedex')
        
    }

  return (
    <div className='home'>
        <img className='home__title' src='/Home/pokedex.png' alt=''/> 
        <div className='home__flex'>
        <div className='home__initial'>
        <h1 className='home__greeting'>Hello Trainer 😄!</h1>
        <p className='home__message'>Gimme your name to start</p>
        <form className='home__form' onSubmit={handleSubmit}>
            <input  className='home__input' id='name' type='text'/>
            <button className='home__button' >Start</button>
        </form>
        </div>
        <div className='home__doctor__container'>
        <img className='home__doctor' src='https://images.wikidexcdn.net/mwuploads/wikidex/4/43/latest/20130712191504/Profesor_Cipr%C3%A9s.png'/>
        </div>
        </div>
    </div>
  )
}

export default Home