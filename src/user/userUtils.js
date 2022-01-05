const defaultUser = {
  userName: "amilewski",
  name: "Adrian",
  accounts: [
    {
      name: "Detailing auto",
    },
    {
      name: "Second hand shop",
    },
  ],
  imageUrl:
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
};

const isUserLoggedIn = () => {
  return Boolean(localStorage.getItem("user"));
};

const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const setUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const clearUser = () => {
  localStorage.setItem("user", "");
};

const logout = (navigate) => {
  clearUser();
  navigate("/login");
};

module.exports = {
  defaultUser,
  isUserLoggedIn,
  getUser,
  setUser,
  clearUser,
  logout,
};
