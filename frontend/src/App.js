
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import VoiceMeeterAppBar from './AppBar';
import InputChannel from './InputChannel';
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
              paper: '#122029',
            },
        }
      }
    )}>
      <CssBaseline />
      <div className="App">
        <VoiceMeeterAppBar />
        <InputChannel />
        <InputChannel />
      </div>
    </ThemeProvider>
  );
}

export default App;
