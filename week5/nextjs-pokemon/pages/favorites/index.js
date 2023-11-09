import { useCallback, useEffect, useMemo, useState } from 'react';
import { fetchCharacters } from '../api';
import { Stack, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router'


const Favorites = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    getCharacters();
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);
  const getCharacters = async () => {
    const characters = await fetchCharacters();
    setCharacters(characters);
  };

  const favoriteCharacters = characters.filter((character) =>
    favorites.includes(character.id)
  );
  const router = useRouter()

  const handleDetailClick = (id) => {
    router.push(`/pokemon/${id}`)
  }
  const handleFavoriteToggle = useCallback(
    (id) => {
      const newFavorites = favorites.includes(id)
        ? favorites.filter((favoriteId) => favoriteId !== id)
        : [...favorites, id];

      setFavorites(newFavorites);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    },
    [favorites]
  );



  const isFavorite = (id) => favorites.includes(id);

  const favoriteCount = useMemo(() => {
    return characters.filter((character) => favorites.includes(character.id))
      .length;
  }, [favorites, characters]);

  return (
    <Stack spacing={2}>
        <div>
        <Typography sx={{  textAlign: "center" }}  className="bas"  variant="h1">Your Favorite Characters</Typography>
        </div>
      
      
      <Stack 
        spacing={{ xs: 1, sm: 2 }}
        direction="column"
        useFlexGap
        flexWrap="wrap"
      >
        {favoriteCharacters.map((pokemon,index) => (
             <div   key={index} style={{ display: "flex", justifyContent: "center", alignItems: "center"}} >
             <Button onClick={() => handleDetailClick(pokemon.id)} className='pokeBtn' variant="contained">
               {pokemon.name}
             </Button>
             <Button onClick={() => handleFavoriteToggle(pokemon.id)}>
               <FavoriteIcon color={isFavorite(pokemon.id) ? 'error' : 'disabled'} />
             </Button>
           </div>
           
        ))}
      </Stack>
      <div style={{ color:"white", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Typography fontSize={"20px"} fontWeight={"300"} border={"2px solid red"} borderRadius={"10px"} marginRight={"40px"} padding={"10px"}>favori sayim: {favoriteCount}</Typography>
      </div>
      
    </Stack>
  );
};

export default Favorites;