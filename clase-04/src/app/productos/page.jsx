'use client';
import { useEffect, useState } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { useCarrito } from '../context/CarritoContext';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function ProductosPage() {
    const [productos, setProductos] = useState([]);
    const { agregar } = useCarrito();
    const { auth } = useAuth();
    const router = useRouter();

    useEffect(() => {
        fetch('http://localhost:3001/productos')
            .then(res => res.json())
            .then(setProductos);
    }, []);

    return (
        <>
            <Typography variant="h4">Productos</Typography>

            {auth.role === 'admin' && <Button onClick={() => router.push('/agregar')}>Agregar Producto</Button>}

            <Button onClick={() => router.push('/carrito')}>Ver Carrito</Button>
            {productos.map(prod => (
                <Card key={prod.id} sx={{ mb: 2 }}>
                    <CardContent>
                        <Typography>{prod.titulo}</Typography>
                        <Typography>${prod.precio}</Typography>
                        <Button onClick={() => agregar(prod)}>Agregar al carrito</Button>
                    </CardContent>
                </Card>
            ))}
        </>
    );
}
