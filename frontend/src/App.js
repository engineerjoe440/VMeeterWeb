
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { CssBaseline } from '@mui/material';

import VoiceMeeterAppBar from './AppBar';
import InputChannel from './InputChannel';
import VirtualInputs from './VirtualInputs';
import './App.css';


function App() {
  return (
    <ThemeProvider theme={createTheme(
      {
        palette: {
          mode: 'dark',
          // Voicemeeter Colors
          primary: {
            main: '#36495A',
          },
          background: {
              default: '#2C3D4D',
              paper: '#36495A',
              // paper: '#122029',
            },
        }
      }
    )}>
      <CssBaseline />
      <div className="App">
        <VoiceMeeterAppBar />
        <Box display="flex" height="100%" sx={{
          display: 'grid',
          gap: 0.2,
          gridTemplateColumns: 'repeat(5, 1fr)'
        }}>
          <InputChannel />
          <InputChannel />
          <InputChannel />
          <VirtualInputs />
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
