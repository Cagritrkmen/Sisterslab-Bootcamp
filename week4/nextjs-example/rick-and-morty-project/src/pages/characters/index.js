import { useEffect, useState } from 'react';
import { fetchCharacters } from '../api';
import CardCmp from '../card';
import {
  TextField,
  Stack
} from '@mui/material';
const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState([]);
  const getCharacters = async () => {
    const characters = await fetchCharacters();
    setCharacters(characters)
    setSelectedCharacter(characters);
  };

  useEffect(() => {
    getCharacters();
  }, []);


  const handleCharacterSelect = (e) => {
     setSelectedCharacter(characters.filter((character)=> String(character.name).toLowerCase().includes(e.target.value)))
  };
 
      
  return (
    <Stack spacing={2} sx={{alignItems: "center"}}>
      <TextField
        id="outlined-basic" label="Ara" variant="outlined"
        onChange={handleCharacterSelect}
        sx={{ width: 300, }}
  
        size="small"
      />
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
      >
        {selectedCharacter.map((character) => (
          <CardCmp character = {character}/>
        ))}
      </Stack>
    </Stack>
  );
};

export default Characters;
