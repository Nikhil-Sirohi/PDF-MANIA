import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, "193747234729ABHH", {
    expiresIn: "30d",
  });
};

export default generateToken;
