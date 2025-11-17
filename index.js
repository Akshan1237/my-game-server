// index.js - الإصدار 2.0 (مع دالة تسجيل الدخول)
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// سطر مهم: هذا يسمح للخادم بقراءة بيانات JSON التي سترسلها اللعبة
app.use(express.json());

// Endpoint الرئيسي القديم
app.get('/', (req, res) => {
  res.send('Hello, World! My server is running!');
});

// Endpoint الجديد لتسجيل حساب
app.post('/signup', (req, res) => {
  // اقرأ البريد الإلكتروني وكلمة المرور من الطلب الذي أرسلته اللعبة
  const email = req.body.email;
  const password = req.body.password;

  console.log(`New signup attempt: email=${email}, password=${password}`);

  // تحقق بسيط جدًا
  if (!email || !password) {
    // إذا كانت البيانات ناقصة، أرسل رسالة خطأ
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  // إذا كانت البيانات موجودة، أرسل رسالة نجاح
  res.status(201).json({ message: 'Signup successful!', userId: 'user_12345' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
