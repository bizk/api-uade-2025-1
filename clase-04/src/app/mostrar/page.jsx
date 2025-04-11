'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Mostrar() {
    let [nombre, setNombre] = useState('');
    const router = useRouter();

    useEffect(() => {
        const nombreGuardado = localStorage.getItem('nombreUsuario')
        if (nombreGuardado) {
            setNombre(nombreGuardado);
        }

    }, []);

    return (
        <div style={{ padding: '1rem' }}>
            <h1>📦 Nombre guardado:</h1>
            {nombre ? <p>{nombre}</p> : <p>No hay nombre guardado.</p>}
            <button onClick={() => router.push('/')}>Volver a inicio</button>
        </div>
    );
}
// 