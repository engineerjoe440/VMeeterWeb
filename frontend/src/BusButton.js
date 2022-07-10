/*******************************************************************************
 * BusButton.js
 * 
 * Bus Selection Button for VoiceMeeter Web.
 ******************************************************************************/

 import * as React from 'react';
 import ToggleButton from '@mui/material/ToggleButton';
 import ArrowRightIcon from '@mui/icons-material/ArrowRight';
 
  
 export default function BusSelection({ busName }) {
    const [selected, setSelected] = React.useState(false);
 
    return (
    <ToggleButton
        value="check"
        size="small"
        selected={selected}
        onChange={() => {
            setSelected(!selected);
        }}
    >
        <ArrowRightIcon/>{busName}
    </ToggleButton>
    );
  }
 