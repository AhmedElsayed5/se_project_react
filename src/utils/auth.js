const baseUrl = "http://localhost:3001";
export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error ${res.status}`);
};

const headers = { "Content-Type": "application/json" };

export const signUp = ({ name, avatar, email, password }) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ name, avatar, email, password }),
  }).then(checkResponse);
};

export const logIn = ({ email, password }) => {
  return fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};

export const checkToken = (token) => {
  return fetch(`${baseUrl}/user/me`, {
    method: "GET",
    headers: {
      headers: headers,
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};
