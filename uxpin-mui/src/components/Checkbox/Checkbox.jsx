import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function CheckboxLabels() {
  return (
    <FormControl component="fieldset">
    <FormLabel component="legend">Label placement</FormLabel>
    <FormGroup aria-label="position" row>
      <FormControlLabel
        value="top"
        control={<Checkbox />}
        label="Top"
        labelPlacement="top"
      />
      <FormControlLabel
        value="start"
        control={<Checkbox />}
        label="Start"
        labelPlacement="start"
      />
      <FormControlLabel
        value="bottom"
        control={<Checkbox />}
        label="Bottom"
        labelPlacement="bottom"
      />
      <FormControlLabel
        value="end"
        control={<Checkbox />}
        label="End"
        labelPlacement="end"
      />
    </FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
    <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
  </FormControl>

  );
}