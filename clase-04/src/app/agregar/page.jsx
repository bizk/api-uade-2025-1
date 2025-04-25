'use client';
import { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function AgregarPage() {
    const [form, setForm] = useState({ titulo: '', precio: '', stock: '' });
    const [error, setError] = useState('');
    const router = useRouter();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const ochoCaracteres = (e) => {
        if (e.target.value.length > 8) {
            setError('El título debe tener menos de 8 caracteres');
        } else {
            setError('');
        }
    };

    const { auth } = useAuth();

    const handleSubmit = async () => {
        const { titulo, precio, stock } = form;
        if (!titulo) {
            setError('El título es requerido');
            return;
        }

        if (!precio || precio <= 0 || stock < 0) {
            setError('Todos los campos deben ser válidos');
            return;
        }

        await fetch('http://localhost:3001/productos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${auth.token}`
            },
            body: JSON.stringify({ ...form, precio: Number(precio), stock: Number(stock) }),
        });
        router.push('/productos');
    };

    return (
        <>
            <Typography variant="h4">Agregar Producto</Typography>

            {error && <Typography color="error">{error}</Typography>}

            <TextField name="titulo" label="Título" onChange={handleChange} onBlur={ochoCaracteres} />
            <TextField name="precio" label="Precio" type="number" onChange={handleChange} />
            <TextField name="stock" label="Stock" type="number" onChange={handleChange} />
            <Button onClick={handleSubmit}>Guardar</Button>
        </>
    );
}
