


import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const inputClass = "w-full px-4 py-2 bg-[#0d1114] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00baff]";

  const EyeIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
    </svg>
  );

  // -------------------------------
  // Submit / Signup Handler
  // -------------------------------
  const submit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    if (!fullName || !email || !password) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      // 1️⃣ Call backend register API
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: fullName, email, password })
      });

      const data = await res.json();

      if (res.ok) {
        // 2️⃣ JWT TOKEN store
        localStorage.setItem('token', data.token); // ✅ token stored
        console.log('JWT Token saved:', data.token);

        // 3️⃣ Navigate to protected home/dashboard page
        navigate('/home');
      } else {
        alert(data.message); // User exists / validation error
      }
    } catch (err) {
      console.error('Signup error:', err);
      alert('Server error');
    }
  };

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
          <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-2 h-2 bg-[#00baff] rounded-full"></div> 
              <div className="text-xl font-bold text-white">Aegis AI</div>
          </div>
          <div className="text-xl font-semibold text-gray-200">Create Your Account</div>
        </div>

        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
            <input
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              placeholder="Enter your full name"
              className={inputClass}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Work Email</label>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your work email address"
              className={inputClass}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <div className="relative">
              <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                placeholder="Create a secure password"
                className={`${inputClass} pr-10`}
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 cursor-pointer">
                <EyeIcon />
              </span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Confirm Password</label>
            <div className="relative">
              <input
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                type="password"
                placeholder="Re-enter your password"
                className={`${inputClass} pr-10`}
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 cursor-pointer">
                <EyeIcon />
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#00baff] text-black font-semibold py-2 rounded-lg mt-6 transition duration-200 hover:bg-[#00a6e0]"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account? <Link to="/login" className="font-semibold text-[#00baff] hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}
