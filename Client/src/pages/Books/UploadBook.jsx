import react from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Upload, Book, Plus, Image,NotebookText  } from 'lucide-react';

const UploadBook = () => {

    const [bookData, setBookData] = react.useState({
        title: '',
        description: '',
        image: ''
    })

    const handleChange = (e) => {
        setBookData({
            ...bookData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');

        try {
            const res = await axios.post("http://localhost:5000/api/books/upload", bookData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            alert("Book uploaded successfully!");
            console.log(res.data);
        } catch (err) {
            console.error(err);
            alert("Failed to upload book");
        }

    }




    return (
        <>
            <div className="min-h-screen w-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className=" text-center mb-8">
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
                        <div className="relative w-full bg-white shadow-md rounded-lg py-15 px-6 pb-6 mb-6">
                            <div className='justify-start space-x-2 mb-4 '>
                                <Image className='absolute left-6 top-7 text-blue-500 ' />
                                <h1 className='text-start absolute left-13  top-7 text-gray-700 BookImage'>  Book Images</h1>
                            </div>
                            <div className="bg-white shadow  border-2 border-dashed border-gray-300 rounded-lg p-6">
                                <label
                                    htmlFor='image'
                                    className="cursor-pointer flex flex-col items-center justify-center space-y-2 text-gray-600 hover:text-blue-600 transition-colors"
                                >
                                    <input
                                        id="image"
                                        name="image"
                                        type="file"
                                        multiple
                                        accept="image/*"
                                        onChange={handleChange}
                                        className="hidden"
                                    />
                                    <Upload className="h-12 w-12" />
                                    <div className="text-center">
                                        <p className="text-lg font-medium">Click to upload book images</p>
                                        <p className="text-sm">PNG, JPG up to 10MB (Max 5 images)</p>
                                    </div>
                                </label>
                            </div>
                        </div>

                        {/* Book Details */}
                        <div className="relative w-full bg-white shadow-md rounded-lg py-15 px-6 pb-6 pb-10">
                             <div className='justify-start space-x-2 mb-4 '>
                                <NotebookText  className='absolute left-6 top-7 text-blue-500 ' />
                                <h1 className='text-start absolute left-13  top-7 text-gray-700 BookImage'>  Book Details</h1>
                            </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className='block font-medium text-gray-700 ' htmlFor="title">Book Title *</label>
                                <input
                                    id='title'
                                    name="title"
                                    placeholder="Title"
                                    onChange={handleChange}
                                    className="bookTitle p-1 input block w-full rounded-md outline-none border-blue-500 shadow-sm"
                                    required
                                />
                            </div>

                            {/* <div className="space-y-2">
                                <Label htmlFor="author">Author *</Label>
                                <Input
                                    id="author"
                                    name="author"
                                    placeholder="Enter author name"
                                    required
                                />
                            </div> */}
                        </div>

                        <div className="space-y-2">
                            <label className='block font-medium text-gray-700' htmlFor="description">Description</label>
                            <textarea

                                name="description"
                                onChange={handleChange}
                                id="description"
                                placeholder="Tell us about this book, its condition, why you're sharing it..."
                                className="bookDescription min-h-[100px] p-1 block w-full rounded-md border-gray-300 shadow-sm"
                            />
                        </div>
                          </div>

                        {/* Submit Button */}
                        <div className="flex justify-center space-x-4 ">
                            {/* <button
              type="button"
              className="px-8 py-6 text-lg border border-gray-300 rounded-lg bg-white hover:bg-gray-100">
              Save as Draft
            </button> */}
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg rounded-lg flex items-center"
                            >
                                <Plus className="mr-2 h-5 w-5" />
                                Upload Book
                            </button>
                      
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}

export default UploadBook;