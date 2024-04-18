import UserModel from "../models/user.js"; // Adjust according to your actual setup
import createHttpError from "http-errors";
import bcrypt from "bcrypt";

export const signUpController = async (req, res, next) => {
  const email = req.body.email;
  const passwordRaw = req.body.password;

  try {
    if (!email || !passwordRaw) {
      throw createHttpError(400, "Email or Password are missing");
    }

    const existingEmail = await UserModel.findOne({ email: email }).exec();

    if (existingEmail) {
      throw createHttpError(409, "Email already exists, please login");
    }

    const passwordHashed = await bcrypt.hash(passwordRaw, 10);

    const newUser = await UserModel.create({
      email: email,
      password: passwordHashed,
    });

    req.session.userId = newUser._id;

    res.status(201).json({
      _id: newUser._id,
      email: newUser.email, // Ensure you really want to send the email back
      // Do not send the password, even hashed
    });
  } catch (error) {
    next(error);
  }
};

export const getAuthenticatedUser = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.session.userId)
      .select("+email") // Ensure this is the correct usage for your schema and MongoDB setup
      .exec();

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    if (!email || !password) {
      throw createHttpError(400, "Username oder Password fehlt...");
    }

    const user = await UserModel.findOne({
      email: email,
    })
      .select("+password +email")
      .exec();
    if (!user) {
      throw createHttpError(401, "Invalide Login Creadentials");
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw createHttpError(401, "Invalide Login Creadentials");
    }
    req.session.userId = user._id;
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};
//5:54 mins
export const logout = async (req, res, next) => {
  req.session.destroy((error) => {
    if (error) {
      next(error);
    } else {
      res.sendStatus(200);
    }
  });
};
