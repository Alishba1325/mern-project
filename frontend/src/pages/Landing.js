


// 
// import React, { useEffect, useState, useRef } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'

// function CapabilityCard({ icon, title, desc, iconBg }) {
//   const ref = useRef();
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setVisible(true);
//       },
//       { threshold: 0.1 }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className={`p-10 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 transition-all duration-700 ease-out text-left
//         ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
//     >
//       <div className={`w-12 h-12 flex items-center justify-center rounded-lg mb-6 ${iconBg}`}>
//         <span className="text-2xl">{icon}</span>
//       </div>
//       <h3 className="font-bold text-gray-800 text-xl mb-4 leading-tight">{title}</h3>
//       <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
//     </div>
//   );
// }

// export default function Landing() {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) setIsLoggedIn(true);
//   }, []);

//   const handleGetStarted = () => {
//     navigate(isLoggedIn ? '/home' : '/signup');
//   };

//   return (
//     <div className="min-h-screen font-sans selection:bg-indigo-100" 
//       style={{
//         backgroundColor: '#f8faff',
//         backgroundImage: `radial-gradient(circle at 50% -20%, #e0e7ff 0%, #f8faff 50%)`
//       }}>
      
//       <div className="container mx-auto px-6 max-w-7xl">
//         {/* Header */}
//         <header className="flex items-center justify-between py-8">
//           <div className="flex items-center gap-12">
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
//                  <span className="text-white text-lg">✱</span>
//               </div>
//               <span className="text-xl font-bold text-gray-800 tracking-tight">AI Surveillance</span>
//             </div>
//             <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-500">
//               <Link to="#" className="hover:text-indigo-600 transition-colors">Features</Link>
//               <Link to="#" className="hover:text-indigo-600 transition-colors">How It Works</Link>
//               <Link to="#" className="hover:text-indigo-600 transition-colors">Pricing</Link>
//             </nav>
//           </div>
//           <div className="flex gap-6 items-center">
//             {!isLoggedIn && (
//               <>
//                 <Link to="/login" className="text-sm font-semibold text-gray-700 hover:text-indigo-600">Login</Link>
//                 <Link to="/signup" className="bg-[#4f46e5] text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all">
//                   Sign Up
//                 </Link>
//               </>
//             )}
//           </div>
//         </header>

//         {/* Hero Section */}
//         <main className="text-center pt-24 pb-32">
//           <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-indigo-50 border border-indigo-100">
//              <span className="text-[10px] uppercase tracking-widest font-bold text-indigo-600 flex items-center gap-2">
//                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse"></span>
//                Next Generation Security
//              </span>
//           </div>
          
//           <h1 className="text-6xl md:text-8xl font-black text-[#1e293b] leading-[1.1] mb-8 tracking-tight">
//             Intelligent Surveillance, <br/>
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-500">
//               Redefined
//             </span>
//           </h1>
          
//           <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
//             Leverage advanced AI to detect incidents in real-time and predict potential threats before they happen with clarity and precision.
//           </p>

//           <div className="flex justify-center gap-4">
//             <button
//               onClick={handleGetStarted}
//               className="bg-[#4f46e5] text-white px-10 py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-indigo-200 transition-all transform hover:-translate-y-1"
//             >
//               {isLoggedIn ? "Go to Dashboard" : "Get Started"}
//             </button>
//             <button className="border border-gray-200 bg-white text-gray-700 px-10 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">
//               Learn More
//             </button>
//           </div>
//         </main>

