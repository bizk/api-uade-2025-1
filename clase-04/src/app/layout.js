// app/layout.js
'use client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { AuthProvider } from './context/AuthContext';
import { CarritoProvider } from './context/CarritoContext';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline /> {/* Aplica el reset y modo claro */}
          <AuthProvider>
            <CarritoProvider>
              {children}
            </CarritoProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
