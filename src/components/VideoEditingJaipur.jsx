import React, { useState } from 'react';
import { 
  Video, 
  Edit, 
  Monitor, 
  Award, 
  Code, 
  Globe, 
  Layers, 
  PenTool, 
  Search,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  FileText,
  Users,
  CheckCircle,
  BarChart
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeroSectionVideo from './HeroSectionVideo';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

const VideoEditingJaipur = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "What types of video editing services do you offer in Jaipur?",
      answer: "At SEOcial Media Solutions, we provide a full range of professional video editing services in Jaipur. These include corporate and promotional videos, social media reels, event coverage, YouTube editing, explainer videos, animation, and motion graphics. Our team tailors each video to reflect your brand identity and marketing goals, ensuring your content stands out and drives engagement."
    },
    {
      question: "How long does the video editing process usually take?",
      answer: "Turnaround time depends on the project's complexity. Simple edits—such as trimming, color correction, or basic transitions—are typically completed within 24 to 48 hours. More complex edits involving animation, motion graphics, or storytelling can take between 3 to 7 business days. We always share a clear timeline during onboarding and offer expedited services if required."
    },
    {
      question: "What file formats do you support for video editing?",
      answer: "We support all major video formats, including MP4, MOV, AVI, WMV, and more. For professional-grade edits, we prefer high-quality source files like ProRes, MXF, or RAW formats. Final outputs are delivered in formats optimized for your intended platform—be it social media, YouTube, your website, or broadcast use."
    },
    {
      question: "Do you also provide video shooting services in Jaipur?",
      answer: "Yes, we offer full-service video production in Jaipur—from scripting and storyboarding to professional on-location shooting. Our team uses high-end cameras, lighting, and audio equipment to capture footage, which is then edited in-house for a seamless and consistent production experience."
    },
    {
      question: "Can you integrate our brand colors, logos, and guidelines into videos?",
      answer: "Absolutely. Maintaining brand consistency is a top priority. We incorporate your brand’s colors, logo, typography, and design elements into each video. We can also create custom motion graphic templates that align with your visual identity, ensuring a polished and cohesive look across all video assets."
    },
    {
      question: "What sets your video editing services apart from others in Jaipur?",
      answer: "Our edge lies in the blend of creativity, marketing strategy, and technical excellence. We don’t just cut and edit—we craft compelling video narratives that align with your business objectives. Our team stays ahead of trends, leverages advanced tools, and provides data-driven recommendations to ensure your videos perform exceptionally across platforms."
    }
  ];
  

  const process = [
    {
      number: "01",
      title: "Submit Your Footage",
      description: "Easily upload your raw footage along with detailed instructions, or schedule a call so we can fully understand your creative vision.",
      image: "/images/process/submit.jpg"
    },
    {
      number: "02",
      title: "Expert Editing",
      description: "Our skilled editors work meticulously, applying precise cuts, dynamic effects, and tailored enhancements to bring your vision to life.",
      image: "/images/process/editing.jpg"
    },
    {
      number: "03",
      title: "Review & Feedback",
      description: "Review a draft of your video and share your feedback. We collaborate closely with you to make all the necessary revisions until it’s perfect.",
      image: "/images/process/review.webp"
    },
    {
      number: "04",
      title: "Final Delivery",
      description: "Once approved, your video is polished and delivered in your desired format and resolution—ready to captivate your audience.",
      image: "/images/process/delivery.jpg"
    }
  ];
  
  
  const stats = [
    {
      number: "1000+",
      label: "Videos Edited",
      icon: <Video className="w-6 h-6" />,
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      number: "200+",
      label: "Happy Clients",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "24-48h",
      label: "Standard Turnaround",
      icon: <BarChart className="w-6 h-6" />,
    }
  ];

  const services = [
    { 
      name: "High-Quality Videos", 
      description: "Delivering cinematic-quality visuals that captivate your audience and elevate your brand with every frame.",
      image: "/images/services/high-quality.webp"
    },
    { 
      name: "Corporate Videos", 
      description: "Professionally crafted corporate videos that communicate your brand’s mission, values, and professionalism with clarity.",
      image: "/images/services/corporate.webp"
    },
    { 
      name: "Social Media Clips", 
      description: "Scroll-stopping short-form videos optimized for platforms like Instagram, Facebook, and YouTube—designed to engage and convert.",
      image: "/images/services/social.webp"
    },
    { 
      name: "Promotional Videos", 
      description: "Strategic promotional videos that highlight your products or services, increase brand awareness, and drive sales.",
      image: "/images/services/promotional.jpeg"
    },
    { 
      name: "Event Coverage", 
      description: "Immersive event coverage that preserves every meaningful moment with crisp visuals and seamless storytelling.",
      image: "/images/services/event.jpg"
    },
    { 
      name: "Animation & Motion Graphics", 
      description: "Bring your ideas to life with engaging animations and motion graphics that visually communicate complex messages with flair.",
      image: "/images/services/animation.webp"
    }
  ];
  

  return (
    <>
  <Helmet>
  <title>
    Best Video Editing Company in Jaipur | SEOcial Media Solutions
  </title>

  {/* Basic SEO */}
  <meta
    name="description"
    content="SEOcial Media Solutions is the top video editing company in Jaipur offering professional video editing, reels creation, promotional video editing, and social media-ready content."
  />
  <meta
    name="keywords"
    content="video editing company Jaipur, reels editing Jaipur, promo video editing Jaipur, YouTube video editor Jaipur, social media video editing Jaipur, video production Jaipur, SEOcial Media Solutions"
  />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="SEOcial Media Solutions" />
  <meta name="publisher" content="SEOcial Media Solutions" />
  <link
    rel="canonical"
    href="https://seocialmedia.in/top-video-editing-company-Jaipur"
  />

  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Top Video Editing Company in Jaipur | SEOcial Media Solutions"
  />
  <meta
    property="og:description"
    content="Looking for high-quality video editing services in Jaipur? Get cinematic reels, promotional videos, and more crafted by our expert editors."
  />
  <meta
    property="og:image"
    content="https://seocialmedia.in/images/og-Jaipur-video.jpg"
  />
  <meta
    property="og:url"
    content="https://seocialmedia.in/video-editing-company-Jaipur"
  />
  <meta
    property="og:site_name"
    content="SEOcial Media Solutions"
  />
  <meta
    property="article:publisher"
    content="https://www.facebook.com/SEODigitalSolutions"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Jaipur’s Best Video Editing Company | SEOcial Media"
  />
  <meta
    name="twitter:description"
    content="Enhance your brand with expert video editing services in Jaipur. We edit reels, promos, and business videos for Instagram, YouTube, and more."
  />
  <meta
    name="twitter:image"
    content="https://seocialmedia.in/images/og-Jaipur-video.jpg"
  />
</Helmet>


      <center>
<HeroSectionVideo/></center>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0">
          <div className="h-full w-full bg-cover bg-center bg-no-repeat"></div>
        </div>
        <div className="relative px-4 py-10 md:px-16 lg:px-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="inline-block px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm rounded-full font-medium mb-4">
              Best Video Editing Company in Jaipur
            </h1>
            <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl leading-tight">
              Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">Vision Into Reality</span> with Jaipur's Top Video Editing Services
            </h2>
            <p className="mt-6 text-gray-200 text-lg md:text-xl max-w-3xl mx-auto">
              At SEOcial Media Solutions, we specialize in creating high-quality, engaging videos that captivate your audience. Whether it's corporate videos, social media clips, or promotional content, we deliver the best video editing services in Jaipur.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-lg w-full sm:w-auto"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
     {/* Stats Section */}
     <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="px-4 py-16 md:px-16 lg:px-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    {/* Introduction Section */}
    <section className="bg-white py-16 px-4 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h3>
<p className="text-gray-600 text-lg">
  At SEOcial Media Solutions, we’re proud to be recognized as Jaipur’s leading video editing company. We offer a diverse range of high-quality, customized video editing services designed to elevate your brand. Our experienced editors and creative team are committed to delivering visually captivating and professionally crafted videos that help you stand out, engage your audience, and achieve your goals in today’s competitive digital landscape.
</p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <p className="ml-3 text-gray-600">Experienced team of professional video editors</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <p className="ml-3 text-gray-600">Top-notch equipment and software</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <p className="ml-3 text-gray-600">Customized solutions for every client</p>
              </li>
            </ul>
          </motion.div>
     
          <motion.div
  variants={fadeInLeft}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="relative w-full rounded-2xl overflow-hidden"
>
  {/* Gradient Background */}
  

  {/* YouTube Video */}
  <iframe
    className="w-full aspect-video z-10 pointer-events-none rounded-2xl"
    src="https://www.youtube.com/embed/yTsyexe0KqI?autoplay=1&mute=1&controls=0&disablekb=1&modestbranding=1&rel=0&loop=1&playlist=yTsyexe0KqI"
    title="Professional Video Editing Studio"
    frameBorder="0"
    allow="autoplay; fullscreen"
    allowFullScreen
  ></iframe>
</motion.div>

 
        </div>
      </section>

        {/* Our Process Section */}
        <section className="py-7 bg-gradient-to-br  from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm rounded-full font-medium mb-4">
              Our Process
            </span>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              How We Work
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our streamlined process ensures efficient delivery of high-quality videos that meet your expectations.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2  lg:grid-cols-4 gap-8">
          {process.map((step, index) => (
  <motion.div
    key={index}
    variants={fadeInUp}
    className="bg-white p-2 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-gray-200 overflow-hidden"
  >
    <div
      className="w-full h-48 bg-cover bg-center rounded-md mb-4"
      style={{ backgroundImage: `url(${step.image})` }}
    ></div>
    <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
      {step.number}
    </div>
    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
    <p className="text-gray-600">{step.description}</p>
  </motion.div>
))}


          </div>
        </div>
      </section>
 {/* Our Services Section */}
 <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm rounded-full font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-4xl pb-1 font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Video Editing Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We offer a comprehensive range of video editing services to meet your specific needs.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
  <motion.div
    key={index}
    variants={fadeInUp}
    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
  >
    <div 
      className="h-48 bg-cover bg-center" 
      style={{ backgroundImage: `url(${service.image})` }}
    ></div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  </motion.div>
))}

          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-white via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 md:px-0">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full">
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about our video editing services</p>
          </motion.div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden hover:border-indigo-300 transition-colors duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center bg-gradient-to-r from-gray-50 to-indigo-50 hover:from-indigo-50 hover:to-purple-50 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-indigo-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-indigo-600" />
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
      </section>

      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 md:px-16 text-white text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Videos?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let's work together to create stunning videos that captivate your audience and elevate your brand. Contact us today to get started!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 font-medium rounded-lg hover:bg-indigo-100 transition duration-300 shadow-md"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default VideoEditingJaipur;
