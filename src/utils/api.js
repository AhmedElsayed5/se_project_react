const baseUrl = "http://localhost:3001";
// const baseUrl =
//   "https://my-json-server.typicode.com/AhmedElsayed5/se_project_react";

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error ${res.status}`);
};

const headers = { "Content-Type": "application/json" };

export const getItems = (token) => {
  return fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      headers: headers,
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};

export const deleteItem = (id, token) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      headers: headers,
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};

export const addItem = ({ name, weather, imageUrl }, token) => {
  //   console.log({ name, weather, imageUrl });
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      headers: headers,
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, weather, imageUrl }),
  }).then(checkResponse);
};
