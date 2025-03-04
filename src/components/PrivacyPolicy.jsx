import React from "react";
import {
  ShieldCheck,
  Lock,
  User,
  Globe,
  Mail,
  Shield,
  AlertCircle,
} from "lucide-react";

const PrivacyPolicy = () => {
  // Calculate effective date (2-3 days before today)
  const effectiveDate = new Date();
  effectiveDate.setDate(effectiveDate.getDate() - 2); // 2 days before
  const formattedDate = effectiveDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
          <div className="flex items-center space-x-4">
            <ShieldCheck className="w-12 h-12" />
            <div>
              <h1 className="text-4xl font-bold">Privacy Policy</h1>
              <p className="text-lg mt-2">
                Effective Date: {formattedDate}
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 text-gray-700">
          <Section
            icon={<Lock className="w-6 h-6 text-blue-600" />}
            title="Our Commitment to Your Privacy"
          >
            <p>
              At <strong>SEOcial Media Solutions</strong>, we are committed to
              protecting your privacy. As a digital marketing agency, we
              prioritize transparency and want you to know how we handle your
              data.
            </p>
          </Section>

          <Section
            icon={<User className="w-6 h-6 text-purple-600" />}
            title="Data Collection Through Enquiry Forms"
          >
            <p>
              When you fill out an enquiry form on our website, we collect the
              following information to respond to your queries and provide our
              services:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li><strong>Name</strong>: To address you personally.</li>
              <li><strong>Email Address</strong>: To respond to your inquiry.</li>
              <li><strong>Phone Number</strong>: To contact you if needed.</li>
              <li><strong>Message</strong>: To understand your requirements.</li>
            </ul>
            <p className="mt-4">
              We use this information solely for the purpose of communicating
              with you and providing the services you requested. We do not share
              this information with third parties unless required by law or with
              your explicit consent.
            </p>
          </Section>

          <Section
            icon={<Globe className="w-6 h-6 text-green-600" />}
            title="Third-Party Services"
          >
            <p>
              While we do not share your data, our website may link to third-party
              services (e.g., social media platforms). These services have their
              own privacy policies, and we encourage you to review them.
            </p>
          </Section>

          <Section
            icon={<Shield className="w-6 h-6 text-orange-600" />}
            title="Data Security"
          >
            <p>
              We take data security seriously and implement measures to protect
              your information from unauthorized access, alteration, or
              destruction.
            </p>
          </Section>

          <Section
            icon={<AlertCircle className="w-6 h-6 text-red-600" />}
            title="Your Rights"
          >
            <p>
              You have the right to:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Access your personal data</li>
              <li>Request correction or deletion of your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </Section>

          <Section
            icon={<Mail className="w-6 h-6 text-indigo-600" />}
            title="Contact Us"
          >
            <p>
              If you have any questions about this privacy policy or our
              practices, feel free to reach out to us at:
            </p>
            <p className="mt-2 font-semibold">
              <a
                href="mailto:info@seocialmedia.in"
                className="text-blue-600 hover:underline"
              >
                info@seocialmedia.in
              </a>
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
};

// Reusable Section Component
const Section = ({ icon, title, children }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center space-x-3 mb-4">
        {icon}
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <div className="pl-9">{children}</div>
    </div>
  );
};

export default PrivacyPolicy;