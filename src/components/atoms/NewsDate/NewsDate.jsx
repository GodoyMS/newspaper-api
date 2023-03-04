import { Typography } from "@mui/material"
const NewsDate = ({date}) => {
  return (
    <Typography sx={{fontSize:10,textAlign:'end',width:'100%'}} component="span" variant="span" color="GrayText"  >Published at: {date.slice(0,10)}</Typography>

  )
}

export default NewsDate