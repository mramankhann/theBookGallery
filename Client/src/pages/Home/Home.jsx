import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { Link } from "react-router-dom";
import BookDetail from '../Books/BookDetail';


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

    

    axios.get("https://thebookgallery.onrender.com/api/books/my", {
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

<Navbar /> 

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
