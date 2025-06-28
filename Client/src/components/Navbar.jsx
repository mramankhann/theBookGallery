import { Link, useNavigate } from "react-router-dom";
import { Plus } from "lucide-react"; // optional icon if using lucide

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
      <Link
        to="/"
        className="title text-2xl md:text-3xl font-extrabold text-blue-500 flex items-center gap-2"
      >
        theBookGallery
      </Link>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <span className=" welcome text-gray-700 text-sm md:text-base sm:inline-block">
              Hi, 🖐<span className="font-semibold">{user.username}</span>
            </span>

            <Link
              to="/upload"
              className="logout bg-green-400  hover:underline text-white px-4 py-1.5 rounded-md flex items-center gap-2 text-sm md:text-base transition"
            >
              Upload Book
            </Link>

            <button
              onClick={handleLogout}
              className="logout cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm md:text-base transition"
            >
              Logout
            </button>


          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-purple-500 font-semibold hover:underline transition text-sm md:text-base"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-purple-600 text-white px-4 py-1.5 rounded-md hover:bg-purple-700 transition text-sm md:text-base"
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
