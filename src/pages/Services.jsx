import React, { useState, useEffect } from 'react';
import { MdLibraryAdd } from "react-icons/md";
import { RiEdit2Line } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { toast } from 'react-hot-toast';
 import ImagePreview from "../components/ImagePreview.jsx";
 import { TbXboxX } from "react-icons/tb";
 
const Services = () => {
    const API_BASE = 'http://localhost:5000';
    const AUTH_TOKEN = 'DJ'; // 🔐 add your token here
    
    // State variables
    const [serverStatus, setServerStatus] = useState('offline');
    const [services, setServices] = useState([]);
    const [categories, setCategories] = useState([]);
    const [messages, setMessages] = useState([]);
    const [filterCategory, setFilterCategory] = useState('');
    const [fullscreenImage, setFullscreenImage] = useState(null);
    
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
    
    // Loading states
    const [isSubmittingService, setIsSubmittingService] = useState(false);
    const [isSubmittingCategory, setIsSubmittingCategory] = useState(false);
    
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
        setIsSubmittingService(false);
    };
    
    // Reset category form
    const resetCategoryForm = () => {
        setCategoryForm({
            title: '',
            description: '',
            isActive: true
        });
        setShowCategoryForm(false);
        setIsSubmittingCategory(false);
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
        setIsSubmittingService(true);
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
                toast.success(isEdit ? 'Service updated successfully! 🎉' : 'Service created successfully! 🎉');
                resetServiceForm();
                loadServices();
            } else {
                toast.error('Error: ' + (data.message || data.errors?.[0]?.msg || 'Unknown error'));
                setIsSubmittingService(false);
            }
        } catch (error) {
            toast.error(`Error ${isEdit ? 'updating' : 'creating'} service: ` + error.message);
            setIsSubmittingService(false);
        }
    };
    
    // Handle category form submission
    const handleCategoryFormSubmit = async (e) => {
        e.preventDefault();
        setIsSubmittingCategory(true);
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
                toast.success('Category created successfully! 🎉');
                resetCategoryForm();
                loadCategoryOptions();
            } else {
                toast.error('Error: ' + (data.message || data.errors?.[0]?.msg || 'Unknown error'));
                setIsSubmittingCategory(false);
            }
        } catch (error) {
            toast.error(`Error creating category: ` + error.message);
            setIsSubmittingCategory(false);
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
                toast.error('Error: ' + data.message);
            }
        } catch (error) {
            toast.error('Error loading service details: ' + error.message);
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
                toast.success(data.message);
                loadServices();
            } else {
                toast.error('Error: ' + data.message);
            }
        } catch (error) {
            toast.error('Error toggling service status: ' + error.message);
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
                    toast.success('Service deleted successfully! 🗑️');
                    loadServices();
                } else {
                    toast.error('Error: ' + data.message);
                }
            } catch (error) {
                toast.error('Error deleting service: ' + error.message);
            }
        }
    };
    
    // Loading spinner component
    const LoadingSpinner = () => (
        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
    );
    
    const handleInputChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === "file" && name === "serviceImage") {
            const file = files[0];
            if (file) {
                const previewURL = URL.createObjectURL(file);
                setFormData((prev) => ({
                    ...prev,
                    serviceImage: file,
                    currentImage: previewURL,
                }));
            }
        } else if (type === "checkbox") {
            setFormData((prev) => ({
                ...prev,
                [name]: checked,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    // Mobile Card View Component
    const ServiceCard = ({ service }) => {
        const currencySymbol = currencySymbols[service.pricing.currency] || '₹';
        
        return (
            <div className="bg-white rounded-lg shadow-md   mb-4 border border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-shrink-0">
                        {service.image ? (
                            <img
                                src={service.image.url}
                                alt={service.title}
                                onClick={() => setFullscreenImage(service.image.url)}
                                className="w-full sm:w-32 h-40 sm:h-20 object-cover rounded cursor-pointer transition-transform hover:scale-105"
                            />
                        ) : (
                            <div className="w-full sm:w-32 h-40 sm:h-20 bg-gray-100 rounded flex items-center justify-center">
                                <span className="text-gray-400 text-xs">No Image</span>
                            </div>
                        )}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                                <p className="text-sm text-blue-600 font-medium mb-1">{service.category?.title || ''}</p>
                                <p className="text-gray-600 mt-1 text-sm">
                                    {service.shortDescription || service.description.substring(0, 80) + '...'}
                                </p>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    <span className="text-xs font-medium bg-gray-100 text-gray-800 px-2 py-1 rounded">
                                        {currencySymbol}{service.pricing.startingPrice.toLocaleString()}
                                    </span>
                                    <span className="text-xs font-medium bg-gray-100 text-gray-800 px-2 py-1 rounded">
                                        {service.deliveryTime.value} {service.deliveryTime.unit}
                                    </span>
                                    <span className={`text-xs font-medium px-2 py-1 rounded ${
                                        service.isActive 
                                            ? 'bg-green-100 text-green-800' 
                                            : 'bg-red-100 text-red-800'
                                    }`}>
                                        {service.isActive ? 'Active' : 'Inactive'}
                                    </span>
                                    {service.isFeatured && (
                                        <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-1 rounded">
                                            Featured
                                        </span>
                                    )}
                                    {service.isPopular && (
                                        <span className="text-xs font-medium bg-orange-100 text-orange-800 px-2 py-1 rounded">
                                            Popular
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <button
                                    onClick={() => editService(service._id)}
                                    className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                                >
                                    <RiEdit2Line className="mr-1" /> Edit
                                </button>
                                <button
                                    onClick={() => toggleServiceStatus(service._id)}
                                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                                >
                                    {service.isActive ? 'Deactivate' : 'Activate'}
                                </button>
                                <button
                                    onClick={() => deleteService(service._id)}
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
                            value={filterCategory}
                            onChange={(e) => setFilterCategory(e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">All Categories</option>
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
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center"
                        >
                            <MdLibraryAdd className="mr-2" />
                            Add Service
                        </button>
                        <button
                            onClick={loadServices}
                            className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                        >
                            🔄 Refresh
                        </button>
                    </div>
                </div>
                
                {/* Table for Desktop, Cards for Mobile */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    {/* Desktop Table View - Hidden on Mobile */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status/Delivery</th>
                                   
                                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {services.length === 0 ? (
                                    <tr>
                                        <td colSpan="8" className="px-6 py-4 text-center text-gray-500">
                                            Loading services...
                                        </td>
                                    </tr>
                                ) : (
                                    services.map(service => {
                                        const currencySymbol = currencySymbols[service.pricing.currency] || '₹';
                                        return (
                                            <tr key={service._id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        {service.image ? (
                                                            <div className="flex-shrink-0 shadow hover:scale-105 h-25 w-40 rounded-md overflow-hidden transition-transform">
                                                                <img 
                                                                    className="h-full w-full rounded-md object-cover cursor-pointer" 
                                                                    src={service.image.url} 
                                                                    alt={service.title}
                                                                    onClick={() => setFullscreenImage(service.image.url)}
                                                                />
                                                            </div>
                                                        ) : (
                                                            <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-md flex items-center justify-center">
                                                                <span className="text-gray-400 text-xs">No Image</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                   <div className="text-sm font-medium text-gray-900">{service.title}</div>
                                                            <div className="text-sm text-gray-500">{service.metadata.views || 0} views</div>
                                                </td>
                                                  <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{service.category?.title || ''}</div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-500 max-w-xs">
                                                        {service.shortDescription || service.description.substring(0, 100) + '...'}
                                                    </div>
                                                    {service.features && service.features.length > 0 && (
                                                        <div className="mt-1 flex flex-wrap gap-1">
                                                            {service.features.slice(0, 2).map((feature, index) => (
                                                                <span key={index} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                                                                    {feature}
                                                                </span>
                                                            ))}
                                                            {service.features.length > 2 && (
                                                                <span className="text-xs text-gray-500">+{service.features.length - 2} more</span>
                                                            )}
                                                        </div>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-bold text-green-600">
                                                        {currencySymbol}{service.pricing.startingPrice.toLocaleString()}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                   
                                                     <div className="flex flex-wrap gap-1">
                                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${service.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                                            {service.isActive ? 'Active' : 'Inactive'}
                                                        </span>
                                                        {service.isFeatured && (
                                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                                                Featured
                                                            </span>
                                                        )}
                                                        {service.isPopular && (
                                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                                                                Popular
                                                            </span>
                                                        )}
                                                    </div>
                                                    
                                                     {service.deliveryTime.value} {service.deliveryTime.unit}
                                                </td>
                                               
                                                <td className="px-6 py-4 whitespace-wrap  text-right text-sm font-medium">
                                                    <div className='flex justify-end items-center space-x-3 flex-col gap-2'>
                                                    <button
                                                        onClick={() => editService(service._id)}
                                                        className="text-blue-600 hover:text-blue-900 mr-3"
                                                    >
                                                        <RiEdit2Line className="inline w-4 h-4 mr-1" /> Edit
                                                    </button>
                                                    <button
                                                        onClick={() => toggleServiceStatus(service._id)}
                                                        className="text-blue-600 hover:text-blue-900 mr-3"
                                                    >
                                                        {service.isActive ? 'Deactivate' : 'Activate'}
                                                    </button>
                                                    <button
                                                        onClick={() => deleteService(service._id)}
                                                        className="text-red-600 hover:text-red-900"
                                                    >
                                                        <MdDelete className="inline w-4 h-4 mr-1" /> Delete
                                                    </button>
                                                    </div>
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
                        {services.length === 0 ? (
                            <div className="text-center py-8 text-gray-500">
                                Loading services...
                            </div>
                        ) : (
                            services.map(service => (
                                <ServiceCard key={service._id} service={service} />
                            ))
                        )}
                    </div>
                </div>
            </div>
            
            {/* Service Form Popup */}
            {showServiceForm && (
                <div className="fixed inset-0 bg-white/20 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-gradient-to-r from-blue-700 to-blue-400 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] hide-scrollbar overflow-y-auto">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                                    {isEditing ? (
                                        <>
                                            ✏️ Edit Service
                                        </>
                                    ) : (
                                        <>
                                            <MdLibraryAdd className="text-2xl" />
                                            Add New Service
                                        </>
                                    )}
                                </h2>
                                <button
                                    onClick={resetServiceForm}
                                    
                                >
                                   <TbXboxX className="text-white text-2xl hover:text-red-900"/>
                                </button>
                            </div>
                            <form onSubmit={handleServiceFormSubmit} className="space-y-4">
                                {/* Hidden field for service ID during edit */}
                                <input type="hidden" name="serviceId" value={formData.serviceId} />
                                <div>
                                    <label className="block text-sm font-medium text-white mb-1">Service Title *</label>
                                    <input
                                        type="text"
                                        name="serviceTitle"
                                        value={formData.serviceTitle}
                                        onChange={handleServiceInputChange}
                                        placeholder="e.g., Personal Website Development"
                                        required
                                        disabled={isSubmittingService}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 disabled:opacity-50"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white mb-1">Category *</label>
                                    <select
                                        name="serviceCategory"
                                        value={formData.serviceCategory}
                                        onChange={handleServiceInputChange}
                                        required
                                        disabled={isSubmittingService}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white bg-transparent disabled:opacity-50"
                                    >
                                        <option className='bg-blue-500 curser-pointer rounded' value="">Select Category</option>
                                        {categories.map(category => (
                                            <option className='bg-blue-500 curser-pointer rounded ' key={category._id} value={category._id}>
                                                {category.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white mb-1">Description *</label>
                                    <textarea
                                        name="serviceDescription"
                                        value={formData.serviceDescription}
                                        onChange={handleServiceInputChange}
                                        placeholder="Detailed service description"
                                        required
                                        minLength={10}
                                        rows="3"
                                        disabled={isSubmittingService}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 disabled:opacity-50"
                                    ></textarea>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white mb-1">Short Description</label>
                                    <input
                                        type="text"
                                        name="serviceShortDescription"
                                        value={formData.serviceShortDescription}
                                        onChange={handleServiceInputChange}
                                        placeholder="Brief summary for cards"
                                        disabled={isSubmittingService}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 disabled:opacity-50"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-sm font-medium text-white mb-1">Starting Price *</label>
                                        <input
                                            type="number"
                                            name="servicePrice"
                                            value={formData.servicePrice}
                                            onChange={handleServiceInputChange}
                                            placeholder="15000"
                                            required
                                            min="0"
                                            disabled={isSubmittingService}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 disabled:opacity-50"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-white mb-1">Currency</label>
                                        <select
                                            name="serviceCurrency"
                                            value={formData.serviceCurrency}
                                            onChange={handleServiceInputChange}
                                            disabled={isSubmittingService}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-white bg-blue-500 disabled:opacity-50"
                                        >
                                            <option className="bg-blue-500 text-white" value="INR">₹ INR</option>
                                            <option className="bg-blue-500 text-white" value="USD">$ USD</option>
                                            <option className="bg-blue-500 text-white" value="EUR">€ EUR</option>
                                            <option className="bg-blue-500 text-white" value="GBP">£ GBP</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-sm font-medium text-white mb-1">Delivery Time *</label>
                                        <input
                                            type="number"
                                            name="serviceDeliveryTime"
                                            value={formData.serviceDeliveryTime}
                                            onChange={handleServiceInputChange}
                                            placeholder="7"
                                            required
                                            min="1"
                                            disabled={isSubmittingService}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 disabled:opacity-50"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-white mb-1">Unit</label>
                                        <select
                                            name="serviceDeliveryUnit"
                                            value={formData.serviceDeliveryUnit}
                                            onChange={handleServiceInputChange}
                                            disabled={isSubmittingService}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-white bg-blue-500 disabled:opacity-50"
                                        >
                                            <option className="bg-blue-500 text-white" value="days">Days</option>
                                            <option className="bg-blue-500 text-white" value="weeks">Weeks</option>
                                            <option className="bg-blue-500 text-white" value="months">Months</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white mb-1">Features</label>
                                    <input
                                        type="text"
                                        name="serviceFeatures"
                                        value={formData.serviceFeatures}
                                        onChange={handleServiceInputChange}
                                        placeholder="Responsive Design, SEO Optimized, Fast Loading"
                                        disabled={isSubmittingService}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 disabled:opacity-50"
                                    />
                                    <p className="text-xs text-gray-300 mt-1">Separate features with commas</p>
                                </div>
                                <div className="mb-6">
                                    <label className="block text-sm font-semibold text-white mb-2">
                                        Service Image
                                    </label>
                                    <div className="flex gap-4 flex-col flex-wrap">
                                        <label className="cursor-pointer inline-block px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow hover:opacity-90 transition duration-200">
                                            Choose Image
                                            <input
                                                type="file"
                                                name="serviceImage"
                                                onChange={handleInputChange}
                                                accept="image/*"
                                                className="hidden"
                                            />
                                        </label>
 
                                        {formData.currentImage && (
                                            <div className="relative w-60 h-32 rounded-lg overflow-hidden border-2 border-gray-400 shadow-lg">
                                                <img
                                                    src={formData.currentImage}
                                                    alt="Service Preview"
                                                    className="w-full h-full object-cover cursor-pointer"
                                                    onClick={() => setFullscreenImage(formData.currentImage)}
                                                />
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-xs text-gray-300 mt-2">
                                        Upload JPG, PNG, or WebP (Max size: 5MB)
                                    </p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white mb-1">Tags</label>
                                    <input
                                        type="text"
                                        name="serviceTags"
                                        value={formData.serviceTags}
                                        onChange={handleServiceInputChange}
                                        placeholder="website, development, responsive"
                                        disabled={isSubmittingService}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 disabled:opacity-50"
                                    />
                                    <p className="text-xs text-gray-300 mt-1">Separate tags with commas</p>
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-white">Service Flags</label>
                                    <div className="flex flex-wrap items-center gap-4">
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                name="serviceActive"
                                                checked={formData.serviceActive}
                                                onChange={handleServiceInputChange}
                                                disabled={isSubmittingService}
                                                className="mr-2 text-blue-600 disabled:opacity-50"
                                            />
                                            <span className="text-sm text-white">Active</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                name="serviceFeatured"
                                                checked={formData.serviceFeatured}
                                                onChange={handleServiceInputChange}
                                                disabled={isSubmittingService}
                                                className="mr-2 text-purple-600 disabled:opacity-50"
                                            />
                                            <span className="text-sm text-white">Featured</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                name="servicePopular"
                                                checked={formData.servicePopular}
                                                onChange={handleServiceInputChange}
                                                disabled={isSubmittingService}
                                                className="mr-2 text-orange-600 disabled:opacity-50"
                                            />
                                            <span className="text-sm text-white">Popular</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="border-t pt-4">
                                    <h3 className="text-sm font-medium text-white mb-3">SEO Settings (Optional)</h3>
                                    <div className="space-y-3">
                                        <input
                                            type="text"
                                            name="serviceMetaTitle"
                                            value={formData.serviceMetaTitle}
                                            onChange={handleServiceInputChange}
                                            placeholder="Meta Title (60 chars max)"
                                            disabled={isSubmittingService}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 disabled:opacity-50"
                                        />
                                        <textarea
                                            name="serviceMetaDescription"
                                            value={formData.serviceMetaDescription}
                                            onChange={handleServiceInputChange}
                                            placeholder="Meta Description (160 chars max)"
                                            rows="2"
                                            disabled={isSubmittingService}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 disabled:opacity-50"
                                        ></textarea>
                                        <input
                                            type="text"
                                            name="serviceMetaKeywords"
                                            value={formData.serviceMetaKeywords}
                                            onChange={handleServiceInputChange}
                                            placeholder="Meta Keywords (comma separated)"
                                            disabled={isSubmittingService}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300 disabled:opacity-50"
                                        />
                                    </div>
                                </div>
                                <div className="flex space-x-3">
                                    <button
                                        type="submit"
                                        disabled={isSubmittingService}
                                        className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium disabled:opacity-70 flex items-center justify-center"
                                    >
                                        {isSubmittingService ? (
                                            <>
                                                <LoadingSpinner />
                                                <span className="ml-2">Submitting...</span>
                                            </>
                                        ) : (
                                            isEditing ? '💾 Update Service' : '🚀 Create Service'
                                        )}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={resetServiceForm}
                                        disabled={isSubmittingService}
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
            
            {/* Category Form Popup */}
            {showCategoryForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-semibold text-gray-800">Add New Category</h2>
                                <button
                                    onClick={resetCategoryForm}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    ✕
                                </button>
                            </div>
                            <form onSubmit={handleCategoryFormSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={categoryForm.title}
                                        onChange={handleCategoryInputChange}
                                        placeholder="e.g., Web Development"
                                        required
                                        disabled={isSubmittingCategory}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                    <textarea
                                        name="description"
                                        value={categoryForm.description}
                                        onChange={handleCategoryInputChange}
                                        placeholder="Category description"
                                        rows="3"
                                        disabled={isSubmittingCategory}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                                    ></textarea>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="isActive"
                                        checked={categoryForm.isActive}
                                        onChange={handleCategoryInputChange}
                                        disabled={isSubmittingCategory}
                                        className="mr-2 text-blue-600 disabled:opacity-50"
                                    />
                                    <label className="text-sm text-gray-700">Active</label>
                                </div>
                                <div className="flex space-x-3">
                                    <button
                                        type="submit"
                                        disabled={isSubmittingCategory}
                                        className="flex-1 bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700 transition-colors font-medium disabled:opacity-70 flex items-center justify-center"
                                    >
                                        {isSubmittingCategory ? (
                                            <>
                                                <LoadingSpinner />
                                                <span className="ml-2">Creating...</span>
                                            </>
                                        ) : (
                                            '🚀 Create Category'
                                        )}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={resetCategoryForm}
                                        disabled={isSubmittingCategory}
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
            
            {/* Image Preview Component */}
            <ImagePreview
                imageUrl={fullscreenImage}
                onClose={() => setFullscreenImage(null)}
            />
        </div>
    );
};

export default Services;