import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className=" p-4 flex justify-between items-center shadow-md">
      <Link to="/" className=" text-4xl font-bold">📚 BookSwap</Link>
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <span className="text-sm">Welcome, {user.username}</span>
            <button onClick={handleLogout} className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-2xl font-bold">Login</Link>
            <Link to="/signup" className="text-2xl font-bold">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
