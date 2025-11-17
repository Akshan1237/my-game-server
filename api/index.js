// index.js - الإصدار 5.0 (أبسط شيء ممكن)

export default function handler(req, res) {
  // تحقق من أن الطلب هو POST
  if (req.method === 'POST') {
    // استخراج البيانات من جسم الطلب
    const { email, password } = req.body;

    // طباعة البيانات في سجلات Vercel
    console.log(`Signup attempt received: email=${email}`);

    // إرسال رد ناجح دائمًا (لأغراض الاختبار)
    res.status(200).json({ 
      message: 'Account created successfully! (TEST)',
      userId: `user_${Date.now()}` 
    });
  } else {
    // إذا كان الطلب ليس POST، أرسل خطأ
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
