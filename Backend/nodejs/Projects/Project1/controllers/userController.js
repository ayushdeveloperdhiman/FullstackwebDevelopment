const User = require("../models/userModel");

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ error: "Failed to fetch Users" });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ error: "No user found" });
    }
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ error: "error while fetching user" });
  }
};

// Create a new user

exports.createUser = async (req, res) => {
  try {
    const { name, age, emailId } = req.body;
    const newUser = new User({ name, age, emailId });
    await newUser.save();
    return res.status(201).json(newUser);
  } catch (err) {
    return res.status(500).json({ error: "Failed to create user" });
  }
};

// Update user by there id

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    const { name, age, emailId } = req.body;
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    if (name) user.name = name;

    if (age) user.age = age;
    if (emailId) user.emailId = emailId;
    user.save();
    res.status(201).json(user);
  } catch (err) {
    return res.status(500).json({ error: "Failed to update the user" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ Error: "User not found" });
    }
    res.status(200).json({ msg: "user deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete user" });
  }
};
