import React from 'react'
import DateInput from "../../atoms/DateInput/DateInput"
import SearchInput from "../../atoms/SearchInput/SearchInput"
import SearchButton from '../../atoms/SearchButton/SearchButton'
import { Box } from '@mui/material'

const SearchBar = ({dateInput,setDateInput,searchInput,setSearchInput,search}) => {
  return (
    <Box sx={{display:'flex',gap:2,justifyContent:'center',flexWrap:'wrap',margin:'2rem 0rem'}}>
    <DateInput dateInput={dateInput} setDateInput={setDateInput} />
        <Box sx={{display:'flex',gap:2}}>
            <SearchInput searchInput={searchInput} setSearchInput={setSearchInput}/>
            <Box><SearchButton  search={search}/></Box>
        </Box>
    </Box>
  )
}

export default SearchBar