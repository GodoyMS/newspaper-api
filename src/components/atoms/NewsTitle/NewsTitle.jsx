import { Typography } from '@mui/material'
const NewsTitle = ({title}) => {
  return (
    <Typography sx={{fontWeight:'bold',fontSize:12}} component="h2" variant="subtitle1" >{title}</Typography> 
    )
}

export default NewsTitle