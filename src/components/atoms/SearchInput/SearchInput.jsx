import * as React from 'react';
import Input from '@mui/joy/Input';

import {Button} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const SearchInput = ({searchInput,setSearchInput}) => {
  return (
    <>
    
    <Input
            value={searchInput}
            onChange={(newValue) => {
                setSearchInput(newValue.target.value);
                }}    
            endDecorator={<SearchIcon color='primary'  />}
            color='primary'
            placeholder="Write a topic"
            sx={{
            "--Input-radius": "12px",
            "--Input-minHeight": "40px",

            backgroundColor:'white'
            
            }}
     />
     </>
  )
}

export default SearchInput