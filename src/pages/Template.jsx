import React, { useState, useEffect } from 'react';

const Template = () => {
  // State variables
  const [serverStatus, setServerStatus] = useState('offline');
  const [templates, setTemplates] = useState([]);
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [apiResponse, setApiResponse] = useState('Click any API test button to see the response here...');
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    featured: 0,
    popular: 0
  });
  
  // Form state
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    description: '',
    service: '',
    category: '',
    industry: '',
    designStyle: '',
    basePrice: '',
    currency: 'INR',
    pages: '1',
    sortOrder: '0',
    demoUrl: '',
    features: '',
    tags: '',
    isResponsive: true,
    hasCMS: false,
    hasEcommerce: false,
    hasBooking: false,
    hasContactForm: true,
    hasGallery: false,
    hasBlog: false,
    isActive: true,
    isFeatured: false,
    isPopular: false,
    primaryColor: '',
    secondaryColor: '',
    accentColor: '',
    metaTitle: '',
    metaDescription: '',
    metaKeywords: '',
    images: []
  });
  
  // Form errors state
  const [formErrors, setFormErrors] = useState({});
  
  // Filter state
  const [filters, setFilters] = useState({
    service: '',
    industry: ''
  });
  
  // Industries list
  const industries = [
    'doctor-clinic', 'restaurant-cafe', 'hotel-resort', 'coaching-institute',
    'architect-interior', 'salon-spa', 'gym-fitness', 'real-estate',
    'fashion-boutique', 'event-planner', 'photographer', 'lawyer-legal',
    'dentist', 'veterinary', 'consultant', 'freelancer-portfolio',
    'ecommerce', 'startup', 'corporate', 'ngo-charity', 'educational',
    'automotive', 'technology', 'healthcare', 'finance', 'travel-tourism',
    'food-delivery', 'beauty-cosmetics', 'jewelry', 'construction',
    'agriculture', 'other'
  ];
  
  // Design styles
  const designStyles = [
    'modern', 'minimalist', 'classic', 'bold', 'elegant', 
    'creative', 'professional', 'trendy', 'vintage', 'corporate'
  ];
  
  // API base URL
  const API_BASE = 'http://localhost:5000';
  
  // Initialize component
  useEffect(() => {
    checkServerStatus();
    loadOptions();
    loadTemplates();
    updateStats();
  }, []);
  
  // Check server status
  const checkServerStatus = async () => {
    try {
      const response = await fetch(`${API_BASE}/api/health`);
      if (response.ok) {
        setServerStatus('online');
      }
    } catch (error) {
      setServerStatus('offline');
    }
  };
  
  // Load services and categories
  const loadOptions = async () => {
    try {
      // Load services
      const servicesResponse = await fetch(`${API_BASE}/api/services`);
      const servicesData = await servicesResponse.json();
      
      if (servicesData.success) {
        setServices(servicesData.data);
      }
      
      // Load categories
      const categoriesResponse = await fetch(`${API_BASE}/api/categories`);
      const categoriesData = await categoriesResponse.json();
      
      if (categoriesData.success) {
        setCategories(categoriesData.data);
      }
    } catch (error) {
      console.error('Error loading options:', error);
    }
  };
  
  // Load templates with filtering and pagination
  const loadTemplates = async (page = 1) => {
    try {
      setCurrentPage(page);
      let url = `${API_BASE}/api/templates?page=${page}&limit=6`;
      if (filters.service) url += `&service=${filters.service}`;
      if (filters.industry) url += `&industry=${filters.industry}`;
      
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.success) {
        setTemplates(data.data);
        setTotalPages(data.pagination.totalPages);
      }
    } catch (error) {
      console.error('Error loading templates:', error);
    }
  };
  
  // Update statistics
  const updateStats = async () => {
    try {
      const [allResponse, featuredResponse, popularResponse] = await Promise.all([
        fetch(`${API_BASE}/api/templates`),
        fetch(`${API_BASE}/api/templates/featured`),
        fetch(`${API_BASE}/api/templates/popular`)
      ]);
      
      const [allData, featuredData, popularData] = await Promise.all([
        allResponse.json(),
        featuredResponse.json(),
        popularResponse.json()
      ]);
      
      if (allData.success) {
        const total = allData.pagination?.totalItems || allData.data.length;
        const activeCount = allData.data.filter(t => t.isActive).length;
        setStats(prev => ({ ...prev, total, active: activeCount }));
      }
      
      if (featuredData.success) {
        setStats(prev => ({ ...prev, featured: featuredData.data.length }));
      }
      
      if (popularData.success) {
        setStats(prev => ({ ...prev, popular: popularData.data.length }));
      }
    } catch (error) {
      console.error('Error updating stats:', error);
    }
  };
  
  // Validate form
  const validateForm = () => {
    const errors = {};
    
    // Validate required fields
    if (!formData.title.trim()) {
      errors.title = 'Title is required';
    }
    
    if (!formData.description.trim()) {
      errors.description = 'Description is required';
    }
    
    if (!formData.service) {
      errors.service = 'Service is required';
    }
    
    if (!formData.category) {
      errors.category = 'Category is required';
    }
    
    if (!formData.industry) {
      errors.industry = 'Industry is required';
    }
    
    if (!formData.designStyle) {
      errors.designStyle = 'Design style is required';
    }
    
    // Validate numeric fields
    if (formData.basePrice && isNaN(Number(formData.basePrice))) {
      errors.basePrice = 'Base price must be a number';
    }
    
    if (formData.pages && (isNaN(Number(formData.pages)) || Number(formData.pages) < 1)) {
      errors.pages = 'Pages must be a number greater than 0';
    }
    
    if (formData.sortOrder && (isNaN(Number(formData.sortOrder)) || Number(formData.sortOrder) < 0)) {
      errors.sortOrder = 'Sort order must be a number greater than or equal to 0';
    }
    
    // Validate URL
    if (formData.demoUrl && !isValidUrl(formData.demoUrl)) {
      errors.demoUrl = 'Please enter a valid URL';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  // Helper function to validate URL
  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  };
  
  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
    loadTemplates(1);
  };
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  // Handle file input changes
  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      images: Array.from(e.target.files)
    }));
  };
  
  // Reset form
  const resetForm = () => {
    setFormData({
      id: '',
      title: '',
      description: '',
      service: '',
      category: '',
      industry: '',
      designStyle: '',
      basePrice: '',
      currency: 'INR',
      pages: '1',
      sortOrder: '0',
      demoUrl: '',
      features: '',
      tags: '',
      isResponsive: true,
      hasCMS: false,
      hasEcommerce: false,
      hasBooking: false,
      hasContactForm: true,
      hasGallery: false,
      hasBlog: false,
      isActive: true,
      isFeatured: false,
      isPopular: false,
      primaryColor: '',
      secondaryColor: '',
      accentColor: '',
      metaTitle: '',
      metaDescription: '',
      metaKeywords: '',
      images: []
    });
    setFormErrors({});
    setIsEditMode(false);
  };
  
  // Submit form (create/update template)
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }
    
    const formPayload = new FormData();
    
    // Add all form fields to FormData
    Object.keys(formData).forEach(key => {
      if (key !== 'images') {
        formPayload.append(key, formData[key]);
      }
    });
    
    // Add image files
    formData.images.forEach(image => {
      formPayload.append('images', image);
    });
    
    try {
      const url = isEditMode ? `${API_BASE}/api/templates/${formData.id}` : `${API_BASE}/api/templates`;
      const method = isEditMode ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method: method,
        body: formPayload
      });
      
      const data = await response.json();
      
      if (data.success) {
        alert(`Template ${isEditMode ? 'updated' : 'created'} successfully!`);
        resetForm();
        loadTemplates(currentPage);
        updateStats();
      } else {
        // Handle server validation errors
        if (data.errors && Array.isArray(data.errors)) {
          const serverErrors = {};
          data.errors.forEach(error => {
            serverErrors[error.param] = error.msg;
          });
          setFormErrors(serverErrors);
        }
        alert('Error: ' + (data.message || 'Unknown error'));
      }
    } catch (error) {
      alert(`Error ${isEditMode ? 'updating' : 'creating'} template: ` + error.message);
    }
  };
  
  // Edit template
  const editTemplate = async (id) => {
    try {
      const response = await fetch(`${API_BASE}/api/templates/${id}`);
      const data = await response.json();
      
      if (data.success) {
        const template = data.data;
        setIsEditMode(true);
        
        // Populate form with template data
        setFormData({
          id: template._id,
          title: template.title,
          description: template.description,
          service: template.service?._id || '',
          category: template.category?._id || '',
          industry: template.industry,
          designStyle: template.designStyle,
          basePrice: template.pricing?.basePrice || '',
          currency: template.pricing?.currency || 'INR',
          pages: template.techSpecs?.pages?.toString() || '1',
          sortOrder: template.sortOrder?.toString() || '0',
          demoUrl: template.demoUrl || '',
          features: template.features?.join(', ') || '',
          tags: template.tags?.join(', ') || '',
          isResponsive: template.techSpecs?.isResponsive !== false,
          hasCMS: template.techSpecs?.hasCMS === true,
          hasEcommerce: template.techSpecs?.hasEcommerce === true,
          hasBooking: template.techSpecs?.hasBooking === true,
          hasContactForm: template.techSpecs?.hasContactForm !== false,
          hasGallery: template.techSpecs?.hasGallery === true,
          hasBlog: template.techSpecs?.hasBlog === true,
          isActive: template.isActive !== false,
          isFeatured: template.isFeatured === true,
          isPopular: template.isPopular === true,
          primaryColor: template.colorScheme?.primary || '',
          secondaryColor: template.colorScheme?.secondary || '',
          accentColor: template.colorScheme?.accent || '',
          metaTitle: template.seo?.metaTitle || '',
          metaDescription: template.seo?.metaDescription || '',
          metaKeywords: template.seo?.metaKeywords?.join(', ') || '',
          images: []
        });
        
        // Clear any existing errors
        setFormErrors({});
        
        // Scroll to form
        document.getElementById('templateForm').scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      alert('Error loading template for editing: ' + error.message);
    }
  };
  
  // Toggle template status
  const toggleTemplateStatus = async (id) => {
    try {
      const response = await fetch(`${API_BASE}/api/templates/${id}/toggle-active`, {
        method: 'PATCH'
      });
      const data = await response.json();
      
      if (data.success) {
        alert(data.message);
        loadTemplates(currentPage);
        updateStats();
      } else {
        alert('Error: ' + data.message);
      }
    } catch (error) {
      alert('Error toggling template status: ' + error.message);
    }
  };
  
  // Select template (increment selections)
  const selectTemplate = async (id) => {
    try {
      const response = await fetch(`${API_BASE}/api/templates/${id}/select`, {
        method: 'PATCH'
      });
      const data = await response.json();
      
      if (data.success) {
        alert('Template selection recorded!');
        loadTemplates(currentPage);
      } else {
        alert('Error: ' + data.message);
      }
    } catch (error) {
      alert('Error recording template selection: ' + error.message);
    }
  };
  
  // Delete template
  const deleteTemplate = async (id) => {
    if (confirm('Are you sure you want to delete this template? This action cannot be undone and will also delete all associated images.')) {
      try {
        const response = await fetch(`${API_BASE}/api/templates/${id}`, {
          method: 'DELETE'
        });
        const data = await response.json();
        
        if (data.success) {
          alert('Template deleted successfully!');
          loadTemplates(currentPage);
          updateStats();
        } else {
          alert('Error: ' + data.message);
        }
      } catch (error) {
        alert('Error deleting template: ' + error.message);
      }
    }
  };
  
  // View template details
  const viewTemplate = async (id) => {
    try {
      const response = await fetch(`${API_BASE}/api/templates/${id}`);
      const data = await response.json();
      
      if (data.success) {
        setSelectedTemplate(data.data);
        setModalContent(data.data);
        setShowModal(true);
      }
    } catch (error) {
      alert('Error loading template details: ' + error.message);
    }
  };
  
  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedTemplate(null);
    setModalContent(null);
  };
  
  // Test API endpoints
  const testAPI = async (endpoint) => {
    try {
      const response = await fetch(`${API_BASE}${endpoint}`);
      const data = await response.json();
      
      setApiResponse(`
        <div class="mb-2">
          <span class="font-medium">Endpoint:</span> <code class="bg-gray-200 px-2 py-1 rounded text-xs">${endpoint}</code>
        </div>
        <div class="mb-2">
          <span class="font-medium">Status:</span> <span class="${response.ok ? 'text-green-600' : 'text-red-600'}">${response.status} ${response.statusText}</span>
        </div>
        <div class="mb-2">
          <span class="font-medium">Response Time:</span> <span class="text-blue-600">${new Date().toLocaleTimeString()}</span>
        </div>
        <div>
          <span class="font-medium">Response:</span>
          <pre class="bg-gray-50 p-3 rounded mt-2 text-xs overflow-x-auto max-h-48 overflow-y-auto">${JSON.stringify(data, null, 2)}</pre>
        </div>
      `);
    } catch (error) {
      setApiResponse(`
        <div class="text-red-600">
          <span class="font-medium">Error:</span> ${error.message}
        </div>
      `);
    }
  };
  
  // Test custom API endpoint
  const testCustomAPI = () => {
    const endpoint = document.getElementById('customEndpoint').value.trim();
    if (!endpoint) {
      alert('Please enter an endpoint to test');
      return;
    }
    
    if (!endpoint.startsWith('/api/')) {
      alert('Endpoint should start with /api/');
      return;
    }
    
    testAPI(endpoint);
  };
  
  // Currency symbols
  const currencySymbols = { 
    INR: '₹', 
    USD: '$', 
    EUR: '€', 
    GBP: '£' 
  };
  
  // Render pagination
  const renderPagination = () => {
    if (totalPages <= 1) return null;
    
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => loadTemplates(i)}
          className={`px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 ${i === currentPage ? 'bg-blue-600 text-white' : ''}`}
        >
          {i}
        </button>
      );
    }
    
    return (
      <div className="flex items-center space-x-2">
        {currentPage > 1 && (
          <button
            onClick={() => loadTemplates(currentPage - 1)}
            className="px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Previous
          </button>
        )}
        {pages}
        {currentPage < totalPages && (
          <button
            onClick={() => loadTemplates(currentPage + 1)}
            className="px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Next
          </button>
        )}
      </div>
    );
  };
  
  // Render template modal
  const renderTemplateModal = () => {
    if (!showModal || !modalContent) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center min-h-screen p-4">
        <div className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Template Details</h3>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <div className="space-y-6">
              {/* Images Gallery */}
              {modalContent.images && modalContent.images.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-3">Template Images</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {modalContent.images.map((img, index) => (
                      <div key={index} className="relative">
                        <img 
                          src={img.url} 
                          alt={img.alt || modalContent.title} 
                          className="w-full h-32 object-cover rounded-lg border"
                        />
                        {img.isMain && (
                          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">Main</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Basic Information</h4>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-medium">Title:</span> {modalContent.title}</div>
                    <div><span className="font-medium">Slug:</span> {modalContent.slug}</div>
                    <div><span className="font-medium">Service:</span> {modalContent.service?.title}</div>
                    <div><span className="font-medium">Category:</span> {modalContent.category?.title}</div>
                    <div><span className="font-medium">Industry:</span> {modalContent.industry}</div>
                    <div><span className="font-medium">Design Style:</span> {modalContent.designStyle}</div>
                    {modalContent.demoUrl && (
                      <div>
                        <span className="font-medium">Demo:</span> 
                        <a href={modalContent.demoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                          {modalContent.demoUrl}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Technical Specs</h4>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-medium">Pages:</span> {modalContent.techSpecs?.pages || 1}</div>
                    <div><span className="font-medium">Responsive:</span> {modalContent.techSpecs?.isResponsive ? 'Yes' : 'No'}</div>
                    <div><span className="font-medium">CMS:</span> {modalContent.techSpecs?.hasCMS ? 'Yes' : 'No'}</div>
                    <div><span className="font-medium">E-commerce:</span> {modalContent.techSpecs?.hasEcommerce ? 'Yes' : 'No'}</div>
                    <div><span className="font-medium">Booking:</span> {modalContent.techSpecs?.hasBooking ? 'Yes' : 'No'}</div>
                    <div><span className="font-medium">Contact Form:</span> {modalContent.techSpecs?.hasContactForm ? 'Yes' : 'No'}</div>
                    <div><span className="font-medium">Gallery:</span> {modalContent.techSpecs?.hasGallery ? 'Yes' : 'No'}</div>
                    <div><span className="font-medium">Blog:</span> {modalContent.techSpecs?.hasBlog ? 'Yes' : 'No'}</div>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <div>
                <h4 className="font-semibold mb-3">Description</h4>
                <p className="text-gray-700">{modalContent.description}</p>
              </div>
              
              {/* Features & Tags */}
              {modalContent.features && modalContent.features.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-3">Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {modalContent.features.map((feature, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {modalContent.tags && modalContent.tags.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-3">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {modalContent.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Analytics */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{modalContent.views || 0}</div>
                  <div className="text-sm text-gray-600">Views</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{modalContent.selections || 0}</div>
                  <div className="text-sm text-gray-600">Selections</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{modalContent.sortOrder || 0}</div>
                  <div className="text-sm text-gray-600">Sort Order</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gray-900">🎨 Template Management Dashboard</h1>
            <div className="flex space-x-4">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                serverStatus === 'online' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {serverStatus === 'online' ? '🟢 Server Online' : '🔴 Server Offline'}
              </span>
            </div>
          </div>
        </div>
      </header>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Add/Edit Template Form */}
          <div className="xl:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                {isEditMode ? '✏️ Edit Template' : '➕ Add New Template'}
              </h2>
              
              <form id="templateForm" onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
                <input type="hidden" name="id" value={formData.id} />
                
                {/* Basic Information */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Template Title *</label>
                  <input 
                    type="text" 
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="e.g., Modern Restaurant Website" 
                    className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      formErrors.title ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {formErrors.title && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.title}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                  <textarea 
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Detailed template description" 
                    rows="3"
                    className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      formErrors.description ? 'border-red-500' : 'border-gray-300'
                    }`}
                  ></textarea>
                  {formErrors.description && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.description}</p>
                  )}
                </div>
                
                {/* Service & Category */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Service *</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        formErrors.service ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select Service</option>
                      {services.map(service => (
                        <option key={service._id} value={service._id}>{service.title}</option>
                      ))}
                    </select>
                    {formErrors.service && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.service}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                    <select 
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        formErrors.category ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select Category</option>
                      {categories.map(category => (
                        <option key={category._id} value={category._id}>{category.title}</option>
                      ))}
                    </select>
                    {formErrors.category && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.category}</p>
                    )}
                  </div>
                </div>
                
                {/* Industry & Design Style */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Industry *</label>
                    <select 
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        formErrors.industry ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select Industry</option>
                      {industries.map(industry => (
                        <option key={industry} value={industry}>
                          {industry.replace('-', '/').replace(/\b\w/g, l => l.toUpperCase())}
                        </option>
                      ))}
                    </select>
                    {formErrors.industry && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.industry}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Design Style *</label>
                    <select 
                      name="designStyle"
                      value={formData.designStyle}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        formErrors.designStyle ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select Style</option>
                      {designStyles.map(style => (
                        <option key={style} value={style}>
                          {style.charAt(0).toUpperCase() + style.slice(1)}
                        </option>
                      ))}
                    </select>
                    {formErrors.designStyle && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.designStyle}</p>
                    )}
                  </div>
                </div>
                
                {/* Pricing */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Base Price</label>
                    <input 
                      type="number" 
                      name="basePrice"
                      value={formData.basePrice}
                      onChange={handleInputChange}
                      placeholder="25000" 
                      min="0"
                      className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        formErrors.basePrice ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {formErrors.basePrice && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.basePrice}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
                    <select 
                      name="currency"
                      value={formData.currency}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="INR">₹ INR</option>
                      <option value="USD">$ USD</option>
                      <option value="EUR">€ EUR</option>
                      <option value="GBP">£ GBP</option>
                    </select>
                  </div>
                </div>
                
                {/* Technical Specs */}
                <div className="border-t pt-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Technical Specifications</h3>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Pages</label>
                      <input 
                        type="number" 
                        name="pages"
                        value={formData.pages}
                        onChange={handleInputChange}
                        placeholder="5" 
                        min="1" 
                        className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          formErrors.pages ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {formErrors.pages && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.pages}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Sort Order</label>
                      <input 
                        type="number" 
                        name="sortOrder"
                        value={formData.sortOrder}
                        onChange={handleInputChange}
                        placeholder="0" 
                        min="0" 
                        className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          formErrors.sortOrder ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {formErrors.sortOrder && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.sortOrder}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        name="isResponsive"
                        checked={formData.isResponsive}
                        onChange={handleInputChange}
                        className="mr-2 text-blue-600"
                      />
                      <span>Responsive</span>
                    </label>
                    
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        name="hasCMS"
                        checked={formData.hasCMS}
                        onChange={handleInputChange}
                        className="mr-2 text-blue-600"
                      />
                      <span>Has CMS</span>
                    </label>
                    
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        name="hasEcommerce"
                        checked={formData.hasEcommerce}
                        onChange={handleInputChange}
                        className="mr-2 text-blue-600"
                      />
                      <span>E-commerce</span>
                    </label>
                    
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        name="hasBooking"
                        checked={formData.hasBooking}
                        onChange={handleInputChange}
                        className="mr-2 text-blue-600"
                      />
                      <span>Booking System</span>
                    </label>
                    
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        name="hasContactForm"
                        checked={formData.hasContactForm}
                        onChange={handleInputChange}
                        className="mr-2 text-blue-600"
                      />
                      <span>Contact Form</span>
                    </label>
                    
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        name="hasGallery"
                        checked={formData.hasGallery}
                        onChange={handleInputChange}
                        className="mr-2 text-blue-600"
                      />
                      <span>Gallery</span>
                    </label>
                    
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        name="hasBlog"
                        checked={formData.hasBlog}
                        onChange={handleInputChange}
                        className="mr-2 text-blue-600"
                      />
                      <span>Blog</span>
                    </label>
                  </div>
                </div>
                
                {/* Demo, Features & Tags */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Demo URL</label>
                  <input 
                    type="url" 
                    name="demoUrl"
                    value={formData.demoUrl}
                    onChange={handleInputChange}
                    placeholder="https://demo.example.com"
                    className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      formErrors.demoUrl ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {formErrors.demoUrl && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.demoUrl}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Features</label>
                  <input 
                    type="text" 
                    name="features"
                    value={formData.features}
                    onChange={handleInputChange}
                    placeholder="Modern Design, SEO Optimized, Mobile Friendly"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">Separate features with commas</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
                  <input 
                    type="text" 
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    placeholder="restaurant, modern, responsive"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">Separate tags with commas</p>
                </div>
                
                {/* Images Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Template Images</label>
                  <input 
                    type="file" 
                    name="images"
                    onChange={handleFileChange}
                    accept="image/*" 
                    multiple
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">Max 10 images, 5MB each, JPG/PNG/GIF</p>
                </div>
                
                {/* Color Scheme */}
                <div className="border-t pt-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Color Scheme (Optional)</h3>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Primary</label>
                      <input 
                        type="color" 
                        name="primaryColor"
                        value={formData.primaryColor}
                        onChange={handleInputChange}
                        className="w-full h-8 border border-gray-300 rounded cursor-pointer"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Secondary</label>
                      <input 
                        type="color" 
                        name="secondaryColor"
                        value={formData.secondaryColor}
                        onChange={handleInputChange}
                        className="w-full h-8 border border-gray-300 rounded cursor-pointer"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Accent</label>
                      <input 
                        type="color" 
                        name="accentColor"
                        value={formData.accentColor}
                        onChange={handleInputChange}
                        className="w-full h-8 border border-gray-300 rounded cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Status Flags */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Template Status</label>
                  <div className="flex flex-wrap items-center gap-4">
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        name="isActive"
                        checked={formData.isActive}
                        onChange={handleInputChange}
                        className="mr-2 text-blue-600"
                      />
                      <span className="text-sm">Active</span>
                    </label>
                    
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        name="isFeatured"
                        checked={formData.isFeatured}
                        onChange={handleInputChange}
                        className="mr-2 text-purple-600"
                      />
                      <span className="text-sm">Featured</span>
                    </label>
                    
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        name="isPopular"
                        checked={formData.isPopular}
                        onChange={handleInputChange}
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
                      name="metaTitle"
                      value={formData.metaTitle}
                      onChange={handleInputChange}
                      placeholder="Meta Title (60 chars max)" 
                      maxLength="60"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    
                    <textarea 
                      name="metaDescription"
                      value={formData.metaDescription}
                      onChange={handleInputChange}
                      placeholder="Meta Description (160 chars max)" 
                      maxLength="160" 
                      rows="2"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                    
                    <input 
                      type="text" 
                      name="metaKeywords"
                      value={formData.metaKeywords}
                      onChange={handleInputChange}
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
                    {isEditMode ? '💾 Update Template' : '🚀 Create Template'}
                  </button>
                  
                  <button 
                    type="button" 
                    onClick={resetForm}
                    className="px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors font-medium"
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Templates List */}
          <div className="xl:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                  📋 Templates List
                </h2>
                
                <div className="flex items-center space-x-3">
                  <select 
                    name="service"
                    value={filters.service}
                    onChange={handleFilterChange}
                    className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                  >
                    <option value="">All Services</option>
                    {services.map(service => (
                      <option key={service._id} value={service._id}>{service.title}</option>
                    ))}
                  </select>
                  
                  <select 
                    name="industry"
                    value={filters.industry}
                    onChange={handleFilterChange}
                    className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                  >
                    <option value="">All Industries</option>
                    {industries.map(industry => (
                      <option key={industry} value={industry}>
                        {industry.replace('-', '/').replace(/\b\w/g, l => l.toUpperCase())}
                      </option>
                    ))}
                  </select>
                  
                  <button 
                    onClick={() => loadTemplates()} 
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    🔄 Refresh
                  </button>
                </div>
              </div>
              
              <div id="templatesList" className="space-y-4">
                {templates.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    Loading templates...
                  </div>
                ) : (
                  templates.map(template => {
                    const currencySymbol = currencySymbols[template.pricing?.currency] || '₹';
                    
                    return (
                      <div key={template._id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex gap-4">
                          {template.mainImage ? (
                            <div className="flex-shrink-0">
                              <img 
                                src={template.mainImage.url} 
                                alt={template.title} 
                                className="w-24 h-24 object-cover rounded-lg border cursor-pointer" 
                                onClick={() => viewTemplate(template._id)}
                              />
                            </div>
                          ) : (
                            <div 
                              className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-lg border flex items-center justify-center cursor-pointer" 
                              onClick={() => viewTemplate(template._id)}
                            >
                              <span className="text-gray-400 text-xs">No Image</span>
                            </div>
                          )}
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <h4 
                                  className="font-semibold text-gray-900 text-lg cursor-pointer hover:text-blue-600" 
                                  onClick={() => viewTemplate(template._id)}
                                >
                                  {template.title}
                                </h4>
                                
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="text-sm text-blue-600 font-medium">{template.service?.title || 'N/A'}</span>
                                  <span className="text-gray-400">•</span>
                                  <span className="text-sm text-green-600">{template.category?.title || 'N/A'}</span>
                                  <span className="text-gray-400">•</span>
                                  <span className="text-sm text-purple-600">
                                    {(template.industry || '').replace('-', '/').replace(/\b\w/g, l => l.toUpperCase())}
                                  </span>
                                </div>
                                
                                <p className="text-gray-600 text-sm mb-3">
                                  {template.description.substring(0, 150)}
                                  {template.description.length > 150 ? '...' : ''}
                                </p>
                                
                                {template.features && template.features.length > 0 && (
                                  <div className="flex flex-wrap gap-1 mb-3">
                                    {template.features.slice(0, 3).map((feature, index) => (
                                      <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                                        {feature}
                                      </span>
                                    ))}
                                    {template.features.length > 3 && (
                                      <span className="text-xs text-gray-500">+{template.features.length - 3} more</span>
                                    )}
                                  </div>
                                )}
                                
                                <div className="flex items-center space-x-4 text-sm mb-3">
                                  {template.pricing?.basePrice && (
                                    <span className="font-bold text-green-600 text-lg">
                                      {currencySymbol}{template.pricing.basePrice.toLocaleString()}
                                    </span>
                                  )}
                                  <span className="text-gray-500">• {template.designStyle} style</span>
                                  <span className="text-gray-500">• {template.views || 0} views</span>
                                  <span className="text-gray-500">• {template.selections || 0} selections</span>
                                </div>
                                
                                <div className="flex items-center space-x-2">
                                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                    template.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                  }`}>
                                    {template.isActive ? '✅ Active' : '❌ Inactive'}
                                  </span>
                                  
                                  {template.isFeatured && (
                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                      ⭐ Featured
                                    </span>
                                  )}
                                  
                                  {template.isPopular && (
                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                                      🔥 Popular
                                    </span>
                                  )}
                                  
                                  {template.techSpecs?.pages && (
                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                      {template.techSpecs.pages} pages
                                    </span>
                                  )}
                                </div>
                              </div>
                              
                              <div className="flex flex-col space-y-2 ml-4">
                                <button 
                                  onClick={() => editTemplate(template._id)} 
                                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                                >
                                  Edit
                                </button>
                                
                                <button 
                                  onClick={() => toggleTemplateStatus(template._id)} 
                                  className="text-orange-600 hover:text-orange-800 text-sm font-medium"
                                >
                                  {template.isActive ? 'Deactivate' : 'Activate'}
                                </button>
                                
                                <button 
                                  onClick={() => selectTemplate(template._id)} 
                                  className="text-green-600 hover:text-green-800 text-sm font-medium"
                                >
                                  Select (+1)
                                </button>
                                
                                <button 
                                  onClick={() => deleteTemplate(template._id)} 
                                  className="text-red-600 hover:text-red-800 text-sm font-medium"
                                >
                                  Delete
                                </button>
                                
                                {template.demoUrl && (
                                  <a 
                                    href={template.demoUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-purple-600 hover:text-purple-800 text-sm font-medium"
                                  >
                                    Demo
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
              
              {/* Pagination */}
              <div id="paginationContainer" className="mt-6 flex justify-center">
                {renderPagination()}
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
                <div className="text-sm text-gray-600">Total Templates</div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-2xl font-bold text-green-600">{stats.active}</div>
                <div className="text-sm text-gray-600">Active Templates</div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-2xl font-bold text-purple-600">{stats.featured}</div>
                <div className="text-sm text-gray-600">Featured Templates</div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-2xl font-bold text-orange-600">{stats.popular}</div>
                <div className="text-sm text-gray-600">Popular Templates</div>
              </div>
            </div>
            
            {/* API Testing Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                🧪 Quick API Tests
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                <button 
                  onClick={() => testAPI('/api/templates')} 
                  className="bg-blue-100 hover:bg-blue-200 text-blue-800 p-2 rounded text-sm font-medium transition-colors"
                >
                  All Templates
                </button>
                
                <button 
                  onClick={() => testAPI('/api/templates/featured')} 
                  className="bg-purple-100 hover:bg-purple-200 text-purple-800 p-2 rounded text-sm font-medium transition-colors"
                >
                  Featured Templates
                </button>
                
                <button 
                  onClick={() => testAPI('/api/templates/popular')} 
                  className="bg-orange-100 hover:bg-orange-200 text-orange-800 p-2 rounded text-sm font-medium transition-colors"
                >
                  Popular Templates
                </button>
                
                <button 
                  onClick={() => testAPI('/api/services')} 
                  className="bg-green-100 hover:bg-green-200 text-green-800 p-2 rounded text-sm font-medium transition-colors"
                >
                  All Services
                </button>
                
                <button 
                  onClick={() => testAPI('/api/categories')} 
                  className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 p-2 rounded text-sm font-medium transition-colors"
                >
                  All Categories
                </button>
                
                <button 
                  onClick={() => testAPI('/api/templates/industry/restaurant-cafe')} 
                  className="bg-red-100 hover:bg-red-200 text-red-800 p-2 rounded text-sm font-medium transition-colors"
                >
                  Restaurant Templates
                </button>
              </div>
              
              {/* Custom API Test */}
              <div className="mb-4">
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    id="customEndpoint" 
                    placeholder="/api/templates/slug/example-slug" 
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                  <button 
                    onClick={testCustomAPI} 
                    className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded text-sm font-medium"
                  >
                    Test Custom
                  </button>
                </div>
              </div>
              
              {/* API Response Display */}
              <div 
                id="apiResponse" 
                className="bg-gray-100 p-4 rounded-lg min-h-32 max-h-64 overflow-y-auto text-sm"
                dangerouslySetInnerHTML={{ __html: apiResponse }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Template Detail Modal */}
      {renderTemplateModal()}
    </div>
  );
};

export default Template;