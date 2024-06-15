import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown({state, setState, label, options, optionVals, required, disabled}) {

  return (
    <FormControl fullWidth variant="filled" required={required} disabled={disabled}>
      <InputLabel id="label">{label}</InputLabel>
      <Select
        labelId="label"
        id="label"
        value={state}
        label={label}
        onChange={(event) => {setState(event.target.value)}}
      >
        {options.map((option, i) => {
          return (
            <MenuItem key={option} value={optionVals[i]}>{option}</MenuItem>
          )
        })}
      </Select>
    </FormControl>
  );
}