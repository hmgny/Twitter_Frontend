export const setToken = (username, password) => {
  const credentials = `${username}:${password}`;
  const encodedCredentials = btoa(credentials);
  localStorage.setItem('token', encodedCredentials);
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const removeToken = () => {
  localStorage.removeItem('token');
};

export const isLoggedIn = () => {
  return !!getToken();
};