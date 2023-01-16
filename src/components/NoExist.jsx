import React from 'react'

const NoExist = () => {
  return (
    <div className='error'>
        <h1 className='error__message'>Sorry :( . . . No pokemon found with that name, please try again with another name.</h1>
        <img className='error__img' src='https://www.pngplay.com/wp-content/uploads/10/Cubone-Pokemon-PNG-Pic-Background.png' alt='error image'/>
    </div>
  )
}

export default NoExist