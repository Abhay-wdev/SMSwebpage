import React, { useState } from 'react';
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
  Globe,
  ChevronDown,
  ChevronUp,
  HelpCircle
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
const SocialMediaServicesjaipurr = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const features = [
    {
      name: "Social Strategy",
      category: "Planning",
      description: "Strategic, data-informed social media plans aligned with your brand goals and audience behavior.",
      icon: <Target className="w-6 h-6 text-white" />,
      gradient: "from-pink-500 to-rose-500"
    },
    {
      name: "Content Creation",
      category: "Production",
      description: "Scroll-stopping visuals, videos, and copy crafted to spark engagement and strengthen your brand voice.",
      icon: <Camera className="w-6 h-6 text-white" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Community Management",
      category: "Engagement",
      description: "Real-time audience interaction and reputation management that builds trust and brand loyalty.",
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      name: "Performance Analytics",
      category: "Reporting",
      description: "Clear, actionable insights and ROI tracking that measure impact and guide smarter decisions.",
      icon: <BarChart2 className="w-6 h-6 text-white" />,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      name: "Influencer Marketing",
      category: "Partnerships",
      description: "Authentic influencer collaborations that expand your reach and enhance brand credibility.",
      icon: <Users className="w-6 h-6 text-white" />,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      name: "Growth Strategy",
      category: "Optimization",
      description: "Scalable growth frameworks designed to maximize reach, engagement, and long-term results.",
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      gradient: "from-red-500 to-pink-500"
    },
    {
      name: "Brand Building",
      category: "Identity",
      description: "Unified brand storytelling and messaging across every social touchpoint to build strong recognition.",
      icon: <Share2 className="w-6 h-6 text-white" />,
      gradient: "from-violet-500 to-purple-500"
    }
  ];
  

  const services = [
    {
      title: "Social Media Management",
      description:
        "End-to-end management of your brand’s social media presence across all major platforms. Our expert team handles everything from strategic content planning and creation to community engagement, crisis response, and performance optimization — ensuring your brand stays active, responsive, and impactful.",
      image: "/images/social-management.jpg",
      benefits: [
        "Consistent brand identity and voice",
        "Strategic content calendar & regular posting",
        "Active community building and engagement",
        "Real-time monitoring and crisis management"
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
      description:
        "High-quality visual and written content designed to captivate your audience and elevate your brand. Our creative team delivers stunning visuals, engaging videos, custom graphics, and compelling copy tailored to your brand’s voice and goals.",
      image: "/images/marketing.jpg",
      benefits: [
        "Professional photography & video shoots",
        "Custom-branded graphic design",
        "Short-form videos and reels",
        "Captivating, on-brand copywriting"
      ]
    },
    {
      title: "Paid Social Advertising",
      description:
        "Run powerful ad campaigns that drive real results. We craft and manage data-driven paid strategies across platforms like Instagram, Facebook, and LinkedIn to increase reach, generate leads, and boost conversions — all while optimizing your budget for maximum ROI.",
      image: "/images/social-ads.png",
      benefits: [
        "Highly targeted ad campaigns",
        "Smart budget allocation & optimization",
        "A/B testing for creative & messaging",
        "Real-time performance tracking and reporting"
      ]
    },
    {
      title: "Analytics & Reporting",
      description:
        "Make informed decisions with our comprehensive analytics and performance reporting. We provide monthly reports and real-time dashboards that track growth, engagement, ROI, and competitive performance — turning insights into actionable strategy.",
      image: "/images/social-analytics.jpg",
      benefits: [
        "Detailed performance metrics & KPIs",
        "Competitor benchmarking",
        "ROI and conversion tracking",
        "Actionable insights for future strategy"
      ]
    }
  ];
  

  const stats = [
    {
      number: "250K+",
      label: "Social Impressions",
      icon: <Globe className="w-6 h-6" />
    },
    {
      number: "1000+",
      label: "Clients Served",
      icon: <Award className="w-6 h-6" />
    },
    {
      number: "95%",
      label: "Client Satisfaction",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      number: "300%",
      label: "Average ROI",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const faqs = [
    {
      question: "Why is SEOcial Media Solutions considered the best social media company in Jaipur?",
      answer: "SEOcial Media Solutions is recognized as Jaipur’s leading social media company due to our exceptional track record of driving results for over 1,000+ satisfied clients. We blend creativity with data-driven strategies, offering end-to-end services including content creation, ad campaigns, audience engagement, and performance analytics. With a 95% client satisfaction rate and an average ROI increase of 300%, we leverage both local market insights and global best practices to consistently deliver outstanding results."
    },
    {
      question: "How does your company help generate quality leads through social media?",
      answer: "We generate high-quality leads through a comprehensive strategy that includes precision-targeted ad campaigns, engaging content, and audience segmentation. Our team builds detailed customer personas, crafts compelling lead magnets, and designs conversion-optimized landing pages. Platforms like Facebook, Instagram, and LinkedIn are used effectively with advanced targeting, retargeting, influencer marketing, and community engagement — all aimed at increasing lead quality and conversion rates."
    },
    {
      question: "Can SEOcial Media Solutions help increase followers organically on Instagram and Facebook?",
      answer: "Yes, our proven organic growth strategies help brands attract real, engaged followers on Instagram and Facebook. We create data-backed content calendars, use effective hashtags, post at optimal times, and actively engage with your audience. By collaborating with micro-influencers, running interactive campaigns, and encouraging user-generated content, our clients often see 40–60% organic growth within the first 90 days, along with a measurable boost in engagement and brand loyalty."
    },
    {
      question: "Do you offer custom social media marketing packages for small businesses in Jaipur?",
      answer: "Absolutely. We offer flexible and affordable social media marketing packages tailored specifically for small businesses in Jaipur. Whether you’re just starting out or scaling up, our packages are customized based on your goals, preferred platforms, content types, and ad budget. We ensure every business gets maximum ROI while building a strong and scalable social presence that can grow with your brand."
    },
    {
      question: "Can you help boost brand awareness and online popularity for my business?",
      answer: "Yes, enhancing brand visibility is a core part of our strategy. We focus on consistent messaging, viral content creation, hashtag campaigns, and strategic influencer collaborations. Our team also manages reputation building, crisis response, and community engagement. With performance tracking tools, we monitor brand mentions, sentiment, and reach to ensure your business achieves meaningful online visibility and credibility."
    },
    {
      question: "Which social media platforms do you manage and promote for clients?",
      answer: "We manage and promote across all major platforms including Instagram, Facebook, LinkedIn, Twitter, YouTube, Pinterest, TikTok, and Google Business Profile. Platform selection is tailored based on your audience, industry, and campaign objectives. We also adapt to new and emerging platforms to keep your business ahead of digital trends, with each strategy designed to align with the platform's unique user behavior and opportunities."
    }
  ];
  

  return (

<>
<Helmet>
  <title>Top Social Media Services in Jaipur | SEO Digital Solutions</title>

  {/* Basic Meta Tags */}
  <meta
    name="description"
    content="SEO Digital Solutions is the leading social media solution company in Jaipur, offering creative and data-driven campaigns on Facebook, Instagram, LinkedIn, and more to boost your brand’s online presence."
  />
  <meta
    name="keywords"
    content="social media marketing Jaipur, social media agency Jaipur, SMO company Jaipur, SMM services Jaipur, SEO Digital Solutions, Jaipur digital marketing agency"
  />
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta charSet="UTF-8" />
  <meta name="author" content="SEO Digital Solutions" />
  <meta name="theme-color" content="#0e76a8" />

  {/* Canonical URL */}
  <link
    rel="canonical"
    href="https://seocialmedia.in/top-social-media-solution-company-jaipur"
  />

  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Top Social Media Solution Company in Jaipur | SEO Digital Solutions"
  />
  <meta
    property="og:description"
    content="Looking for expert social media services in Jaipur? SEO Digital Solutions offers targeted campaigns across Facebook, Instagram, LinkedIn, and more to grow your business."
  />
  <meta
    property="og:url"
    content="https://seocialmedia.in/top-social-media-solution-company-jaipur"
  />
  <meta
    property="og:image"
    content="https://seocialmedia.in/static/images/og-social-media-jaipur.jpg"
  />
  <meta property="og:locale" content="en_IN" />
  <meta property="og:site_name" content="SEO Digital Solutions" />
  <meta
    property="article:publisher"
    content="https://www.facebook.com/SEODigitalSolutions"
  />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Jaipur’s Top Social Media Marketing Company | SEO Digital Solutions"
  />
  <meta
    name="twitter:description"
    content="Boost your brand with SEO Digital Solutions—Jaipur’s expert in social media strategy, ads, and content across all major platforms."
  />
  <meta
    name="twitter:image"
    content="https://seocialmedia.in/static/images/og-social-media-jaipur.jpg"
  />

  {/* Geo Tags */}
  <meta name="geo.region" content="IN-RJ" />
  <meta name="geo.placename" content="Jaipur" />
  <meta name="geo.position" content="26.9124;75.7873" />
  <meta name="ICBM" content="26.9124,75.7873" />
</Helmet>



    <div className="min-h-screen">
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

            {/* FAQ Section */}
            <div className="py-16 bg-white rounded-3xl shadow-lg">
              <div className="max-w-4xl mx-auto px-8">
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full">
                      <HelpCircle className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                  <p className="text-xl text-gray-600">Get answers to common questions about our social media services</p>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-xl overflow-hidden hover:border-pink-300 transition-colors duration-300"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full px-6 py-5 text-left flex justify-between items-center bg-gradient-to-r from-gray-50 to-pink-50 hover:from-pink-50 hover:to-purple-50 transition-all duration-300"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                        <div className="flex-shrink-0">
                          {openFaq === index ? (
                            <ChevronUp className="w-5 h-5 text-pink-600" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-pink-600" />
                          )}
                        </div>
                      </button>
                      
                      <div className={`overflow-hidden transition-all duration-300 ${
                        openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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

                <div className="mt-12 text-center">
                  <p className="text-gray-600 mb-6">
                    Still have questions? We're here to help!
                  </p>
                  <button
                    onClick={() => window.location.href = '/contact'}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity duration-300"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Contact Our Team
                  </button>
                </div>
              </div>
            </div>

           {/* SEO Content Section */}
<div className="py-16 bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl px-8 mt-16">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-8">Why Choose Our Social Media Services?</h2>
    <div className="text-left space-y-6">
      <p className="text-gray-700">
        At SEOcial Media Solutions, we blend creativity with strategy to deliver impactful social media marketing. Our team of specialists brings together industry insights, platform expertise, and data-backed techniques to elevate your brand’s digital presence.
      </p>
      <p className="text-gray-700">
        We go beyond basic posting — offering a full spectrum of services including content creation, audience engagement, campaign management, and targeted ad strategies. Every solution is tailored to reflect your unique brand voice and aligned with your business goals.
      </p>
      <p className="text-gray-700">
        Trusted by 1000+ businesses, our results-driven approach helps you build a loyal audience, boost engagement, and drive measurable growth. Partner with us to stay ahead of trends and turn your social media into a powerful marketing channel.
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
                    <button
                      onClick={() => window.location.href = '/contact'}
                      className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 px-8 rounded-lg hover:opacity-90 transition-opacity duration-300"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default SocialMediaServicesjaipurr;