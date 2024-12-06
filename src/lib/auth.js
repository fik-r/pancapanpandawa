// "use server"
// import jwt from 'jsonwebtoken';

// const SECRET_KEY = 

// // Generate a token
// export async function generateToken(payload) {
//     return jwt.sign(payload, SECRET_KEY, { expiresIn: '1d' }); // Token valid for 1 day
// }

// // Verify a token
// export function verifyToken(token) {
//     try {
//         jwt.verify(token, SECRET_KEY);
//         return true;
//     } catch (error) {
//         console.error('Invalid token:', error.message);
//         return false;
//     }
// }