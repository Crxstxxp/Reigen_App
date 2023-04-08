//Las funciones escritas en este archivo seran exportadas y usadas por los archivos que las vallan a utilizar y de esta manera hacer que la lectura del codigo sea mas entendible
const IP = "192.168.1.10";
export const SaveUser = async (user) => {
  // console.log(user);
  const response = await fetch(`http://${IP}:5000/api/users`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return response.json();
};

export const getData = async (token) => {
  const res = await fetch(`http://${IP}:5000/api/data`, {
    headers: {
      "x-access-token": token,
    }
  });
  return await res.json();
};

export const getUserData = async (id, token) => {
  // console.log(token);
  const res = await fetch(`http://${IP}:5000/api/users/${id}`, {
    headers: {
      "x-access-token": token,
    }
  });
  return await res.json();
};

export const updateUser = async (id, userData, token) => {
  const response = await fetch(`http://${IP}:5000/api/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
    body: JSON.stringify(userData),
  });
  const updatedUser = await response.json();
  return updatedUser, true;
};
