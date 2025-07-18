import React, { useState } from 'react';
import { 
  Search, 
  TrendingUp, 
  Globe, 
  BarChart2, 
  Link2,
  Users,
  Clock,
  Target,
  CheckCircle,
  BarChart,
  ChevronDown,
  ChevronUp,
  HelpCircle
} from "lucide-react";

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const SeoAjmerpage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What makes SEOcial Media Solutions the best SEO company in Ajmer?",
      answer: "We stand out as the best SEO company in Ajmer through our proven R.A.P.I.D approach, data-driven strategies, and 98% client satisfaction rate. Our team combines deep industry expertise with cutting-edge SEO techniques, delivering measurable results across multiple business domains. We provide transparent reporting, customized solutions, and maintain long-term partnerships focused on sustainable growth rather than quick fixes."
    },
    {
      question: "How long does it take to see results from your SEO services?",
      answer: "While SEO is a long-term strategy, many of our clients start seeing initial improvements within 3-6 months. Significant ranking improvements and traffic growth typically become evident within 6-12 months. However, the timeline depends on factors like your industry competition, current website status, and the keywords you're targeting. We focus on delivering sustainable, long-lasting results rather than temporary gains."
    },
    {
      question: "How do you generate organic leads for businesses through SEO?",
      answer: "We generate organic leads through a comprehensive approach: strategic keyword research to target high-intent searches, content optimization that addresses user queries, technical SEO improvements for better user experience, local SEO for geographic targeting, and conversion rate optimization. Our process ensures that the traffic we drive is not just higher in volume, but consists of qualified prospects ready to engage with your business."
    },
    {
      question: "What industries or business niches do you specialize in for SEO?",
      answer: "We have expertise across multiple business domains including Healthcare & Clinics, Real Estate, Education & Coaching, E-commerce & Retail, Textile & Diamond Industry, and Restaurants & Local Services. Our team understands the unique challenges and opportunities in each sector, allowing us to create industry-specific strategies that deliver targeted results for your particular business niche."
    },
    {
      question: "How often do you provide SEO reports and performance updates?",
      answer: "We believe in complete transparency and provide comprehensive monthly reports detailing your SEO performance. These reports include ranking improvements, traffic growth, conversion metrics, and detailed insights into our ongoing activities. Additionally, we provide quarterly strategy reviews and are always available for discussions about your campaign's progress and future opportunities."
    },
    {
      question: "Do you also offer local SEO services for Ajmer-based businesses?",
      answer: "Absolutely! Local SEO is one of our core specialties. We help Ajmer-based businesses dominate local search results through Google My Business optimization, local citation building, location-based keyword targeting, local content creation, and review management. Our local SEO strategies are designed to help you capture customers in your immediate geographic area and convert them into loyal clients."
    }
  ];
  const technologies = [
    {
      icon: Search,
      title: "Keyword Research",
      category: "On-Page SEO",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: TrendingUp,
      title: "Technical SEO",
      category: "Performance",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "International SEO",
      category: "Global Reach",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: BarChart2,
      title: "Analytics",
      category: "Tracking",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Link2,
      title: "Link Building",
      category: "Off-Page SEO",
      gradient: "from-amber-500 to-yellow-500"
    },
    {
      icon: Users,
      title: "Local SEO",
      category: "Local Search",
      gradient: "from-indigo-500 to-violet-500"
    },
    {
      icon: Clock,
      title: "SEO Monitoring",
      category: "Maintenance",
      gradient: "from-rose-500 to-pink-500"
    }
  ];

  const services = [
    {
      title: "SEO Audit",
      description: "Comprehensive analysis of your website's technical SEO elements to ensure a solid foundation for growth.",
      image: "/images/onpage-seo.jpg"
    },
    {
      title: "Content Creation",
      description: "Strategic content development that informs, educates, and helps users while targeting relevant keywords.",
      image: "/images/content-strategy.jpg"
    },
    {
      title: "Technical SEO",
      description: "Expert optimization of your website's technical aspects including speed, structure, and accessibility.",
      image: "/images/technical-seo.jpg"
    },
    {
      title: "Local SEO",
      description: "Targeted optimization to reach your local audience and convert qualified leads into customers.",
      image: "/images/seo.jpg"
    }
  ];
 
  const process = [
    {
      number: "01",
      title: "Research",
      description: "We analyze your industry, target audience, and competitors to uncover valuable optimization opportunities."
    },
    {
      number: "02",
      title: "Analyze",
      description: "Comprehensive site audit and performance analysis to identify improvement areas and set clear KPIs."
    },
    {
      number: "03",
      title: "Plan",
      description: "Development of tailored strategies combining on-page, off-page, and technical SEO elements."
    },
    {
      number: "04",
      title: "Implement",
      description: "Expert execution of optimization strategies across all aspects of your digital presence."
    },
    {
      number: "05",
      title: "Develop",
      description: "Continuous monitoring, adaptation, and enhancement of strategies to maintain peak performance."
    }
  ];

  const testimonials = [
    {
      quote: "SEOcial Media Solutions has helped us achieve exceptional results within just three months! We cannot wait to achieve more milestones with their strategic SEO services.",
      author: "E-commerce Store"
    },
    {
      quote: "With SEOcial Media Solutions, we have seen incredible traffic growth. Our revenues have also increased, and we cannot be more grateful to their team.",
      author: "Consultancy Service"
    },
    {
      quote: "The SEO consultant helping us is amazing. They work on our SEO requirements as though this business is their own. It is the best experience we have ever had with an SEO agency.",
      author: "Art and Craft Suppliers"
    }
  ];

  const detailedServices = [
    {
      title: "Expertise Across Multiple Business Domains",
      description: `At SEOcial Media Solutions, we help different types of businesses grow online. Whether you're in textiles, diamonds, real estate, healthcare, e-commerce, education, or local services, we create marketing plans that work. Our team knows what each industry needs and helps you reach more people, get more customers, and grow your business:`,
      points: [
        "Healthcare & Clinics",
        "Real Estate",
        "Education & Coaching",
        "E-commerce & Retail",
        "Textile & Diamond Industry",
        "Restaurants & Local Services"
      ]
    },
    {
      title: "SEO Audit Services",
      description: `Our comprehensive SEO audit delves deep into your website's current status. We analyze how well your site meets SEO requirements, checking whether it can be crawled and indexed by search engines correctly. Our expert team assesses your site architecture to uncover opportunities for improvement, examining crucial elements including:`,
      points: [
        "Complete sitemap analysis and optimization",
        "In-depth page speed assessment",
        "Comprehensive website analytics review",
        "Detailed backlink profile evaluation",
        "Content quality and relevance assessment",
        "Mobile responsiveness testing",
        "URL structure optimization"
      ]
    },
    {
      title: "Keyword Research Excellence",
      description: `Keyword research is the foundation of successful SEO strategy. We identify the exact words and phrases your potential customers use in their searches. Our advanced keyword research process includes:`,
      points: [
        "Short and long-tail keyword identification",
        "Competitor keyword analysis",
        "Search intent mapping",
        "Keyword difficulty assessment",
        "Search volume analysis",
        "Semantic keyword clustering",
        "Opportunity gap analysis"
      ]
    },
    {
      title: "Enterprise SEO Solutions",
      description: `We specialize in enterprise SEO, crafting targeted strategies to improve SEO performance for large organizations. Our enterprise solutions cover:`,
      points: [
        "Multi-location SEO management",
        "Large-scale content optimization",
        "Complex site architecture planning",
        "International SEO coordination",
        "Enterprise-level reporting",
        "Competitive market analysis",
        "Brand consistency management"
      ]
    }
  ];

  const growthBenefits = [
    {
      title: "Enhanced Search Visibility",
      description: "Our SEO strategies significantly improve your website's visibility on search engine results pages (SERPs). Through careful optimization of content, meta tags, and website structure, we help you secure higher rankings for relevant searches.",
      icon: TrendingUp
    },
    {
      title: "Qualified Traffic Growth",
      description: "Experience substantial increases in targeted traffic from users actively searching for your products or services. Our approach ensures you're not just getting more visitors, but the right visitors who are more likely to convert.",
      icon: Users
    },
    {
      title: "Improved Conversion Rates",
      description: "Through strategic optimization of user experience and content relevance, we help transform more of your visitors into customers. Our comprehensive approach addresses all factors that influence conversion.",
      icon: Target
    },
    {
      title: "Sustainable Growth",
      description: "Unlike paid advertising, SEO provides long-term sustainable results. Our strategies focus on building a strong foundation that continues to deliver results well into the future.",
      icon: BarChart
    }
  ];

  return (
    <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50">
     <Helmet>
  <title>
    Best SEO Company in Ajmer | SEOcial Media Solutions
  </title>

  <meta
    name="description"
    content="Rank higher on Google with the best SEO company in Ajmer. SEOcial Media Solutions offers expert search engine optimization services to drive traffic, leads, and sales."
  />
  <meta
    name="keywords"
    content="SEO company Ajmer, search engine optimization Ajmer, best SEO agency Ajmer, local SEO Ajmer, Google ranking Ajmer, digital marketing Ajmer, affordable SEO services Ajmer"
  />
  <link
    rel="canonical"
    href="https://seocialmedia.in/seo-company-ajmer"
  />

  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Top SEO Company in Ajmer | SEOcial Media Solutions"
  />
  <meta
    property="og:description"
    content="Grow your business with Ajmer’s top SEO agency. We improve your visibility on Google with proven SEO strategies, keyword targeting, and content optimization."
  />
  <meta
    property="og:image"
    content="https://seocialmedia.in/images/og-ajmer-seo.jpg"
  />
  <meta
    property="og:url"
    content="https://seocialmedia.in/seo-company-ajmer"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Ajmer’s Best SEO Company | SEOcial Media"
  />
  <meta
    name="twitter:description"
    content="Get your website to the top of search engine results with the best SEO company in Ajmer. Our team delivers real results through advanced SEO strategies."
  />
  <meta
    name="twitter:image"
    content="https://seocialmedia.in/images/og-ajmer-seo.jpg"
  />
</Helmet>


      <div className="px-4 py-16 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center relative mb-16">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm rounded-full font-medium shadow-lg">
              <h1>Best SEO Company in Jaipur</h1>
            </span>
            <h2 className="mt-6 pb-3 text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent md:text-7xl">
              Turbocharge Your Web Traffic
            </h2>
            <p className="mt-6 text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto">
              Drive sustainable growth through our data-driven SEO strategies
            </p>
          </div>

          {/* Technologies Grid */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {technologies.map((tech) => (
              <div key={tech.title} className="relative p-6 group">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative flex items-start space-x-4">
                  <div className={`bg-gradient-to-r ${tech.gradient} p-3 rounded-xl`}>
                    <tech.icon className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {tech.title}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {tech.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Introduction Section */}
          <div className="mb-24 mt-10">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                From Invisible to Invincible: SEO Services That Fuel Growth
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-4">
                  SEO in digital marketing is the cornerstone of online growth, helping countless companies boost visibility and draw traffic with proven SEO tools. SEO strategies align websites with search engine algorithms so they can appear in relevant search results. When potential customers search for related solutions, SEO helps a business show up on the results page and capture their attention.
                </p>
                <p className="mb-4">
                  A tailored SEO plan from SEOcial Media Solutions can help you dominate search results on major engines like Google. Our SEO services offer 360-degree solutions, helping you ace on-page, off-page, and technical SEO with efficiency and ease!
                </p>
                <p>
                  As one of the top SEO agencies in the business, we prioritize quick organic results to maximize your ROI. We leverage data-driven insights to generate fast SEO results to steer your firm's success. With us, you can boost your web traffic and convert qualified leads to paying customers. The result? Unprecedented revenue growth within a short period!
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Services Section */}
          {detailedServices.map((service, index) => (
            <div key={service.title} className="mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.points.map((point, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="text-amber-500 w-5 h-5 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Growth Benefits Section */}
          <div className="py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                How SEO Fuels Your Business Growth
              </h2>
              <p className="text-xl text-gray-600">Discover the transformative power of strategic SEO</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {growthBenefits.map((benefit, index) => (
                <div key={benefit.title} className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <benefit.icon className="w-8 h-8 text-amber-500 mr-3" />
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Why Choose SEOcial Media Solutions?
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-4">
                  At SEOcial Media Solutions, we understand that choosing the right SEO partner is crucial for your business success. We stand out through our commitment to delivering exceptional results through data-driven strategies and transparent communication.
                </p>
                <p className="mb-4">
                  Our approach combines cutting-edge SEO techniques with deep industry expertise. We don't believe in a one-size-fits-all approach - instead, we craft customized solutions that align with your specific business goals and target audience.
                </p>
                <p className="mb-4">
                  We pride ourselves on staying ahead of algorithm updates and industry trends, ensuring your website maintains its competitive edge in the ever-evolving digital landscape. Our team of SEO experts works tirelessly to implement strategies that drive sustainable growth and deliver measurable results.
                </p>
                <p>
                  With SEOcial Media Solutions, you're not just getting an SEO service provider - you're partnering with a team that's invested in your success. We maintain complete transparency throughout our process, providing regular updates and detailed reports so you can track your ROI and understand the impact of our work.
                </p>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="py-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Our R.A.P.I.D Approach
              </h2>
              <p className="text-xl text-gray-600">A proven process for achieving search success</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step) => (
                <div key={step.number} className="bg-white p-8 rounded-xl shadow-lg group hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Our Services
              </h2>
              <p className="text-xl text-gray-600">Comprehensive SEO solutions for your business</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div key={service.title} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="py-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Client Testimonials
              </h2>
              <p className="text-xl text-gray-600">What our clients say about us</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                  <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
                  <p className="font-semibold text-gray-800">- {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="py-24">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-6">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">Everything you need to know about our SEO services</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 transition-all duration-300"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {openFaq === index ? (
                          <ChevronUp className="w-6 h-6 text-amber-600 transform transition-transform duration-300" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-amber-600 transform transition-transform duration-300" />
                        )}
                      </div>
                    </button>
                    
                    <div className={`transition-all duration-300 ease-in-out ${
                      openFaq === index 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                    } overflow-hidden`}>
                      <div className="px-8 pb-6 pt-2">
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
        
          </div>

          {/* CTA Section */}
          <div className="text-center py-16">
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Online Presence?</h2>
              <p className="text-xl mb-8">
                Join hundreds of businesses that have achieved remarkable growth with our SEO expertise. Get your free consultation today and discover how we can help you reach your digital marketing goals.
              </p>
              <Link to={"/contact"}>
                <button className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Start Your SEO Journey
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoAjmerpage;