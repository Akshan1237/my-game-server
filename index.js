// index.js - الإصدار 3.0 (متوافق مع Vercel)
const express = require('express');
const app = express();
const port = 3000;

// هذا السطر مهم جدًا ليفهم الخادم بيانات JSON
app.use(express.json());

// مصفوفة بسيطة لتخزين المستخدمين (مؤقتًا)
const users = [];
let nextUserId = 1;

// نقطة النهاية لإنشاء حساب جديد
app.post('/signup', (req, res) => {
  const { email, password } = req.body;
  console.log(`New signup attempt: email=${email}`);

  // تحقق بسيط جدًا
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  // إنشاء مستخدم جديد
  const newUser = {
    id: `user_${nextUserId++}`,
    email: email,
  };
  users.push(newUser);

  console.log(`User created successfully: ${newUser.id}`);

  // إرسال رد ناجح
  res.status(200).json({ 
    message: 'Account created successfully!',
    userId: newUser.id 
  });
});

// هذا السطر مهم جدًا ليعمل الخادم محليًا
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// هذا السطر هو السحر الذي سيجعل Vercel يفهم كل شيء
module.exports = app;
