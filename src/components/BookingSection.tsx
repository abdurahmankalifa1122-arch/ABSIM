import React, { useState, useEffect } from 'react';
import { Send, AlertCircle, Phone, Copy, Check, MessageSquare } from 'lucide-react';
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
      `*Tagline:* WORKING HARD, SERVING WELL`,
      `---------------------------------`,
      `*Customer Name:* ${name.trim()}`,
      `*Contact Number:* ${phone.trim()}`,
      `*Requested Service:* ${service}`,
      vehicle.trim() ? `*Vehicle:* ${vehicle.trim()}` : null,
      preferredDate ? `*Preferred Date:* ${preferredDate}` : null,
      notes.trim() ? `*Special Notes:* ${notes.trim()}` : null,
      `---------------------------------`,
      `Facility: Behind AMCE, Megenagna, Addis Ababa`,
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
    <section id="booking" className="py-16 sm:py-20 bg-[#0B0D10] border-b border-[#232832]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#14171D] border border-[#8E1A27]/40 text-[11px] uppercase tracking-widest text-[#9CA3AF] font-semibold mb-2.5">
            <span>BOOK A SERVICE</span>
            <span className="text-neutral-600">·</span>
            <span className="text-white">DIRECT INQUIRY</span>
          </div>
          <h2 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold text-white leading-tight mb-2.5 font-heading">
            Schedule Your Visit.
          </h2>
          <p className="text-[14px] sm:text-[15px] text-[#9CA3AF] leading-relaxed">
            Select the service your vehicle requires. Submitting prepares an immediate WhatsApp message directly for our Addis Ababa team.
          </p>
        </div>

        <div className="bg-[#14171D] border border-[#232832] p-5 sm:p-8 rounded-md shadow-lg">
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="customer-name" className="block text-[12px] uppercase tracking-wider text-[#D1D5DB] mb-1.5 font-medium">
                  Your Name <span className="text-[#8E1A27]">*</span>
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
                  className={`w-full bg-[#0B0D10] border ${
                    errors.name ? 'border-red-500/80 focus:border-red-500' : 'border-[#2D333B] focus:border-[#8E1A27]'
                  } rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-[#9CA3AF]/40 focus:outline-none transition-colors`}
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="customer-phone" className="block text-[12px] uppercase tracking-wider text-[#D1D5DB] mb-1.5 font-medium">
                  Phone or WhatsApp <span className="text-[#8E1A27]">*</span>
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
                  className={`w-full bg-[#0B0D10] border ${
                    errors.phone ? 'border-red-500/80 focus:border-red-500' : 'border-[#2D333B] focus:border-[#8E1A27]'
                  } rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-[#9CA3AF]/40 focus:outline-none transition-colors`}
                  aria-invalid={errors.phone ? 'true' : 'false'}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="vehicle-info" className="block text-[12px] uppercase tracking-wider text-[#D1D5DB] mb-1.5 font-medium">
                  Vehicle Make & Model <span className="text-[#9CA3AF]/60 text-[10px]">(Optional)</span>
                </label>
                <input
                  id="vehicle-info"
                  type="text"
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  placeholder="e.g. Toyota Land Cruiser / Mercedes"
                  className="w-full bg-[#0B0D10] border border-[#2D333B] focus:border-[#8E1A27] rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-[#9CA3AF]/40 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="desired-service" className="block text-[12px] uppercase tracking-wider text-[#D1D5DB] mb-1.5 font-medium">
                  Desired Service <span className="text-[#8E1A27]">*</span>
                </label>
                <select
                  id="desired-service"
                  value={service}
                  onChange={(e) => {
                    setService(e.target.value);
                    if (onServiceChange) onServiceChange(e.target.value);
                  }}
                  className="w-full bg-[#0B0D10] border border-[#2D333B] focus:border-[#8E1A27] rounded-sm px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors cursor-pointer"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title} className="bg-[#14171D] text-white">
                      {s.code}. {s.title} ({s.estimatedDuration})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="preferred-date" className="block text-[12px] uppercase tracking-wider text-[#D1D5DB] mb-1.5 font-medium">
                  Preferred Date <span className="text-[#9CA3AF]/60 text-[10px]">(Optional)</span>
                </label>
                <input
                  id="preferred-date"
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-[#0B0D10] border border-[#2D333B] focus:border-[#8E1A27] rounded-sm px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col justify-end">
                <div className="p-2.5 bg-[#0B0D10] border border-[#232832] text-xs text-[#9CA3AF] rounded-sm">
                  <div className="text-white font-medium mb-0.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#8E1A27]" />
                    <span>Prefer to call directly?</span>
                  </div>
                  <div><a href={`tel:${BRAND_CONFIG.phoneRaw}`} className="text-[#8E1A27] font-semibold font-mono hover:underline">{BRAND_CONFIG.phoneDisplay}</a></div>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="additional-notes" className="block text-[12px] uppercase tracking-wider text-[#D1D5DB] mb-1.5 font-medium">
                Specific Concerns or Vehicle Notes <span className="text-[#9CA3AF]/60 text-[10px]">(Optional)</span>
              </label>
              <textarea
                id="additional-notes"
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Mention wheel vibration, pull to side, tyre noise, wash request, or timing..."
                className="w-full bg-[#0B0D10] border border-[#2D333B] focus:border-[#8E1A27] rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-[#9CA3AF]/40 focus:outline-none transition-colors resize-none"
              />
            </div>

            <div className="p-3 bg-[#0B0D10] border border-[#232832] rounded-sm text-xs text-[#9CA3AF] flex items-start gap-2.5">
              <MessageSquare className="w-4 h-4 text-[#8E1A27] shrink-0 mt-0.5" />
              <div>
                Clicking <span className="text-white font-semibold">REQUEST A BOOKING</span> opens WhatsApp with your pre-filled inquiry to ABSIM AUTOMOTIVE ({BRAND_CONFIG.phoneDisplay}). Walk-ins are also welcome behind AMCE, Megenagna.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-[#232832]">
              <button
                type="button"
                onClick={handleCopy}
                className="px-3.5 py-2.5 text-[12px] uppercase tracking-wider font-semibold text-[#D1D5DB] hover:text-white border border-[#2D333B] hover:border-[#8E1A27] transition-colors rounded-sm flex items-center justify-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Details Copied' : 'Copy Inquiry'}</span>
              </button>

              <button
                type="submit"
                className="px-6 py-2.5 text-[13px] uppercase tracking-wider font-semibold text-white bg-[#7A1420] hover:bg-[#8E1A27] border border-[#8E1A27] active:scale-[0.99] transition-all rounded-sm flex items-center justify-center gap-2 shadow-md shadow-[#6B111A]/20"
              >
                <Send className="w-3.5 h-3.5" />
                <span>REQUEST A BOOKING</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
