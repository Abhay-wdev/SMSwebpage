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
import ServicesSectionAjmer from './ServicesSectionAjmer';
import SocialMediaHeroAjmer from './SocialMediaHeroAjmer';
import { Helmet } from 'react-helmet-async';


const SocialMediaServicesJaipur = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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

  const faqs = [
    {
      question: "Why is SEOcial Media Solutions considered the best social media company in Jaipur?",
      answer:
        "SEOcial Media Solutions is renowned as the leading social media company in Jaipur due to our proven record of delivering exceptional results for over 1000+ clients. We combine data-driven strategies with creative excellence to offer comprehensive services including content creation, influencer marketing, and performance analytics. Our team of certified social media experts understands Jaipur’s competitive business landscape while implementing global best practices. We have consistently achieved a 95% client satisfaction rate and an average 300% ROI for our clients through innovative and tailored social media marketing solutions."
    },
    {
      question: "How does your company help generate quality leads through social media?",
      answer:
        "We generate high-quality leads through targeted advertising campaigns, compelling content strategies, and strategic audience engagement. Our process includes detailed buyer persona creation, designing conversion-optimized landing pages, and advanced targeting across platforms like Facebook, Instagram, and LinkedIn. We also implement retargeting ads, influencer partnerships, and community-building initiatives to nurture prospects through your sales funnel, ensuring better lead quality and higher conversion rates for Jaipur-based businesses."
    },
    {
      question: "Can SEOcial Media Solutions help increase followers organically on Instagram and Facebook?",
      answer:
        "Absolutely! Our organic growth strategies focus on authentic engagement and community building. We create strategic content calendars, conduct in-depth hashtag research, optimize posting schedules based on analytics, and engage directly with your target audience. Additionally, we collaborate with Jaipur-based micro-influencers, develop shareable content, and leverage user-generated content to drive growth. Typically, our clients experience 40-60% organic follower growth within the first three months while maintaining high engagement rates."
    },
    {
      question: "Do you offer custom social media marketing packages for small businesses in Jaipur?",
      answer:
        "Yes, we provide flexible and affordable social media packages tailored for small businesses in Jaipur. Our packages are designed to include platform selection, content creation, posting frequency, and advertising budgets that align with your specific business goals. We understand the unique challenges small businesses face and ensure that our solutions are scalable, giving you maximum value from your investment while building a strong and consistent social media presence."
    },
    {
      question: "Can you help boost brand awareness and online popularity for my business?",
      answer:
        "Enhancing brand awareness and online popularity is a core focus of our social media strategies. We achieve this through consistent brand messaging, viral content creation, strategic hashtag campaigns, influencer collaborations, and active community engagement. Our approach also includes reputation management, crisis communication support, and thought leadership content to position your brand as an authority in Jaipur. We track brand mentions, sentiment, reach, and engagement metrics to ensure your business gains positive recognition and builds a loyal customer community."
    },
    {
      question: "Which social media platforms do you manage and promote for clients?",
      answer:
        "We offer comprehensive management and promotion across all major social media platforms including Instagram, Facebook, LinkedIn, Twitter, YouTube, Pinterest, TikTok, and Google Business Profile. Platform selection depends on your target audience demographics, industry, and business objectives. We stay updated with emerging social platforms and trends to ensure your brand remains relevant and ahead in the Jaipur market. Each platform strategy is tailored to leverage its unique features and audience behavior effectively."
    }
  ];
  

  return (
    <div className="min-h-screen">

 
<Helmet>
  <title>
    Top Social Media Marketing Company in Jaipur  
  </title>
  <meta
    name="description"
    content="Looking for top-notch social media marketing in Jaipur? SEOcial Media Solutions delivers results-driven campaigns for real brand growth."
  />
  <meta
    name="keywords"
    content="Social Media Marketing Jaipur, social media agency Jaipur, SEOcial Media Jaipur, Instagram marketing Jaipur, Facebook ads Jaipur, digital marketing Jaipur"
  />
  <link
    rel="canonical"
    href="https://seocialmedia.in/social-media-marketing-company-jaipur"
  />

  {/* Open Graph Meta */}
  <meta
    property="og:title"
    content="Top Social Media Marketing Company in Jaipur | SEOcial Media Solutions"
  />
  <meta
    property="og:description"
    content="Boost your brand visibility with Jaipur's most trusted social media marketing company. Customized campaigns for real engagement."
  />
  <meta
    property="og:image"
    content="https://seocialmedia.in/images/social-bg.jpg"
  />
  <meta
    property="og:url"
    content="https://seocialmedia.in/social-media-marketing-company-jaipur"
  />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Top SEOcial Media Solutions in Jaipur" />

  {/* Twitter Meta */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Top Social Media Marketing Company in Jaipur | SEOcial Media Solutions"
  />
  <meta
    name="twitter:description"
    content="Get impactful social media marketing services in Jaipur with SEOcial Media Solutions."
  />
  <meta
    name="twitter:image"
    content="https://seocialmedia.in/images/social-bg.jpg"
  />
</Helmet>




      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <h1 className="text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-purple-500 inline-block px-4 py-1 rounded-full">
          Best Social Media Marketing Company in jaipur
        </h1>
        <h2 className="mt-6 text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent md:text-6xl">
          Transform Your Social Media Presence
        </h2>
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
          Drive engagement, build meaningful connections, and achieve measurable results with our comprehensive social media marketing solutions.
        </p>
      </section>


     

      <SocialMediaHeroAjmer/>

      {/* Stats Section */}
      <section className="py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>


      <h2 className="text-3xl font-bold text-center my-8">
  Key Features
</h2>

  {/* Features Grid */}<center>
  <div className="my-24 max-w-6xl grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="relative p-6 group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative items-center flex flex-col space-y-4">
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

            
            <ServicesSectionAjmer/>





            </center>
      {/* FAQ Section */}
      <section className="py-16 bg-white rounded-3xl shadow-lg">
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

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 py-5 bg-white border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="my-16 text-center">
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
      </section>
    </div>
  );
};

export default SocialMediaServicesJaipur;
