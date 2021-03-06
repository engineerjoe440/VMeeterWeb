/*******************************************************************************
 * InputChannel.js
 * 
 * Single Input Channel for VoiceMeeter Web.
 ******************************************************************************/

 import * as React from 'react';
 import Grid from '@mui/material/Grid';
 import Box from '@mui/material/Box';
 import Paper from '@mui/material/Paper';
 import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
 import { styled } from '@mui/material/styles';
 
import Knob from './knob';
import BusSelection from './BusSelect';


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
 
export default function InputChannel() {
   return (
    <Grid item m={1} pt={1} xs={12}>
       <Paper elevation={2}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Input Name
        </Typography>
        <Grid item m={1} xs={12}>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div>
              <Box
                m={0}
                p={1}
                display="flex"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Knob
                    size={50}
                    numTicks={7}
                    degrees={260}
                    min={1}
                    max={100}
                    value={30}
                />
              </Box>
              <Typography mt={2} sx={{ flexGrow: 1 }}>Comp.</Typography>
            </div>
            <div>
              <Box
                mr={2}
                p={1}
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <Knob
                    size={50}
                    numTicks={7}
                    degrees={260}
                    min={1}
                    max={100}
                    value={30}
                />
              </Box>
              <Typography mt={2} sx={{ flexGrow: 1 }}>Gate</Typography>
            </div>
          </Box>
        </Grid>
        <Grid item pt={0} xs={12}>
          <Box
            sx={{
              height: '58vh',
              flexGrow: 1,
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)'
            }}
            spacing={1}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <div/>
            <VoiceMeeterSlider
              aria-label="Line"
              orientation="vertical"
              min={-60}
              max={12}
              defaultValue={0}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
            />
            <BusSelection />
          </Box>
        </Grid>
       </Paper>
     </Grid>
   );
 }