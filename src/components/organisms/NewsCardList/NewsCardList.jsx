import React from 'react'
import NewsCard from '../../molecules/NewsCard/NewsCard'
import { Grid } from '@mui/material'

const NewsCardList = ({allCurrentNews}) => {

   return( <Grid  container spacing={2}>
     { allCurrentNews.map((e)=>
            
        
        <NewsCard key={e.title}  singleNewsInformation={e} /> )}

     </Grid>)
  

}

export default NewsCardList