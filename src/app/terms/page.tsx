import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'AMILOU STUDIO Terms of Service — terms governing your use of our website and purchases.',
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-light tracking-widest uppercase mb-4">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-12">Last updated: February 2026</p>

      <div className="prose-sm space-y-8 text-gray-600 font-light leading-relaxed">
        <section>
          <h2 className="text-lg font-medium text-brand uppercase tracking-wider mb-3">1. General</h2>
          <p>These Terms of Service govern your use of the AMILOU STUDIO website (amiloustudio.com) and any purchases made through it. By using our site, you agree to these terms in full. If you do not agree, please refrain from using the website.</p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-brand uppercase tracking-wider mb-3">2. Orders & Pricing</h2>
          <p>All prices are displayed in EUR unless otherwise indicated. Prices include VAT where applicable. We reserve the right to modify prices at any time without prior notice. An order constitutes a binding purchase agreement once you receive an order confirmation email.</p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-brand uppercase tracking-wider mb-3">3. Payment</h2>
          <p>Payment is processed at the time of order via Stripe. We accept Visa, Mastercard, American Express, PayPal, Apple Pay, and Google Pay. Your payment information is encrypted and never stored on our servers.</p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-brand uppercase tracking-wider mb-3">4. Shipping</h2>
          <p>Standard shipping within the EU takes 3-5 business days. Express shipping (1-2 business days) is available for €12. Free standard shipping applies to orders over €150. International orders may be subject to customs duties and taxes.</p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-brand uppercase tracking-wider mb-3">5. Returns & Exchanges</h2>
          <p>Items may be returned within 30 days of delivery in their original, unworn condition with all tags attached. Return shipping within the EU is free. Refunds are credited to the original payment method within 5-7 business days of receiving the return. Sale items are final sale and cannot be returned.</p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-brand uppercase tracking-wider mb-3">6. Intellectual Property</h2>
          <p>All content on this website — including text, images, logos, and design — is the property of AMILOU STUDIO and is protected by international copyright law. Reproduction without written consent is prohibited.</p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-brand uppercase tracking-wider mb-3">7. Limitation of Liability</h2>
          <p>AMILOU STUDIO shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or the purchase of products. Our total liability shall not exceed the amount paid for the relevant order.</p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-brand uppercase tracking-wider mb-3">8. Governing Law</h2>
          <p>These terms are governed by the laws of France. Any disputes shall be resolved in the courts of Paris, France.</p>
        </section>
      </div>
    </div>
  );
}
