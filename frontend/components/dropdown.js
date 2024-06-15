import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export default function Dropdown() {
  const [age, setAge] = useState('')

  return (
    <FormControl fullWidth variant="filled">
      <InputLabel id="label">Age</InputLabel>
      <Select
        labelId="label"
        id="label"
        value={age}
        label="Age"
        onChange={(event) => {setAge(event.target.value)}}
        // style={{backgroundColor: "#000000"}}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}