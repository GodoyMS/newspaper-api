import React from 'react'
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import todayDate from '../../../utils/formattedDate';
const DateInput = ({dateInput,setDateInput}) => {


  return (
    <LocalizationProvider  dateAdapter={AdapterDayjs }>
        <DatePicker
           
            label="News Date"
            value={dateInput}
            onChange={(newValue) => {
              const dateSelected=todayDate(newValue.$d)
              setDateInput(dateSelected);
            }}
            renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider>
      
  )
}

export default DateInput