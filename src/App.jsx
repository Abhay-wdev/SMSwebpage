import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import MainLayout from './layouts/MainLayout';
import LoadingSpinner from './components/LoadingSpinner';
import GoogleBusinessServices from './components/GoogleBusinessServices';
import GoogleServices from './components/GoogleServices';
import NeonCursor from './components/NeonCursor';
import BlogPageNew from './components/BlogPageNew';
import BlogDetailPage from './components/BlogsDetailPage';
import SeoAjmer from './components/SeoAjmer';
import VideoEditingAjmer from './components/VideoEditingAjmer';
import WebDevelopmentAjmer from './components/WebDevelopmentAjmer';
import SocialMediaServicesAjmer from './components/SocialMediaServicesAjmer';
import ContentWritingServicesAjmer from './components/ContentWritingServicesAjmer';
import GoogleServicesAjmer from './components/GoogleServicesAjmer';
import SeoAjmerpage from './components/SeoAjmerpage';

// Lazy load components for better performance
const Home = lazy(() => import('./components/Home'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const WebDevelopment = lazy(() => import('./components/WebDevelopment'));
const Seo = lazy(() => import('./components/Seo'));
const GoogleAdsServices = lazy(() => import('./components/GoogleAds'));
const ContentWritingServices = lazy(() => import('./components/ContentWritingServices'));
const SocialMediaServices = lazy(() => import('./components/SocialMediaServices'));
const ContactUs = lazy(() => import('./components/ContactUs'));
const CareerPage = lazy(() => import('./components/CareerPage'));
// const NewYearOffer = lazy(() => import('./components/NewYearOffer'));


const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy')); // Add this line
const VideoEditing = lazy (() => import('./components/VideoEditing'))
function App() {
  return (
    <Router>
      <NeonCursor />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route element={<MainLayout />}>
            {/* Public routes */}
            <Route
              path="/"
              element={
                <>
                  {/* <NewYearOffer videoUrl="images/offer.mp4" /> */}
                  <Home />
                </>
              }
            />
            <Route path="/digital-marketing-company-jaipur" element={<AboutUs />} />
            <Route path="/web-development-company-jaipur" element={<WebDevelopment />} />
            <Route path="/seo-company-jaipur" element={<Seo />} />
            <Route path="/google-ads-company-jaipur" element={<GoogleAdsServices />} />
            <Route path="/content-writing-company-jaipur" element={<ContentWritingServices />} />
            <Route path="/social-media-marketing-jaipur" element={<SocialMediaServices />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/google-business-profile-services-jaipur" element={<GoogleBusinessServices />} />
            <Route path="/lead-generation-company-jaipur" element={<GoogleServices />} />
            <Route path="/blog" element={<BlogPageNew />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* Add this line */}
            <Route path="/video-editing-company-jaipur" element={<VideoEditing />} /> {/* Add this line */}
            
            <Route path="/social-media-company-ajmer" element={<SeoAjmer/>} />
            <Route path="/social-media-marketing-company-ajmer" element={ <SocialMediaServicesAjmer/>} />
            <Route path="/video-editing-company-ajmer" element={<VideoEditingAjmer/>} />
            <Route path="/web-development-company-ajmer" element={<WebDevelopmentAjmer/>} />
            
            <Route path="/seo-company-ajmer" element={<SeoAjmerpage/>} />
            <Route path="/content-writing-company-ajmer" element={ <ContentWritingServicesAjmer/>} />
            <Route path="/lead-generation-company-ajmer" element={ <GoogleServicesAjmer/>} />
             {/* Add this line */}


            {/* Handle 404 */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;