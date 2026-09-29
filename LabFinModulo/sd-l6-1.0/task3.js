// Task 3: addUser(first_name, last_name, email)
//addUser("Kai", "Nathaniel", "kai.n@example.org");
import { getServerURL } from './task1.js';

export async function addUser(first_name, last_name, email) {
  const url = getServerURL().replace(/\/+$/, '');
  const usersURL = url.endsWith('/users') ? url : `${url}/users`;

  const response = await fetch(usersURL);
  const users = await response.json();

  let id = 0;
  for (const user of users) {
    if (Number(user.id) > id) id = Number(user.id);
  }
  // Enviamos al servidor el usuario nuevo con el siguiente ID
  return fetch(usersURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: id + 1, first_name, last_name, email }),
  });
}
