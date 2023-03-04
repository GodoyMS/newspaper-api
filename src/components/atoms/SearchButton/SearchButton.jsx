import { Button } from '@mui/material'
const SearchButton = ({search}) => {
  return (
    <Button onClick={search} color="primary" variant='contained' sx={{margin:'auto auto'}}>Search</Button>
  )
}

export default SearchButton