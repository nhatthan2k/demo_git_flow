import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App.tsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { ToastProvider } from './utils/ToastContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
    },
    background: {
      default: '#e3f2fd',
      paper: '#ffffff',
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '4px 8px',
          fontSize: '13px',
        },
        head: {
          padding: '6px 8px',
          fontSize: '13px',
          fontWeight: 600,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            fontSize: '13px',
          },
          '& .MuiInputLabel-root': {
            fontSize: '13px',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          fontSize: '13px',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '13px',
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          '& .MuiAutocomplete-option': {
            fontSize: '14px',
          },
        },
      },
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <ToastProvider>
      <App />
    </ToastProvider>
  </ThemeProvider>,
);
