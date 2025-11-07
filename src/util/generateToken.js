import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d", // token valid for 1 day or 7 or 30 days as per requirement
  });
};

export default generateToken;
