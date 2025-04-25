// app/theme.js
'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light', // 👈 Forzamos modo claro
        primary: {
            main: '#2e7d32', // Verde
        },
        secondary: {
            main: '#fdd835', // Amarillo
        },
    },
});

export default theme;
