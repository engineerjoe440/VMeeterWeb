/*******************************************************************************
 * VirtualInputs.js
 * 
 * Virtual Input Channel for VoiceMeeter Web.
 ******************************************************************************/

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { Typography } from '@mui/material';
import VirtualChannel from './VirtualChannel';

 
export default function VirtualInputs() {
   return (
    <Grid item m={1} pt={1} xs={12}>
       <Paper elevation={2}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Virtual Inputs
        </Typography>
        <Grid item m={1} xs={12}>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <VirtualChannel />
            <VirtualChannel />
          </Box>
        </Grid>
       </Paper>
     </Grid>
   );
 }