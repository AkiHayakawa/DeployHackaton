import React, { useContext } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { gameContext } from '../gameContext';

export default function ControlledRadioButtonsGroup() {
    const { fetchByParams } = useContext(gameContext);
  
  return ( 
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Categories</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        defaultValue="games"
        onChange={e => fetchByParams('type', e.target.value)}
      >
        <FormControlLabel value="games" control={<Radio />} label="games" />
        <FormControlLabel value="adventure" control={<Radio />} label="adventure" />
        <FormControlLabel value="horror" control={<Radio />} label="horror" />
        <FormControlLabel value="shooter" control={<Radio />} label="shooter" />
        <FormControlLabel value="strategy" control={<Radio />} label="strategy" />

      </RadioGroup>
    </FormControl>
  );
}
