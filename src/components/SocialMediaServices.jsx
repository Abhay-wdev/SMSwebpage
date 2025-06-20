import React from 'react';
import { 
  Share2, 
  BarChart2, 
  Users, 
  Camera, 
  MessageCircle, 
  TrendingUp,
  Target,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  CheckCircle,
  Award,
  Zap,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const SocialMediaServices = () => {
  const features = [
    { 
      name: "Social Strategy", 
      category: "Planning",
      description: "Data-driven social media strategies tailored to your business goals",
      icon: <Target className="w-6 h-6 text-white" />,
      gradient: "from-pink-500 to-rose-500"
    },
    { 
      name: "Content Creation", 
      category: "Production",
      description: "Engaging visual and written content that resonates with your audience",
      icon: <Camera className="w-6 h-6 text-white" />,
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      name: "Community Management", 
      category: "Engagement",
      description: "Active community engagement and reputation management",
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      gradient: "from-blue-500 to-indigo-500"
    },
    { 
      name: "Performance Analytics", 
      category: "Reporting",
      description: "Comprehensive analytics and ROI tracking for campaigns",
      icon: <BarChart2 className="w-6 h-6 text-white" />,
      gradient: "from-green-500 to-emerald-500"
    },
    { 
      name: "Influencer Marketing", 
      category: "Partnerships",
      description: "Strategic influencer partnerships that amplify your reach",
      icon: <Users className="w-6 h-6 text-white" />,
      gradient: "from-yellow-500 to-orange-500"
    },
    { 
      name: "Growth Strategy", 
      category: "Optimization",
      description: "Scalable growth tactics for sustainable social media success",
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      gradient: "from-red-500 to-pink-500"
    },
    { 
      name: "Brand Building", 
      category: "Identity",
      description: "Consistent brand messaging across all social platforms",
      icon: <Share2 className="w-6 h-6 text-white" />,
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  const services = [
    {
      title: "Social Media Management",
      description: "Complete management of your social media presence across all major platforms. Our expert team handles content creation, scheduling, community engagement, and performance optimization.",
      image: "/images/social-management.jpg",
      benefits: [
        "Consistent brand voice",
        "Regular posting schedule",
        "Community engagement",
        "Crisis management"
      ],
      platforms: [
        { name: "Instagram", icon: <Instagram className="w-5 h-5" /> },
        { name: "Facebook", icon: <Facebook className="w-5 h-5" /> },
        { name: "Twitter", icon: <Twitter className="w-5 h-5" /> },
        { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" /> }
      ]
    },
    {
      title: "Content Creation",
      description: "Eye-catching visual content and engaging copy for your social media channels. Our creative team produces high-quality photos, videos, graphics, and compelling captions.",
      image: "/images/marketing.jpg",
      benefits: [
        "Professional photography",
        "Custom graphics",
        "Video production",
        "Engaging copywriting"
      ]
    },
    {
      title: "Paid Social Advertising",
      description: "Strategic paid campaigns to reach and engage your target audience. We create and manage data-driven advertising campaigns across all major social platforms.",
      image: "/images/social-ads.png",
      benefits: [
        "Targeted campaigns",
        "Budget optimization",
        "A/B testing",
        "Performance tracking"
      ]
    },
    {
      title: "Analytics & Reporting",
      description: "In-depth analysis and reporting of your social media performance. Get actionable insights with our comprehensive monthly reports and real-time analytics.",
      image: "/images/social-analytics.jpg",
      benefits: [
        "Performance metrics",
        "Competitor analysis",
        "ROI tracking",
        "Growth insights"
      ]
    }
  ];

  const stats = [
    {
      number: "250K+",
      label: "Social Impressions",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      number: "1000+",
      label: "Clients Served",
      icon: <Award className="w-6 h-6" />,
    },
    {
      number: "95%",
      label: "Client Satisfaction",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      number: "300%",
      label: "Average ROI",
      icon: <Zap className="w-6 h-6" />,
    }
  ];

  return (
    <>
    <Helmet>
         <title>Top Social Media Marketing Agency in Jaipur - SEOcial Media Solutions</title>
         <meta
           name="description"
           content="Engage your audience and boost brand visibility with SEOcial Media's targeted social media marketing solutions tailored to your business goals."
         />
         <meta name="keywords" content="IT services,Social Media Marketing, web development, SEO, digital marketing" />
         <link rel="canonical" href="https://seocialmedia.in/social-media-marketing-jaipur" />
         <meta property="og:title" content="Best Social Media Marketing Agency in Jaipur | SEOcial Media Soltions" />
         <meta property="og:description" content="Discover professional IT solutions tailored to your business needs." />
         <meta property="og:image" content="https://seocialmedia.in/images/og-home.jpg" />
         <meta property="og:url" content="https://seocialmedia.in/" />
         <meta name="twitter:card" content="summary_large_image" />
     </Helmet>
    <section className="bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="px-4 py-16 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center">
            <h1 className="inline-block px-4 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm rounded-full font-medium">
             Best Social Media Marketing Company in Jaipur
            </h1>
            <h2 className="mt-6 text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent md:text-6xl">
              Transform Your Social Media Presence
            </h2>
            <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
              Drive engagement, build meaningful connections, and achieve measurable results with our comprehensive social media marketing solutions
            </p>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="mt-24 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative p-6 group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative flex flex-col space-y-4">
                  <div className={`bg-gradient-to-r ${feature.gradient} p-3 rounded-xl w-fit`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {feature.name}
                    </h3>
                    <p className="text-sm text-pink-600 font-medium">
                      {feature.category}
                    </p>
                    <p className="mt-2 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Services Section */}
          <div className="py-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Comprehensive Social Media Solutions</h2>
              <p className="text-xl text-gray-600">Tailored strategies to elevate your brand's social presence</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-gray-600 text-lg mb-6">{service.description}</p>
                    <div className="space-y-3">
                      {service.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-pink-500" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    {service.platforms && (
                      <div className="mt-6 flex space-x-4">
                        {service.platforms.map((platform) => (
                          <div key={platform.name} className="text-gray-600 flex items-center space-x-1">
                            {platform.icon}
                            <span className="text-sm">{platform.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SEO Content Section */}
          <div className="py-16 bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Why Choose Our Social Media Services?</h2>
              <div className="text-left space-y-6">
                <p className="text-gray-700">
                  Our expert social media team combines industry knowledge, creative excellence, and data-driven strategies to help your brand stand out in today's competitive digital landscape. We understand that effective social media marketing goes beyond just posting content.
                </p>
                <p className="text-gray-700">
                  From developing engaging content to implementing targeted advertising campaigns, we provide comprehensive social media solutions that drive real business results. Our approach is always tailored to your unique brand voice and business objectives.
                </p>
                <p className="text-gray-700">
                  With our proven track record of success and dedication to staying ahead of social media trends, we help brands build meaningful connections with their audience while achieving measurable growth and engagement.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="relative max-w-3xl mx-auto p-8 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-10" />
              <div className="relative">
                <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
                  Ready to Elevate Your Social Media Strategy?
                </h2>
                <p className="mt-4 text-gray-600 text-lg">
                  Let's create engaging social content that drives results for your brand
                </p>
                <div className="mt-8 space-x-4">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 px-8 rounded-lg hover:opacity-90 transition-opacity duration-300"
                  >
                    Contact Us
                  </Link>
          
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default SocialMediaServices;