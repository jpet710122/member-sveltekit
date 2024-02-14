import { atom, map } from 'nanostores';

export const isAuthenticated = atom(false);
export const name = atom('');

export const user = map({
  id: '',
  email: '',
  phone: '',
  givenName: '',
  name: '',
})

// $user.listen((user, changed) => {
//   console.log(`${changed} new value ${user[changed]}`)
// })
