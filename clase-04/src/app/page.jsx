'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState('');
  const [usuarios, setUsuarios] = useState([]);
  const router = useRouter();

  const guardarNombreYRedirigir = () => {
    // GUARDAR NOMBRE EN LOCAL STORAGE
    localStorage.setItem('nombreUsuario', nombre);

    router.push('/mostrar');
  };


  // CASO !: Use effect para cargar usuarios desde la API
  useEffect(() => {
    console.log("HOLA")
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(resultado => resultado.json())
    //   .then(setUsuarios)
    //   .catch(console.error)
    fetch("http://localhost:3000/prueba")
      .then(resultado => resultado.json())
      .then(setUsuarios)
      .catch(console.error)
  }, []);

  const agregarProduct = () => {
    console.log("DATOS PRODUCTO")
  }

  // CASO 2: Use effect para ejecutar una función cada 2 segundos y limpiar luego de un tiempo
  useEffect(() => {
    const intervalo = setInterval(() => {
      console.log('⏱️ Intervalo activo cada 2s...');
    }, 2000);

    return () => clearInterva(intervalo);
  }, []);

  // CASO 3: useEffect que se ejecuta cada vez que cambia el contador
  useEffect(() => {
    console.log("Contador cambió a: ", contador)
    if (contador >= 5) {
      console.log("Contador es mayor a 5")
    }
  }, [contador]);

  useEffect(() => {
    console.log("n", nombre)
    if (nombre === "carlos") {
      alert("Hola carlos")
    }
  }, [nombre])


  return (
    <div style={{ padding: '1rem' }}>
      <h1>👤 Lista de Usuarios</h1>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar contador ({contador})
      </button>

      <ul>
        {usuarios.length > 0 ? (
          usuarios.map(user => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))
        ) : (
          <p>Cargando usuarios...</p>
        )}
      </ul>

      <hr />

      <h2>🔤 Ingresá tu nombre</h2>
      <input
        type="text"
        placeholder="Ej: Santiago"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
      />
      <button onClick={guardarNombreYRedirigir} style={{ marginLeft: '1rem' }}>
        Guardar y ver en otra página
      </button>
    </div>
  );
}
