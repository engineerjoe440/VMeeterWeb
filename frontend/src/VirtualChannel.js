/*******************************************************************************
 * VirtualInputs.js
 * 
 * Virtual Input Channel for VoiceMeeter Web.
 ******************************************************************************/

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
 
import Knob from './knob';
import { Typography } from '@mui/material';


const VoiceMeeterSlider = styled(Slider)({
  color: '#52af77',
  height: '90%',
  '& .MuiSlider-track': {
    border: 'none',
    width: 12,
  },
  '& .MuiSlider-thumb': {
    height: 32,
    width: 32,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'left',
    transform: 'translate(50%, -100%) rotate(-90deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-90deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(90deg)',
    },
  },
});

function valuetext(value) {
    return `${value}dB`;
  }
 
export default function VirtualChannel() {
   return (
    <div>
        <Typography sx={{ flexGrow: 1 }}>Treble</Typography>
        <Box ml={3} p={0}>
            <Knob
                size={30}
                numTicks={0}
                degrees={260}
                min={-45}
                max={45}
                value={0}
            />
        </Box>
        <Box
          mr={3}
          p={0}
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
        <Knob
            size={30}
            numTicks={0}
            degrees={260}
            min={-45}
            max={45}
            value={0}
        />
        </Box>
        <Box ml={3} p={0}>
            <Knob
                size={30}
                numTicks={0}
                degrees={260}
                min={-45}
                max={45}
                value={0}
            />
        </Box>
        <Typography mt={2} sx={{ flexGrow: 1 }}>Bass</Typography>
        <Grid item pt={2} xs={12}>
        <Box
            sx={{ height: '49vh', flexGrow: 1 }}
            spacing={1}
            direction="row"
            justify="center"
            alignItems="center"
        >
            <VoiceMeeterSlider
            aria-label="Line"
            orientation="vertical"
            min={-60}
            max={12}
            defaultValue={0}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            />
        </Box>
        </Grid>
    </div>
   );
 }