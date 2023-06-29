const baseUrl = "http://localhost:3001";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error ${res.status}`);
};

const headers = { "Content-Type": "application/json" };

export const getItems = () => {
  return fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: headers,
  }).then(checkResponse);
};

export const deleteItem = (id) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: headers,
  }).then(checkResponse);
};

export const addItem = ({ name, weather, imageUrl }) => {
  //   console.log({ name, weather, imageUrl });
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ name, weather, imageUrl }),
  }).then(checkResponse);
};
