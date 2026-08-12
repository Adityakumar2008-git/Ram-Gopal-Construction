import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { COMPANY_INFO } from '../../constants/companyInfo';

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    serviceRequired: 'Residential Construction',
    location: '',
    budgetRange: 'Not Sure Yet',
    message: '',
    gotcha: '' // Hidden honeypot field for bot detection
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const checkRateLimit = () => {
    const now = Date.now();
    const COOLDOWN_MS = 15 * 1000; // 15 seconds cooldown between submissions
    const MAX_PER_HOUR = 10; // Max 10 submissions per hour per device

    const lastSubmission = localStorage.getItem('rgc_last_submission');
    if (lastSubmission && now - parseInt(lastSubmission, 10) < COOLDOWN_MS) {
      const remainingSec = Math.ceil((COOLDOWN_MS - (now - parseInt(lastSubmission, 10))) / 1000);
      return `Rate limit protection active. Please wait ${remainingSec} seconds before submitting another inquiry.`;
    }

    let history = [];
    try {
      history = JSON.parse(localStorage.getItem('rgc_submission_history') || '[]');
    } catch {
      history = [];
    }

    const ONE_HOUR = 60 * 60 * 1000;
    const recentHistory = history.filter(ts => now - ts < ONE_HOUR);

    if (recentHistory.length >= MAX_PER_HOUR) {
      return 'Maximum hourly submission limit reached for this session. Please call or WhatsApp us directly.';
    }

    return null;
  };

  const validateForm = () => {
    // Check Rate Limiting first
    const rateLimitError = checkRateLimit();
    if (rateLimitError) {
      return rateLimitError;
    }

    if (!formData.fullName || formData.fullName.trim().length < 3) {
      return 'Please enter your full name (minimum 3 characters).';
    }
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.mobileNumber || !phoneRegex.test(formData.mobileNumber.trim())) {
      return 'Please enter a valid 10-digit Indian mobile number.';
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      return 'Please enter a valid email address.';
    }
    if (!formData.serviceRequired) {
      return 'Please select a required service.';
    }
    if (!formData.location || formData.location.trim().length < 2) {
      return 'Please enter your property/project location.';
    }
    if (!formData.budgetRange) {
      return 'Please select your estimated budget range.';
    }
    if (!formData.message || formData.message.trim().length < 10) {
      return 'Please describe your requirement (minimum 10 characters).';
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot Bot Trap: If hidden bot field is filled, pretend success without calling API
    if (formData.gotcha && formData.gotcha.trim() !== '') {
      setStatus({ submitting: false, submitted: true, error: null });
      return;
    }

    const validationError = validateForm();
    if (validationError) {
      setStatus({ submitting: false, submitted: false, error: validationError });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const data = new FormData();
      data.append('Name', formData.fullName);
      data.append('Mobile Number', formData.mobileNumber);
      data.append('Email', formData.email);
      data.append('Service Required', formData.serviceRequired);
      data.append('Location', formData.location);
      data.append('Budget Range', formData.budgetRange);
      data.append('Message', formData.message);
      data.append('_replyto', formData.email);

      // Only append _gotcha if it actually has content (bot trapped)
      if (formData.gotcha && formData.gotcha.trim() !== '') {
        data.append('_gotcha', formData.gotcha);
      }

      const response = await fetch('https://formspree.io/f/xppadyga', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Record timestamp for rate limiting
        const now = Date.now();
        localStorage.setItem('rgc_last_submission', now.toString());
        
        let history = [];
        try {
          history = JSON.parse(localStorage.getItem('rgc_submission_history') || '[]');
        } catch {
          history = [];
        }
        history.push(now);
        localStorage.setItem('rgc_submission_history', JSON.stringify(history));

        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({
          fullName: '',
          mobileNumber: '',
          email: '',
          serviceRequired: 'Residential Construction',
          location: '',
          budgetRange: 'Not Sure Yet',
          message: '',
          gotcha: ''
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit form.');
      }
    } catch (err) {
      console.error('Formspree submission error:', err);
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to send inquiry. Please call or WhatsApp us directly.'
      });
    }
  };

  return (
    <section className="py-20 bg-white" id="contact-form-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="Get In Touch"
          title="Request a Free Quotation & Consultation"
          subtitle="Fill out the form below or reach out directly to discuss your construction, interior, flooring, or property requirements."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details Card */}
          <div className="lg:col-span-5 bg-[#1F2937] text-white p-8 rounded-2xl shadow-xl space-y-8 border-t-4 border-[#F4B400]">
            <div>
              <h3 className="text-2xl font-extrabold text-white">
                Ram Gopal Constructions
              </h3>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                Connect with our engineering and property consultation team today. We serve customers across Delhi NCR.
              </p>
            </div>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-800 rounded-xl text-[#F4B400] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs uppercase text-slate-400">Headquarters Address</h4>
                  <p className="text-slate-200 mt-0.5">{COMPANY_INFO.address.full}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-800 rounded-xl text-[#F4B400] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs uppercase text-slate-400">Phone Number</h4>
                  <p className="text-slate-200 mt-0.5">{COMPANY_INFO.contact.primaryPhone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-800 rounded-xl text-emerald-400 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs uppercase text-slate-400">Official Email</h4>
                  <p className="text-slate-200 mt-0.5">{COMPANY_INFO.contact.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-800 rounded-xl text-[#F4B400] flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs uppercase text-slate-400">Working Hours</h4>
                  <p className="text-slate-200 mt-0.5">{COMPANY_INFO.hours}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700">
              <p className="text-xs text-slate-400 font-medium">
                ⚡ Typical Inquiry Response Time: <span className="text-[#F4B400] font-semibold">Within 24 Hours</span>
              </p>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7 bg-[#F8F9FA] p-8 rounded-2xl border border-gray-200 shadow-sm">
            {status.submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#1F2937]">Thank You!</h3>
                <p className="text-slate-600 text-base max-w-md mx-auto">
                  Thank you for contacting Ram Gopal Constructions. Our team will review your requirement and contact you shortly.
                </p>
                <button
                  onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
                  className="px-6 py-2.5 bg-[#1F2937] text-white font-semibold rounded-xl text-sm hover:bg-slate-800 transition-colors"
                >
                  Submit Another Requirement
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Hidden Honeypot Trap for Bot & DDoS Protection */}
                <input
                  type="text"
                  name="gotcha"
                  value={formData.gotcha}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                
                {status.error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700 text-sm">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{status.error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      maxLength={100}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-slate-900 text-sm focus:border-[#F4B400] focus:ring-2 focus:ring-[#F4B400]/20 transition-all outline-none"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Mobile Number (10 Digits) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      placeholder="e.g. 9876543210"
                      required
                      maxLength={10}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-slate-900 text-sm focus:border-[#F4B400] focus:ring-2 focus:ring-[#F4B400]/20 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-slate-900 text-sm focus:border-[#F4B400] focus:ring-2 focus:ring-[#F4B400]/20 transition-all outline-none"
                    />
                  </div>

                  {/* Service Required */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Service Required <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-slate-900 text-sm focus:border-[#F4B400] focus:ring-2 focus:ring-[#F4B400]/20 transition-all outline-none"
                    >
                      <option value="Residential Construction">Residential Construction</option>
                      <option value="Commercial Construction">Commercial Construction</option>
                      <option value="Demolition Services">Building Demolition & Dismantling</option>
                      <option value="Interior Design">Interior Design</option>
                      <option value="Marble Installation">Marble Installation</option>
                      <option value="Tile Installation">Tile Installation</option>
                      <option value="Renovation">Renovation</option>
                      <option value="Property Buying">Property Buying Assistance</option>
                      <option value="Property Selling">Property Selling Assistance</option>
                      <option value="Property Renting">Property Renting Assistance</option>
                      <option value="Property Consultation">Property Consultation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Location */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Property / Project Location <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Sector 15, Faridabad"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-slate-900 text-sm focus:border-[#F4B400] focus:ring-2 focus:ring-[#F4B400]/20 transition-all outline-none"
                    />
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Estimated Budget <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-slate-900 text-sm focus:border-[#F4B400] focus:ring-2 focus:ring-[#F4B400]/20 transition-all outline-none"
                    >
                      <option value="Below ₹5 Lakh">Below ₹5 Lakh</option>
                      <option value="₹5–10 Lakh">₹5–10 Lakh</option>
                      <option value="₹10–25 Lakh">₹10–25 Lakh</option>
                      <option value="₹25–50 Lakh">₹25–50 Lakh</option>
                      <option value="Above ₹50 Lakh">Above ₹50 Lakh</option>
                      <option value="Not Sure Yet">Not Sure Yet</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Describe Your Requirement <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your construction, renovation, interior, or property requirement..."
                    required
                    maxLength={1000}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-slate-900 text-sm focus:border-[#F4B400] focus:ring-2 focus:ring-[#F4B400]/20 transition-all outline-none resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={status.submitting}
                  icon={Send}
                >
                  {status.submitting ? 'Submitting...' : 'Get Free Quote'}
                </Button>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
