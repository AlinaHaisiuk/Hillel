const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const flash = require('connect-flash');

const users = [];

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, secure: false },
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  const user = users.find(u => u.email === email);
  if (!user) {
    return done(null, false, { message: 'Incorrect email or password.' });
  }
  bcrypt.compare(password, user.password, (err, isMatch) => {
    if (err) return done(err);
    if (isMatch) return done(null, user);
    return done(null, false, { message: 'Incorrect email or password.' });
  });
}));

passport.serializeUser((user, done) => {
  done(null, user.email);
});

passport.deserializeUser((email, done) => {
  const user = users.find(u => u.email === email);
  if (user) done(null, user);
  else done(null, false);
});

app.get('/register', (req, res) => {
    res.send('<form method="POST" action="/register">\n  <input type="email" name="email" placeholder="Email" required />\n  <input type="password" name="password" placeholder="Password" required />\n  <button type="submit">Register</button>\n</form>');
  });  

app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  if (users.find(u => u.email === email)) {
    return res.status(400).send('User already exists');
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ email, password: hashedPassword });
  res.status(201).send('User registered');
});

app.get('/login', (req, res) => {
    res.send(`<form method="POST" action="/login">
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>`);
  });

  app.get('/wrong-credentials', (req, res) => {
    const error = req.flash('error');
    res.send(`
      <span>Your credentials are wrong! You will be redirected to login page in 3 seconds.</span>
      ${error.length > 0 ? `<p style='color: red;'>Error: ${error[0]}</p>` : ''}
      <script>
        setTimeout(() => {
          window.location.href = '/login';
        }, 3000);
      </script>
    `);
  });

app.post('/login', passport.authenticate('local', {
  successRedirect: '/protected',
  failureRedirect: '/wrong-credentials',
  failureFlash: true,
}));

app.get('/logout', (req, res) => {
  req.logout(err => {
    if (err) return next(err);
    res.send('Logged out');
  });
});

app.get('/', (req, res) => {
    res.send('Main page');
  });

app.get('/protected', (req, res, next) => {
  if (req.isAuthenticated()) {
    res.send('Welcome to the protected route');
  } else {
    res.status(401).send('Unauthorized');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
