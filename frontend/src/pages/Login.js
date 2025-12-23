


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
//   // Submit / Login Handler (Updated)
//   // -------------------------------
//   const submit = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       alert('Please enter credentials.');
//       return;
//     }

//     try {
//       const res = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password })
//       });

//       const data = await res.json();

//       // 🔍 Debugging logs
//       console.log('res.ok:', res.ok);
//       console.log('Response status:', res.status);
//       console.log('Response data:', data);

//       if (res.ok && data.token) {
//         // ✅ Save token
//         localStorage.setItem('token', data.token);
//         console.log('JWT Token saved:', data.token);

//         // ✅ Navigate to /home
//         navigate('/home');
//       } else {
//         alert(data.message || 'Login failed. Check credentials.');
//       }
//     } catch (err) {
//       console.error('Login error:', err);
//       alert('Server error. Check backend.');
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

// 
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) navigate('/home');
  }, [navigate]);

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
      if (res.ok && data.token) {
        localStorage.setItem('token', data.token);
        navigate('/home');
      } else {
        alert(data.message || 'Login failed.');
      }
    } catch (err) {
      console.error(err);
      alert('Server error.');
    }
  };

  return (
    <div className="font-sans antialiased bg-[#F8FAFC] dark:bg-[#0F172A] min-h-screen flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-300">
      
      {/* --- AURORA BACKGROUND EFFECTS --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[50%] bg-purple-300/30 dark:bg-purple-900/20 rounded-full blur-[80px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[50%] bg-blue-300/30 dark:bg-blue-900/20 rounded-full blur-[80px] pointer-events-none animate-pulse"></div>
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-indigo-200/40 dark:bg-indigo-800/20 rounded-full blur-[60px] pointer-events-none"></div>

      <div className="w-full max-w-md px-6 py-8 relative z-10">
        
        {/* Branding Section */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30 transition-transform hover:scale-110">
              <span className="material-icons text-white text-2xl notranslate">security</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">AI Surveillance</h1>
          </div>
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-2">
            Welcome Back
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Enter your credentials to access the security dashboard.</p>
        </div>

        {/* Main Glass Card */}
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-2xl border border-white/50 dark:border-slate-700/50 rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-slate-200/50 dark:shadow-black/30">
          
          <form onSubmit={submit} className="space-y-6">
            
            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1" htmlFor="email">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-indigo-500">
                  <span className="material-icons text-slate-400 text-xl notranslate">mail_outline</span>
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 shadow-sm font-medium"
                  placeholder="name@company.com"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="password">
                  Password
                </label>
                <Link to="#" className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition-colors">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-indigo-500">
                  <span className="material-icons text-slate-400 text-xl notranslate">lock_outline</span>
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 shadow-sm font-medium"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center py-4 px-4 border border-transparent rounded-2xl shadow-lg shadow-indigo-500/30 text-base font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wider text-xs"
            >
              Sign In
            </button>

            {/* Divider */}
            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
              <span className="flex-shrink-0 mx-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Or continue with</span>
              <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button type="button" className="flex items-center justify-center py-3.5 px-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition duration-200 group shadow-sm">
                <img alt="Google" className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" src="https://www.svgrepo.com/show/475656/google-color.svg" />
                <span className="text-sm font-bold text-slate-600 dark:text-slate-300">Google</span>
              </button>
              <button type="button" className="flex items-center justify-center py-3.5 px-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition duration-200 group shadow-sm">
                <img alt="Apple" className="h-5 w-5 mr-2 dark:invert group-hover:scale-110 transition-transform" src="https://www.svgrepo.com/show/511330/apple-173.svg" />
                <span className="text-sm font-bold text-slate-600 dark:text-slate-300">Apple</span>
              </button>
            </div>
          </form>
        </div>

        {/* Bottom Link */}
        <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400 font-medium">
          Don't have an account?{' '}
          <Link to="/signup" className="font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition-colors underline-offset-4 hover:underline">
            Create an account
          </Link>
        </p>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <p className="text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-[0.4em]">
            © 2024 AI Surveillance Inc. <br/> 
            <span className="opacity-50">Protected by next-gen security protocol</span>
          </p>
        </div>
      </div>
    </div>
  );
}