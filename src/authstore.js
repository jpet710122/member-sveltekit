import { writable } from 'svelte/store';

export const userLogged = writable(null);          // start with no user
export const userRegistering = writable(false);
