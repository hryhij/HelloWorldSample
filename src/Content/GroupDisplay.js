import React from 'react'
import { useState,useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

function GroupDisplay({Igroups}) {
    console.log(Igroups)
  return (
    <Grid container spacing={2}>
      {Igroups.map((groups)=>(
             <Grid item xs={12} sm={6} md={4} lg={3}  key={groups.GroupID}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        src={require('../images/temp.jpg')}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h7" component="div">
                        {groups.GroupName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {groups.GroupNameKor}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton  title='STAN' >
                            <box-icon name='heart' style={{ fill: '#64b5f6' }} ></box-icon>
                        </IconButton>

                        <IconButton  title='NEWS' >
                            <box-icon name='news' type='solid' style={{ fill: '#64b5f6' }}></box-icon>
                        </IconButton>

                        <IconButton  title='CONVO' >
                            <box-icon name='message-dots'  style={{ fill: '#64b5f6' }}></box-icon>
                        </IconButton>
                    </CardActions>
                    
                </Card>
            </Grid>
      ))}
    </Grid>
  )
}

export default GroupDisplay
