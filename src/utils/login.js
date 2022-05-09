export const create = (login) => {
  fetch("https://taskw3c.herokuapp.com/auth/create", {
    method: "POST",
    body: JSON.stringify(login),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
