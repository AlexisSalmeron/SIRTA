import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import { Grid, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

export default function CardRoute() {
  return (
    <Card sx={{ maxWidth: 345 }} elevation={8}>
      <CardMedia
        sx={{ height: 200 }}
        image="https://www.pueblosmexico.com.mx/IMG/arton27055.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ display:'flex', justifyContent:'center', fontWeight:'bold'}}>
          Xuchapa - Matamoros
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <IconButton color="primary" aria-label="Cambiar Ruta" component="label" sx={{ display:'flex', justifyContent:'center'}}>
              <SyncAltIcon fontSize='large'/>
            </IconButton> 
          </Grid>
          <Grid item xs={6}>
            <IconButton color="primary" aria-label="Cambiar Ruta" component="label" sx={{ display:'flex', justifyContent:'center'}}>
              <StarIcon fontSize='large' color="warning"/>
            </IconButton>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="body1" color="text.secondary" sx={{fontWeight:'bold'}}>
                Anterior Salida:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
                02:00 p.m
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="body1" color="text.secondary" sx={{fontWeight:'bold'}}>
              Próxima Salida:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
               02:15 p.m
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="body1" color="text.secondary" sx={{fontWeight:'bold'}}>
              Unidad:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              9
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}