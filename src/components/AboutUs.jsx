import { useState } from "react";
import {
  Code,
  Search,
  Share2,
  Store,
  PenTool,
  Brain,
  Rocket,
  Target,
  TrendingUp,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import PromoVideoShowcase from "./PromoVideoShowcase";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const services = [
  {
    icon: Code,
    title: "Website Development",
    description:
      "Creating stunning, responsive websites that drive conversions",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Search,
    title: "SEO",
    description: "Boosting your visibility in search engine rankings",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Building your brand presence across social platforms",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Store,
    title: "Google Services",
    description: "Driving targeted traffic through strategic campaigns",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: PenTool,
    title: "Content Writing",
    description: "Crafting engaging content that tells your story",
    gradient: "from-indigo-500 to-purple-500",
  },
];

const faqs = [
  {
    question:
      "Why is SEOcial Media Solutions considered the best digital marketing agency in Jaipur?",
    answer:
      "SEOcial Media Solutions stands out as the premier digital marketing agency in Jaipur due to our comprehensive approach, proven track record, and client-centric philosophy. We combine cutting-edge AI-powered strategies with deep local market knowledge to deliver exceptional results. Our team of certified experts specializes in multiple disciplines including SEO, social media marketing, content creation, and web development. What sets us apart is our commitment to transparency, measurable results, and personalized service that adapts to each client's unique business goals and budget.",
  },
  {
    question:
      "How does your digital marketing strategy help in lead generation?",
    answer:
      "Our multi-channel lead generation approach combines strategic SEO to capture high-intent searches, targeted social media campaigns to engage prospects, compelling content marketing to nurture leads, and optimized Google Ads campaigns for immediate visibility. We implement advanced analytics and conversion tracking to identify the most effective touchpoints in your customer journey. Our strategies include landing page optimization, email marketing automation, retargeting campaigns, and local SEO tactics that specifically target Jaipur and surrounding markets, ensuring you attract qualified leads that convert into loyal customers.",
  },
  {
    question:
      "Do you offer customized marketing packages for startups and small businesses?",
    answer:
      "Absolutely! We understand that startups and small businesses have unique challenges and budget constraints. We offer flexible, scalable marketing packages specifically designed for growing businesses. Our startup-friendly packages include essential services like basic SEO, social media management, content creation, and Google My Business optimization at competitive rates. We also provide consultation services to help you prioritize the most impactful strategies for your stage of growth. As your business expands, our packages can scale with you, adding more advanced services like paid advertising, advanced analytics, and comprehensive content marketing.",
  },
  {
    question: "Do you provide performance reports and analytics?",
    answer:
      "Yes, transparency and data-driven results are core to our approach. We provide comprehensive monthly performance reports that include detailed analytics on website traffic, search rankings, social media engagement, lead generation metrics, and ROI analysis. Our reports are presented in easy-to-understand formats with actionable insights and recommendations. We also offer real-time dashboard access where you can monitor your campaigns' performance 24/7. Additionally, we conduct quarterly strategy review meetings to discuss results, optimize campaigns, and plan future initiatives based on performance data.",
  },
  {
    question: "What industries have you worked with in Jaipur and beyond?",
    answer:
      "We have extensive experience across diverse industries including healthcare and medical services, real estate and property development, education and e-learning, hospitality and tourism, retail and e-commerce, manufacturing and industrial services, professional services (legal, financial, consulting), technology and software companies, fashion and lifestyle brands, and food and restaurant businesses. Our local expertise in Jaipur's market dynamics, combined with our understanding of various industry challenges, allows us to create targeted strategies that resonate with your specific audience and drive meaningful business growth.",
  },
  {
    question:
      "Can SEOcial Media Solutions manage my social media platforms completely?",
    answer:
      "Yes, we offer complete social media management services that take the burden off your shoulders while maximizing your online presence. Our comprehensive social media management includes content strategy development, daily posting and scheduling, community management and engagement, visual content creation (graphics, videos, stories), hashtag research and optimization, influencer collaboration coordination, social media advertising campaigns, performance monitoring and reporting, and crisis management support. We manage all major platforms including Facebook, Instagram, LinkedIn, Twitter, and YouTube, ensuring consistent brand messaging and optimal engagement across all channels.",
  },
];

const AboutUs = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
     <Helmet>
  <title>
    Best Website Development & Digital Marketing Company in Jaipur | SEOcial Media
  </title>

  <meta
    name="description"
    content="Looking for the best website development company in Jaipur? SEOcial Media offers web design, SEO, content marketing, and full-scale digital solutions tailored to your business."
  />
  <meta
    name="keywords"
    content="best website development company in Jaipur, top digital marketing agency, SEO company Jaipur, social media marketing Jaipur, content writing services, Google Ads Jaipur, web design services, responsive websites, Jaipur web development, startup marketing solutions"
  />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="SEOcial Media Solutions" />
  <meta name="publisher" content="SEOcial Media Solutions" />
  <meta httpEquiv="Content-Language" content="en" />

  <link
    rel="canonical"
    href="https://seocialmedia.in/digital-marketing-company-jaipur"
  />

  {/* Open Graph Meta */}
  <meta
    property="og:title"
    content="Best Website Development & Digital Marketing Company in Jaipur"
  />
  <meta
    property="og:description"
    content="Complete online marketing solutions including SEO, web development, and social media strategies."
  />
  <meta
    property="og:image"
    content="https://seocialmedia.in/images/og-home.jpg"
  />
  <meta
    property="og:url"
    content="https://seocialmedia.in/digital-marketing-company-jaipur"
  />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="SEOcial Media Solutions" />

  {/* Twitter Meta */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="SEOcial Media | Best Website Development in Jaipur"
  />
  <meta
    name="twitter:description"
    content="SEOcial Media Solutions builds modern websites and digital strategies that deliver real results."
  />
  <meta
    name="twitter:image"
    content="https://seocialmedia.in/images/og-home.jpg"
  />
</Helmet>

      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        {/* Hero Section */}
        <div className="px-4 py-16 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="inline-block px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm rounded-full font-medium">
                Top Digital Marketing Agency in Jaipur
              </h1>
              <h2 className="mt-6 pb-4 text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent md:text-6xl">
                Transforming Digital Presence
              </h2>
              <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
                Your complete digital partner for website development, SEO,
                social media, and strategic online marketing solutions.
              </p>
            </motion.div>

            {/* Mission Section */}
            <div id="mission" className="mt-24">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              >
                <motion.div variants={fadeInUp} className="space-y-6">
                  <h2 className="text-4xl font-bold text-gray-900">
                    Our Mission
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We are dedicated to empowering businesses with comprehensive
                    digital solutions that drive real growth. Through innovative
                    web development, strategic SEO, engaging social media
                    management, optimized Google presence, and compelling
                    content, we help our clients thrive in the digital
                    landscape.
                  </p>
                  <div className="flex gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center gap-3 text-white"
                    >
                      <Brain className="w-6 h-6" />
                      <span className="font-medium">AI-Powered</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center gap-3 text-white"
                    >
                      <Rocket className="w-6 h-6" />
                      <span className="font-medium">Results-Driven</span>
                    </motion.div>
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp} className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <img
                      src="images/ourmission.png"
                      alt="Mission visualization"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Strategic Excellence Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-24 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl overflow-hidden"
            >
              <div className="p-8 md:p-12 lg:p-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <motion.div variants={fadeInUp} className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                      Driving Digital Success Through Strategic Excellence
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      At SEOcial Media Solutions, we combine innovative digital
                      strategies with data-driven insights to deliver
                      exceptional results. Our comprehensive approach
                      encompasses advanced SEO techniques, engaging content
                      creation, and strategic social media management to help
                      businesses thrive in the digital landscape.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-white rounded-lg shadow-sm">
                          <Target className="w-6 h-6 text-purple-600" />
                        </div>
                        <span className="font-medium text-gray-800">
                          Targeted Strategies
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-white rounded-lg shadow-sm">
                          <TrendingUp className="w-6 h-6 text-indigo-600" />
                        </div>
                        <span className="font-medium text-gray-800">
                          Measurable Growth
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-white rounded-lg shadow-sm">
                          <Users className="w-6 h-6 text-blue-600" />
                        </div>
                        <span className="font-medium text-gray-800">
                          Client-Centric Focus
                        </span>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="relative">
                    <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                      <img
                        src="images/technology.jpg"
                        alt="Digital marketing strategy visualization"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-24"
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Our Services</h2>
                <p className="text-xl text-gray-600">
                  Comprehensive digital solutions tailored to your success
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    className="relative p-6 group"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-10 rounded-2xl`}
                    />
                    <div className="relative flex items-start space-x-4">
                      <div
                        className={`bg-gradient-to-r ${service.gradient} p-3 rounded-xl`}
                      >
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-gray-600">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Promo Video Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-24"
            >
              <PromoVideoShowcase />
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-24"
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 pb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600">
                  Everything you need to know about our digital marketing
                  services
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {openFaq === index ? (
                          <ChevronUp className="w-5 h-5 text-purple-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: openFaq === index ? "auto" : 0,
                        opacity: openFaq === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <div className="h-px bg-gradient-to-r from-purple-200 to-indigo-200 mb-4"></div>
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
