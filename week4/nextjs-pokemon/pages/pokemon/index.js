import { useRouter } from 'next/router'
import React from 'react'
import pokemons from '../pokemons'

import Button from '@mui/material/Button';



function Pokemon() {
  const handleDetailClick = (id) =>{
    router.push(`/pokemon/${id}`)
  }
  const router = useRouter()
  return (
    <div>
      <h1 className='bas'>POKEMONS</h1>
      <div className="grid-container">{pokemons.map(pokemon =>
        <Button onClick={()=> handleDetailClick(pokemon.id)} className='pokeBtn' variant="contained">{pokemon.name}</Button>
      )}</div>
    </div>


  )
}

export default Pokemon