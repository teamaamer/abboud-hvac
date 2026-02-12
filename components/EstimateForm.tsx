'use client';

import { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';
import { CONTACT_INFO, FORM_AUTO_CLOSE_DELAY } from '@/lib/constants';
import type { EstimateFormProps, FormData } from '@/lib/types';

export default function EstimateForm({ isModal = false, onClose }: EstimateFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceNeeded: '',
    message: '',
    contactMethod: 'call',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = useCallback((): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s()+-]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/submit-estimate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          serviceNeeded: '',
          message: '',
          contactMethod: 'call',
        });
        setErrors({});
        if (onClose) onClose();
      }, FORM_AUTO_CLOSE_DELAY);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please call us directly at ' + CONTACT_INFO.phone.display);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    if (errors[name as keyof FormData]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof FormData];
        return newErrors;
      });
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModal && onClose) {
        onClose();
      }
    };
    
    if (isModal) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isModal, onClose]);

  if (submitted) {
    return (
      <div className={`${isModal ? 'bg-white p-8 rounded-2xl' : 'bg-[var(--gray-50)] p-8 rounded-2xl'}`}>
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-[var(--dark-bg)] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
            Thanks! We&apos;ll reach out shortly.
          </h3>
          <p className="text-gray-600 mb-4">
            If urgent, call us now at{' '}
            <a href={CONTACT_INFO.phone.href} className="text-[var(--orange-500)] font-semibold hover:underline">
              {CONTACT_INFO.phone.display}
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${isModal ? 'bg-white p-8 rounded-2xl relative' : 'bg-[var(--gray-50)] p-8 rounded-2xl'}`}>
      {isModal && onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close form"
        >
          <X className="h-6 w-6" />
        </button>
      )}
      
      <h3 className="text-2xl font-bold text-[var(--dark-bg)] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
        Get a Free Estimate
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Row 1: Full Name | Email */}
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[var(--orange-500)] focus:border-transparent outline-none transition-all text-gray-900 ${
                errors.fullName ? 'border-red-500' : 'border-gray-300'
              }`}
              style={{ minHeight: '44px' }}
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            />
            {errors.fullName && (
              <p id="fullName-error" className="text-red-600 text-sm mt-1">
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email (Optional)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[var(--orange-500)] focus:border-transparent outline-none transition-all text-gray-900 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              style={{ minHeight: '44px' }}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-red-600 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Phone Number | Service Needed */}
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[var(--orange-500)] focus:border-transparent outline-none transition-all text-gray-900 ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              style={{ minHeight: '44px' }}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
            {errors.phone && (
              <p id="phone-error" className="text-red-600 text-sm mt-1">
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="serviceNeeded" className="block text-sm font-semibold text-gray-700 mb-2">
              Service Needed
            </label>
            <select
              id="serviceNeeded"
              name="serviceNeeded"
              value={formData.serviceNeeded}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--orange-500)] focus:border-transparent outline-none transition-all bg-white text-gray-900"
              style={{ minHeight: '44px' }}
            >
              <option value="">Select a service...</option>
              <option value="ac">AC Repair/Installation</option>
              <option value="heating">Heating Repair/Installation</option>
              <option value="maintenance">HVAC Maintenance</option>
              <option value="electrical">Electrical Service</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--orange-500)] focus:border-transparent outline-none transition-all resize-none text-gray-900"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Preferred Contact Method
          </label>
          <div className="flex gap-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="contactMethod"
                value="call"
                checked={formData.contactMethod === 'call'}
                onChange={handleChange}
                className="w-4 h-4 text-[var(--orange-500)] focus:ring-[var(--orange-500)]"
              />
              <span className="ml-2 text-gray-700">Call</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="contactMethod"
                value="text"
                checked={formData.contactMethod === 'text'}
                onChange={handleChange}
                className="w-4 h-4 text-[var(--orange-500)] focus:ring-[var(--orange-500)]"
              />
              <span className="ml-2 text-gray-700">WhatsApp</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-[var(--orange-500)] to-[var(--red-500)] hover:from-[var(--orange-600)] hover:to-[var(--red-600)] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          style={{ minHeight: '56px' }}
        >
          {isSubmitting ? 'Submitting...' : 'Request My Estimate'}
        </button>
      </form>
    </div>
  );
}
