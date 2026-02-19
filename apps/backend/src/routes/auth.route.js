import express from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import passport from "passport";
import { protect } from "../middleware/auth.middleware.js";
const router = express.Router();

// register
// router.post("/register", async (req, res) => {
//   const { email, password, name } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ error: "Email and password are required" });
//   }

//   const existing = await User.findOne({ email });
//   if (existing) {
//     return res.status(400).json({ error: "User already exists" });
//   }

//   const hashed = await bcrypt.hash(password, 10);
//   const user = await User.create({
//     email,
//     name,
//     password: hashed,
//   });

//   const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
//     expiresIn: "1d",
//   });

//   res.json({ token });
// });
// Login

// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });
//   if (!user) {
//     return res.status(400).json({ error: "Invalid credentials" });
//   }

//   const valid = await bcrypt.compare(password, user.password);
//   if (!valid) {
//     return res.status(400).json({ error: "Invalid crentials" });
//   }

//   const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
//     expiresIn: "1d",
//   });

//   res.json({ token });
// });

// google sign in
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  }),
);
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    const token = jwt.sign({ userId: req.user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.redirect(`http://localhost:7700/oauth-success?token=${token}`);
  },
);

router.get("/me", protect, async (req, res) => {
  console.log("request",req.usedId)
  const user = await User.findById(req.usedId).select("-password");
  console.log("user details",user)
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json({
    id: user._id,
    name: user.name,
    email: user.email,
    picture: user.picture,
    usageCount: user.usageCount
  });
});

export default router;
