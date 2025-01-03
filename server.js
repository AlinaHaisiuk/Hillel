const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken"); // Для роботи з JWT
const app = express();

// Налаштування для використання Pug
app.set("view engine", "pug");
app.set("views", "./views");

// Підключення cookie-parser для роботи з cookies
app.use(cookieParser());
app.use(express.urlencoded({ extended: true })); // Для парсингу форм

// Ключ для JWT (для прикладу)
const JWT_SECRET = "your_secret_key";

// Псевдодані користувачів для авторизації
const users = [];

// Маршрут для реєстрації
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (users.find((user) => user.username === username)) {
    return res.status(400).send("User already exists");
  }
  users.push({ username, password });
  res.send("Registration successful!");
});

// Маршрут для входу
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (!user) {
    return res.status(400).send("Invalid credentials");
  }
  const token = jwt.sign({ username: user.username }, JWT_SECRET, {
    expiresIn: "1h",
  });
  res.cookie("token", token, { httpOnly: true }); // Зберігаємо токен в cookies
  res.send("Login successful!");
});

// Захищений маршрут
app.get("/protected", (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).send("Not authenticated");
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send("Invalid token");
    }
    res.send(`Hello, ${decoded.username}! This is a protected route.`);
  });
});

// Маршрут для зміни теми
app.get("/set-theme/:theme", (req, res) => {
  const { theme } = req.params;
  if (theme !== "dark" && theme !== "light") {
    return res.status(400).send("Invalid theme");
  }
  res.cookie("theme", theme); // Зберігаємо вибрану тему в cookies
  res.redirect("/");
});

// Головний маршрут для відображення сторінки з формами
app.get("/", (req, res) => {
  const theme = req.cookies.theme || "light"; // Якщо тема не встановлена, за замовчуванням світла
  res.render("index", { theme }); // Передаємо значення теми в шаблон
});

// Стартуємо сервер
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
