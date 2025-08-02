import React, { useState, useEffect } from "react";
import axios from 'axios';
import { RiEdit2Line } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { useSelector } from 'react-redux';
 



import { toast  } from 'react-hot-toast';
 

const Category = () => {
   const [fullscreenImage, setFullscreenImage] = useState(null);
   const [preview, setPreview] = useState(null);
  const token = useSelector((state) => state.token.token);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [form, setForm] = useState({
    title: '',
    description: '',
    sortOrder: '',
    isActive: true,
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  
  const fetchCategories = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/categories', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategories(res.data.categories || res.data.data || []);
    } catch (err) {
      toast.error('Error fetching categories');
      console.error('Error fetching categories:', err);
    }
  };
  
  useEffect(() => {
    fetchCategories();
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'isActive' ? value === 'true' : value,
    }));
  };
  
  const handleSelect = (cat) => {
    setSelectedCategory(cat);
    setForm({
      title: cat.title,
      description: cat.description,
      sortOrder: cat.sortOrder || '',
      isActive: cat.isActive,
    });
    setShowEditModal(true);
  };
  
  const handleUpdate = async () => {
    if (!selectedCategory) return;
    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('description', form.description);
    formData.append('sortOrder', form.sortOrder);
    formData.append('isActive', JSON.stringify(form.isActive));
    if (image) {
      formData.append('image', image);
    }
    try {
      setLoading(true);
      await axios.put(
        `http://localhost:5000/api/categories/${selectedCategory._id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      toast.success('Category updated successfully!');
      setSelectedCategory(null);
      setForm({ title: '', description: '', sortOrder: '', isActive: true });
      setImage(null);
      fetchCategories();
      setShowEditModal(false);
    } catch (err) {
    toast.error('Please enter a description between 10 and 500 characters');

      console.error('Error updating category:', err);
    } finally {
      setLoading(false);
    }
  };
  
  const handleDelete = async (catId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this category?");
    if (!confirmDelete) return;
    try {
      await axios.delete(`http://localhost:5000/api/categories/${catId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Category deleted successfully!");
      setSelectedCategory(null);
      fetchCategories();
    } catch (err) {
      toast.error("Failed to delete category");
      console.error('Failed to delete category:', err);
    }
  };
  
  const handleAddCategory = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('description', form.description);
    formData.append('sortOrder', form.sortOrder);
    formData.append('isActive', JSON.stringify(form.isActive));
    if (image) {
      formData.append('image', image);
    }
    try {
      setLoading(true);
      await axios.post(
        'http://localhost:5000/api/categories',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      toast.success('Category added successfully!');
      setForm({ title: '', description: '', sortOrder: '', isActive: true });
      setImage(null);
      fetchCategories();
      setShowAddModal(false);
    } catch (err) {
     toast.error('Please enter a description between 10 and 500 characters');

      console.error('Error adding category:', err);
    } finally {
      setLoading(false);
    }
  };
  
  const resetForm = () => {
  setForm({
    title: "",
    description: "",
    sortOrder: 0,
    isActive: "true",
  });
  setImage(null);
  setPreview(null);
};

{/* this is the full scrreen image view */}

  return (
    <div className="p-4">
    
      
      <div className='flex w-full justify-between overflow-x'>
       
        <span className='flex w-full place-content-end my-2 mr-2'>
          <button
            onClick={() => {
              resetForm();
              setShowAddModal(true);
            }}
            className="flex items-center rounded-md bg-gradient-to-tr from-slate-800 to-slate-700 py-2 px-4 text-sm text-white hover:bg-slate-700"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 mr-1.5" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.03 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v4.94a.75.75 0 0 0 1.5 0v-4.94l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
            </svg>
            Add Category
          </button>
        </span>
      </div>
      
      {/* Table */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-6">
        <table className="w-full text-sm text-left dark:text-gray-400">
          <thead className="text-xs text-gray-900 uppercase bg-gray-500">
            <tr>
              <th className="px-6 py-3">Image</th>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Description</th>
              <th className="px-6 py-3">Sort Order</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr key={cat._id} className="bg-white border-b border-gray-700">
                <td className="px-6 py-2">
                <img
  src={cat.imageUrl || cat.image}
  alt={cat.title}
  onClick={() => setFullscreenImage(cat.imageUrl || cat.image)}
  className="w-40 h-20 object-cover rounded cursor-pointer transition-transform hover:scale-105"
/>


                  
                </td>
                <td className="px-6 py-4 font-medium text-gray-900">{cat.title}</td>
                <td className="px-6 py-4 font-medium text-gray-900">{cat.description}</td>
                <td className="px-6 py-4 font-medium text-gray-900">{cat.sortOrder}</td>
                <td className="px-6 py-4 font-medium text-gray-900">{cat.isActive ? 'Yes' : 'No'}</td>
                <td className="px-6 py-4 font-medium text-gray-900">
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleSelect(cat)}
                      className="text-blue-600 hover:underline"
                    >
                      <RiEdit2Line className="inline w-5 h-5" /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(cat._id)}
                      className="text-red-600 hover:underline"
                    >
                      <MdDelete className="inline w-5 h-5" /> Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Add Category Modal */}
{showAddModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
    <div className="bg-white/90 shadow-2xl rounded-2xl w-full max-w-2xl relative border border-gray-200 animate-fadeIn max-h-[90vh] overflow-y-auto">
      
      {/* Header with Sticky Close Button */}
      <div className="sticky top-0 z-10 bg-white/90 p-6 border-b rounded-t-2xl flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-gray-800">Add New Category</h3>
        <button
          onClick={() => {
            setShowAddModal(false);
            resetForm();
          }}
          className="text-gray-400 hover:text-red-500 text-2xl"
          title="Close"
        >
          &times;
        </button>
      </div>

      {/* Scrollable Form */}
      <div className="p-6 space-y-5">
        <form onSubmit={handleAddCategory}>

          <div className="mb-4">
            <label className="block mb-1 text-gray-700 font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-gray-700 font-medium">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              rows="3"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-gray-700 font-medium">Sort Order</label>
            <input
              type="number"
              name="sortOrder"
              min={0}
              value={form.sortOrder}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-gray-700 font-medium">Active Status</label>
            <select
              name="isActive"
              value={form.isActive}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-gray-700 font-medium">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                setImage(file);
                if (file) setPreview(URL.createObjectURL(file));
              }}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded-md file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-3 h-32 rounded-lg border object-contain shadow"
              />
            )}
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={() => {
                setShowAddModal(false);
                resetForm();
              }}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className={`px-5 py-2 rounded-lg font-semibold text-white transition ${
                loading ? "bg-green-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {loading ? "Adding..." : "Add Category"}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
)}


      
      {/* Edit Category Modal */}
     {showEditModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
    <div className="bg-white/90 border shadow-2xl rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative animate-fadeIn">

      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/90 p-6 border-b rounded-t-2xl flex justify-between items-center">
        <h3 className="text-2xl font-semibold text-gray-800">Edit Category</h3>
        <button
          onClick={() => {
            setShowEditModal(false);
            resetForm();
          }}
          className="text-gray-400 hover:text-red-500 text-2xl"
          title="Close"
        >
          &times;
        </button>
      </div>

      {/* Form Body */}
      <div className="p-6 space-y-5">
        <div>
          <label className="block mb-1 text-gray-700 font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700 font-medium">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            rows="3"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 text-gray-700 font-medium">Sort Order</label>
          <input
            type="number"
            name="sortOrder"
            min={0}
            value={form.sortOrder}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700 font-medium">Active Status</label>
          <select
            name="isActive"
            value={form.isActive}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-gray-700 font-medium">New Image (optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              setImage(file);
              if (file) setPreview(URL.createObjectURL(file));
            }}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded-md file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-3 h-32 rounded-lg border object-contain shadow"
            />
          )}
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end space-x-3 pt-4">
          <button
            type="button"
            onClick={() => {
              setShowEditModal(false);
              resetForm();
            }}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            disabled={loading}
            className={`px-5 py-2 rounded-lg font-semibold text-white transition ${
              loading ? "bg-green-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {loading ? "Updating..." : "Update Category"}
          </button>
        </div>
      </div>
    </div>
  </div>
)}

{fullscreenImage && (
  <div
    className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center"
    onClick={() => setFullscreenImage(null)}
  >
    <img
      src={fullscreenImage}
      alt="Full View"
      className="max-w-full max-h-full object-contain rounded shadow-xl"
    />
    <button
      onClick={() => setFullscreenImage(null)}
      className="absolute top-4 right-6 text-white text-3xl font-bold hover:text-red-400"
    >
      &times;
    </button>
  </div>
)}

    </div>
  );
};

export default Category;