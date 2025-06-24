import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../components/Footer'
import { Link } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!token || !user) {
      navigate("/login");
      return;
    }

    axios.get("http://localhost:5000/api/books/my", {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setBooks(res.data))
    .catch(err => {
      console.error(err);
      localStorage.clear();
      navigate("/login");
    });
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">📚 BookSwap</h1>
        <div className="flex items-center gap-3">
          <span className="text-gray-700 text-sm">Hello, {user.username}</span>
          <button onClick={() => navigate("/upload")} className="bg-blue-500 text-white px-3 py-1 rounded text-sm">Upload Book</button>
          <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded text-sm">Logout</button>
        </div>
      </div>

      {/* Book Grid */}
    <div className="p-6 max-w-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {books.map(book => (
    <Link to={`/book/${book._id}`} key={book._id}>
      <div className="bg-white rounded shadow hover:shadow-md transition">
        <img
          src={book.image}
          alt={book.title}
          className="w-full min-h-65 max-h-71 object-cover rounded-t"
          onError={(e) => (e.target.src = "https://via.placeholder.com/300x300?text=No+Image")}
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{book.title}</h3>
          <p className="text-sm text-gray-500">By: {book.owner?.username}</p>
        </div>
      </div>
    </Link>
  ))}
</div>

      <Footer />
    </div>
  );
};

export default Home;
