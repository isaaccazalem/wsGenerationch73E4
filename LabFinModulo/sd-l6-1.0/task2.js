// Task 2: listUsers()
//listamos todos los usuarios
import { getServerURL } from './task1.js'; 
export async function listUsers() {
  const serverURL = getServerURL().replace(/\/+$/, '');
  const usersURL = serverURL.endsWith('/users')
    ? serverURL
    : `${serverURL}/users`;
  // Pedimos los usuarios al servidor
  const response = await fetch(usersURL);
  if (!response.ok) {
    throw new Error(`No se pudieron obtener los usuarios: ${response.status}`);
  }
  // Mostramos la lista en la consola
  console.log(await response.json());
}