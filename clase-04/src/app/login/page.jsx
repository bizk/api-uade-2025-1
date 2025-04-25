'use client';
import { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
    const [user, setUser] = useState({ username: '', password: '' });
    const { login } = useAuth();
    const router = useRouter();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        const res = await fetch('http://localhost:3001/users');
        const users = await res.json();

        // Esto lo deberia hacer el servidor y devolvernos el found
        const found = users.find(
            (u) => u.username === user.username && u.password === user.password
        );
        //

        if (found) {
            // Nos deberia generar un token
            login({ token: 'fake-jwt-token', role: found.role });
            router.push('/productos');
        } else {
            alert('Credenciales inválidas');
        }
    };

    return (
        <>
            <Typography variant="h4">Login</Typography>
            <TextField name="username" label="Usuario" onChange={handleChange} />
            <TextField name="password" label="Contraseña" type="password" onChange={handleChange} />
            <Button onClick={handleSubmit}>Ingresar</Button>
        </>
    );
}
