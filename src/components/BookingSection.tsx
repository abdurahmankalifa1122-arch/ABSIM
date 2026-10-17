import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, Copy, Check, MessageSquare } from 'lucide-react';
import { BRAND_CONFIG, SERVICES } from '../config/brand';

interface BookingSectionProps {
  selectedServiceTitle?: string;
  onServiceChange?: (title: string) => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  selectedServiceTitle = '',
  onServiceChange,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [service, setService] = useState(selectedServiceTitle || SERVICES[0].title);
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [copied, setCopied] = useState(false);
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);

  useEffect(() => {
    if (selectedServiceTitle) {
      setService(selectedServiceTitle);
    }
  }, [selectedServiceTitle]);

  const validate = () => {
    const newErrors: { name?: string; phone?: string } = {};
    if (!name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }
    const cleanPhone = phone.replace(/[^0-9+]/g, '');
    if (!cleanPhone || cleanPhone.length < 8) {
      newErrors.phone = 'Please provide a valid phone or WhatsApp number.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateWhatsAppMessage = () => {
    const lines = [
      `*ABSIM AUTOMOTIVE — SERVICE INQUIRY*`,
      `---------------------------------`,
      `*Customer Name:* ${name.trim()}`,
      `*Contact Number:* ${phone.trim()}`,
      `*Requested Service:* ${service}`,
      vehicle.trim() ? `*Vehicle:* ${vehicle.trim()}` : null,
      preferredDate ? `*Preferred Date:* ${preferredDate}` : null,
      notes.trim() ? `*Special Notes:* ${notes.trim()}` : null,
      `---------------------------------`,
      `Inquiry generated via ABSIM Automotive website.`,
    ].filter(Boolean);

    return lines.join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasAttemptedSubmit(true);

    if (!validate()) {
      return;
    }

    const message = generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab / app
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopy = () => {
    if (!name.trim() || !phone.trim()) {
      validate();
      return;
    }
    const message = generateWhatsAppMessage();
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="booking" className="py-24 sm:py-32 bg-[#0E1115] border-t border-[#1F262D]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="text-xs tracking-widest text-[#BCA77A] uppercase font-semibold mb-3">
            DIRECT INQUIRY
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F4F0] leading-tight mb-4 font-serif-brand">
            YOUR NEXT CLEAN STARTS HERE.
          </h2>
          <p className="text-base text-[#C4C9CE] leading-relaxed">
            Tell us what your vehicle needs, and get in touch to arrange your service.
            Submitting this form prepares your inquiry directly for WhatsApp communication with our team.
          </p>
        </div>

        {/* Booking Form Box */}
        <div className="bg-[#15191D] border border-[#242A30] p-6 sm:p-10 rounded-sm shadow-xl">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Customer Name */}
              <div>
                <label htmlFor="customer-name" className="block text-xs uppercase tracking-wider text-[#C4C9CE] mb-2 font-medium">
                  Your Name <span className="text-[#BCA77A]">*</span>
                </label>
                <input
                  id="customer-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (hasAttemptedSubmit && errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  placeholder="e.g. Abebe Kebede"
                  className={`w-full bg-[#090B0D] border ${
                    errors.name ? 'border-red-500/80 focus:border-red-500' : 'border-[#242A30] focus:border-[#BCA77A]'
                  } rounded-sm px-4 py-3 text-sm text-[#F5F4F0] placeholder-[#C4C9CE]/40 focus:outline-none transition-colors`}
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Phone or WhatsApp */}
              <div>
                <label htmlFor="customer-phone" className="block text-xs uppercase tracking-wider text-[#C4C9CE] mb-2 font-medium">
                  Phone or WhatsApp <span className="text-[#BCA77A]">*</span>
                </label>
                <input
                  id="customer-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (hasAttemptedSubmit && errors.phone) setErrors({ ...errors, phone: undefined });
                  }}
                  placeholder="e.g. +251 91 123 4567"
                  className={`w-full bg-[#090B0D] border ${
                    errors.phone ? 'border-red-500/80 focus:border-red-500' : 'border-[#242A30] focus:border-[#BCA77A]'
                  } rounded-sm px-4 py-3 text-sm text-[#F5F4F0] placeholder-[#C4C9CE]/40 focus:outline-none transition-colors`}
                  aria-invalid={errors.phone ? 'true' : 'false'}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Vehicle Make and Model */}
              <div>
                <label htmlFor="vehicle-info" className="block text-xs uppercase tracking-wider text-[#C4C9CE] mb-2 font-medium">
                  Vehicle Make & Model <span className="text-[#C4C9CE]/50 text-[10px]">(Optional)</span>
                </label>
                <input
                  id="vehicle-info"
                  type="text"
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  placeholder="e.g. Toyota Land Cruiser / Mercedes E-Class"
                  className="w-full bg-[#090B0D] border border-[#242A30] focus:border-[#BCA77A] rounded-sm px-4 py-3 text-sm text-[#F5F4F0] placeholder-[#C4C9CE]/40 focus:outline-none transition-colors"
                />
              </div>

              {/* Desired Service */}
              <div>
                <label htmlFor="desired-service" className="block text-xs uppercase tracking-wider text-[#C4C9CE] mb-2 font-medium">
                  Desired Service <span className="text-[#BCA77A]">*</span>
                </label>
                <select
                  id="desired-service"
                  value={service}
                  onChange={(e) => {
                    setService(e.target.value);
                    if (onServiceChange) onServiceChange(e.target.value);
                  }}
                  className="w-full bg-[#090B0D] border border-[#242A30] focus:border-[#BCA77A] rounded-sm px-4 py-3 text-sm text-[#F5F4F0] focus:outline-none transition-colors cursor-pointer"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title} className="bg-[#15191D] text-[#F5F4F0]">
                      {s.code}. {s.title} ({s.estimatedDuration})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Preferred Date */}
              <div>
                <label htmlFor="preferred-date" className="block text-xs uppercase tracking-wider text-[#C4C9CE] mb-2 font-medium">
                  Preferred Date <span className="text-[#C4C9CE]/50 text-[10px]">(Optional)</span>
                </label>
                <input
                  id="preferred-date"
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-[#090B0D] border border-[#242A30] focus:border-[#BCA77A] rounded-sm px-4 py-3 text-sm text-[#F5F4F0] focus:outline-none transition-colors"
                />
              </div>

              {/* Call Note */}
              <div className="flex flex-col justify-end">
                <div className="p-3 bg-[#090B0D] border border-[#242A30] text-xs text-[#C4C9CE]">
                  <div className="text-[#BCA77A] font-medium mb-1">Direct Assistance</div>
                  <div>Prefer to speak directly? Call <a href={`tel:${BRAND_CONFIG.phoneRaw}`} className="text-[#F5F4F0] underline font-mono">{BRAND_CONFIG.phoneDisplay}</a></div>
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label htmlFor="additional-notes" className="block text-xs uppercase tracking-wider text-[#C4C9CE] mb-2 font-medium">
                Additional Notes or Specific Requests <span className="text-[#C4C9CE]/50 text-[10px]">(Optional)</span>
              </label>
              <textarea
                id="additional-notes"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Mention any stains, pet hair, paint scratch concerns, or timing preferences..."
                className="w-full bg-[#090B0D] border border-[#242A30] focus:border-[#BCA77A] rounded-sm px-4 py-3 text-sm text-[#F5F4F0] placeholder-[#C4C9CE]/40 focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Transparent Action Notice */}
            <div className="p-4 bg-[#090B0D] border border-[#242A30] rounded-sm text-xs text-[#C4C9CE] flex items-start gap-3">
              <MessageSquare className="w-4 h-4 text-[#BCA77A] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#F5F4F0] block mb-0.5">How this booking works:</strong>
                Clicking <span className="text-[#BCA77A]">REQUEST A BOOKING</span> will open WhatsApp on your phone or computer with your message ready to send to ABSIM Automotive at <span className="font-mono text-[#F5F4F0]">{BRAND_CONFIG.phoneDisplay}</span>. No prepayment is required.
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-[#242A30]">
              <button
                type="button"
                onClick={handleCopy}
                className="px-4 py-3 text-xs uppercase tracking-wider font-semibold text-[#C4C9CE] hover:text-[#F5F4F0] border border-[#242A30] hover:border-[#C4C9CE]/40 transition-colors rounded-sm flex items-center justify-center gap-2"
                title="Copy inquiry text to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Details Copied' : 'Copy Inquiry Text'}</span>
              </button>

              <button
                type="submit"
                className="px-8 py-3.5 text-xs sm:text-sm uppercase tracking-wider font-semibold text-[#090B0D] bg-[#BCA77A] hover:bg-[#d1bd93] active:scale-[0.99] transition-all rounded-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>REQUEST A BOOKING</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
