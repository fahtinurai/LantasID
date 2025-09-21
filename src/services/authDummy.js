// src/services/authDummy.js

// Array user dummy
export let users = [
  { id: 1, name: "Admin", email: "admin@lantasid.com", password: "123456" },
  { id: 2, name: "User", email: "user@lantasid.com", password: "samsungUser123" },
];

// login dummy
export const loginDummy = (email, password) => {
  return users.find(
    (u) => u.email === email && u.password === password
  ) || null;
};

// register dummy
export const registerDummy = (newUser) => {
  const exist = users.find((u) => u.email === newUser.email);
  if (exist) return null; // sudah ada emailnya
  const user = {
    id: users.length + 1,
    ...newUser,
  };
  users.push(user);
  return user;
};
