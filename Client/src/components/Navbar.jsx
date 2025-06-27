import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="p-4 md:px-8 flex justify-between items-center shadow-md bg-white">
      {/* Logo / Project Name */}
      <Link to="/" className="text-3xl font-extrabold text-blue-500 flex items-center gap-2">
        🖼️ <span>theBookGallery</span>
      </Link>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <span className="text-gray-700 text-sm md:text-base">
              Welcome, <span className="font-semibold">{user.username}</span>
            </span>
            <button
              onClick={handleLogout}
              className="bg-blue-500 cursor-pointer text-white px-4 py-1.5 rounded-md hover:bg-purple-700 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-purple-500 font-semibold hover:underline transition text-lg"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-purple-600 text-white px-4 py-1.5 rounded-md hover:bg-purple-700 transition text-lg"
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
