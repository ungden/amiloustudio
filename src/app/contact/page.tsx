import { Metadata } from 'next';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with AMILOU STUDIO. Visit our showroom in Paris or reach us by email.',
};

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-light tracking-widest uppercase mb-4 text-center">
        Contact Us
      </h1>
      <p className="text-gray-500 font-light text-center mb-16 max-w-xl mx-auto">
        We would love to hear from you. Reach out with any questions, feedback, or press inquiries.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <div>
          <h2 className="text-lg font-medium tracking-wider uppercase mb-8">Send a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                id="name"
                type="text"
                className="w-full border-b border-brand-gray py-2 text-sm bg-transparent focus:outline-none focus:border-brand transition-colors"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                id="email"
                type="email"
                className="w-full border-b border-brand-gray py-2 text-sm bg-transparent focus:outline-none focus:border-brand transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
              <select
                id="subject"
                className="w-full border-b border-brand-gray py-2 text-sm bg-transparent focus:outline-none focus:border-brand transition-colors"
              >
                <option>General Enquiry</option>
                <option>Order Support</option>
                <option>Returns & Exchanges</option>
                <option>Press & Media</option>
                <option>Wholesale</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full border border-brand-gray p-3 text-sm bg-transparent focus:outline-none focus:border-brand transition-colors resize-none"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              className="bg-brand text-white uppercase tracking-widest py-4 px-8 text-sm hover:bg-brand-dark transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-medium tracking-wider uppercase mb-8">Visit Us</h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-brand-accent" />
              <div>
                <p className="font-medium text-sm mb-1">Paris Showroom</p>
                <p className="text-sm text-gray-600 font-light">
                  18 Rue de Saintonge<br />
                  75003 Paris, France
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-brand-accent" />
              <div>
                <p className="font-medium text-sm mb-1">Email</p>
                <p className="text-sm text-gray-600 font-light">hello@amiloustudio.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-brand-accent" />
              <div>
                <p className="font-medium text-sm mb-1">Phone</p>
                <p className="text-sm text-gray-600 font-light">+33 1 42 77 88 99</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-5 h-5 mt-0.5 flex-shrink-0 text-brand-accent" />
              <div>
                <p className="font-medium text-sm mb-1">Showroom Hours</p>
                <p className="text-sm text-gray-600 font-light">
                  Monday – Friday: 10:00 – 19:00<br />
                  Saturday: 11:00 – 18:00<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
