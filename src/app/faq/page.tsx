'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'What are your shipping options?',
    a: 'We offer Standard (3-5 business days, free on orders over €150) and Express (1-2 business days, €12) shipping across Europe. International shipping to select countries is available at checkout.',
  },
  {
    q: 'Do you ship internationally?',
    a: 'Yes. We currently ship to the EU, UK, US, Canada, Australia, Japan, South Korea, and Singapore. Customs duties and taxes are the responsibility of the recipient. We are expanding to more countries soon.',
  },
  {
    q: 'What is your return policy?',
    a: 'We accept returns within 30 days of delivery for unworn items in their original condition with all tags attached. Return shipping within the EU is free. Refunds are processed within 5-7 business days after we receive the return.',
  },
  {
    q: 'How do I find my size?',
    a: 'Each product page includes detailed measurements. Our sizes generally follow European sizing (XS=34, S=36, M=38, L=40, XL=42). When in doubt, we recommend sizing up — our aesthetic favours a slightly relaxed silhouette.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept Visa, Mastercard, American Express, PayPal, Apple Pay, and Google Pay. All transactions are securely processed through Stripe.',
  },
  {
    q: 'How can I track my order?',
    a: 'Once your order ships, you will receive a confirmation email with a tracking number. You can also track your order by logging into your account on our website.',
  },
  {
    q: 'Are your products sustainable?',
    a: 'Sustainability is core to our practice. We use GOTS-certified organic cotton, OEKO-TEX standard materials, and vegetable-tanned leather. Our production partners are audited for fair labour practices. We produce in small batches to minimise waste.',
  },
  {
    q: 'Do you offer gift cards?',
    a: 'Yes. Digital gift cards are available in denominations of €50, €100, €200, and €500. They are delivered via email and never expire.',
  },
  {
    q: 'How should I care for my AMILOU pieces?',
    a: 'Care instructions are included on each product page and on the garment label. As a general rule: wash cold, air dry when possible, and store knitwear folded. Our leather goods benefit from occasional conditioning.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-light tracking-widest uppercase mb-4 text-center">
        Frequently Asked Questions
      </h1>
      <p className="text-gray-500 font-light text-center mb-16 max-w-xl mx-auto">
        Find answers to common questions about orders, shipping, returns, and more.
      </p>

      <div className="space-y-0">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-brand-gray">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex justify-between items-center w-full py-5 text-left hover:text-brand transition-colors"
              aria-expanded={openIndex === i}
            >
              <span className="font-medium text-sm pr-4">{faq.q}</span>
              <motion.span
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                <ChevronDown className="w-4 h-4" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-sm text-gray-600 font-light leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
