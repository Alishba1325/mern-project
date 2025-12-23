


// 

// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// export default function Signup() {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const navigate = useNavigate();

//   const submit = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       alert('Passwords do not match.');
//       return;
//     }
//     if (!fullName || !email || !password) {
//       alert('Please fill out all fields.');
//       return;
//     }

//     try {
//       const res = await fetch('http://localhost:5000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name: fullName, email, password })
//       });
//       const data = await res.json();
//       if (res.ok) {
//         localStorage.setItem('token', data.token);
//         navigate('/home');
//       } else {
//         alert(data.message);
//       }
//     } catch (err) {
//       console.error('Signup error:', err);
//       alert('Server error');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-[#f8faff]" 
//          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      
//       {/* Background Glows matching the Login Theme */}
//       <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-[120px]"></div>
//       <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[120px]"></div>

//       <div className="relative z-10 w-full max-w-[500px]">
//         {/* Header Section */}
//         <div className="flex flex-col items-center mb-8">
//           <div className="w-14 h-14 bg-gradient-to-tr from-[#6366f1] to-[#8b5cf6] rounded-2xl flex items-center justify-center shadow-2xl shadow-indigo-200 mb-4 transition-transform hover:scale-110">
//             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
//             </svg>
//           </div>
//           <span className="bg-indigo-50 text-indigo-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-2 border border-indigo-100">
//             Next Generation Security
//           </span>
//           <h1 className="text-4xl font-[1000] text-[#1e293b] tracking-tight">Create Account</h1>
//           <p className="text-slate-400 text-sm mt-2 font-medium">Join the future of intelligent surveillance</p>
//         </div>

//         {/* Signup Card */}
//         <div className="bg-white/90 backdrop-blur-2xl rounded-[45px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.06)] border border-white p-10 md:p-12">
          
//           {/* Social Buttons */}
//           <div className="grid grid-cols-2 gap-4 mb-8">
//             <button className="flex items-center justify-center gap-3 border border-slate-100 py-3.5 rounded-2xl hover:bg-slate-50 transition-all font-bold text-slate-600 text-sm">
//               <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="google" /> Google
//             </button>
//             <button className="flex items-center justify-center gap-3 border border-slate-100 py-3.5 rounded-2xl hover:bg-slate-50 transition-all font-bold text-slate-600 text-sm">
//               <img src="https://www.svgrepo.com/show/511330/apple-173.svg" className="w-5 h-5" alt="apple" /> Apple
//             </button>
//           </div>

//           <div className="relative flex justify-center text-[10px] uppercase font-black tracking-[0.2em] text-slate-300 mb-8">
//             <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
//             <span className="relative bg-white px-4">Or continue with email</span>
//           </div>

//           <form onSubmit={submit} className="space-y-4">
//             {/* Full Name */}
//             <div className="relative group">
//               <span className="absolute inset-y-0 left-5 flex items-center text-slate-300 group-focus-within:text-indigo-500 transition-colors">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
//               </span>
//               <input
//                 value={fullName}
//                 onChange={e => setFullName(e.target.value)}
//                 placeholder="Full Name"
//                 className="w-full pl-14 pr-6 py-4 bg-[#f8faff] border border-slate-100 rounded-[20px] focus:outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500 transition-all font-semibold text-slate-700 placeholder:text-slate-300"
//               />
//             </div>

//             {/* Email */}
//             <div className="relative group">
//               <span className="absolute inset-y-0 left-5 flex items-center text-slate-300 group-focus-within:text-indigo-500 transition-colors">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
//               </span>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={e => setEmail(e.target.value)}
//                 placeholder="Email Address"
//                 className="w-full pl-14 pr-6 py-4 bg-[#f8faff] border border-slate-100 rounded-[20px] focus:outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500 transition-all font-semibold text-slate-700 placeholder:text-slate-300"
//               />
//             </div>

//             {/* Password */}
//             <div className="relative group">
//               <span className="absolute inset-y-0 left-5 flex items-center text-slate-300 group-focus-within:text-indigo-500 transition-colors">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-4a2 2 0 00-2-2H6a2 2 0 00-2 2v4a2 2 0 002 2zM9 10V8a3 3 0 016 0v2" /></svg>
//               </span>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={e => setPassword(e.target.value)}
//                 placeholder="Password"
//                 className="w-full pl-14 pr-6 py-4 bg-[#f8faff] border border-slate-100 rounded-[20px] focus:outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500 transition-all font-semibold text-slate-700 placeholder:text-slate-300"
//               />
//             </div>

//             {/* Confirm Password */}
//             <div className="relative group">
//               <span className="absolute inset-y-0 left-5 flex items-center text-slate-300 group-focus-within:text-indigo-500 transition-colors">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
//               </span>
//               <input
//                 type="password"
//                 value={confirmPassword}
//                 onChange={e => setConfirmPassword(e.target.value)}
//                 placeholder="Confirm Password"
//                 className="w-full pl-14 pr-6 py-4 bg-[#f8faff] border border-slate-100 rounded-[20px] focus:outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500 transition-all font-semibold text-slate-700 placeholder:text-slate-300"
//               />
//             </div>

