const Admin = require('../models/admin');
const jwt = require('jsonwebtoken');

exports.loginForm = (req, res) => {
  res.render('auth/login', { layout: 'layouts/Login' });
};

exports.handleLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await Admin.findOne({ email });

  if (!user || user.password !== password) {
    return res.render('auth/login', {layout: 'layouts/Login', error: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.cookie('token', token, { httpOnly: true });
  res.redirect('/');
};

exports.logout = (req, res) => {
  res.clearCookie('token');
  res.redirect('/auth/login');
};
