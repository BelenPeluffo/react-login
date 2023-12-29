export interface LoginData {
  email: string;
  password: string;
}

export interface User {
  name: string;
  email: string;
  password: string;
  sign: string;
}

const users: User[] = [
  {
    name: "SOYEON",
    email: "jeon.soyeon@cube.kr",
    password: "jelly",
    sign: "virgo",
  },
  {
    name: "CL",
    email: "clfrom2ne1@yge.kr",
    password: "wheremahbitchesat",
    sign: "pisces",
  },
];

export const getUser = (email: string, password: string) => {
  const userExists = users.filter(
    (user) => user.email === email && user.password === password
  )[0];
  if (userExists) {
    const userInstance: { user: User; token: string } = {
      user: userExists,
      token: "1234",
    };
    return userInstance;
  }
};
