/*******************************************************************************
 * BusSelect.js
 * 
 * Bus Selector for VoiceMeeter Web.
 ******************************************************************************/

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import BusButton from './BusButton';

 
export default function BusSelection() {
   return (
    <Grid item xs={12}>
      <Box mt={1}>
        <BusButton busName="A1"/>
        <BusButton busName="A2"/>
        <BusButton busName="A3"/>
      </Box>
      <Box mt={1}>
        <BusButton busName="B1"/>
        <BusButton busName="B2"/>
      </Box>
    </Grid>
   );
 }
