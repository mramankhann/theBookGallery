import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/books/${id}`)
      .then(res => setBook(res.data))
      .catch(() => navigate("/"));
  }, [id, navigate]);

  if (!book) return <div className="p-4">Loading...</div>;

  // ✅ Safe owner ID comparison (handle both object & string)
  const bookOwnerId = typeof book.owner === "object" ? book.owner._id : book.owner;
  const currentUserId = user?._id;

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this book?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/books/${book._id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      alert("Book deleted successfully.");
      navigate("/");
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete book.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto bg-white rounded shadow">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-80 object-cover rounded-t"
          onError={(e) =>
            (e.target.src = "https://via.placeholder.com/300x300?text=No+Image")
          }
        />
        <div className="p-6 space-y-3">
          <h1 className="text-2xl font-bold text-gray-800">{book.title}</h1>
          <p className="text-sm text-gray-500">By: {book.author}</p>
          <p className="text-sm text-gray-500">
            Uploaded by: <strong>{book.owner?.username}</strong> ({book.owner?.email})
          </p>
          <p className="text-gray-700 mt-3">{book.description}</p>

          <button
            onClick={() => navigate("/")}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            🔙 Back to Home
          </button>

          {/* ✅ Show Edit/Delete if user is owner */}
          {currentUserId === bookOwnerId && (
            <div className="flex space-x-3 mt-4">
              <button
                onClick={() => navigate(`/book/edit/${book._id}`)}
                className="bg-yellow-500 text-white px-4 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-4 py-1 rounded"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
