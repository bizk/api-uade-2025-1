export const traerUsuarios = async () => {
    const resultado = await fetch('https://jsonplaceholder.typicode.com/users')
    return resultado.json()
}