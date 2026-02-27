import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'AMILOU STUDIO Privacy Policy — how we collect, use, and protect your personal data.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-light tracking-widest uppercase mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-12">Last updated: February 2026</p>

      <div className="prose-sm space-y-8 text-gray-600 font-light leading-relaxed">
        <section>
          <h2 className="text-lg font-medium text-brand uppercase tracking-wider mb-3">1. Information We Collect</h2>
          <p>When you visit our website or make a purchase, we collect certain personal information including your name, email address, shipping address, payment details (processed securely through Stripe), and browsing behaviour through cookies.</p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-brand uppercase tracking-wider mb-3">2. How We Use Your Data</h2>
          <p>We use your data to: process and fulfil orders, communicate about your purchases, send marketing communications (with your consent), improve our website and services, and comply with legal obligations. We will never sell your personal data to third parties.</p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-brand uppercase tracking-wider mb-3">3. Cookies</h2>
          <p>We use essential cookies for site functionality (cart, session, currency preference) and analytics cookies (Google Analytics) to understand how visitors use our site. You may disable non-essential cookies through your browser settings.</p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-brand uppercase tracking-wider mb-3">4. Third-Party Services</h2>
          <p>We share data with trusted partners solely for order fulfilment: Stripe (payments), our logistics partners (shipping), and Vercel (hosting). Each partner is contractually obligated to protect your data in accordance with GDPR.</p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-brand uppercase tracking-wider mb-3">5. Data Retention</h2>
          <p>We retain your personal data for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Order data is retained for 7 years for accounting purposes. You may request deletion of your account at any time.</p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-brand uppercase tracking-wider mb-3">6. Your Rights</h2>
          <p>Under GDPR and applicable data protection laws, you have the right to: access your personal data, request correction or deletion, restrict processing, data portability, and withdraw consent. To exercise these rights, contact us at privacy@amiloustudio.com.</p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-brand uppercase tracking-wider mb-3">7. Contact</h2>
          <p>For any privacy-related questions, please contact our Data Protection Officer at privacy@amiloustudio.com or write to: AMILOU STUDIO, 18 Rue de Saintonge, 75003 Paris, France.</p>
        </section>
      </div>
    </div>
  );
}
