import { useRouter } from 'next/router';
import React from 'react';
import pokemons from '../pokemons'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';



function PokemonItem() {
    const router = useRouter();
    const { id } = router.query;
    console.log(id)
    const pokemon = pokemons.find(pokemon => pokemon.id == id)
    console.log(pokemon)
    const handleHomepageClick = (id) =>{
        router.push(`/`)
      }

    return (
        <Box display="flex" justifyContent="center" marginTop={"4%"}>
            <Card sx={{ width: 345, textAlign: "center", alignItems: "center" }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={pokemon.image}
                        alt="green iguana"
                    />
                    <CardContent sx={{ textAlign: "center" }}>
                        <Typography gutterBottom variant="h4" component="div" sx={{ color: "rgb(69, 73, 112)" }} >
                            {pokemon.name.toUpperCase()}
                        </Typography>
                        <Typography variant="h5" color="text.primary">
                            Types
                        </Typography>
                        <Typography variant="h3" color="text.primary">
                        ⬇
                        </Typography>
                        <Typography variant="h6" sx={{ color: "red" }}>
                            {pokemon.type.join("--").toUpperCase()}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{ justifyContent: "center" }}>
                    <Button onClick={()=> handleHomepageClick()} size="small" color="primary">
                        Turn Back
                    </Button>
                </CardActions>
            </Card>
        </Box>

    )
}

export default PokemonItem