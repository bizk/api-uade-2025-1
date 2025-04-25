'use client';
import { useCarrito } from '../context/CarritoContext';
import { Typography } from '@mui/material';

export default function CarritoPage() {
    const { carrito } = useCarrito();

    return (
        <>
            <Typography variant="h4">Carrito</Typography>
            {carrito.map(p => (
                <div key={p.id}>
                    <p>{p.titulo} - Cantidad: {p.cantidad}</p>
                    <p>Total: ${p.precio * p.cantidad}</p>
                </div>
            ))}
        </>
    );
}
