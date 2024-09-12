"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = (name) => {
    router.push(name);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <main>
      
      <nav className="bg-gray-800">
        <div className="ml-10 flex space-x-4">
          <button
            onClick={() => navigate("/")}
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </button>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <button
                  onClick={() => navigate("/login/loginstudent")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  Student Login
                </button>
                <button
                  onClick={() => navigate("/login/loginteacher")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  Teacher Login
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </main>
  );
}
