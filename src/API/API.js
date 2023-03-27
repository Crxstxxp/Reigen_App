//Las funciones escritas en este archivo seran exportadas y usadas por los archivos que las vallan a utilizar y de esta manera hacer que la lectura del codigo sea mas entendible
const IP = "172.20.101.237";
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

export const getData = async () => {
  const res = await fetch(`http://${IP}:5000/api/data`)
  return await res.json()
};
