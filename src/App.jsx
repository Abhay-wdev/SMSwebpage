import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import MainLayout from './layouts/MainLayout';
import LoadingSpinner from './components/LoadingSpinner';
import GoogleBusinessServices from './components/GoogleBusinessServices';
import GoogleServices from './components/GoogleServices';
import NeonCursor from './components/NeonCursor';

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
const BlogPage = lazy(() => import('./components/BlogPage'));
const BlogPost = lazy(() => import('./components/BlogPost'));
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
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/seo" element={<Seo />} />
            <Route path="/google-ads" element={<GoogleAdsServices />} />
            <Route path="/content" element={<ContentWritingServices />} />
            <Route path="/social-media-marketing" element={<SocialMediaServices />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/google-business-profile" element={<GoogleBusinessServices />} />
            <Route path="/google" element={<GoogleServices />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/blog/category/:category" element={<BlogPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* Add this line */}
            <Route path="/video-editing" element={<VideoEditing />} /> {/* Add this line */}

            {/* Handle 404 */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;