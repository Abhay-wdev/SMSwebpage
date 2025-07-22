import React from 'react'
import SEOLandingSection from './SEOLandingSection'
import BoostTrafficSection from './BoostTrafficSection'
import HoverRevealCards from './HoverRevealCards'
import TrustedByCompanies from './TrustedByCompanies'
import Masonry from './Masonry'
import FAQAccordion from './FAQAccordion'
import WorkingProcess from './WorkingProcess'
import WorkingProcessimg from './WorkingProcessimg'
import FAQAccordionnew from './FAQAccordionnew'
import { Helmet } from 'react-helmet';
import Reviews from './Reviews'

function SeoAjmer() {


  const faqItemsAjmer = [
    {
      question: "Do you provide digital marketing services specifically in Ajmer?",
      answer: "Yes, we specialize in providing SEO, social media marketing, PPC advertising, and website design services for businesses in Ajmer. Our local expertise helps your business rank higher in Ajmer-specific searches and attract more local customers."
    },
    {
      question: "How can SEO help my business in Ajmer?",
      answer: "SEO improves your website’s visibility on search engines when people in Ajmer search for your services. This drives more targeted traffic to your site, increasing calls, visits, and sales from local customers."
    },
    {
      question: "Can you manage social media for my Ajmer business?",
      answer: "Absolutely. We create and manage social media campaigns tailored to Ajmer’s audience, increasing your brand awareness, customer engagement, and trust among local followers."
    },
    {
      question: "Do you offer PPC advertising for Ajmer businesses?",
      answer: "Yes, we run highly targeted PPC ads on Google and social media to reach potential customers in Ajmer. Our strategies ensure you get the maximum ROI by showing ads only to people looking for your services in your area."
    },
    {
      question: "How long will it take to see digital marketing results for my Ajmer business?",
      answer: "SEO results typically take 3-6 months, while PPC ads and social media campaigns can start generating leads within days. We provide a clear timeline and regular reports to track your progress."
    },
    {
      question: "Why should I choose your agency for digital marketing in Ajmer?",
      answer: "We understand the local market dynamics of Ajmer and create customized digital marketing strategies that help you stand out among competitors, attract more local customers, and grow your revenue."
    },
    {
      question: "Do you build websites for Ajmer businesses?",
      answer: "Yes, we design fast, SEO-friendly, and mobile-responsive websites that represent your brand professionally and help you convert visitors into customers in Ajmer."
    },
    {
      question: "Can I track the performance of my digital marketing campaigns?",
      answer: "Definitely. We provide monthly performance reports with detailed insights into website traffic, keyword rankings, social media growth, and ad performance so you can make informed decisions."
    },
    {
      question: "Is it affordable for small businesses in Ajmer?",
      answer: "We offer flexible packages suitable for startups and small businesses in Ajmer to help you grow online without straining your budget."
    },
    {
      question: "How do I get started with your digital marketing services in Ajmer?",
      answer: "You can contact us via phone, WhatsApp, or our website form. We will discuss your goals, analyze your current online presence, and propose a strategy tailored to your business in Ajmer."
    }
  ];
  
  

  return (
    <div >
   <Helmet>
  <title>
    Top Social Media Marketing Company in Ajmer | Boost Your Brand
  </title>

  <meta
    name="description"
    content="Elevate your brand with the top social media marketing company in Ajmer. Expert social media management, targeted Facebook & Instagram ads, and digital growth strategies tailored for your business."
  />
  <meta
    name="keywords"
    content="social media marketing Ajmer, social media company Ajmer, digital marketing Ajmer, Instagram marketing Ajmer, Facebook ads Ajmer, best marketing agency Ajmer, social media management Ajmer, online marketing Ajmer"
  />
  <link
    rel="canonical"
    href="https://sm-swebpage.vercel.app/social-media-company-ajmer"
  />

  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Best Social Media Marketing Company in Ajmer | Boost Your Business"
  />
  <meta
    property="og:description"
    content="Grow your business online with Ajmer's leading social media marketing experts. We offer strategic social media management, ads, and content marketing solutions for maximum impact."
  />
  <meta
    property="og:image"
    content="https://sm-swebpage.vercel.app/images/social-media-ajmer-og.jpg"
  />
  <meta
    property="og:url"
    content="https://sm-swebpage.vercel.app/social-media-company-ajmer"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Ajmer's Best Social Media Marketing Company | Boost Your Brand"
  />
  <meta
    name="twitter:description"
    content="Drive business growth with expert social media marketing in Ajmer. Instagram, Facebook, and strategic content marketing to build your brand online."
  />
  <meta
    name="twitter:image"
    content="https://sm-swebpage.vercel.app/images/social-media-ajmer-og.jpg"
  />
</Helmet>


       
      <center>
      <SEOLandingSection/>
  <BoostTrafficSection/>
  <WorkingProcessimg/>
  <WorkingProcess/>
   
  
  <FAQAccordionnew content={faqItemsAjmer} title="Ajmer Digital Marketing" subtitle="FAQs" />

 
 
  </center> 
  </div>
   
  )
}

export default SeoAjmer
