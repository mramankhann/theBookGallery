import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditBook = () => {
  const { id } = useParams();
  const [bookData, setBookData] = useState({ title: '', author: '', description: '', image: '' });
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/books/${id}`)
      .then(res => {
        setBookData(res.data);
      })
      .catch(() => navigate("/"));
  }, [id, navigate]);

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/books/${id}`, bookData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert("Book updated successfully");
      navigate("/");
    } catch (err) {
      alert("Failed to update");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">✏️ Edit Book</h2>
        <form onSubmit={handleUpdate} className="space-y-4">
          <input name="title" value={bookData.title} onChange={handleChange} className="input" placeholder="Title" required />
          <input name="author" value={bookData.author} onChange={handleChange} className="input" placeholder="Author" required />
          <input name="image" value={bookData.image} onChange={handleChange} className="input" placeholder="Image URL" />
          <textarea name="description" value={bookData.description} onChange={handleChange} className="input" placeholder="Description" />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Update Book</button>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
