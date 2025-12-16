

// import React, { useEffect, useState, useRef } from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// function CapabilityCard({ icon, title, desc, borderColor, glowColor }) {
//   const ref = useRef();
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setVisible(true);
//       },
//       { threshold: 0.5 }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className={`relative p-8 bg-card-bg rounded-xl border ${borderColor} shadow-xl transform transition-transform duration-700 ease-out
//         ${visible ? 'scale-105 translate-y-0 opacity-100' : 'scale-95 translate-y-10 opacity-0'}
//         hover:scale-105`}
//     >
//       {/* Glow behind the border */}
//       <div
//         className={`absolute -inset-1 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500`}
//         style={{
//           boxShadow: `0 0 20px 6px ${glowColor}`,
//           zIndex: -1,
//         }}
//       ></div>

//       <div className="text-3xl mb-4">{icon}</div>
//       <h3 className="font-semibold text-xl mb-2">{title}</h3>
//       <p className="text-gray-400 text-sm">{desc}</p>
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
//     <div
//       className="min-h-screen text-white relative overflow-hidden"
//       style={{
//         backgroundColor: '#0d1114', // dark black
//         backgroundImage: `
//           radial-gradient(circle at 10% 10%, rgba(0, 187, 255, 0.3) 0%, transparent 40%),
//           radial-gradient(circle at center, rgba(0, 0, 0, 0.9) 0%, #0d1114 100%)
//         `,
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover',
//       }}
//     >
//       <div className="container mx-auto px-6 py-4">
//         {/* Header Section */}
//         <div className="bg-card-bg rounded-xl shadow-xl px-6 mb-12">
//           <header className="flex items-center justify-between py-4">
//             <div className="flex items-center gap-6">
//               <div className="flex items-center gap-2">
//                 <span className="text-xl text-primary-blue mr-1" style={{ fontSize: '24px' }}>✱</span>
//                 <span className="text-xl font-bold text-white">AI Surveillance</span>
//               </div>
//               <nav className="hidden md:flex gap-6 text-sm text-gray-400">
//                 <Link to="#" className="hover:text-primary-blue transition-colors">Features</Link>
//                 <Link to="#" className="hover:text-primary-blue transition-colors">How It Works</Link>
//                 <Link to="#" className="hover:text-primary-blue transition-colors">Pricing</Link>
//               </nav>
//             </div>
//             <nav className="flex gap-3 items-center">
//               {!isLoggedIn && (
//                 <>
//                   <Link to="/login" className="px-4 py-2 text-sm rounded-lg text-white bg-gray-700/50 hover:bg-gray-700 transition-colors">Login</Link>
//                   <Link to="/signup" className="bg-primary-blue text-black px-4 py-2 text-sm rounded-lg font-semibold hover:bg-[#00a6e0] transition-colors">Sign Up</Link>
//                 </>
//               )}
//             </nav>
//           </header>
//         </div>

//         {/* Main Hero Section */}
//         <main className="text-center py-20 md:py-32">
//           <h1 className="text-7xl md:text-8xl font-extrabold leading-tight mb-6"> 
//             Intelligent Surveillance,<br/>Redefined
//           </h1>
//           <p className="text-gray-500 max-w-3xl mx-auto mb-12 text-lg">
//             Leverage advanced AI to detect incidents in real-time and predict potential threats before they happen.
//           </p>
//           <div className="flex justify-center gap-4">
//             <button
//               onClick={handleGetStarted}
//               className="bg-primary-blue text-black px-8 py-3.5 rounded-lg font-bold hover:bg-[#00a6e0] transition-colors shadow-lg shadow-primary-blue/30 text-base"
//             >
//                 {isLoggedIn ? "Go to Dashboard" : "Get Started"}
//             </button>
//             <button className="border border-gray-700 text-white px-8 py-3.5 rounded-lg bg-transparent hover:bg-gray-800 transition-colors text-base">
//                 Learn More
//             </button>
//           </div>
//         </main>

//         {/* Core Capabilities Section with Hover Glow */}
//         <section className="mt-16 pb-20">
//           <h2 className="text-3xl text-center mb-12">Core Capabilities</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             <CapabilityCard 
//               icon="👁️" 
//               title="Real-time Incident Detection" 
//               desc="Instantly identify threats and unusual activities with cutting-edge AI analysis, ensuring rapid response." 
//               borderColor="border-blue-900/50" 
//               glowColor="rgba(0, 187, 255, 0.6)" 
//             />
//             <CapabilityCard 
//               icon="📈" 
//               title="Predictive Analytics" 
//               desc="Anticipate potential security breaches before they occur with our advanced predictive models and data-driven insights." 
//               borderColor="border-green-900/50" 
//               glowColor="rgba(0, 255, 128, 0.5)" 
//             />
//             <CapabilityCard 
//               icon="🔔" 
//               title="Automated Alerts & Integration" 
//               desc="Receive immediate notifications and seamlessly integrate with your existing security infrastructure for a unified system." 
//               borderColor="border-red-900/50" 
//               glowColor="rgba(255, 0, 102, 0.5)" 
//             />
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="text-center py-6 text-gray-500 text-sm border-t border-gray-800">
//           <div className="flex justify-center gap-6 mb-3 text-gray-600">
//             <a href="#" className="hover:text-primary-blue transition-colors">LinkedIn</a>
//             <a href="#" className="hover:text-primary-blue transition-colors">Twitter</a>
//             <a href="#" className="hover:text-primary-blue transition-colors">Facebook</a>
//           </div>
//           <div className="flex justify-center gap-4 mb-2">
//             <a href="#" className="hover:text-white transition-colors">Contact Us</a>
//             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
//             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
//           </div>
//           <p className="text-gray-600 mt-2">© 2024 AI Surveillance Inc. All rights reserved.</p>
//         </footer>
//       </div>
//     </div>
//   )
// }


