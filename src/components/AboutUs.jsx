import React from 'react';
import { 
  Code, Search, Share2, Store, 
  PenTool, Brain, 
  Rocket,
  Target,
  TrendingUp,
  Users
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

const services = [
  {
    icon: Code,
    title: "Website Development",
    description: "Creating stunning, responsive websites that drive conversions",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Search,
    title: "SEO",
    description: "Boosting your visibility in search engine rankings",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Building your brand presence across social platforms",
    gradient: "from-purple-500 to-pink-500"
  },
  // {
  //   icon: Store,
  //   title: "Google Business Profile",
  //   description: "Optimizing your local business presence",
  //   gradient: "from-orange-500 to-red-500"
  // },
  {
    icon: Store,
    title: "Google Services",
    description: "Driving targeted traffic through strategic campaigns",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: PenTool,
    title: "Content Writing",
    description: "Crafting engaging content that tells your story",
    gradient: "from-indigo-500 to-purple-500"
  }
];

// const team = [
//   {
//     name: "David Chen",
//     role: "Web Development Lead",
//     exp: "Full-stack development specialist",
//     gradient: "from-blue-500 to-cyan-500"
//   },
//   {
//     name: "Emma Thompson",
//     role: "Digital Marketing Director",
//     exp: "SEO & social media expert",
//     gradient: "from-purple-500 to-pink-500"
//   },
//   {
//     name: "Michael Ross",
//     role: "Content Strategist",
//     exp: "Content & advertising specialist",
//     gradient: "from-green-500 to-emerald-500"
//   }
// ];

const AboutUs = () => {
 

  return (
     <>
       <Helmet>
            <title>About Us | SEOcial Media Solutions</title>
            <meta
              name="description"
              content="Discover SEOcial Media, a trusted digital marketing agency dedicated to helping businesses thrive with innovative and effective online strategies."
            />
            <meta name="keywords" content="IT services, web development, SEO, digital marketing" />
            <link rel="canonical" href="https://seocialmedia.in/" />
            <meta property="og:title" content="About Us | SEOcial Media Soltions" />
            <meta property="og:description" content="Discover professional IT solutions tailored to your business needs." />
            <meta property="og:image" content="https://seocialmedia.in/images/og-home.jpg" />
            <meta property="og:url" content="https://seocialmedia.in/" />
            <meta name="twitter:card" content="summary_large_image" />
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
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm rounded-full font-medium">
              Your Digital Partner
            </span>
            <h1 className="mt-6 pb-4 text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent md:text-6xl">
              Transforming Digital Presence
            </h1>
            <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
              Your complete digital partner for website development, SEO, social media,
              and strategic online marketing solutions.
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
              <motion.div
                variants={fadeInUp}
                className="space-y-6"
              >
                <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We are dedicated to empowering businesses with comprehensive digital solutions 
                  that drive real growth. Through innovative web development, strategic SEO, 
                  engaging social media management, optimized Google presence, and compelling content, 
                  we help our clients thrive in the digital landscape.
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
              <motion.div
                variants={fadeInUp}
                className="relative"
              >
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
                    At SEOcial Media Solutions, we combine innovative digital strategies with data-driven insights to deliver exceptional results. Our comprehensive approach encompasses advanced SEO techniques, engaging content creation, and strategic social media management to help businesses thrive in the digital landscape.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-white rounded-lg shadow-sm">
                        <Target className="w-6 h-6 text-purple-600" />
                      </div>
                      <span className="font-medium text-gray-800">Targeted Strategies</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-white rounded-lg shadow-sm">
                        <TrendingUp className="w-6 h-6 text-indigo-600" />
                      </div>
                      <span className="font-medium text-gray-800">Measurable Growth</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-white rounded-lg shadow-sm">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <span className="font-medium text-gray-800">Client-Centric Focus</span>
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
              <p className="text-xl text-gray-600">Comprehensive digital solutions tailored to your success</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="relative p-6 group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-10 rounded-2xl`} />
                  <div className="relative flex items-start space-x-4">
                    <div className={`bg-gradient-to-r ${service.gradient} p-3 rounded-xl`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                      <p className="mt-2 text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          {/* <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-24"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600">Expert professionals dedicated to your digital success</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${member.gradient}`} />
                  <div className="p-8">
                    <div className="w-24 h-24 mx-auto mb-6">
                      <img
                        src="/api/placeholder/96/96"
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-center text-gray-900">{member.name}</h3>
                    <p className="mt-2 text-gray-600 text-center">{member.role}</p>
                    <div className="pt-4 mt-4 border-t border-gray-100">
                      <p className="text-gray-500 text-center">{member.exp}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div> */}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-24 text-center"
          >
            <div className="relative max-w-3xl mx-auto p-8 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-10" />
              <div className="relative">
                <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
                  Ready to Transform Your Digital Presence?
                </h2>
                <p className="mt-4 text-gray-600 text-lg">
                  Let's create something amazing together
                </p>
                <div className="mt-8 space-x-4">
                  <Link  to="/contact"  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-8 rounded-lg hover:opacity-90 transition-opacity duration-300">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
};

export default AboutUs;