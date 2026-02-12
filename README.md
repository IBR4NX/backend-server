# Node.js TypeScript Backend - Auth & Sessions

هذا المشروع عبارة عن **Backend** باستخدام **Node.js** و **TypeScript** لإدارة المستخدمين، تسجيل الدخول، إنشاء الحساب، إدارة الجلسات باستخدام **JWT** و **MongoDB** عبر **Mongoose**.

---

## المتطلبات

- Node.js >= 18
- npm أو yarn
- MongoDB (محلي أو Atlas)
- TypeScript

---
## الاعتمادات الأساسية
express - لإنشاء السيرفر
mongoose - للتعامل مع MongoDB
bcryptjs - لتشفير كلمات المرور
jsonwebtoken - لإنشاء والتحقق من JWT
dotenv - لإدارة المتغيرات السرية
typescript - لتطوير المشروع باستخدام TypeScript
ts-node-dev - لتشغيل المشروع في وضع التطوير
## بيئه الشروع 
src/
├─ models/       # نماذج Mongoose (User)
├─ routes/       # مسارات API (auth)
├─ middleware/   # Middlewares (auth)
├─ utils/        # مساعدات (generateToken)   
├─ app.ts       
├─ server.ts  
config

## تثبيت المشروع

```bash
# استنساخ المشروع
git clone https://github.com/IBR4NX/backend-server.git
cd backend-server

# تثبيت الاعتمادات
npm install

# تشغيل المشروع
npm run dev

