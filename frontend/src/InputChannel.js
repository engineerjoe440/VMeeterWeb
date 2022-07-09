/*******************************************************************************
 * InputChannel.js
 * 
 * Single Input Channel for VoiceMeeter Web.
 ******************************************************************************/

 import * as React from 'react';
 import Box from '@mui/material/Box';
 import Paper from '@mui/material/Paper';
 import Stack from '@mui/material/Stack';
 import Slider from '@mui/material/Slider';
 
import Knob from './knob';



function valuetext(value) {
    return `${value}`;
  }
 
export default function InputChannel() {
   return (
     <Box
       sx={{
         display: 'flex',
         flexWrap: 'wrap',
         '& > :not(style)': {
           m: 1,
           width: 128,
           height: '100%',
         },
       }}
     >
       <Paper elevation={2}>
        <Knob
            size={50}
            numTicks={7}
            degrees={260}
            min={1}
            max={100}
            value={30}
        />
        <Stack sx={{ height: 300 }} spacing={1} direction="row">
          <Slider
            aria-label="Line"
            orientation="vertical"
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            defaultValue={30}
          />
        </Stack>
       </Paper>
     </Box>
   );
 }