//         {/* Core Capabilities */}
//         <section className="pb-32">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Core Capabilities</h2>
//             <p className="text-gray-500 max-w-xl mx-auto">Explore how our AI-powered system provides unparalleled security and insights through cutting-edge technology.</p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <CapabilityCard 
//               icon="👁️" 
//               title="Real-time Incident Detection" 
//               desc="Instantly identify threats and unusual activities with cutting-edge AI analysis, ensuring rapid response when it matters most." 
//               iconBg="bg-blue-50 text-blue-600"
//             />
//             <CapabilityCard 
//               icon="📈" 
//               title="Predictive Analytics" 
//               desc="Anticipate potential security breaches before they occur with our advanced predictive models and data-driven insights." 
//               iconBg="bg-emerald-50 text-emerald-600"
//             />
//             <CapabilityCard 
//               icon="🔔" 
//               title="Automated Alerts" 
//               desc="Receive immediate notifications and seamlessly integrate with your existing security infrastructure for a unified system." 
//               iconBg="bg-purple-50 text-purple-600"
//             />
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="border-t border-gray-100 py-16 text-center">
//           <div className="flex justify-center gap-8 mb-8">
//             <Link to="#" className="text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors">Contact Us</Link>
//             <Link to="#" className="text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors">Privacy Policy</Link>
//             <Link to="#" className="text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors">Terms of Service</Link>
//           </div>
//           <div className="flex justify-center gap-6 mb-8 text-xl text-gray-400">
//             <a href="#" className="hover:text-indigo-600 transition-colors"><FaTwitter /></a>
//             <a href="#" className="hover:text-indigo-600 transition-colors"><FaLinkedin /></a>
//             <a href="#" className="hover:text-indigo-600 transition-colors"><FaFacebook /></a>
//           </div>
//           <p className="text-gray-400 text-xs tracking-widest">© 2024 AI SURVEILLANCE INC. ALL RIGHTS RESERVED.</p>
//         </footer>
//       </div>
//     </div>
//   )
// }
// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'

// // Matching specific icon styles
// const Icons = {
//   Detection: () => (
//     <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
//   ),
//   Analytics: () => (
//     <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12h-4l-3 9L9 3l-3 9H2"/></svg>
//   ),
//   Alerts: () => (
//     <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"/></svg>
//   )
// }

// function CapabilityCard({ icon: Icon, title, desc, iconBg, iconColor }) {
//   return (
//     <div className="p-10 bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col items-start text-left hover:shadow-xl transition-all duration-300">
//       <div className={`w-14 h-14 flex items-center justify-center rounded-2xl mb-8 ${iconBg} ${iconColor} shadow-sm`}>
//         <Icon />
//       </div>
//       <h3 className="font-bold text-[#1e293b] text-xl mb-4 leading-tight">{title}</h3>
//       <p className="text-gray-400 text-[15px] leading-relaxed font-medium">{desc}</p>
//     </div>
//   );
// }

// export default function Landing() {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) setIsLoggedIn(true);
//   }, []);

//   return (
//     <div className="min-h-screen font-sans selection:bg-indigo-100 relative" 
//       style={{
//         backgroundColor: '#f9fbff',
//         backgroundImage: `
//           radial-gradient(circle at 20% 20%, #eff2ff 0%, transparent 40%),
//           radial-gradient(circle at 80% 10%, #f5f3ff 0%, transparent 40%),
//           radial-gradient(circle at 50% 50%, #f9fbff 0%, #f9fbff 100%)
//         `
//       }}>
      
//       <div className="container mx-auto px-6 max-w-[1240px]">
//         {/* Floating Navbar (Match Image) */}
//         <div className="pt-6">
//           <header className="bg-white/80 backdrop-blur-md rounded-2xl border border-gray-100 shadow-sm px-8 py-4 flex items-center justify-between">
//             <div className="flex items-center gap-12">
//               <div className="flex items-center gap-2">
//                 <div className="w-8 h-8 bg-[#4f46e5] rounded-lg flex items-center justify-center">
//                   <span className="text-white text-lg font-bold">✱</span>
//                 </div>
//                 <span className="text-lg font-extrabold text-[#1e293b] tracking-tight">AI Surveillance</span>
//               </div>
//               <nav className="hidden lg:flex gap-8 text-[14px] font-semibold text-gray-500">
//                 <Link to="#" className="hover:text-indigo-600 transition-colors">Features</Link>
//                 <Link to="#" className="hover:text-indigo-600 transition-colors">How It Works</Link>
//                 <Link to="#" className="hover:text-indigo-600 transition-colors">Pricing</Link>
//               </nav>
//             </div>
//             <div className="flex gap-6 items-center">
//               <Link to="/login" className="text-[14px] font-bold text-gray-600 hover:text-indigo-600">Login</Link>
//               <Link to="/signup" className="bg-[#4f46e5] text-white px-6 py-2.5 rounded-xl text-[14px] font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all">
//                 Sign Up
//               </Link>
//             </div>
//           </header>
//         </div>

