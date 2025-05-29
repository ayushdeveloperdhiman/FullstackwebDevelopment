const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 5000;
app.use(express.urlencoded());

// Users routes
app.use(userRoutes);

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/project1")
  .then(() => {
    console.log("Connected to the MongoDB Successfull!!");
  })
  .catch((error) => {
    console.error("Could not connect to MongoDB: ", error);
  });

// // Define User Schema

// const userSchema = new mongoose.Schema(
//   {
//     name: String,
//   },
//   { timestamps: true }
// );

// const User = mongoose.model("User", userSchema);
// let users = [
//   { id: 1, name: "Ayush Dhiman" },
//   { id: 2, name: "Sahil" },
// ];

// Get All Users
// app.get("/users", async (req, res) => {
// return res.json(users);
// try {
//   const users = await User.find();
//   return res.status(200).json(users);
// } catch (err) {
//   return res.status(500).json({ error: "Failed to fetch Users" });
// }
// });

//Get a specific user by ID
// app.get("/users/:id", async (req, res) => {
// const userId = parseInt(req.params.id);
// const user = users.find((u) => u.id === userId);
// if (!user) {
//   res.status(404).json({ error: "User not found" });
// }
// res.status(200).json(user);

//   try {
//     const { id } = req.params;
//     const user = await User.findById(id);

//     if (!user) {
//       return res.status(404).json({ error: "No user found" });
//     }
//     return res.status(200).json(user);
//   } catch (err) {
//     return res.status(500).json({ error: "error while fetching user" });
//   }
// });

// POST Request for creating a new user

// app.post("/user", async (req, res) => {
// const newUser = { id: users.length + 1, name: req.body.name };
// users.push(newUser);
// res.status(201).json(newUser);
// try {
//   const newUser = new User({ name: req.body.name });
//   await newUser.save();
//   return res.status(201).json(newUser);
// } catch (err) {
//   return res.status(500).json({ error: "Failed to create user" });
// }
// });

// PUT request for edit the existing user by their ID

// app.put("/user/:id", async (req, res) => {
// const userId = parseInt(req.params.id);
// const user = users.find((u) => u.id === userId);

//   try {
//     const { id } = req.params;
//     const user = await User.findById(id);
//     const { name, age, emailId } = req.body;
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }
//     user.name = name;
//     user.age = age;
//     user.emailId = emailId;
//     user.save();
//     res.status(201).json(user);
//   } catch (err) {
//     return res.status(500).json({ error: "Failed to update the user" });
//   }
// });

// Delete user by its id

// app.delete("/user/:id", async (req, res) => {
//   try {
//     const userId = req.params.id;
//     const user = await User.findByIdAndDelete(userId);
//     if (!user) {
//       return res.status(404).json({ Error: "User not found" });
//     }
//     res.status(200).json({ msg: "user deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ error: "Failed to delete user" });
//   }
// });

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
