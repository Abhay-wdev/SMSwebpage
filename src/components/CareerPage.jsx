import React from 'react';
import { 
  Briefcase, 
  FileText,
  GraduationCap,
  Clock,
  MapPin,
  DollarSign,
  ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';
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

const CareerPage = () => {
  const GOOGLE_FORM_URL = 'https://forms.gle/VPPGDKCygaFRyUom6';

  const positions = [
    {
      title: "SEO Expert",
      type: "Full-time",
      location: "1, Sagar, Shiv Shakti Nagar, Nirman Nagar, Jaipur",
      experience: "1+ years",
      description: "Improve website rankings through effective SEO strategies and best practices."
    },
    {
      title: "Google Ads Expert",
      type: "Full-time",
      location: "1, Sagar, Shiv Shakti Nagar, Nirman Nagar, Jaipur",
      experience: "1+ years",
      description: "Optimize and manage Google Ads campaigns for maximum ROI."
    },
    {
      title: "Website Developer",
      type: "Full-time",
      location: "1, Sagar, Shiv Shakti Nagar, Nirman Nagar, Jaipur",
      experience: "1+ years",
      description: "Build responsive and high-performing websites for diverse clients."
    },
    {
      title: "Social Media Manager",
      type: "Full-time",
      location: "1, Sagar, Shiv Shakti Nagar, Nirman Nagar, Jaipur",
      experience: "1+ years",
      description: "Create and execute social media strategies to grow engagement."
    },
    {
      title: "Graphic Designer",
      type: "Full-time",
      location: "1, Sagar, Shiv Shakti Nagar, Nirman Nagar, Jaipur",
      experience: "1+ years",
      description: "Design stunning graphics and visual assets for campaigns."
    },
    {
      title: "Video Editor",
      type: "Full-time",
      location: "1, Sagar, Shiv Shakti Nagar, Nirman Nagar, Jaipur",
      experience: "1+ years",
      description: "Edit and produce high-quality videos for marketing and branding."
    },
    {
      title: "Content Writer",
      type: "Full-time",
      location: "1, Sagar, Shiv Shakti Nagar, Nirman Nagar, Jaipur",
      experience: "1+ years",
      description: "Write engaging and SEO-friendly content for diverse industries."
    },
    
];


  return (
   <>
   <Helmet>
        <title>Career Page | SEOcial Media Solutions</title>
        <meta
          name="description"
          content="Explore rewarding career opportunities at SEOcial Media. Join our passionate team and make an impact in the digital marketing industry."
        />
        <meta name="keywords" content="IT services, web development, SEO, digital marketing" />
        <link rel="canonical" href="https://seocialmedia.in/" />
        <meta property="og:title" content="Careers | SEOcial Media Solutions" />
        <meta property="og:description" content="Discover professional IT solutions tailored to your business needs." />
        <meta property="og:image" content="https://seocialmedia.in/images/og-home.jpg" />
        <meta property="og:url" content="https://seocialmedia.in/" />
        <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
    <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="px-4 py-16 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm rounded-full font-medium">
              Join Our Team
            </span>
            <h1 className="mt-6 pb-4 text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent md:text-6xl">
              Career Opportunities
            </h1>
            <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
              Join our innovative team and help shape the future of digital marketing. 
              We offer competitive benefits and a dynamic work environment.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {positions.map((position, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="relative p-6 bg-white rounded-xl shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-5 rounded-xl" />
                <div className="relative space-y-4">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-xl w-fit">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{position.title}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{position.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <GraduationCap className="w-4 h-4" />
                      <span>{position.experience}</span>
                    </div>
                  </div>
                  <p className="text-gray-600">{position.description}</p>
                  <motion.a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2"
                  >
                    Apply Now <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Why Join Us?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-2 rounded-lg">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-600">Career Growth</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-600">Learning</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-600">Benefits</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-lg">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-600">Flexibility</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
   </>
  );
};

export default CareerPage;