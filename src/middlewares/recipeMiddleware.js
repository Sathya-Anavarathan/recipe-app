import mongoose from "mongoose";

export const verifyByrecipe = (req, res, next) => {
  const { id } = req.params;

  // Check if ID is a valid MongoDB ObjectId
  if (! id || !mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      status: "error",
      message: "Invalid recipe ID format",
    });
  }

  next();
};
