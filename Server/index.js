const http = require("http");
const fs = require("fs");
const express = require("express");
const users = require("./USERDATA.json");

//var index =  fs.readFileSync( 'C:/Users/91907/Desktop/Major Project/Website/udb.html');
fs.readFile("nextUserId.txt", (err, data) => {
  if (!err && data) {
    nextUserId = parseInt(data, 10) || 1;
  }
});
function saveNextUserId() {
  fs.writeFile("nextUserId.txt", nextUserId.toString(), (err) => {
    if (err) {
      console.error("Error saving nextUserId:", err);
    }
  });
}

const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");

const port = new SerialPort({ path: "COM4", baudRate: 9600 });
const parser = new ReadlineParser();

port.pipe(parser);
parser.on("data", () => {});

const app = express();
const server = http.createServer(app);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("dist"));

// Route to serve the HTML file
app.get("/", function (req, res) {
  res.sendFile("C:/Users/91907/Desktop/Major Project/Server/dist/index.html");
});
app.get("/Relax", function (req, res) {
  res.sendFile("C:/Users/91907/Desktop/Major Project/Server/dist/index.html");
});
app.get("/UserDashBoard", function (req, res) {
  res.sendFile("C:/Users/91907/Desktop/Major Project/Server/dist/index.html");
});
app.get("/SignIn", function (req, res) {
  res.sendFile("C:/Users/91907/Desktop/Major Project/Server/dist/index.html");
});
app.get("/SignUp", function (req, res) {
  res.sendFile("C:/Users/91907/Desktop/Major Project/Server/dist/index.html");
});
app.get("/Developers", function (req, res) {
  res.sendFile("C:/Users/91907/Desktop/Major Project/Server/dist/index.html");
});
app.get("/Comparison", function (req, res) {
  res.sendFile("C:/Users/91907/Desktop/Major Project/Server/dist/index.html");
});


app.post("/SignIn", (req, res) => {
  const { email, password } = req.body;

  // Check if both email and password fields are present
  if (!email || !password) {
    return res
      .status(400)
      .json({ error: "Both email and password are required" });
  }

  // Find the user with the provided email in your users array or database
  const user = users.find((user) => user.email === email);

  // If user is not found or password is incorrect, return an error response
  if (!user || user.password !== password) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  // If user is found and password is correct, return a success response
  res.status(200).json({ userData: user });
});

let nextUserId = 1;
app.post("/SignUp", (req, res) => {
  const { fullName, email, password } = req.body;
  if (!fullName || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }
  // Check if the email is already in use
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(400).json({ error: "Email already in use" });
  }

  // Generate a unique ID for the new user
  const id = nextUserId++;

  // Create a new user object with id
  const newUser = { id, fullName, email, password, pulse: [] };
  saveNextUserId();

  // Add the new user to the existing user data
  users.push(newUser);

  // Write the updated user data back to the JSON file
  fs.writeFile("./USERDATA.json", JSON.stringify(users), (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    // User sign-up successful
    res.status(201).json({ message: "User sign-up successful" });
  });
});
app.post("/UserDashBoard", (req, res) => {
  const {email} = req.body;
  // Find the user with the provided email in your users array or database
  const user = users.find((user) => user.email === email);

  return res.status(201).json(user);
});
app.post("/addPulse", (req, res) => {
  const { email, pulse } = req.body;

  // Get the current date
  const currentDate = new Date().toISOString();

  // Find the user with the provided email in your users array or database
  const userIndex = users.findIndex((user) => user.email === email);

  // If user is not found, return an error response
  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  // Add the pulse value to the user's pulse array
  users[userIndex].pulse.push({ pulse: pulse, date: currentDate });

  // Write the updated user data back to the JSON file
  fs.writeFile("./USERDATA.json", JSON.stringify(users), (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    // Pulse added successfully
    res.status(201).json({ message: "Pulse added successfully" });
  });
});
// Assuming you're using Express.js
app.delete("/deletePulse", (req, res) => {
  const { email, index } = req.body;

  // Find the user with the provided email in your users array or database
  const userIndex = users.findIndex((user) => user.email === email);

  // If user is not found, return an error response
  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  // Remove the pulse value at the specified index from the user's pulse array
  users[userIndex].pulse.splice(index, 1);

  // Write the updated user data back to the JSON file
  fs.writeFile("./USERDATA.json", JSON.stringify(users), (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    // Pulse deleted successfully
    res.status(200).json({ message: "Pulse deleted successfully" });
  });
});


// app.post("/Relax",())

// Socket.IO setup
const io = require("socket.io")(server);

io.on("connection", function (socket) {
  console.log("Node is listening to port");
});

parser.on("data", function (data) {
  console.log("Received data from port: " + data);
  io.emit("data", data);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, function () {
  console.log("Server is running on port " + PORT);
});
