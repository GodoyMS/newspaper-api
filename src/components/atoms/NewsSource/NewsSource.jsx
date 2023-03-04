import React from 'react'
import { Typography } from '@mui/material'
const NewsSource = ({source}) => {
  return (
    <Typography sx={{fontSize:10}} component="h3" variant="subtitle1" >{source}</Typography> 
  )
}

export default NewsSource