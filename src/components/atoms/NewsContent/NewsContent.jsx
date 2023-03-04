import { Typography } from "@mui/material"
const NewsContent = ({description}) => {
  return (
    <Typography  nowrap="true"  sx={{fontSize:14}}>{description}</Typography>

  )
}

export default NewsContent