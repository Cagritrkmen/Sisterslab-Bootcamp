import { useRouter } from 'next/router';
import React, { useEffect, useState, useCallback } from 'react';
import Button from '@mui/material/Button';
import { fetchCharacters } from '../api';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Skeleton } from '@mui/material';

function Pokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const router = useRouter();
  useEffect(() => {
    getCharacters();
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const handleFavoriteToggle = useCallback((id) => {
    const newFavorites = favorites.includes(id)
      ? favorites.filter((favoriteId) => favoriteId !== id)
      : [...favorites, id];

    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  }, [favorites]);

  const isFavorite = useCallback((id) => favorites.includes(id), [favorites]);

  const getCharacters = async () => {
    const pokemons = await fetchCharacters();
    setPokemons(pokemons);
  };

  const handleDetailClick = useCallback((id) => {
    router.push(`/pokemon/${id}`);
  }, [router]);
  return (
    <div>
      <h1 className='bas'>POKEMONS</h1>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "30px" }}>
        <Button variant="contained" color="success" onClick={() => router.push("/favorites")}>FAVORİTES</Button>
      </div>
      <div className="grid-container">{pokemons.map((pokemon, index) =>
        <div style={{ display: "flex", gap: "15px" }} key={index} >
          {pokemon ? (<Button onClick={() => handleDetailClick(pokemon.id)} className='pokeBtn' variant="contained">
            {pokemon.name}
          </Button>) : (<Skeleton variant='rounded' width={150} height={40}></Skeleton>)}
          {pokemon ? (<Button onClick={() => handleFavoriteToggle(pokemon.id)}>
            <FavoriteIcon color={isFavorite(pokemon.id) ? 'error' : 'disabled'} />
          </Button>) : (<Skeleton variant='circular' width={40} height={40}></Skeleton>)}
        </div>


      )}</div>

    </div>


  )
}

export default Pokemon