//             {/* Terms */}
//             <div className="flex items-center gap-3 px-2 py-2">
//               <input type="checkbox" className="w-5 h-5 rounded-lg border-slate-200 text-indigo-600 focus:ring-indigo-500" required />
//               <label className="text-xs text-slate-400 font-medium">
//                 I agree to the <span className="text-indigo-600 font-bold cursor-pointer">Terms</span> and <span className="text-indigo-600 font-bold cursor-pointer">Privacy Policy</span>
//               </label>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-[#6366f1] to-[#4f46e5] text-white font-black py-5 rounded-[22px] shadow-2xl shadow-indigo-200 hover:scale-[1.02] active:scale-95 transition-all duration-300 mt-4 tracking-wide"
//             >
//               Create Account
//             </button>
//           </form>

//           <p className="text-center text-sm text-slate-400 mt-10 font-medium">
//             Already have an account? <Link to="/login" className="font-black text-indigo-600 hover:underline underline-offset-8">Log In</Link>
//           </p>
//         </div>

//         {/* Footer */}
//         <div className="mt-8 text-center">
//            <p className="text-slate-300 text-[10px] font-black tracking-[0.4em] uppercase">© 2024 AI Surveillance Hub</p>
//         </div>
//       </div>
//     </div>
//   );
// }
// 
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: fullName, email, password })
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token);
        navigate('/home');
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error('Signup error:', err);
    }
  };

  return (
    <div className="bg-[#f8fafc] dark:bg-[#0f172a] text-slate-800 dark:text-slate-100 font-sans antialiased min-h-screen flex flex-col relative overflow-hidden transition-all duration-300">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-100/30 to-transparent dark:from-blue-900/10 pointer-events-none"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Header - Fixed Alignment */}
      <header className="w-full max-w-7xl mx-auto p-6 flex justify-between items-center z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
            <span className="material-icons-round notranslate text-2xl">data_usage</span>
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">AI Surveillance</span>
        </div>
        <Link to="/login" className="text-sm font-semibold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-white transition-colors">
          Log In
        </Link>
      </header>

      {/* Main Container */}
      <main className="flex-grow flex flex-col justify-center px-6 py-10 z-10 w-full max-w-md mx-auto">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-[10px] font-bold text-indigo-600 dark:text-indigo-300 mb-4 shadow-sm uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
            Next Generation Security
          </div>
          <h1 className="text-4xl font-[1000] mb-3 tracking-tight text-slate-900 dark:text-white">
            Create Account
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
            Join the future of intelligent surveillance.
          </p>
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button className="flex items-center justify-center gap-3 py-3 px-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">
            <img alt="G" className="w-5 h-5" src="https://www.svgrepo.com/show/475656/google-color.svg" />
            <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Google</span>
          </button>
          <button className="flex items-center justify-center gap-3 py-3 px-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">
            <img alt="A" className="w-5 h-5 dark:invert" src="https://www.svgrepo.com/show/511330/apple-173.svg" />
            <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Apple</span>
          </button>
        </div>

        <div className="relative mb-8 text-center">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200 dark:border-slate-800"></div></div>
          <span className="relative bg-[#f8fafc] dark:bg-[#0f172a] px-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Or continue with email</span>
        </div>

        {/* Inputs */}
        <form onSubmit={submit} className="space-y-4">
          <div className="relative">
            <span className="material-icons-round notranslate absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl pointer-events-none">person</span>
            <input 
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-semibold text-slate-700 dark:text-white placeholder:text-slate-400 shadow-sm"
              placeholder="Full Name" 
            />
          </div>

          <div className="relative">
            <span className="material-icons-round notranslate absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl pointer-events-none">email</span>
            <input 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-semibold text-slate-700 dark:text-white placeholder:text-slate-400 shadow-sm"
              placeholder="Email Address" 
            />
          </div>

          <div className="relative">
            <span className="material-icons-round notranslate absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl pointer-events-none">lock</span>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-semibold text-slate-700 dark:text-white placeholder:text-slate-400 shadow-sm"
              placeholder="Password" 
            />
          </div>

          <div className="relative">
            <span className="material-icons-round notranslate absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl pointer-events-none">lock_reset</span>
            <input 
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-semibold text-slate-700 dark:text-white placeholder:text-slate-400 shadow-sm"
              placeholder="Confirm Password" 
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-black shadow-xl shadow-indigo-500/30 hover:scale-[1.01] active:scale-[0.98] transition-all mt-4 tracking-wide"
          >
            Create Account
          </button>
        </form>

        <p className="mt-8 text-center text-sm font-semibold text-slate-500">
          Already have an account? <Link to="/login" className="text-indigo-600 font-bold hover:underline underline-offset-4">Log In</Link>
        </p>
      </main>

      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </div>
  );
}