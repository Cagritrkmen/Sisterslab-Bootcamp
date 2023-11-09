import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { fetchCharacter } from '../api'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, dividerClasses } from '@mui/material';



function PokemonItem() {
    const [pokemon, setPokemon] = useState(null)
    const router = useRouter();
    const { id } = router.query;
   

    useEffect(() => {
        const getPokemon = async () => {
            if (id) {
                try {
                    const pokemon = await fetchCharacter(id)
                    setPokemon(pokemon)
                } catch (error) {
                    console.error("Pokemon detayları getirilemedi.", error)
                }
            }
    
        }
        getPokemon()
    }, [id])


    const handleHomepageClick = () => {
        router.push(`/`)
    }
    if (!pokemon) {
        return <div> Loading... </div>
    }

    return (
        <Box display="flex" justifyContent="center" >
            <Card sx={{ width: 345, textAlign: "center", alignItems: "center" }}>
            <CardMedia
                        height={200}
                        width={120}
                        component="img"
                        image={pokemon.sprites["front_default"]}
                        alt={pokemon.name}
                        
                    />
                <CardActionArea>
                    
                    <CardContent sx={{ textAlign: "center" }}>
                        <Typography  variant="h4" component="div" sx={{ color: "rgb(69, 73, 112)" }} >
                            {pokemon.name.toUpperCase()}
                        </Typography>
                        <Typography variant="h5" color="text.primary">
                            Types
                        </Typography>
                        <Typography variant="h3" color="text.primary">
                            ⬇
                        </Typography>
                        <Typography  sx={{ color: "rgb(69, 73, 112)" }}>
                        {pokemon.stats.map((statObject, index) => {
                            const statName = statObject.stat.name;
                            const statValue = statObject.base_stat;

                            return (

                                <p key={index}  >
                                    {statName.toUpperCase()}: {statValue}
                                </p>

                            );
                        })}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{ justifyContent: "center" }}>
                    <Button onClick={() => handleHomepageClick()} size="small" color="primary">
                        Turn Back
                    </Button>
                </CardActions>
            </Card>
        </Box>

    )
}

export default PokemonItem