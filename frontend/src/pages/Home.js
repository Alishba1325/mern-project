
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function Home() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       // Token nahi → login page redirect
//       navigate('/login');
//     } else {
//       // Optional: Token ke saath backend se user info fetch kar sakte ho
//       fetch('http://localhost:5000/api/dashboard', {
//         headers: { Authorization: `Bearer ${token}` }
//       })
//       .then(res => res.json())
//       .then(data => setUser(data.user))
//       .catch(err => {
//         console.error('Error fetching dashboard:', err);
//         localStorage.removeItem('token'); // Invalid token → logout
//         navigate('/login');
//       });
//     }
//   }, [navigate]);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-[#0d1114] text-white">
//       <h1 className="text-3xl font-bold mb-4">Welcome to the Home Dashboard!</h1>
//       {user ? (
//         <p className="text-gray-300">Logged in as: {user.name || user.email}</p>
//       ) : (
//         <p className="text-gray-500">Loading user info...</p>
//       )}
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Token nahi → login
    } else {
      fetch('http://localhost:5000/api/dashboard', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => res.json())
      .then(data => setUser(data.user))
      .catch(err => {
        console.error('Error fetching dashboard:', err);
        localStorage.removeItem('token');
        navigate('/login');
      });
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Token remove
    navigate('/'); // Landing page redirect
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0d1114] text-white">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Home Dashboard!</h1>
      {user ? (
        <p className="text-gray-300 mb-4">Logged in as: {user.name || user.email}</p>
      ) : (
        <p className="text-gray-500 mb-4">Loading user info...</p>
      )}
      <button
        onClick={handleLogout}
        className="px-6 py-2 bg-[#00baff] text-black font-semibold rounded-lg hover:bg-[#00a6e0] transition"
      >
        Logout
      </button>
    </div>
  );
}
