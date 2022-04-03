import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Winwin from '../images/jaemin.jpg';
import MoreButton from './moreButton'

 
 function DisplayPost({ipost}) {

     //console.log(ipost);
    const cardColor = (postcolor) =>{
        if(postcolor === "1"){
            return "#fce1e4"
        }
        else if(postcolor === "2"){
            return "#fcf4dd"
        }
        else if(postcolor === "3"){
            return "#ddedea"
        }
        else{
            return "#daeaf6"
        }

    }


    

   return (
    <Grid container spacing={2}>
        {ipost.map((posts) => (
            <Grid item xs={12} sm={6} md={4} lg={3}  key={posts.id}>
                <Card>
                    <CardHeader align='left'
                        avatar={
                        // <Avatar  aria-label="recipe" src={Winwin}/>
                         <Avatar src={require('../images/' + posts.postDP)} sx={{ width: 56, height: 56 }}/>
                        }
                        action={
                            <MoreButton/>
                        }
                        title={posts.postTitle}
                        subheader={posts.postSub}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={require('../images/' + posts.postDP)}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary" align='left'>
                            {posts.postDetail}
                        </Typography>
                    </CardContent>
                </Card>              
            </Grid>
        ))}    
         
    </Grid>
   )
 }
 
 export default DisplayPost
 