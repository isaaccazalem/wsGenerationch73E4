// Task 4: delUser(number)

// borra el usuario 6 y 5
import { getServerURL } from './task1.js';

export async function delUser(id) {
  const url = getServerURL().replace(/\/+$/, '');
  const usersURL = url.endsWith('/users') ? url : `${url}/users`;
  
  // Le pedimos al servidor que borre al usuario con ese ID
  const response = await fetch(`${usersURL}/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('No se pudo eliminar el usuario.');
  }
}
