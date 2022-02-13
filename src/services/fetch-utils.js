import { client, checkError } from './client';

export async function getUser(){
  return client.auth.session();
}

export async function signUp(email, password){
  const response = await client.auth.signUp({ email, password });

  return response.user;
}

export async function signIn(email, password){
  const response = await client.auth.signIn({ email, password });
  return response.user;
}

export async function logout() {
  await client.auth.signOut();

  return window.location = '../';
}

export async function createWeapon(weapon){
  const response = await client
    .from('inventory')
    .insert([weapon]);
  
  return checkError(response);
}

export async function getWeapons(){
  const response = await client
    .from('inventory')
    .select('*');

  return checkError(response);
}

export async function getWeaponById(id){
  const response = await client
    .from('inventory')
    .select()
    .match({ id })
    .single();

  return checkError(response);
}