import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Discover the philosophy, craft, and creative vision behind AMILOU STUDIO — modern minimalist fashion designed for longevity.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative h-[60vh] w-full flex items-center justify-center bg-brand-light overflow-hidden">
        <div className="relative z-10 text-center px-4">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-accent mb-4">
            Est. 2024
          </p>
          <h1 className="text-4xl md:text-6xl font-light tracking-widest uppercase mb-4 text-brand">
            AMILOU STUDIO
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-light max-w-lg mx-auto">
            Where architecture meets wardrobe. Designing garments that transcend
            seasons.
          </p>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-brand-accent mb-4">
              Our Philosophy
            </p>
            <h2 className="text-3xl font-light tracking-wider uppercase mb-6 leading-tight">
              Less, But Better
            </h2>
            <div className="space-y-5 text-gray-600 font-light leading-relaxed">
              <p>
                At AMILOU STUDIO, we believe that true luxury lies not in
                abundance, but in intentionality. Every piece in our collection
                is conceived as an answer to a single question: what does a
                modern wardrobe truly need?
              </p>
              <p>
                Inspired by the principles of minimalist architecture — clean
                lines, considered proportions, and the beauty of negative space
                — our garments are designed to be the foundation upon which
                personal style is built. We strip away the superfluous to reveal
                what is essential.
              </p>
              <p>
                Longevity is at the heart of our practice. We reject the
                disposable cycles of fast fashion in favour of pieces that grow
                more beautiful with time and wear. Sustainability is not a
                marketing position for us; it is a natural consequence of making
                things well and making them to last.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] w-full">
            <Image
              src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1200&q=80"
              alt="AMILOU STUDIO atelier workspace with natural light and minimal design"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Our Craft */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] w-full order-2 md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80"
                alt="Fashion editorial showcasing premium fabrics and tailoring"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-xs uppercase tracking-[0.25em] text-brand-accent mb-4">
                Our Craft
              </p>
              <h2 className="text-3xl font-light tracking-wider uppercase mb-6 leading-tight">
                Material Integrity
              </h2>
              <div className="space-y-5 text-gray-600 font-light leading-relaxed">
                <p>
                  We source exclusively from heritage mills and tanneries across
                  Italy, Portugal, and Japan. Our fabrics — from brushed Japanese
                  cottons to double-faced Italian wools — are chosen not only for
                  their beauty, but for their resilience and tactile quality.
                </p>
                <p>
                  Each garment is developed through an extensive prototyping
                  process. Our pattern-makers and seamstresses in Tuscany bring
                  decades of expertise to every seam, every buttonhole, every
                  carefully considered detail. The result is clothing with a
                  quiet confidence — pieces that feel as considered on the inside
                  as they look on the outside.
                </p>
                <p>
                  We produce in small, deliberate quantities. Our approach to
                  production honours the artisans we work with and reduces waste
                  across the supply chain. We would rather be sold out than
                  overproduced.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio / Team Vision */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-accent mb-4">
            The Studio
          </p>
          <h2 className="text-3xl font-light tracking-wider uppercase mb-6 leading-tight">
            A Collective Vision
          </h2>
          <div className="space-y-5 text-gray-600 font-light leading-relaxed">
            <p>
              AMILOU STUDIO was founded by a small collective of designers,
              architects, and artists united by a shared conviction: that
              clothing should serve as a framework for living — functional,
              beautiful, and enduring.
            </p>
            <p>
              Our creative studio operates at the intersection of fashion and
              spatial design. We approach each collection as an architect
              approaches a building — beginning with structure, proportion, and
              the relationship between the garment and the body that inhabits
              it. Colour palettes are drawn from natural materials: stone,
              clay, sand, charcoal, and the muted tones of a winter morning.
            </p>
            <p>
              We are a deliberately small team. This allows us to remain close
              to every decision, from fabric selection to the layout of a
              campaign photograph. We believe that care at scale begins with
              care in detail, and that the best work is made by people who feel
              personally invested in every piece that leaves the studio.
            </p>
          </div>
        </div>

        {/* Values strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center">
          {[
            { label: 'Intentional Design', value: 'Every detail considered' },
            { label: 'European Craft', value: 'Made in Italy & Portugal' },
            { label: 'Small Batches', value: 'Quality over quantity' },
            { label: 'Built to Last', value: 'Designed for longevity' },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-sm font-medium tracking-wider uppercase mb-2">
                {item.label}
              </p>
              <p className="text-xs text-gray-500">{item.value}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