//         {/* Hero Section */}
//         <main className="text-center pt-24 pb-32">
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white border border-indigo-50 shadow-sm">
//             <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
//             <span className="text-[10px] uppercase tracking-widest font-black text-indigo-500">
//               Next Generation Security
//             </span>
//           </div>
          
//           <h1 className="text-5xl md:text-[80px] font-[900] text-[#1e293b] leading-[1.1] mb-8 tracking-tighter">
//             Intelligent Surveillance, <br/>
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4f46e5] to-[#0ea5e9]">
//               Redefined
//             </span>
//           </h1>
          
//           <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg font-medium leading-relaxed">
//             Leverage advanced AI to detect incidents in real-time and predict potential threats before they happen with clarity and precision.
//           </p>

//           <div className="flex justify-center gap-4">
//             <button className="bg-[#4f46e5] text-white px-9 py-4 rounded-2xl font-bold text-base shadow-xl shadow-indigo-200 hover:-translate-y-0.5 transition-all">
//               Get Started
//             </button>
//             <button className="bg-white border border-gray-200 text-gray-600 px-9 py-4 rounded-2xl font-bold text-base hover:bg-gray-50 transition-all shadow-sm">
//               Learn More
//             </button>
//           </div>
//         </main>

//         {/* Core Capabilities */}
//         <section className="pb-40">
//           <div className="text-center mb-16">
//             <h2 className="text-[40px] font-black text-[#1e293b] mb-4">Core Capabilities</h2>
//             <p className="text-gray-400 font-medium max-w-xl mx-auto text-lg">
//               Explore how our AI-powered system provides unparalleled security and insights through cutting-edge technology.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <CapabilityCard 
//               icon={Icons.Detection} 
//               title="Real-time Incident Detection" 
//               desc="Instantly identify threats and unusual activities with cutting-edge AI analysis, ensuring rapid response when it matters most." 
//               iconBg="bg-blue-50"
//               iconColor="text-blue-500"
//             />
//             <CapabilityCard 
//               icon={Icons.Analytics} 
//               title="Predictive Analytics" 
//               desc="Anticipate potential security breaches before they occur with our advanced predictive models and data-driven insights." 
//               iconBg="bg-emerald-50"
//               iconColor="text-emerald-500"
//             />
//             <CapabilityCard 
//               icon={Icons.Alerts} 
//               title="Automated Alerts" 
//               desc="Receive immediate notifications and seamlessly integrate with your existing security infrastructure for a unified system." 
//               iconBg="bg-purple-50"
//               iconColor="text-purple-500"
//             />
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="py-20 text-center">
//           <div className="flex justify-center gap-10 mb-8 text-[14px] font-bold text-gray-400">
//             <Link to="#" className="hover:text-indigo-600 transition-colors">Contact Us</Link>
//             <Link to="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link>
//             <Link to="#" className="hover:text-indigo-600 transition-colors">Terms of Service</Link>
//           </div>
//           <div className="flex justify-center gap-6 mb-8 text-xl text-gray-300">
//             <a href="#" className="hover:text-indigo-600 transition-colors"><FaTwitter /></a>
//             <a href="#" className="hover:text-indigo-600 transition-colors"><FaLinkedin /></a>
//             <a href="#" className="hover:text-indigo-600 transition-colors"><FaFacebook /></a>
//           </div>
//           <p className="text-gray-300 text-[12px] font-bold tracking-widest uppercase">© 2024 AI Surveillance Inc. All rights reserved.</p>
//         </footer>
//       </div>
//     </div>
//   )
// }
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// Capability Card Component
function CapabilityCard({ icon, title, desc, iconBg, iconColor }) {
  return (
    <div className="group bg-white dark:bg-[#1E202E] p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-indigo-500/20 dark:hover:border-indigo-500/30">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${iconBg} ${iconColor}`}>
        <span className="material-icons-round notranslate">{icon}</span>
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

export default function Landing() {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="font-sans bg-[#F8FAFC] dark:bg-[#0F111A] text-slate-900 dark:text-slate-100 transition-colors duration-300 antialiased overflow-x-hidden min-h-screen">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-[#0F111A]/80 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                <span className="material-icons-round text-indigo-500 text-xl notranslate">hub</span>
              </div>
              <span className="font-bold text-lg tracking-tight">AI Surveillance</span>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center text-sm font-medium text-slate-500 dark:text-slate-400">
              <a href="#features" className="hover:text-indigo-500 transition-colors">Features</a>
              <a href="#how-it-works" className="hover:text-indigo-500 transition-colors">How It Works</a>
              <a href="#pricing" className="hover:text-indigo-500 transition-colors">Pricing</a>
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={() => navigate('/login')}
                className="hidden md:block text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-500 transition-colors"
              >
                Login
              </button>
              <button 
                onClick={() => navigate('/signup')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-indigo-500/25 transition-all transform active:scale-95"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        {/* Hero Glow Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_50%_50%,_rgba(91,77,255,0.15)_0%,_rgba(255,255,255,0)_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,_rgba(91,77,255,0.2)_0%,_rgba(15,17,26,0)_60%)] opacity-80"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-8 border border-indigo-500/10">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse"></span>
            Next Generation Security
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
            Intelligent Surveillance, <br className="hidden sm:block"/>
            <span className="bg-gradient-to-r from-[#5B4DFF] to-[#2CD9FF] bg-clip-text text-transparent">
              Redefined
            </span>
          </h1>
          
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Leverage advanced AI to detect incidents in real-time and predict potential threats before they happen with clarity and precision.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-xl font-semibold shadow-xl shadow-indigo-500/30 transition-all transform hover:-translate-y-1 active:translate-y-0">
              Get Started
            </button>
            <button className="w-full sm:w-auto bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 text-slate-900 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-700 px-8 py-3.5 rounded-xl font-semibold shadow-sm transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section id="features" className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-slate-500 dark:text-slate-400">
              Explore how our AI-powered system provides unparalleled security and insights through cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CapabilityCard 
              icon="visibility" 
              title="Real-time Incident Detection" 
              desc="Instantly identify threats and unusual activities with cutting-edge AI analysis, ensuring rapid response when it matters most." 
              iconBg="bg-blue-50 dark:bg-blue-900/20"
              iconColor="text-blue-500 dark:text-blue-400"
            />
            <CapabilityCard 
              icon="analytics" 
              title="Predictive Analytics" 
              desc="Anticipate potential security breaches before they occur with our advanced predictive models and data-driven insights." 
              iconBg="bg-emerald-50 dark:bg-emerald-900/20"
              iconColor="text-emerald-500 dark:text-emerald-400"
            />
            <CapabilityCard 
              icon="notifications_active" 
              title="Automated Alerts" 
              desc="Receive immediate notifications and seamlessly integrate with your existing security infrastructure for a unified system." 
              iconBg="bg-purple-50 dark:bg-purple-900/20"
              iconColor="text-purple-500 dark:text-purple-400"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-[#1E202E]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <div className="flex space-x-6 text-sm font-semibold text-slate-500 dark:text-slate-400 mb-8">
            <Link to="#" className="hover:text-indigo-500 transition-colors">Contact Us</Link>
            <Link to="#" className="hover:text-indigo-500 transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-indigo-500 transition-colors">Terms of Service</Link>
          </div>
          <p className="text-xs font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest">
            © 2024 AI Surveillance Inc. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Theme Toggle Button */}
      <button 
        onClick={toggleDarkMode}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-slate-800 shadow-2xl border border-gray-200 dark:border-gray-700 text-slate-900 dark:text-white hover:scale-110 transition-transform active:scale-95"
      >
        <span className="material-icons-round notranslate">
          {isDarkMode ? 'light_mode' : 'dark_mode'}
        </span>
      </button>
    </div>
  )
}