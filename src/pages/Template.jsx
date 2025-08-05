import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { MdLibraryAdd } from "react-icons/md";
import { RiEdit2Line } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { toast } from 'react-hot-toast';
import { TbXboxX } from "react-icons/tb";

const Template = () => {
  // API Base URL
  const API_BASE_URL = 'http://localhost:5000/api';
  const AUTH_TOKEN = 'DJ'; // 🔐 add your token here
  
  // Currency symbols mapping
  const currencySymbols = {
    'INR': '₹',
    'USD': '$',
    'EUR': '€',
    'GBP': '£',
    'JPY': '¥',
    'CAD': 'C$',
    'AUD': 'A$'
  };
  
  // State management
  const [serverStatus, setServerStatus] = useState('offline');
  const [formData, setFormData] = useState({
    templateId: '',
    title: '',
    description: '',
    category: '',
    service: '',
    startingPrice: '',
    currency: 'INR',
    isActive: true,
    isFeatured: false
  });
  
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);
  const [templates, setTemplates] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [mainImagePreview, setMainImagePreview] = useState('');
  const [additionalImagesPreview, setAdditionalImagesPreview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [serviceDisabled, setServiceDisabled] = useState(true);
  const [showTemplateForm, setShowTemplateForm] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [additionalImagesFiles, setAdditionalImagesFiles] = useState([]); // Store actual file objects
  
  // Refs for file inputs
  const mainImageInputRef = useRef(null);
  const additionalImageInputRef = useRef(null); // Changed from imagesInputRef
  
  // Initialize component
  useEffect(() => {
    checkServerStatus();
    loadCategories();
    loadTemplates();
  }, []);
  
  // Load templates when filters or pagination changes
  useEffect(() => {
    loadTemplates();
  }, [currentPage, categoryFilter, searchQuery]);
  
  // Show message function
  const showMessage = (message, type = 'success') => {
    const id = Date.now();
    setMessages(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setMessages(prev => prev.filter(msg => msg.id !== id));
    }, 3000);
  };
  
  // Check server status
  const checkServerStatus = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/health`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${AUTH_TOKEN}`,
        },
      });
      if (response.status === 200) {
        setServerStatus('online');
      } else {
        setServerStatus('offline');
      }
    } catch (error) {
      setServerStatus('offline');
    }
  };
  
  // Format price with currency symbol
  const formatPrice = (price, currency) => {
    const symbol = currencySymbols[currency] || currency;
    const numPrice = parseFloat(price) || 0;
    if (currency === 'JPY') {
      return `${symbol}${Math.round(numPrice)}`;
    }
    return `${symbol}${numPrice.toFixed(2)}`;
  };
  
  // Load all categories for dropdowns
  const loadCategories = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/categories`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${AUTH_TOKEN}`,
        },
      });
      setCategories(response.data.data || []);
    } catch (error) {
      console.error('Error loading categories:', error);
      toast.error('Failed to load categories. Check console for details.');
    }
  };
  
  // Load services for selected category
  const loadServicesForCategory = async (categoryId) => {
    if (!categoryId) {
      setServices([]);
      setServiceDisabled(true);
      setFormData(prev => ({ ...prev, service: '' }));
      return;
    }
    
    try {
      setServiceDisabled(true);
      const response = await axios.get(`${API_BASE_URL}/templates/services-by-category/${categoryId}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${AUTH_TOKEN}`,
        },
      });
      setServices(response.data.data || []);
      setServiceDisabled(false);
    } catch (error) {
      console.error('Error loading services:', error);
      setServices([]);
    }
  };
  
  // Load templates with pagination and filtering
  const loadTemplates = async () => {
    setLoading(true);
    try {
      let url = `${API_BASE_URL}/templates?page=${currentPage}&limit=9`;
      if (categoryFilter) url += `&category=${categoryFilter}`;
      if (searchQuery) url += `&search=${encodeURIComponent(searchQuery)}`;
      
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${AUTH_TOKEN}`,
        },
      });
      setTemplates(response.data.data || []);
      setTotalPages(response.data.pagination?.totalPages || 1);
    } catch (error) {
      console.error('Error loading templates:', error);
      setTemplates([]);
    } finally {
      setLoading(false);
    }
  };
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else if (type === 'file' && name === 'mainImage') {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setMainImagePreview(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    // Load services when category changes
    if (name === 'category') {
      loadServicesForCategory(value);
    }
  };
  
  // Handle adding a single additional image
  const handleAddAdditionalImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check if we already have 10 images (max)
      if (additionalImagesFiles.length >= 10) {
        toast.error('Maximum 10 additional images allowed');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        setAdditionalImagesPreview(prev => [...prev, event.target.result]);
        setAdditionalImagesFiles(prev => [...prev, file]);
      };
      reader.readAsDataURL(file);
    }
    // Reset the input value so the same file can be selected again if needed
    e.target.value = '';
  };
  
  // Handle removing an additional image
  const handleRemoveAdditionalImage = (index) => {
    setAdditionalImagesPreview(prev => prev.filter((_, i) => i !== index));
    setAdditionalImagesFiles(prev => prev.filter((_, i) => i !== index));
  };
  
  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  // Handle category filter change
  const handleCategoryFilterChange = (e) => {
    setCategoryFilter(e.target.value);
    setCurrentPage(1);
  };
  
  // Handle search button click
  const handleSearch = () => {
    setCurrentPage(1);
  };
  
  // Handle pagination
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  // Handle form submission (create/update)
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const {
      title,
      description,
      category,
      service,
      startingPrice,
      currency,
      isActive,
      isFeatured
    } = formData;
    
    // Validation
    if (!title.trim()) {
      toast.error('Title is required');
      setIsSubmitting(false);
      return;
    }
    if (!category) {
      toast.error('Category is required');
      setIsSubmitting(false);
      return;
    }
    if (!service) {
      toast.error('Service is required');
      setIsSubmitting(false);
      return;
    }
    if (parseFloat(startingPrice) <= 0) {
      toast.error('Starting price must be greater than 0');
      setIsSubmitting(false);
      return;
    }
    
    const formDataObj = new FormData();
    formDataObj.append('title', title);
    formDataObj.append('description', description);
    formDataObj.append('category', category);
    formDataObj.append('service', service);
    formDataObj.append('startingPrice', startingPrice);
    formDataObj.append('currency', currency);
    formDataObj.append('isActive', isActive);
    formDataObj.append('isFeatured', isFeatured);
    
    // Add main image if selected
    if (mainImageInputRef.current?.files?.[0]) {
      formDataObj.append('mainImage', mainImageInputRef.current.files[0]);
    }
    
    // Add additional images
    additionalImagesFiles.forEach(file => {
      formDataObj.append('images', file);
    });
    
    try {
      let response;
      if (isEditing) {
        response = await axios.put(
          `${API_BASE_URL}/templates/${formData.templateId}`,
          formDataObj,
          { 
            headers: { 
              'Authorization': `Bearer ${AUTH_TOKEN}`,
            } 
          }
        );
        toast.success('Template updated successfully! 🎉');
      } else {
        response = await axios.post(
          `${API_BASE_URL}/templates`,
          formDataObj,
          { 
            headers: { 
              'Authorization': `Bearer ${AUTH_TOKEN}`,
            } 
          }
        );
        toast.success('Template created successfully! 🎉');
      }
      
      resetForm();
      loadTemplates();
    } catch (error) {
      console.error('Error saving template:', error);
      const res = error.response;
      let errorMessage = '❌ Failed to save template.';
      
      if (res?.data?.message) {
        errorMessage = `❌ ${res.data.message}`;
      }
      
      if (res?.data?.errors) {
        errorMessage += `\n\nValidation errors:\n${res.data.errors.map(e => `- ${e.msg || e.message}`).join('\n')}`;
      }
      
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Edit template
  const editTemplate = async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/templates/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${AUTH_TOKEN}`,
        },
      });
      const template = response.data.data;
      
      // Set form data
      setFormData({
        templateId: template._id,
        title: template.title,
        description: template.description || '',
        category: template.category?._id || '',
        service: template.service?._id || '',
        startingPrice: template.pricing?.startingPrice || '',
        currency: template.pricing?.currency || 'INR',
        isActive: !!template.isActive,
        isFeatured: !!template.isFeatured
      });
      
      // Load services for the selected category
      if (template.category?._id) {
        await loadServicesForCategory(template.category._id);
      }
      
      // Set image previews
      if (template.mainImage?.url) {
        setMainImagePreview(template.mainImage.url);
      }
      
      if (template.images?.length > 0) {
        setAdditionalImagesPreview(template.images.map(img => img.url));
        // Note: We don't have the actual File objects for existing images when editing
        // This is a limitation - in a real app, you might need to handle this differently
      }
      
      // Set editing mode
      setIsEditing(true);
      setShowTemplateForm(true);
    } catch (error) {
      console.error('Error loading template for edit:', error);
      toast.error('Failed to load template for editing');
    }
  };
  
  // Toggle template active status
  const toggleTemplateStatus = async (id) => {
    try {
      const response = await axios.patch(
        `${API_BASE_URL}/templates/${id}/toggle-active`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${AUTH_TOKEN}`,
          },
        }
      );
      
      toast.success(response.data.message);
      loadTemplates();
    } catch (error) {
      console.error('Error toggling template status:', error);
      toast.error('Failed to toggle template status');
    }
  };
  
  // Delete template
  const deleteTemplate = async (id) => {
    if (!confirm('Are you sure you want to delete this template? This action cannot be undone.')) return;
    
    try {
      await axios.delete(`${API_BASE_URL}/templates/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${AUTH_TOKEN}`,
        },
      });
      toast.success('Template deleted successfully! 🗑️');
      loadTemplates();
    } catch (error) {
      console.error('Error deleting template:', error);
      toast.error('Failed to delete template');
    }
  };
  
  // Reset form to initial state
  const resetForm = () => {
    setFormData({
      templateId: '',
      title: '',
      description: '',
      category: '',
      service: '',
      startingPrice: '',
      currency: 'INR',
      isActive: true,
      isFeatured: false
    });
    setIsEditing(false);
    setMainImagePreview('');
    setAdditionalImagesPreview([]);
    setAdditionalImagesFiles([]); // Clear the files array
    setServices([]);
    setServiceDisabled(true);
    setShowTemplateForm(false);
    
    // Reset file inputs
    if (mainImageInputRef.current) mainImageInputRef.current.value = '';
    if (additionalImageInputRef.current) additionalImageInputRef.current.value = '';
  };
  
  // Loading spinner component
  const LoadingSpinner = () => (
    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );
  
  // Template Card Component for mobile view
  const TemplateCard = ({ template }) => {
    const mainImage = template.mainImage?.url || 'https://via.placeholder.com/300x200?text=No+Image';
    const categoryName = template.category?.title || 'Unknown Category';
    const serviceName = template.service?.title || 'Unknown Service';
    const formattedPrice = template.pricing?.startingPrice
      ? formatPrice(template.pricing.startingPrice, template.pricing.currency || 'INR')
      : 'Price not set';
    
    return (
      <div className="bg-white rounded-lg shadow-md mb-4 border border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-shrink-0">
            <img
              src={mainImage}
              alt={template.title}
              onClick={() => setFullscreenImage(mainImage)}
              className="w-full sm:w-32 h-40 sm:h-20 object-cover rounded cursor-pointer transition-transform hover:scale-105"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{template.title}</h3>
                <p className="text-sm text-blue-600 font-medium mb-1">{categoryName} /{serviceName}</p>
                <p className="text-gray-600 mt-1 text-sm">
                  {template.description?.substring(0, 80) + '...' || 'No description'}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="text-xs font-medium bg-gray-100 text-gray-800 px-2 py-1 rounded">
                    {formattedPrice}
                  </span>
                  <span className={`text-xs font-medium px-2 py-1 rounded ${
                    template.isActive 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {template.isActive ? 'Active' : 'Inactive'}
                  </span>
                  {template.isFeatured && (
                    <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-1 rounded">
                      Featured
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => editTemplate(template._id)}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                >
                  <RiEdit2Line className="mr-1" /> Edit
                </button>
                <button
                  onClick={() => toggleTemplateStatus(template._id)}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  {template.isActive ? 'Deactivate' : 'Activate'}
                </button>
                <button
                  onClick={() => deleteTemplate(template._id)}
                  className="text-red-600 hover:text-red-800 text-sm font-medium flex items-center"
                >
                  <MdDelete className="mr-1" /> Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="bg-gray-50 min-h-screen pt-4">
      {/* Header */}
      <div className="max-w-[97%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            
            <div className="flex items-center mt-2">
              <span className={`h-3 w-3 rounded-full mr-2 ${serverStatus === 'online' ? 'bg-green-500' : 'bg-red-500'}`}></span>
              <span className="text-sm text-gray-600">Server {serverStatus}</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={categoryFilter}
              onChange={handleCategoryFilterChange}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category._id} value={category._id}>
                  {category.title}
                </option>
              ))}
            </select>
            <div className="flex">
              <input
                type="text"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="px-3 py-2 border border-gray-300 rounded-l-md text-sm focus:ring-blue-500 focus:border-blue-500 w-40 md:w-64"
              />
              <button
                onClick={handleSearch}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md text-sm font-medium"
              >
                Search
              </button>
            </div>
            <button
              onClick={() => {
                resetForm();
                setShowTemplateForm(true);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center"
            >
              <MdLibraryAdd className="mr-2" />
              Add Template
            </button>
            <button
              onClick={loadTemplates}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
            >
              🔄 Refresh
            </button>
          </div>
        </div>
        
        {/* Table for Desktop, Cards for Mobile */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Desktop Table View - Hidden on Mobile */}
          <div className="hidden  hide-scrollbar md:block overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category/Service</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {templates.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="px-6 py-4 text-center text-gray-500">
                      No templates found
                    </td>
                  </tr>
                ) : (
                  templates.map(template => {
                    const mainImage = template.mainImage?.url || 'https://via.placeholder.com/300x200?text=No+Image';
                    const categoryName = template.category?.title || 'Unknown Category';
                    const serviceName = template.service?.title || 'Unknown Service';
                    const formattedPrice = template.pricing?.startingPrice
                      ? formatPrice(template.pricing.startingPrice, template.pricing.currency || 'INR')
                      : 'Price not set';
                    
                    return (
                      <tr key={template._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-25 w-40 rounded-md  overflow-hidden">
                              <img 
                                className="h-full w-full object-cover cursor-pointer" 
                                src={mainImage} 
                                alt={template.title}
                                onClick={() => setFullscreenImage(mainImage)}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{template.title}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{categoryName} /<br/> {serviceName}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500 max-w-xs">
                            {template.description?.substring(0, 100) + (template.description?.length > 100 ? '...' : '') || 'No description'}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-bold text-green-600">
                            {formattedPrice}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex flex-wrap gap-1">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${template.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                              {template.isActive ? 'Active' : 'Inactive'}
                            </span>
                            {template.isFeatured && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                Featured
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => editTemplate(template._id)}
                            className="text-blue-600 hover:text-blue-900 mr-3"
                          >
                            <RiEdit2Line className="inline w-4 h-4 mr-1" /> Edit
                          </button>
                          <button
                            onClick={() => toggleTemplateStatus(template._id)}
                            className="text-blue-600 hover:text-blue-900 mr-3"
                          >
                            {template.isActive ? 'Deactivate' : 'Activate'}
                          </button>
                          <button
                            onClick={() => deleteTemplate(template._id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <MdDelete className="inline w-4 h-4 mr-1" /> Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
          
          {/* Mobile Card View - Hidden on Desktop */}
          <div className="md:hidden p-4">
            {templates.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No templates found
              </div>
            ) : (
              templates.map(template => (
                <TemplateCard key={template._id} template={template} />
              ))
            )}
          </div>
          
          {/* Pagination */}
          <div className="mt-4 flex justify-between items-center px-4 pb-4">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage <= 1}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-sm text-gray-600">Page {currentPage} of {totalPages}</span>
            <button
              onClick={goToNextPage}
              disabled={currentPage >= totalPages}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      
      {/* Template Form Modal */}
      {showTemplateForm && (
        <div className="fixed inset-0 bg-white/20 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-r from-blue-700 to-blue-400 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh]  hide-scrollbar overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                  {isEditing ? (
                    <>✏️ Edit Template</>
                  ) : (
                    <>
                      <MdLibraryAdd className="text-2xl" />
                      Add New Template
                    </>
                  )}
                </h2>
                <button
                  onClick={resetForm}
                >
                  <TbXboxX className="text-white text-2xl hover:text-red-900" />
                </button>
              </div>
              
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input type="hidden" name="templateId" value={formData.templateId} />
                
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-white mb-1">Template Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="e.g., Business Website Template"
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 disabled:opacity-50"
                  />
                </div>
                
                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-white mb-1">Description *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Detailed template description"
                    required
                    rows="3"
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 disabled:opacity-50"
                  ></textarea>
                </div>
                
                {/* Category Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-white mb-1">Category *</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white bg-blue-500 disabled:opacity-50"
                  >
                    <option value="">Select Category</option>
                    {categories.map(category => (
                      <option key={category._id} value={category._id}>
                        {category.title}
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* Service Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-white mb-1">Service *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    disabled={serviceDisabled || isSubmitting}
                    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white bg-blue-500 disabled:opacity-50 ${serviceDisabled ? 'bg-gray-500' : ''}`}
                  >
                    <option value="">{serviceDisabled ? 'Select a category first' : 'Select a service'}</option>
                    {services.map(service => (
                      <option key={service._id} value={service._id}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* Pricing Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-1">Starting Price *</label>
                    <input
                      type="number"
                      name="startingPrice"
                      value={formData.startingPrice}
                      onChange={handleInputChange}
                      placeholder="0.00"
                      required
                      min="0"
                      step="0.01"
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-1">Currency</label>
                    <select
                      name="currency"
                      value={formData.currency}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-white bg-blue-500 disabled:opacity-50"
                    >
                      <option value="INR">₹ INR</option>
                      <option value="USD">$ USD</option>
                      <option value="EUR">€ EUR</option>
                      <option value="GBP">£ GBP</option>
                    </select>
                  </div>
                </div>
                
                {/* Status Toggles */}
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <input
                      id="isActive"
                      name="isActive"
                      type="checkbox"
                      checked={formData.isActive}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="isActive" className="ml-2 block text-sm text-white">Active</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="isFeatured"
                      name="isFeatured"
                      type="checkbox"
                      checked={formData.isFeatured}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="isFeatured" className="ml-2 block text-sm text-white">Featured</label>
                  </div>
                </div>
                
                {/* Main Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-white mb-1">Main Image</label>
                  <div className="flex gap-4 flex-wrap">
                    <label className="cursor-pointer inline-block px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow hover:opacity-90 transition duration-200">
                      Choose Image
                      <input
                        type="file"
                        name="mainImage"
                        ref={mainImageInputRef}
                        onChange={handleInputChange}
                        accept="image/*"
                        className="hidden"
                      />
                    </label>
                    
                    {mainImagePreview && (
                      <div className="relative w-60 h-32 rounded-lg overflow-hidden border-2 border-gray-400 shadow-lg">
                        <img
                          src={mainImagePreview}
                          alt="Template Preview"
                          className="w-full h-full object-cover cursor-pointer"
                          onClick={() => setFullscreenImage(mainImagePreview)}
                        />
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-gray-300 mt-2">
                    Upload JPG, PNG, or WebP (Max size: 5MB)
                  </p>
                </div>
                
                {/* Additional Images */}
                <div>
                  <label className="block text-sm font-medium text-white mb-1">Additional Images (max 10)</label>
                  <div className="flex gap-4 flex-wrap">
                    <label className="cursor-pointer inline-block px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow hover:opacity-90 transition duration-200">
                      Add Image
                      <input
                        type="file"
                        ref={additionalImageInputRef}
                        onChange={handleAddAdditionalImage}
                        accept="image/*"
                        className="hidden"
                      />
                    </label>
                    
                    {additionalImagesPreview.length > 0 && (
                      <div className="grid grid-cols-3 gap-2">
                        {additionalImagesPreview.map((img, index) => (
                          <div key={index} className="relative w-24 h-24 rounded-lg overflow-hidden border-2 border-gray-400 shadow-lg">
                            <img
                              src={img}
                              alt={`Additional preview ${index + 1}`}
                              className="w-full h-full object-cover cursor-pointer"
                              onClick={() => setFullscreenImage(img)}
                            />
                            <button
                              type="button"
                              onClick={() => handleRemoveAdditionalImage(index)}
                              className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                            >
                              <TbXboxX className="text-xs" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-gray-300 mt-2">
                    Upload JPG, PNG, or WebP (Max size: 5MB each)
                  </p>
                </div>
                
                {/* Buttons */}
                <div className="flex space-x-3 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium disabled:opacity-70 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <LoadingSpinner />
                        <span className="ml-2">Submitting...</span>
                      </>
                    ) : (
                      isEditing ? '💾 Update Template' : '🚀 Create Template'
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    disabled={isSubmitting}
                    className="flex-1 bg-gray-200 text-gray-800 py-3 px-4 rounded-md hover:bg-gray-300 transition-colors font-medium disabled:opacity-70"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      
      {/* Success/Error Messages */}
      <div className="fixed top-4 right-4 z-50">
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`alert ${msg.type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white px-4 py-2 rounded-lg shadow-lg mb-2`}
          >
            {msg.message}
          </div>
        ))}
      </div>
      
      {/* Fullscreen Image Preview */}
      {fullscreenImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4" onClick={() => setFullscreenImage(null)}>
          <div className="max-w-4xl max-h-full">
            <img src={fullscreenImage} alt="Fullscreen preview" className="max-w-full max-h-full object-contain" />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setFullscreenImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Template ;
