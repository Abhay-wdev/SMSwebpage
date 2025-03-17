import React from 'react';
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
  Play,
  ArrowRight,
//   Star
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

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

const VideoEditing = () => {
  const services = [
    { 
      name: "High-Quality Videos", 
      description: "We deliver polished, visually stunning videos that captivate your audience and leave a lasting impression.",
      icon: <Award className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500 to-purple-500"
    },
    { 
      name: "Corporate Videos", 
      description: "Create professional corporate videos that effectively communicate your brand's message and values.",
      icon: <Code className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500 to-purple-500"
    },
    { 
      name: "Social Media Clips", 
      description: "Engage your audience with eye-catching social media clips tailored for platforms like Instagram, Facebook, and YouTube.",
      icon: <Globe className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500 to-purple-500"
    },
    { 
      name: "Promotional Videos", 
      description: "Boost your marketing campaigns with high-impact promotional videos that drive conversions and sales.",
      icon: <PenTool className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500 to-purple-500"
    },
    { 
      name: "Event Coverage", 
      description: "Relive your special moments with beautifully edited event coverage videos that capture every detail.",
      icon: <Layers className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500 to-purple-500"
    },
    { 
      name: "Animation & Motion Graphics", 
      description: "Add a dynamic edge to your videos with custom animations and motion graphics that tell your story creatively.",
      icon: <Search className="w-6 h-6 text-white" />,
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  const process = [
    {
      number: "01",
      title: "Submit Your Footage",
      description: "Upload your raw footage, along with your instructions, or schedule a call to discuss your vision.",
      icon: <Globe className="w-10 h-10 text-indigo-500" />
    },
    {
      number: "02",
      title: "Editing",
      description: "Our expert editors get to work, applying the edits, effects, and enhancements you've requested.",
      icon: <Edit className="w-10 h-10 text-indigo-500" />
    },
    {
      number: "03",
      title: "Review & Feedback",
      description: "You'll receive a draft of your video for review. We'll make any necessary revisions based on your feedback.",
      icon: <Monitor className="w-10 h-10 text-indigo-500" />
    },
    {
      number: "04",
      title: "Final Delivery",
      description: "Once approved, your video will be delivered in the format and resolution of your choice, ready to be shared with the world.",
      icon: <Video className="w-10 h-10 text-indigo-500" />
    }
  ];

//   const testimonials = [
//     {
//       name: "Rajesh Sharma",
//       company: "Jaipur Digital Marketing",
//       quote: "The team at SEOcial Media Solutions transformed our raw footage into a stunning promotional video that exceeded our expectations. Their attention to detail and creative vision are unmatched.",
//       avatar: "/images/testimonial-1.jpg"
//     },
//     {
//       name: "Priya Patel",
//       company: "Eventful Jaipur",
//       quote: "Working with SEOcial Media Solutions was a pleasure. They captured the essence of our event perfectly and delivered a video that we're proud to share with our clients.",
//       avatar: "/images/testimonial-2.jpg"
//     },
//     {
//       name: "Amit Agarwal",
//       company: "Tech Innovators",
//       quote: "Professional, creative, and efficient. SEOcial Media Solutions delivered our corporate video on time and within budget. We couldn't be happier with the results.",
//       avatar: "/images/testimonial-3.jpg"
//     }
//   ];

  return (
    <>
      <Helmet>
        <title>Best Video Editing Company in Jaipur | SEOcial Media Solutions</title>
        <meta
          name="description"
          content="Transform your raw footage into compelling videos with the best video editing company in Jaipur. Create stunning visual content with SEOcial Media Solutions!"
        />
        <meta name="keywords" content="video editing, professional videos, video production, best video editing company in Jaipur" />
        <link rel="canonical" href="https://seocialmedia.in/video-editing" />
        <meta property="og:title" content="Best Video Editing Company in Jaipur | SEOcial Media Solutions" />
        <meta property="og:description" content="Transform your raw footage into compelling and engaging videos with the best video editing company in Jaipur." />
        <meta property="og:image" content="https://seocialmedia.in/images/og-video.jpg" />
        <meta property="og:url" content="https://seocialmedia.in/video-editing" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero Section with Video Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0">
          <div className="h-full w-full bg-cover bg-center bg-no-repeat"></div>
        </div>
        <div className="relative px-4 py-32 md:px-16 lg:px-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm rounded-full font-medium mb-4">
              Best Video Editing Company in Jaipur
            </span>
            <h1 className="mt-6 text-4xl font-bold text-white md:text-6xl leading-tight">
              Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">Vision Into Reality</span> with Jaipur's Top Video Editing Services
            </h1>
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
              <Link
                to="/portfolio"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg w-full sm:w-auto"
              >
                See Our Work
                <Play className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="px-4 py-16 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
            {/* Introduction Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-16"
            >
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm rounded-full font-medium mb-4">
                  Our Expertise
                </span>
                <h2 className="text-4xl font-bold mb-4 pb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Professional Video Editing Services in Jaipur
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  We blend creativity with technical expertise to deliver videos that make an impact and help you achieve your goals.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  variants={fadeInRight}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h3>
                  <p className="text-gray-600 text-lg">
                    SEOcial Media Solutions is recognized as the best video editing company in Jaipur, offering a wide range of services tailored to meet your needs. Our team of skilled editors and creative professionals ensures that every video we produce is of the highest quality, helping you stand out in a competitive market.
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
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-2xl transform -rotate-3 scale-95 shadow-lg"></div>
                  <img
                    src="/images/video-editing.jpg"
                    alt="Professional Video Editing Studio"
                    className="relative rounded-2xl shadow-xl object-cover w-full h-full"
                  />
                  
                </motion.div>
              </div>
            </motion.div>

            {/* Our Process Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-24"
            >
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm rounded-full font-medium mb-4">
                  Our Process
                </span>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  How We Work
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Our streamlined process ensures efficient delivery of high-quality videos that meet your expectations.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {process.map((step) => (
                  <motion.div
                    key={step.number}
                    variants={fadeInUp}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                  >
                    <div className="bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      {step.icon}
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Our Services Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-24"
            >
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm rounded-full font-medium mb-4">
                  Our Services
                </span>
                <h2 className="text-4xl font-bold mb-4 pb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Video Editing Solutions
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  We offer a comprehensive range of video editing services to meet your specific needs.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                  >
                    <div className={`bg-gradient-to-r ${service.gradient} p-6 flex justify-center`}>
                      <div className="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                        {service.icon}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            
            </motion.div>

            {/* Testimonials Section */}
            {/* <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-24"
            >
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm rounded-full font-medium mb-4">
                  Testimonials
                </span>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  What Our Clients Say
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Don't just take our word for it. Hear what our satisfied clients have to say about our video editing services.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 relative"
                  >
                    <div className="absolute -top-6 left-8">
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-full shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center mb-6 mt-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-500 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                    <div className="flex text-yellow-400 mb-4">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                    <p className="text-gray-600 italic">{testimonial.quote}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div> */}

            {/* CTA Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-24 mb-16"
            >
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-10"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-8 md:mb-0 md:mr-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      Ready to Transform Your Videos?
                    </h2>
                    <p className="text-indigo-100 text-lg max-w-xl">
                      Let's work together to create stunning videos that captivate your audience and elevate your brand. Contact us today to get started!
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors duration-300 shadow-lg whitespace-nowrap"
                  >
                    Contact Us
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoEditing;