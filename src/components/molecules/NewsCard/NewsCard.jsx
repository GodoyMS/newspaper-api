import React from 'react'
import { Card, Grid, Button } from '@mui/material'
import NewsAuthor from '../../atoms/NewsAuthor/NewsAuthor'
import NewsTitle from '../../atoms/NewsTitle/NewsTitle'
import NewsContent from '../../atoms/NewsContent/NewsContent'
import NewsDate from '../../atoms/NewsDate/NewsDate'
import NewsImage from '../../atoms/NewsImage/NewsImage'
import NewsSource from '../../atoms/NewsSource/NewsSource'
const NewsCard = ({singleNewsInformation}) => {
  return (
    <Grid  item  xs={12} md={6} lg={4}  >
        <Card   style={{ maxWidth: 345,background:'white',margin:'auto',borderRadius:'20px' }}>
            
            <Grid sx={{px:2,py:2}} container spacing={2}>
                <Grid item xs={12}>
                    <NewsSource source={singleNewsInformation.source.name}/>
                </Grid>
                <Grid item xs={4}>
                    <NewsImage image={singleNewsInformation.urlToImage}/>
                </Grid>
                <Grid item xs={8}>
                    <NewsTitle title={singleNewsInformation.title}/>                
                    { !!singleNewsInformation.author && (<NewsAuthor author={singleNewsInformation.author}/>)}
                </Grid>

                <Grid item xs={12}>
                    <NewsContent description={singleNewsInformation.description}/>
    
                </Grid>
                <Grid item xs={12}>
                    <NewsDate date={singleNewsInformation.publishedAt}/>
    
                </Grid>
                <Grid item xs={6} >

                </Grid>
                
                <Grid item xs={6} sx={{display:'flex',justifyContent:'end'}} >
                    <Button  target="_blank"href={singleNewsInformation.url} sx={{borderRadius:'10px',fontSize:10}} variant='contained'>Read More</Button>

                </Grid>
                

            </Grid>

        </Card>
    </Grid>
  )
}

export default NewsCard