import React, { useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'

function CapabilityCard({ icon, title, desc, borderColor, glowColor }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative p-8 bg-card-bg rounded-xl border ${borderColor} shadow-xl transform transition-transform duration-700 ease-out
        ${visible ? 'scale-105 translate-y-0 opacity-100' : 'scale-95 translate-y-10 opacity-0'}
        hover:scale-105`}
    >
      {/* Glow behind the border */}
      <div
        className={`absolute -inset-1 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500`}
        style={{
          boxShadow: `0 0 20px 6px ${glowColor}`,
          zIndex: -1,
        }}
      ></div>

      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="font-semibold text-xl mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  );
}

export default function Landing() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) setIsLoggedIn(true);
  }, []);

  const handleGetStarted = () => {
    navigate(isLoggedIn ? '/home' : '/signup');
  };

  return (
    <div
      className="min-h-screen text-white relative overflow-hidden"
      style={{
        backgroundColor: '#0d1114', // dark black
        backgroundImage: `
          radial-gradient(circle at 10% 10%, rgba(0, 187, 255, 0.3) 0%, transparent 40%),
          radial-gradient(circle at center, rgba(0, 0, 0, 0.9) 0%, #0d1114 100%)
        `,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="container mx-auto px-6 py-4">
        {/* Header Section */}
        <div className="bg-card-bg rounded-xl shadow-xl px-6 mb-12">
          <header className="flex items-center justify-between py-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-xl text-primary-blue mr-1" style={{ fontSize: '24px' }}>✱</span>
                <span className="text-xl font-bold text-white">AI Surveillance</span>
              </div>
              <nav className="hidden md:flex gap-6 text-sm text-gray-400">
                <Link to="#" className="hover:text-primary-blue transition-colors">Features</Link>
                <Link to="#" className="hover:text-primary-blue transition-colors">How It Works</Link>
                <Link to="#" className="hover:text-primary-blue transition-colors">Pricing</Link>
              </nav>
            </div>
            <nav className="flex gap-3 items-center">
              {!isLoggedIn && (
                <>
                  <Link to="/login" className="px-4 py-2 text-sm rounded-lg text-white bg-gray-700/50 hover:bg-gray-700 transition-colors">Login</Link>
                  <Link to="/signup" className="bg-primary-blue text-black px-4 py-2 text-sm rounded-lg font-semibold hover:bg-[#00a6e0] transition-colors">Sign Up</Link>
                </>
              )}
            </nav>
          </header>
        </div>

        {/* Main Hero Section */}
        <main className="text-center py-20 md:py-32">
          <h1 className="text-7xl md:text-8xl font-extrabold leading-tight mb-6"> 
            Intelligent Surveillance,<br/>Redefined
          </h1>
          <p className="text-gray-500 max-w-3xl mx-auto mb-12 text-lg">
            Leverage advanced AI to detect incidents in real-time and predict potential threats before they happen.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleGetStarted}
              className="bg-primary-blue text-black px-8 py-3.5 rounded-lg font-bold hover:bg-[#00a6e0] transition-colors shadow-lg shadow-primary-blue/30 text-base"
            >
                {isLoggedIn ? "Go to Dashboard" : "Get Started"}
            </button>
            <button className="border border-gray-700 text-white px-8 py-3.5 rounded-lg bg-transparent hover:bg-gray-800 transition-colors text-base">
                Learn More
            </button>
          </div>
        </main>

        {/* Core Capabilities Section with Hover Glow */}
        <section className="mt-16 pb-20">
          <h2 className="text-3xl text-center mb-12">Core Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <CapabilityCard 
              icon="👁️" 
              title="Real-time Incident Detection" 
              desc="Instantly identify threats and unusual activities with cutting-edge AI analysis, ensuring rapid response." 
              borderColor="border-blue-900/50" 
              glowColor="rgba(0, 187, 255, 0.6)" 
            />
            <CapabilityCard 
              icon="📈" 
              title="Predictive Analytics" 
              desc="Anticipate potential security breaches before they occur with our advanced predictive models and data-driven insights." 
              borderColor="border-green-900/50" 
              glowColor="rgba(0, 255, 128, 0.5)" 
            />
            <CapabilityCard 
              icon="🔔" 
              title="Automated Alerts & Integration" 
              desc="Receive immediate notifications and seamlessly integrate with your existing security infrastructure for a unified system." 
              borderColor="border-red-900/50" 
              glowColor="rgba(255, 0, 102, 0.5)" 
            />
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="bg-card-bg rounded-xl mt-16 py-10 text-gray-400">
          <div className="flex justify-center gap-6 mb-4 text-2xl">
            <a href="#" className="hover:text-primary-blue transition-colors"><FaLinkedin /></a>
            <a href="#" className="hover:text-primary-blue transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-primary-blue transition-colors"><FaFacebook /></a>
            <a href="#" className="hover:text-primary-blue transition-colors"><FaInstagram /></a>
          </div>
          <div className="flex justify-center gap-6 mb-4 text-sm">
            <Link to="#" className="hover:text-white transition-colors">Contact Us</Link>
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <p className="text-gray-500 text-center text-sm">© 2024 AI Surveillance Inc. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
