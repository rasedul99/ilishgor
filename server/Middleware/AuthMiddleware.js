import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decode);
      req.user = await User.findById(decode.id).select("-password");
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized ,token failed");
    }
    console.log("token Found");
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized , no token");
  }
});
export default protect;
