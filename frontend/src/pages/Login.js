
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const submit = (e) => {
//     e.preventDefault();
//     if (email && password) {
//       console.log('Attempting login with:', email);
//       navigate('/home'); 
//     } else {
//       alert('Please enter credentials.');
//     }
//   };

//   const EmailIcon = () => (
//     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
//   );

//   const LockIcon = () => (
//     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-4a2 2 0 00-2-2H6a2 2 0 00-2 2v4a2 2 0 002 2z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10V8a3 3 0 016 0v2"></path></svg>
//   );

//   const EyeIcon = () => (
//     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
//   );

//   return (
//     // 1. Outer container: Dark background, centering, and relative positioning.
//     <div className="min-h-screen bg-[#0d1114] text-white flex items-center justify-center p-4 relative overflow-hidden">
      
//       {/* 2. Custom Background: Central Glow and Sparse Network Nodes */}
//       <div 
//         className="absolute inset-0 z-0" 
//         style={{
//           backgroundImage: 
//             // Layer 1: Central Blue Glow (behind the form)
//             'radial-gradient(circle at center, rgba(0, 187, 255, 0.1) 0%, transparent 45%),' +
//             // Layer 2: Sparse Nodes (Repeating light dots) - Less visible than before
//             'radial-gradient(circle at 1px 1px, #ffffff08 1px, transparent 0)',
//           backgroundSize: '100% 100%, 80px 80px', // Larger pattern for sparsity
//         }}
//       ></div>

//       {/* 3. Form Card Container - Z-10. Added custom box-shadow for blue edge glow. */}
//       <div 
//         className="relative z-10 w-full max-w-sm p-8 bg-[#1a1e22] rounded-xl shadow-2xl border border-white/5"
//         style={{
//             // Custom blue inner shadow for the glow on the card's edge
//             boxShadow: '0 0 20px rgba(0, 187, 255, 0.2), 0 0 10px rgba(0, 187, 255, 0.1) inset',
//             border: '1px solid rgba(0, 187, 255, 0.1)', // Subtle border line
//         }}
//       >
        
//         {/* Header/Title */}
//         <div className="text-center mb-8">
//           <div className="text-2xl font-bold text-white mb-1">Aegis AI</div>
//           <div className="text-lg text-gray-400">Secure Login</div>
//         </div>

//         <form onSubmit={submit} className="space-y-4">
          
//           {/* Email/Username Input */}
//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-1">Username or Email</label>
//             <div className="relative">
//               <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
//                 <EmailIcon />
//               </span>
//               <input
//                 value={email}
//                 onChange={e => setEmail(e.target.value)}
//                 placeholder="Enter your username or email"
//                 className="w-full pl-10 pr-4 py-2 bg-[#0d1114] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00baff]"
//               />
//             </div>
//           </div>
          
//           {/* Password Input */}
//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
//             <div className="relative">
//               <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
//                 <LockIcon />
//               </span>
//               <input
//                 value={password}
//                 onChange={e => setPassword(e.target.value)}
//                 type="password"
//                 placeholder="Enter your password"
//                 className="w-full pl-10 pr-10 py-2 bg-[#0d1114] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00baff]"
//               />
//               <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 cursor-pointer">
//                 <EyeIcon />
//               </span>
//             </div>
//           </div>
          
//           {/* Forgot Password Link */}
//           <div className="text-right text-sm">
//             <Link to="#" className="text-gray-500 hover:text-[#00baff]">Forgot Password?</Link>
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="w-full bg-[#00baff] text-black font-semibold py-2 rounded-lg mt-6 transition duration-200 hover:bg-[#00a6e0]"
//           >
//             Access System
//           </button>
//         </form>

//         {/* Footer Text */}
//         <div className="text-center text-xs text-gray-500 mt-6">
//           &copy; 2024 Aegis AI Business. All rights reserved.
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   // -------------------------------
//   // Icons
//   // -------------------------------
//   const EmailIcon = () => (
//     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
//     </svg>
//   );

//   const LockIcon = () => (
//     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-4a2 2 0 00-2-2H6a2 2 0 00-2 2v4a2 2 0 002 2z"></path>
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10V8a3 3 0 016 0v2"></path>
//     </svg>
//   );

//   const EyeIcon = () => (
//     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
//     </svg>
//   );

//   // -------------------------------
//   // Submit / Login Handler
//   // -------------------------------
//   const submit = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       alert('Please enter credentials.');
//       return;
//     }

//     try {
//       // 1️⃣ Call backend login API
//       const res = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password })
//       });

//       const data = await res.json();

//       if (res.ok) {
//         // 2️⃣ JWT TOKEN store
//         localStorage.setItem('token', data.token); // ✅ token stored
//         console.log('JWT Token saved:', data.token);

//         // 3️⃣ Navigate to protected home/dashboard page
//         navigate('/home');
//       } else {
//         alert(data.message); // Invalid credentials
//       }
//     } catch (err) {
//       console.error('Login error:', err);
//       alert('Server error');
//     }
//   };

//   // -------------------------------
//   // JSX
//   // -------------------------------
//   return (
//     <div className="min-h-screen bg-[#0d1114] text-white flex items-center justify-center p-4 relative overflow-hidden">
//       <div 
//         className="absolute inset-0 z-0" 
//         style={{
//           backgroundImage: 
//             'radial-gradient(circle at center, rgba(0, 187, 255, 0.1) 0%, transparent 45%),' +
//             'radial-gradient(circle at 1px 1px, #ffffff08 1px, transparent 0)',
//           backgroundSize: '100% 100%, 80px 80px',
//         }}
//       ></div>

//       <div 
//         className="relative z-10 w-full max-w-sm p-8 bg-[#1a1e22] rounded-xl shadow-2xl border border-white/5"
//         style={{
//             boxShadow: '0 0 20px rgba(0, 187, 255, 0.2), 0 0 10px rgba(0, 187, 255, 0.1) inset',
//             border: '1px solid rgba(0, 187, 255, 0.1)',
//         }}
//       >
//         <div className="text-center mb-8">
//           <div className="text-2xl font-bold text-white mb-1">Aegis AI</div>
//           <div className="text-lg text-gray-400">Secure Login</div>
//         </div>

//         <form onSubmit={submit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-1">Username or Email</label>
//             <div className="relative">
//               <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500"><EmailIcon /></span>
//               <input
//                 value={email}
//                 onChange={e => setEmail(e.target.value)}
//                 placeholder="Enter your username or email"
//                 className="w-full pl-10 pr-4 py-2 bg-[#0d1114] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00baff]"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
//             <div className="relative">
//               <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500"><LockIcon /></span>
//               <input
//                 value={password}
//                 onChange={e => setPassword(e.target.value)}
//                 type="password"
//                 placeholder="Enter your password"
//                 className="w-full pl-10 pr-10 py-2 bg-[#0d1114] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00baff]"
//               />
//               <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 cursor-pointer"><EyeIcon /></span>
//             </div>
//           </div>

//           <div className="text-right text-sm">
//             <Link to="#" className="text-gray-500 hover:text-[#00baff]">Forgot Password?</Link>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-[#00baff] text-black font-semibold py-2 rounded-lg mt-6 transition duration-200 hover:bg-[#00a6e0]"
//           >
//             Access System
//           </button>
//         </form>

//         <div className="text-center text-xs text-gray-500 mt-6">
//           &copy; 2024 Aegis AI Business. All rights reserved.
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // -------------------------------
  // Icons
  // -------------------------------
  const EmailIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
    </svg>
  );

  const LockIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-4a2 2 0 00-2-2H6a2 2 0 00-2 2v4a2 2 0 002 2z"></path>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10V8a3 3 0 016 0v2"></path>
    </svg>
  );

  const EyeIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
    </svg>
  );

  // -------------------------------
  // Submit / Login Handler (Updated)
  // -------------------------------
  const submit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please enter credentials.');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      // 🔍 Debugging logs
      console.log('res.ok:', res.ok);
      console.log('Response status:', res.status);
      console.log('Response data:', data);

      if (res.ok && data.token) {
        // ✅ Save token
        localStorage.setItem('token', data.token);
        console.log('JWT Token saved:', data.token);

        // ✅ Navigate to /home
        navigate('/home');
      } else {
        alert(data.message || 'Login failed. Check credentials.');
      }
    } catch (err) {
      console.error('Login error:', err);
      alert('Server error. Check backend.');
    }
  };

  // -------------------------------
  // JSX
  // -------------------------------
  return (
    <div className="min-h-screen bg-[#0d1114] text-white flex items-center justify-center p-4 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 
            'radial-gradient(circle at center, rgba(0, 187, 255, 0.1) 0%, transparent 45%),' +
            'radial-gradient(circle at 1px 1px, #ffffff08 1px, transparent 0)',
          backgroundSize: '100% 100%, 80px 80px',
        }}
      ></div>

      <div 
        className="relative z-10 w-full max-w-sm p-8 bg-[#1a1e22] rounded-xl shadow-2xl border border-white/5"
        style={{
            boxShadow: '0 0 20px rgba(0, 187, 255, 0.2), 0 0 10px rgba(0, 187, 255, 0.1) inset',
            border: '1px solid rgba(0, 187, 255, 0.1)',
        }}
      >
        <div className="text-center mb-8">
          <div className="text-2xl font-bold text-white mb-1">Aegis AI</div>
          <div className="text-lg text-gray-400">Secure Login</div>
        </div>

        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Username or Email</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500"><EmailIcon /></span>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your username or email"
                className="w-full pl-10 pr-4 py-2 bg-[#0d1114] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00baff]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500"><LockIcon /></span>
              <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                className="w-full pl-10 pr-10 py-2 bg-[#0d1114] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00baff]"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 cursor-pointer"><EyeIcon /></span>
            </div>
          </div>

          <div className="text-right text-sm">
            <Link to="#" className="text-gray-500 hover:text-[#00baff]">Forgot Password?</Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#00baff] text-black font-semibold py-2 rounded-lg mt-6 transition duration-200 hover:bg-[#00a6e0]"
          >
            Access System
          </button>
        </form>

        <div className="text-center text-xs text-gray-500 mt-6">
          &copy; 2024 Aegis AI Business. All rights reserved.
        </div>
      </div>
    </div>
  );
}
