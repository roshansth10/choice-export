'use client';

import { useState, useEffect } from 'react';

const policyContent = {
  privacy: {
    title: 'Privacy Policy',
    sections: [
      { heading: '1. Introduction', text: 'Choice International Export ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our logistics services in Nepal.' },
      { heading: '2. Information We Collect', text: 'We collect Personal Information (name, email, phone, company details), Business Information (company registration, PAN/VAT as per Nepal laws), Shipping Information (consignment details, customs documentation), and Technical Data (IP address, browser type).' },
      { heading: '3. Use of Information', text: 'We use your information to process and deliver shipments, comply with Nepal Customs regulations, provide customer support, send order updates, and improve our services.' },
      { heading: '4. Information Sharing', text: 'We may share information with customs authorities in Nepal and destination countries, international courier partners (DHL, FedEx, UPS), and government agencies as required by Nepal law.' },
      { heading: '5. Data Protection', text: 'In compliance with Nepal emerging data protection standards, we implement security measures. While Nepal does not have comprehensive data protection legislation yet, we follow international standards and guidelines.' },
      { heading: '6. Your Rights', text: 'Under Nepal consumer protection framework, you have the right to access your information, request corrections, request deletion (subject to legal retention), and opt-out of marketing communications.' },
      { heading: '7. Contact Us', text: 'For privacy concerns: Email choiceinternationalexport@gmail.com, Phone +977-9841052081, Address Nayabazar-16, Kathmandu, Nepal' }
    ]
  },
  terms: {
    title: 'Terms & Conditions',
    sections: [
      { heading: '1. Acceptance of Terms', text: 'By accessing and using Choice International Export services, you accept and agree to be bound by these terms governed by Nepal laws and regulations.' },
      { heading: '2. Scope of Services', text: 'We provide international cargo and freight forwarding, customs clearance in Nepal (Department of Customs), door-to-door delivery, packaging and documentation, and tracking support.' },
      { heading: '3. User Obligations', text: 'Customers must provide accurate shipping documentation info, comply with Nepal export regulations, not ship prohibited items, pay fees timely, and provide valid ID (Citizenship ID or Company Registration).' },
      { heading: '4. Prohibited Items', text: 'Cannot ship: narcotics, weapons, endangered wildlife products (CITES), counterfeit goods, hazardous materials without docs, and items prohibited by Nepal Ministry of Commerce.' },
      { heading: '5. Pricing and Payment', text: 'Prices in Nepalese Rupees (NPR), include VAT as per Nepal law. Customs duties at destination are consignee responsibility. Payment due before shipment unless credit terms agreed.' },
      { heading: '6. Liability and Disclaimers', text: 'Not liable for customs delays. Force majeure events excluded. Liability limited to declared value or shipping charges. Insurance recommended for high-value items.' },
      { heading: '7. Dispute Resolution', text: 'Disputes resolved through direct negotiation, then mediation in Kathmandu, finally through Nepal legal system.' },
      { heading: '8. Intellectual Property', text: 'All website content is our intellectual property. Reproduction prohibited under Nepal Copyright Act.' },
      { heading: '9. Governing Law', text: 'Governed by Nepal laws including Contract Act, Consumer Protection Act, and trade regulations.' }
    ]
  },
  shipping: {
    title: 'Shipping Policy',
    sections: [
      { heading: '1. Services Overview', text: 'Comprehensive international shipping from Nepal to worldwide. Partners: DHL, FedEx, UPS, DPD, EMS, TNT.' },
      { heading: '2. Documentation Required', text: 'Commercial Invoice with HS code, Packing List, Export Declaration (Department of Customs Nepal), Certificate of Origin, Company Registration copy, PAN/VAT documents.' },
      { heading: '3. Shipping Process', text: '1) Submit booking with details 2) Get quote 3) Confirm and provide docs 4) We arrange pickup in Nepal 5) Nepal Customs clearance 6) International transit with tracking 7) Destination delivery.' },
      { heading: '4. Delivery Times', text: 'India: 3-5 days, USA/UK/Europe: 5-7 days, Middle East: 4-6 days, Asia Pacific: 4-7 days, Other: 7-14 days. May vary due to customs.' },
      { heading: '5. Shipping Costs', text: 'Based on actual/volumetric weight (whichever higher). Fuel surcharges apply. Duties/taxes at destination not included. Insurance available at extra cost.' },
      { heading: '6. Customs and Taxes', text: 'Most items exempt from Nepal export duty. Import duties at destination vary by country. Recipients pay import charges. We provide value declaration for customs.' },
      { heading: '7. Packaging Guidelines', text: 'Use sturdy boxes with cushioning. Mark fragile items clearly. Proper sealing. Include packing list inside and outside. Remove old labels.' },
      { heading: '8. Tracking', text: 'Tracking number within 24 hours. Email/SMS updates. Online carrier tracking. Dedicated support for inquiries.' },
      { heading: '9. Claims', text: 'Report within 30 days of delivery. Photo evidence for damage. Compensation based on declared value. Insurance claims in 15 working days.' },
      { heading: '10. Service Areas', text: 'Shipping from Nepal to 220+ countries: Asia (India, China, Japan, Korea, Thailand, Singapore, Malaysia, Dubai), Europe (UK, Germany, France, Italy, Spain, Netherlands), Americas (USA, Canada, Brazil, Mexico), Oceania (Australia, New Zealand), Africa (South Africa, UAE, Saudi Arabia).' },
      { heading: '11. Contact', text: 'Email: choiceinternationalexport@gmail.com, Phone: +977-9841052081, Address: Nayabazar-16, Kathmandu, Nepal' }
    ]
  }
};

export default function PolicyModal({ isOpen, onClose, policyType }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!isOpen && !isVisible) return null;

  const policy = policyContent[policyType];

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose}></div>
      <div className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden transition-transform duration-300 ${isVisible ? 'scale-100' : 'scale-95'}`}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-primary-600 to-accent-600">
          <h2 className="text-xl font-bold text-white">{policy.title}</h2>
          <button onClick={handleClose} className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          {policy.sections.map((section, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-2">{section.heading}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">© {new Date().getFullYear()} Choice International Export. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
