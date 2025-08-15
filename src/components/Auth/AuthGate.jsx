// import React, { useEffect, useState } from "react";
// import WelcomePage from "./WelcomePage";
// import AuthForm from "./AuthForm";

// export default function AuthGate() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const stored = localStorage.getItem("bitesizedUser");
//     if (stored) {
//       setUser(JSON.parse(stored));
//     }
//   }, []);

//   return (
//     <div className="h-screen  flex items-center justify-center bg-gray-900">
//       {user ? (
//         <WelcomePage user={user} onLogout={() => {
//           localStorage.removeItem("bitesizedUser");
//           setUser(null);
//         }} />
//       ) : (
//         <AuthForm onAuth={(newUser) => {
//           localStorage.setItem("bitesizedUser", JSON.stringify(newUser));
//           setUser(newUser);
//         }} />
//       )}
//     </div>
//   );
// }





import React, { useEffect, useState } from "react";
import WelcomePage from "./WelcomePage";
import AuthForm from "./AuthForm";
import { motion } from "framer-motion";

export default function AuthGate() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("bitesizedUser");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Radial Background */}
      <motion.div
        animate={{ rotate: 0 }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center,135deg, #d6f5d6, #b9f0b9, #a3e6a3)",
          filter: "blur(10px)",
          zIndex: 0,
        }}
      ></motion.div>

      {/* Soft floating gradients */}
      <motion.div
        animate={{ x: ["-20%", "20%"], y: ["-20%", "20%"] }}
        transition={{ repeat: Infinity, duration: 30, yoyo: Infinity, ease: "easeInOut" }}
        className="absolute w-[600px] h-[600px] bg-gradient-to-tr from-green-400 to-green-600 rounded-full opacity-30 blur-3xl"
      />
      <motion.div
        animate={{ x: ["15%", "-15%"], y: ["10%", "-10%"] }}
        transition={{ repeat: Infinity, duration: 40, yoyo: Infinity, ease: "easeInOut" }}
        className="absolute w-[400px] h-[400px] bg-gradient-to-br from-green-200 to-green-400 rounded-full opacity-20 blur-2xl"
      />

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center w-full px-4">
        {user ? (
          <WelcomePage
            user={user}
            onLogout={() => {
              localStorage.removeItem("bitesizedUser");
              setUser(null);
            }}
          />
        ) : (
          <AuthForm
            onAuth={(newUser) => {
              localStorage.setItem("bitesizedUser", JSON.stringify(newUser));
              setUser(newUser);
            }}
          />
        )}
      </div>
    </div>
  );
}


