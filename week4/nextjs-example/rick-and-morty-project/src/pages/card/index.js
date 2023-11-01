import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
    Typography,
  } from '@mui/material';
  import FavoriteIcon from '@mui/icons-material/Favorite';
  
import React from 'react'

function CardCmp( {character}) {
  return (
    <Card key={character.id} sx={{ width: '150px' }}>
            <CardMedia
              component="img"
              alt="character"
              height="140"
              image={character.image}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {character.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {character.gender} {character.status}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon color="error" />
              </IconButton>
              <Button size="small" variant="text">
                Details
              </Button>
            </CardActions>
          </Card>
  )
}

export default CardCmp