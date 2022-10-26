import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#00E9A2'
        },
    },
});

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <App/>
        </ThemeProvider>
    </React.StrictMode>
);

reportWebVitals();
