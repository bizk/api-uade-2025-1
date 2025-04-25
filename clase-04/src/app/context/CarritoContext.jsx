'use client';
import { createContext, useContext, useState } from 'react';

const CarritoContext = createContext();
export const useCarrito = () => useContext(CarritoContext);

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregar = (producto) => {
        setCarrito((prev) => {
            const existe = prev.find(p => p.id === producto.id);
            if (existe) {
                return prev.map(p =>
                    p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
                );
            }
            return [...prev, { ...producto, cantidad: 1 }];
        });
    };

    return (
        <CarritoContext.Provider value={{ carrito, agregar }}>
            {children}
        </CarritoContext.Provider>
    );
};
