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
  console.log(id);
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      headers: headers,
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};

export const addItem = (token, { name, weather, imageUrl }) => {
  console.log({ name, weather, imageUrl });
  console.log(token);
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, weather, imageUrl }),
  }).then(checkResponse);
};
