export const loginUser = (item, otp, setCookies, navigate) => {
  fetch("https://taskw3c.herokuapp.com/auth/verify", {
    method: "POST",
    body: JSON.stringify({
      email: item.email,
      otp: `${otp.first + otp.second + otp.third + otp.fourth + otp.fifth + otp.sixth}`,
      name: item.name,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      setCookies("token", res.token, { path: "/" })
      setCookies("user", res.data, { path: "/" })
      console.log(res);
      navigate("/")
    })
    .catch((err) => {
      console.log(err);
    });
};
