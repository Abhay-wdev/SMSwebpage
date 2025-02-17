import React from 'react';
import { motion } from 'framer-motion';

const WebServicesSection = () => {
  const services = [
    {
      title: "Graphic Design Services",
      description: "Our designing philosophy blends customized web design, company recognition, and a consistent look and feel. Your user watches and feels about your brand. This feel is created via the design and layout of our expert graphic designing team."
    },
    {
      title: "Dynamic Website Design",
      description: "Identifying the challenges during any kind of designing process our talented team members provide apt solutions for your website. Technically, designing is the process of planning, conceptualizing, arranging content and installing graphics intended for sending messages to your customers."
    },
    {
      title: "Static Website Design",
      description: "Whether you are a start-up, an individual or a small business unit, you want people to feel connected with you when they visit your website. Providing long-term solutions, our expert team members design and create the best business solutions for your site."
    },
    {
      title: "Responsive Web Design",
      description: "If a website is unable to keep its users engaged, the website is of no use. Our expert web designers and developers create websites that deliver flexible and unmatched user experiences. Delivering the best business solutions our experts help you reach and remain in the memory of your users forever."
    },
    {
      title: "CMS Web Design",
      description: "Effective CMS web design is all about creating an interface that matches the client's requirements. Our creative designers present some of the best examples of such an interface. Being imaginative with their designs, they help provide the finest digital solutions for your business."
    },
    {
      title: "Corporate Website Design",
      description: "A website is not only insight but is also responsible for creating the reputation of a business. We aim at strengthening this character of your company. An exquisitely informative website can keep your customer engaged and help you earn their trust."
    },
    {
      title: "Blog Website Design",
      description: "While blogs across the web world help earn you traffic, the blog designs on your website hold equal importance. We aim to cater a separate blog section for your website that is equally interactive and engaging to your users."
    },
    {
      title: "Ecommerce Website Design",
      description: "Often there are several categories on an eCommerce site. Yet, keeping things as simple as possible is the key to a successful eCommerce website. For encouraging your customers to make use of your site, the call-to-action buttons have to be the easiest approach."
    },
    {
      title: "Creative Logo Design",
      description: "Logos are the main representation of your business. They are like the face of your business. If you have already thought of making a website, but haven't yet decided on your logo, we can help you fix that. Our team are experts in creating the most attractive designs that represent your thoughts and your business perfectly."
    },
    {
      title: "Template Design",
      description: "Different template designs can help your website reach an audience with different perceptions. Our expert team creates attractive and befitting templates for you to use across your websites."
    },
    {
      title: "Web Portal Design",
      description: "We ensure to make your web portal look more than just a website. A web portal has to be completely interactive to be able to deliver all the detailed information collected from all the diverse sources. We aim at creating a dedicated area for each information source that makes it easily accessible."
    }
  ];

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-10"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 pb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Our Web Design and Development Services
        </h2>
        <p className="text-xl text-gray-600">Comprehensive solutions for your digital presence</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5
                }
              }
            }}
            whileHover={{
              backgroundColor: "rgb(239 246 255)",
              transition: {
                duration: 0.3
              }
            }}
            className="bg-white p-8 text-justify rounded-xl shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {service.title}
            </h3>
            <p className="text-gray-600">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WebServicesSection;