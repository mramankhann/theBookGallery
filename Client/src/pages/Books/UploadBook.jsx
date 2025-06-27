import React, { useState } from 'react';
import axios from 'axios';
import { Upload, Book, Plus, Image, NotebookText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UploadBook = () => {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    description: '',
    image: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBookData({
      ...bookData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const res = await axios.post("https://thebookgallery.onrender.com/api/books/upload", bookData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      alert("✅ Book uploaded successfully!");
      navigate("/"); // 🔁 Redirect to Home after success

    } catch (err) {
      console.error(err);
      alert("❌ Failed to upload book");
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-2xl">
              <Book className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Post Your Book
            </h2>
          </div>
          <p className="text-gray-600 text-lg">
            Share your books with the community and help others discover new reads
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-700 flex items-center gap-2">
              <Image className="text-blue-500" /> Book Image URL
            </label>
            <input
              type="url"
              id="image"
              name="image"
              onChange={handleChange}
              value={bookData.image}
              placeholder="Paste image URL here (e.g., https://...)"
              className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-blue-500"
              required
            />
            <p className="text-xs text-gray-500 mt-1">JPG or PNG only, max 10MB</p>
          </div>

          {/* Book Details */}
          <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <NotebookText className="text-blue-500" />
              Book Details
            </label>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title *</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  onChange={handleChange}
                  value={bookData.title}
                  placeholder="Book title"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author *</label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  onChange={handleChange}
                  value={bookData.author}
                  placeholder="Author name"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="description"
                name="description"
                rows="4"
                onChange={handleChange}
                value={bookData.description}
                placeholder="Tell us about this book..."
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 flex items-center"
            >
              <Plus className="mr-2 h-5 w-5" />
              Upload Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadBook;
