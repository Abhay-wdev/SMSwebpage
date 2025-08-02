import React, { useState, useEffect } from 'react';

const Services  = () => {
  const API_BASE = 'http://localhost:5000';
  const AUTH_TOKEN = 'DJ'; // 🔐 add your token here
  
  // State variables
  const [serverStatus, setServerStatus] = useState('offline');
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [messages, setMessages] = useState([]);
  const [filterCategory, setFilterCategory] = useState('');
  
  // Popup visibility states
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    serviceId: '',
    serviceTitle: '',
    serviceCategory: '',
    serviceDescription: '',
    serviceShortDescription: '',
    servicePrice: '',
    serviceCurrency: 'INR',
    serviceDeliveryTime: '',
    serviceDeliveryUnit: 'days',
    serviceFeatures: '',
    serviceTags: '',
    serviceActive: true,
    serviceFeatured: false,
    servicePopular: false,
    serviceMetaTitle: '',
    serviceMetaDescription: '',
    serviceMetaKeywords: '',
    serviceImage: null,
    currentImage: null
  });
  
  // Category form state
  const [categoryForm, setCategoryForm] = useState({
    title: '',
    description: '',
    isActive: true
  });
  
  const [isEditing, setIsEditing] = useState(false);

  // Currency symbols mapping
  const currencySymbols = { INR: '₹', USD: '$', EUR: '€', GBP: '£' };

  // Check server status on load
  useEffect(() => {
    checkServerStatus();
    loadCategoryOptions();
    loadServices();
  }, []);

  // Load services when filter changes
  useEffect(() => {
    loadServices();
  }, [filterCategory]);

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
      const response = await fetch(`${API_BASE}/api/health`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${AUTH_TOKEN}`,
        },
      });
      
      if (response.ok) {
        setServerStatus('online');
      } else {
        setServerStatus('offline');
      }
    } catch (error) {
      setServerStatus('offline');
    }
  };

  // Load category options
  const loadCategoryOptions = async () => {
    try {
      const response = await fetch(`${API_BASE}/api/categories/active`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${AUTH_TOKEN}`,
        },
      });
      
      const data = await response.json();
      if (data.success) {
        setCategories(data.data);
      }
    } catch (error) {
      console.error('Error loading category options:', error);
    }
  };

  // Load services
  const loadServices = async () => {
    try {
      let url = `${API_BASE}/api/services`;
      
      if (filterCategory && filterCategory !== "") {
        url += `?category=${filterCategory}`;
      }
      
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${AUTH_TOKEN}`,
        },
      });
      
      const data = await response.json();
      if (data.success) {
        setServices(data.data);
        

      }
    } catch (error) {
      showMessage('Error loading services: ' + error.message, 'error');
    }
  };

  // Reset service form
  const resetServiceForm = () => {
    setFormData({
      serviceId: '',
      serviceTitle: '',
      serviceCategory: '',
      serviceDescription: '',
      serviceShortDescription: '',
      servicePrice: '',
      serviceCurrency: 'INR',
      serviceDeliveryTime: '',
      serviceDeliveryUnit: 'days',
      serviceFeatures: '',
      serviceTags: '',
      serviceActive: true,
      serviceFeatured: false,
      servicePopular: false,
      serviceMetaTitle: '',
      serviceMetaDescription: '',
      serviceMetaKeywords: '',
      serviceImage: null,
      currentImage: null
    });
    setIsEditing(false);
    setShowServiceForm(false);
  };

  // Reset category form
  const resetCategoryForm = () => {
    setCategoryForm({
      title: '',
      description: '',
      isActive: true
    });
    setShowCategoryForm(false);
  };

  // Handle service form input changes
  const handleServiceInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (type === 'file') {
      setFormData(prev => ({ ...prev, serviceImage: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Handle category form input changes
  const handleCategoryInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setCategoryForm(prev => ({ ...prev, [name]: checked }));
    } else {
      setCategoryForm(prev => ({ ...prev, [name]: value }));
    }
  };

  // Handle service form submission
  const handleServiceFormSubmit = async (e) => {
    e.preventDefault();
    
    const serviceId = formData.serviceId;
    const isEdit = !!serviceId;
    const url = isEdit ? `${API_BASE}/api/services/${serviceId}` : `${API_BASE}/api/services`;
    const method = isEdit ? 'PUT' : 'POST';
    
    const formPayload = new FormData();
    formPayload.append('title', formData.serviceTitle);
    formPayload.append('description', formData.serviceDescription);
    formPayload.append('shortDescription', formData.serviceShortDescription);
    formPayload.append('category', formData.serviceCategory);
    formPayload.append('startingPrice', formData.servicePrice);
    formPayload.append('currency', formData.serviceCurrency);
    formPayload.append('deliveryTimeValue', formData.serviceDeliveryTime);
    formPayload.append('deliveryTimeUnit', formData.serviceDeliveryUnit);
    formPayload.append('features', formData.serviceFeatures);
    formPayload.append('tags', formData.serviceTags);
    formPayload.append('isActive', formData.serviceActive);
    formPayload.append('isFeatured', formData.serviceFeatured);
    formPayload.append('isPopular', formData.servicePopular);
    formPayload.append('metaTitle', formData.serviceMetaTitle);
    formPayload.append('metaDescription', formData.serviceMetaDescription);
    formPayload.append('metaKeywords', formData.serviceMetaKeywords);
    
    if (formData.serviceImage) {
      formPayload.append('image', formData.serviceImage);
    }
    
    try {
      const response = await fetch(url, {
        method: method,
        body: formPayload,
        headers: {
          'Authorization': `Bearer ${AUTH_TOKEN}`,
        },
      });
      
      const data = await response.json();
      
      if (data.success) {
        showMessage(isEdit ? 'Service updated successfully! 🎉' : 'Service created successfully! 🎉');
        resetServiceForm();
        loadServices();
      } else {
        showMessage('Error: ' + (data.message || data.errors?.[0]?.msg || 'Unknown error'), 'error');
      }
    } catch (error) {
      showMessage(`Error ${isEdit ? 'updating' : 'creating'} service: ` + error.message, 'error');
    }
  };

  // Handle category form submission
  const handleCategoryFormSubmit = async (e) => {
    e.preventDefault();
    
    const url = `${API_BASE}/api/categories`;
    const method = 'POST';
    
    try {
      const response = await fetch(url, {
        method: method,
        body: JSON.stringify(categoryForm),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${AUTH_TOKEN}`,
        },
      });
      
      const data = await response.json();
      
      if (data.success) {
        showMessage('Category created successfully! 🎉');
        resetCategoryForm();
        loadCategoryOptions();
      } else {
        showMessage('Error: ' + (data.message || data.errors?.[0]?.msg || 'Unknown error'), 'error');
      }
    } catch (error) {
      showMessage(`Error creating category: ` + error.message, 'error');
    }
  };

  // Edit service
  const editService = async (id) => {
    try {
      const response = await fetch(`${API_BASE}/api/services/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${AUTH_TOKEN}`,
        },
      });
      
      const data = await response.json();
      
      if (data.success) {
        const service = data.data;
        
        setFormData({
          serviceId: service._id,
          serviceTitle: service.title,
          serviceCategory: service.category._id,
          serviceDescription: service.description,
          serviceShortDescription: service.shortDescription || '',
          servicePrice: service.pricing.startingPrice,
          serviceCurrency: service.pricing.currency,
          serviceDeliveryTime: service.deliveryTime.value,
          serviceDeliveryUnit: service.deliveryTime.unit,
          serviceFeatures: service.features ? service.features.join(', ') : '',
          serviceTags: service.tags ? service.tags.join(', ') : '',
          serviceActive: service.isActive,
          serviceFeatured: service.isFeatured,
          servicePopular: service.isPopular,
          serviceMetaTitle: service.seo?.metaTitle || '',
          serviceMetaDescription: service.seo?.metaDescription || '',
          serviceMetaKeywords: service.seo?.metaKeywords || '',
          serviceImage: null,
          currentImage: service.image ? service.image.url : null
        });
        
        setIsEditing(true);
        setShowServiceForm(true);
      } else {
        showMessage('Error: ' + data.message, 'error');
      }
    } catch (error) {
      showMessage('Error loading service details: ' + error.message, 'error');
    }
  };

  // Toggle service status
  const toggleServiceStatus = async (id) => {
    try {
      const response = await fetch(`${API_BASE}/api/services/${id}/toggle-active`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${AUTH_TOKEN}`,
        },
      });
      
      const data = await response.json();
      if (data.success) {
        showMessage(data.message);
        loadServices();
      } else {
        showMessage('Error: ' + data.message, 'error');
      }
    } catch (error) {
      showMessage('Error toggling service status: ' + error.message, 'error');
    }
  };

  // Delete service
  const deleteService = async (id) => {
    if (confirm('Are you sure you want to delete this service? This action cannot be undone.')) {
      try {
        const response = await fetch(`${API_BASE}/api/services/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${AUTH_TOKEN}`,
          },
        });
        
        const data = await response.json();
        if (data.success) {
          showMessage('Service deleted successfully! 🗑️');
          loadServices();
        } else {
          showMessage('Error: ' + data.message, 'error');
        }
      } catch (error) {
        showMessage('Error deleting service: ' + error.message, 'error');
      }
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gray-900">🛍️ Services Management Dashboard</h1>
            
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Services List */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              📋 Services List
            </h2>
            <div className="flex items-center space-x-3">
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm"
              >
                <option value="" selected>All Categories</option>
                {categories.map(category => (
                  <option key={category._id} value={category._id}>
                    {category.title}
                  </option>
                ))}
              </select>
              
              <button
                onClick={() => {
                  resetServiceForm();
                  setShowServiceForm(true);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm font-medium"
              >
                Add Service
              </button>
              <button
                onClick={loadServices}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                🔄 Refresh
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            {services.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                Loading services...
              </div>
            ) : (
              services.map(service => {
                const currencySymbol = currencySymbols[service.pricing.currency] || '₹';
                
                return (
                  <div key={service._id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex gap-4">
                      {service.image ? (
                        <div className="flex-shrink-0">
                          <img 
                            src={service.image.url} 
                            alt={service.title} 
                            className="w-20 h-20 object-cover rounded-lg border"
                          />
                        </div>
                      ) : (
                        <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-lg border flex items-center justify-center">
                          <span className="text-gray-400 text-xs">No Image</span>
                        </div>
                      )}
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-lg">{service.title}</h4>
                            <p className="text-sm text-blue-600 font-medium mb-2">{service.category?.title || ''}</p>
                            <p className="text-gray-600 text-sm mb-3">
                              {service.shortDescription || service.description.substring(0, 120) + '...'}
                            </p>
                            
                            {service.features && service.features.length > 0 && (
                              <div className="flex flex-wrap gap-1 mb-3">
                                {service.features.slice(0, 3).map((feature, index) => (
                                  <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                                    {feature}
                                  </span>
                                ))}
                                {service.features.length > 3 && (
                                  <span className="text-xs text-gray-500">+{service.features.length - 3} more</span>
                                )}
                              </div>
                            )}
                            
                            <div className="flex items-center space-x-4 text-sm">
                              <span className="font-bold text-green-600 text-lg">
                                {currencySymbol}{service.pricing.startingPrice.toLocaleString()}
                              </span>
                              <span className="text-gray-500">• {service.deliveryTime.value} {service.deliveryTime.unit}</span>
                              <span className="text-gray-500">• {service.metadata.views || 0} views</span>
                            </div>
                            
                            <div className="flex items-center space-x-2 mt-3">
                              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                service.isActive 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-red-100 text-red-800'
                              }`}>
                                {service.isActive ? '✅ Active' : '❌ Inactive'}
                              </span>
                              {service.isFeatured && (
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                  ⭐ Featured
                                </span>
                              )}
                              {service.isPopular && (
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                                  🔥 Popular
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="flex flex-col space-y-2 ml-4">
                            <button
                              onClick={() => editService(service._id)}
                              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => toggleServiceStatus(service._id)}
                              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                            >
                              {service.isActive ? 'Deactivate' : 'Activate'}
                            </button>
                            <button
                              onClick={() => deleteService(service._id)}
                              className="text-red-600 hover:text-red-800 text-sm font-medium"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
      
      {/* Service Form Popup */}
      {showServiceForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                  {isEditing ? '✏️ Edit Service' : '➕ Add New Service'}
                </h2>
                <button
                  onClick={resetServiceForm}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <form onSubmit={handleServiceFormSubmit} className="space-y-4">
                {/* Hidden field for service ID during edit */}
                <input type="hidden" name="serviceId" value={formData.serviceId} />
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service Title *</label>
                  <input
                    type="text"
                    name="serviceTitle"
                    value={formData.serviceTitle}
                    onChange={handleServiceInputChange}
                    placeholder="e.g., Personal Website Development"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                  <select
                    name="serviceCategory"
                    value={formData.serviceCategory}
                    onChange={handleServiceInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Category</option>
                    {categories.map(category => (
                      <option key={category._id} value={category._id}>
                        {category.title}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                  <textarea
                    name="serviceDescription"
                    value={formData.serviceDescription}
                    onChange={handleServiceInputChange}
                    placeholder="Detailed service description"
                    required
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Short Description</label>
                  <input
                    type="text"
                    name="serviceShortDescription"
                    value={formData.serviceShortDescription}
                    onChange={handleServiceInputChange}
                    placeholder="Brief summary for cards"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Starting Price *</label>
                    <input
                      type="number"
                      name="servicePrice"
                      value={formData.servicePrice}
                      onChange={handleServiceInputChange}
                      placeholder="15000"
                      required
                      min="0"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
                    <select
                      name="serviceCurrency"
                      value={formData.serviceCurrency}
                      onChange={handleServiceInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="INR">₹ INR</option>
                      <option value="USD">$ USD</option>
                      <option value="EUR">€ EUR</option>
                      <option value="GBP">£ GBP</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Time *</label>
                    <input
                      type="number"
                      name="serviceDeliveryTime"
                      value={formData.serviceDeliveryTime}
                      onChange={handleServiceInputChange}
                      placeholder="7"
                      required
                      min="1"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Unit</label>
                    <select
                      name="serviceDeliveryUnit"
                      value={formData.serviceDeliveryUnit}
                      onChange={handleServiceInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="days">Days</option>
                      <option value="weeks">Weeks</option>
                      <option value="months">Months</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Features</label>
                  <input
                    type="text"
                    name="serviceFeatures"
                    value={formData.serviceFeatures}
                    onChange={handleServiceInputChange}
                    placeholder="Responsive Design, SEO Optimized, Fast Loading"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">Separate features with commas</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service Image</label>
                  <input
                    type="file"
                    name="serviceImage"
                    onChange={handleServiceInputChange}
                    accept="image/*"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">Max 5MB, JPG/PNG/GIF</p>
                  
                  {/* Display current image when editing */}
                  {formData.currentImage && (
                    <div className="mt-2">
                      <p className="text-xs text-gray-500 mb-1">Current Image:</p>
                      <img 
                        src={formData.currentImage} 
                        alt="Current service image" 
                        className="w-32 h-32 object-cover rounded-md border"
                      />
                    </div>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
                  <input
                    type="text"
                    name="serviceTags"
                    value={formData.serviceTags}
                    onChange={handleServiceInputChange}
                    placeholder="website, development, responsive"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">Separate tags with commas</p>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Service Flags</label>
                  <div className="flex flex-wrap items-center gap-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="serviceActive"
                        checked={formData.serviceActive}
                        onChange={handleServiceInputChange}
                        className="mr-2 text-blue-600"
                      />
                      <span className="text-sm">Active</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="serviceFeatured"
                        checked={formData.serviceFeatured}
                        onChange={handleServiceInputChange}
                        className="mr-2 text-purple-600"
                      />
                      <span className="text-sm">Featured</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="servicePopular"
                        checked={formData.servicePopular}
                        onChange={handleServiceInputChange}
                        className="mr-2 text-orange-600"
                      />
                      <span className="text-sm">Popular</span>
                    </label>
                  </div>
                </div>
                
                {/* SEO Section */}
                <div className="border-t pt-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">SEO Settings (Optional)</h3>
                  <div className="space-y-3">
                    <input
                      type="text"
                      name="serviceMetaTitle"
                      value={formData.serviceMetaTitle}
                      onChange={handleServiceInputChange}
                      placeholder="Meta Title (60 chars max)"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <textarea
                      name="serviceMetaDescription"
                      value={formData.serviceMetaDescription}
                      onChange={handleServiceInputChange}
                      placeholder="Meta Description (160 chars max)"
                      rows="2"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                    <input
                      type="text"
                      name="serviceMetaKeywords"
                      value={formData.serviceMetaKeywords}
                      onChange={handleServiceInputChange}
                      placeholder="Meta Keywords (comma separated)"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
                  >
                    {isEditing ? '💾 Update Service' : '🚀 Create Service'}
                  </button>
                  <button
                    type="button"
                    onClick={resetServiceForm}
                    className="flex-1 bg-gray-200 text-gray-800 py-3 px-4 rounded-md hover:bg-gray-300 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      
      {/* Category Form Popup */}
      {showCategoryForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
               
              
              <form onSubmit={handleCategoryFormSubmit} className="space-y-4">
                 
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    name="description"
                    value={categoryForm.description}
                    onChange={handleCategoryInputChange}
                    placeholder="Category description"
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="isActive"
                    checked={categoryForm.isActive}
                    onChange={handleCategoryInputChange}
                    className="mr-2 text-blue-600"
                  />
                  <label className="text-sm text-gray-700">Active</label>
                </div>
                
                <div className="flex space-x-3">
                  <button
                    type="submit"
                    className="flex-1 bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700 transition-colors font-medium"
                  >
                    🚀 Create Category
                  </button>
                  <button
                    type="button"
                    onClick={resetCategoryForm}
                    className="flex-1 bg-gray-200 text-gray-800 py-3 px-4 rounded-md hover:bg-gray-300 transition-colors font-medium"
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
    </div>
  );
};

export default Services;