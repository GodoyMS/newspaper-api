import { Typography } from "@mui/material"
const NewsAuthor = ({author}) => {
  return (
    <Typography sx={{fontSize:10}} component="span" variant="subtitle1" color="GrayText" >{author}</Typography> 

  )
}

export default NewsAuthor