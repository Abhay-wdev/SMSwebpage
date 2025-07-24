import React from 'react';
import { 
  PenTool, 
  BookOpen, 
  Edit, 
  FileText, 
  Mail, 
  Globe,
  Share2,
  CheckCircle,
  Users,
  ChevronDown,
  ChevronUp,
  BarChart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

const ContentWritingServicesJaipur = () => {

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  
  const faqData = [
    {
      question: "What types of content writing services do you offer in Jaipur?",
      answer: "At SEOcial Media Solutions, we offer a full suite of premium content writing services in Jaipur, tailored to elevate your online presence. Our specialties include SEO-optimized blog posts, high-converting website copy, persuasive sales content, engaging social media captions, and comprehensive long-form articles. Every piece is crafted by expert writers who blend creativity with SEO strategy, ensuring your content not only ranks on search engines but also connects with your target audience. Whether you're targeting a Jaipur-based audience or a global market, we customize every word to match your business goals."
    },
    {
      question: "How do you integrate AI into your content writing services?",
      answer: "We harness advanced AI tools to streamline and enhance the content creation process. From AI-driven keyword research and topic clustering to competitor benchmarking and SEO structuring, we leverage technology to gain a competitive edge. However, the final content is refined by professional writers who infuse tone, creativity, and brand consistency. This human-AI collaboration ensures faster delivery, higher quality, and content that’s both data-informed and emotionally engaging."
    },
    {
      question: "How do you ensure content is tailored to my audience and brand voice?",
      answer: "Customization is at the core of our process. We begin with a deep-dive into your brand identity and audience demographics to craft detailed personas and voice guidelines. During onboarding, we gather insights on your tone preferences—be it corporate, conversational, or storytelling. Our writers then create content that resonates with your audience’s values, addresses their pain points, and mirrors your brand voice. Multiple revision rounds ensure the content is perfectly aligned with your expectations."
    },
    {
      question: "Can your writing help improve my website's SEO and traffic?",
      answer: "Absolutely! Our content is meticulously optimized for search engines using proven on-page SEO techniques—strategic keyword placement, semantic variation, meta tags, internal linking, and structured headings. We also follow Google’s E-A-T principles (Expertise, Authoritativeness, Trustworthiness) to build credibility and enhance rankings. Clients in Jaipur and beyond consistently see boosts in organic traffic, improved search visibility, and stronger user engagement through our optimized content strategies."
    },
    {
      question: "What types of content formats do you cover?",
      answer: "We cover a wide array of content formats to meet your marketing goals. These include:\n• Blog Posts & Articles for SEO and authority\n• Website Copy for homepages, about, and service pages\n• Product Descriptions for e-commerce listings\n• Social Media Content for platforms like Instagram, Facebook, and LinkedIn\n• Email Campaigns & Newsletters for lead nurturing\nEvery format is optimized for readability, engagement, and search engine visibility."
    },
    {
      question: "Why choose SEOcial Media Solutions for content writing?",
      answer: "We combine the best of both worlds—cutting-edge AI technology and expert human writers—to deliver content that ranks, engages, and converts. As a top-rated content writing agency in Jaipur, we emphasize performance, brand alignment, and results. Our services are scalable, affordable, and transparent, with clear reporting and open communication. Whether you're a startup, agency, or enterprise, we help you build a content strategy that fuels long-term growth and brand authority."
    }
  ];
  
  const features = [
    { 
      name: "Blog Writing", 
      category: "Content Creation",
      description: "Well-researched blog articles that boost SEO, attract traffic, and position you as an industry leader.",
      icon: <PenTool className="w-6 h-6 text-white" />,
      gradient: "from-emerald-500 to-teal-500"
    },
    { 
      name: "Copywriting", 
      category: "Marketing",
      description: "Conversion-focused copy that speaks to your audience and turns visitors into loyal customers.",
      icon: <Edit className="w-6 h-6 text-white" />,
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      name: "Technical Writing", 
      category: "Documentation",
      description: "Precise, user-friendly documentation that simplifies complex ideas and enhances product clarity.",
      icon: <FileText className="w-6 h-6 text-white" />,
      gradient: "from-blue-500 to-indigo-500"
    },
    { 
      name: "Email Writing", 
      category: "Communication",
      description: "High-impact email sequences designed to engage your audience, nurture leads, and increase conversions.",
      icon: <Mail className="w-6 h-6 text-white" />,
      gradient: "from-red-500 to-pink-500"
    },
    { 
      name: "SEO Content", 
      category: "Optimization",
      description: "Content strategically crafted to improve rankings, attract organic traffic, and deliver measurable results.",
      icon: <Globe className="w-6 h-6 text-white" />,
      gradient: "from-green-500 to-emerald-500"
    },
    { 
      name: "Content Strategy", 
      category: "Planning",
      description: "Goal-driven content plans powered by data, ensuring your message reaches the right audience at the right time.",
      icon: <BookOpen className="w-6 h-6 text-white" />,
      gradient: "from-orange-500 to-red-500"
    },
    { 
      name: "Brand Story", 
      category: "Storytelling",
      description: "Authentic, emotionally-driven brand storytelling that builds trust, loyalty, and deeper audience connection.",
      icon: <Share2 className="w-6 h-6 text-white" />,
      gradient: "from-purple-500 to-indigo-500"
    }
  ];
  
  const services = [
    {
      title: "Website Content",
      description:
        "Craft SEO-rich, persuasive website copy that not only ranks but converts. Our skilled writers tailor your content to resonate with your audience and reflect your brand’s voice, while ensuring full optimization for search engines.",
      image: "/images/website-content.jpg",
      benefits: [
        "Boost in organic search visibility",
        "Stronger conversion potential",
        "Improved on-site engagement",
        "Higher rankings on Google"
      ]
    },
    {
      title: "Blog Management",
      description:
        "Build thought leadership and keep your website fresh with expertly written blogs. From keyword research and content planning to SEO-friendly writing and publishing, we handle your entire blogging workflow.",
      image: "/images/blog-management.png",
      benefits: [
        "Consistent content delivery",
        "Targeted SEO keyword integration",
        "Increased authority in your niche",
        "Enhanced long-term traffic growth"
      ]
    },
    {
      title: "Technical Content",
      description:
        "Make complex information accessible with clear, concise technical writing. Our specialists produce user guides, documentation, and tutorials that simplify learning while retaining technical accuracy.",
      image: "/images/technical-content.jpg",
      benefits: [
        "Simplifies complex concepts",
        "Minimizes customer support queries",
        "Enhances product adoption",
        "Boosts customer confidence and trust"
      ]
    },
    {
      title: "Marketing Copy",
      description:
        "Drive action and conversions with high-impact marketing copy. Whether it’s for ads, email campaigns, or product pages, we create compelling content that inspires, persuades, and delivers results.",
      image: "/images/marketing.jpg",
      benefits: [
        "Stronger brand messaging",
        "Higher click-through and conversion rates",
        "Increased campaign ROI",
        "Improved audience targeting"
      ]
    }
  ];
  

  const stats = [
    {
      number: "500+",
      label: "Satisfied Clients",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "10k+",
      label: "Articles Written",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      number: "98%",
      label: "Client Retention",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      number: "250%",
      label: "Average ROI",
      icon: <BarChart className="w-6 h-6" />,
    }
  ];

  return (
    <>
    <Helmet>
         <title>Best Content Writing Services in Jaipur | SEOcial Media Solutions</title>
         <meta
           name="description"
           content="Create impactful and engaging content with SEOcial Media's professional content writing services. Enhance your online presence with quality content."
         />
         <meta name="keywords" content="IT services, content writing services, web development, SEO, digital marketing" />
         <link rel="canonical" href="https://seocialmedia.in/content-writing-company-jaipur" />
         <meta property="og:title" content="Best Content Writing Services in Jaipur | SEOcial Media Soltions" />
         <meta property="og:description" content="Discover professional IT solutions tailored to your business needs." />
         <meta property="og:image" content="https://seocialmedia.in/images/og-home.jpg" />
         <meta property="og:url" content="https://seocialmedia.in/" />
         <meta name="twitter:card" content="summary_large_image" />
     </Helmet>

    <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="px-4 py-16 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center">
            <h1 className="inline-block px-4 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm rounded-full font-medium">
              Top Content Writing Services in Jaipur
            </h1>
            <h2 className="mt-6 text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent md:text-6xl">
              Expert Content Writing Services That Drive Results
            </h2>
            <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
              Transform your digital presence with SEO-optimized, engaging content that connects with your audience and drives measurable business growth
            </p>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-white">
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
            {features.map((feature, index) => (
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
                    <p className="text-sm text-emerald-600 font-medium">
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
              <h2 className="text-4xl font-bold mb-4">Comprehensive Writing Services</h2>
              <p className="text-xl text-gray-600">Tailored content solutions to meet your business objectives</p>
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
                      className="w-full h-full object-fit"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-gray-600 text-lg mb-6">{service.description}</p>
                    <div className="space-y-3">
                      {service.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-emerald-500" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="py-16 bg-white rounded-3xl shadow-lg">
            <div className="max-w-4xl mx-auto px-8">
              <div className="text-center mb-12">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <p className="text-xl text-gray-600">Get answers to common questions about our content writing services</p>
              </div>

              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl overflow-hidden hover:border-emerald-300 transition-colors duration-300"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-5 text-left flex justify-between items-center bg-gradient-to-r from-gray-50 to-emerald-50 hover:from-emerald-50 hover:to-teal-50 transition-all duration-300"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {openFAQ === index ? (
                          <ChevronUp className="w-5 h-5 text-emerald-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-emerald-600" />
                        )}
                      </div>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-300 ${
                      openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-6 py-5 bg-white border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

             
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="relative max-w-3xl mx-auto p-8 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-10" />
              <div className="relative">
                <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
                  Ready to Elevate Your Content Strategy?
                </h2>
                <p className="mt-4 text-gray-600 text-lg">
                  Let's create content that connects, converts, and drives your business forward
                </p>
                <div className="mt-8 space-x-4">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-8 rounded-lg hover:opacity-90 transition-opacity duration-300"
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

export default ContentWritingServicesJaipur;