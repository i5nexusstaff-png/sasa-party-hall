import PageWrapper from './PageWrapper';
import PageBanner from './PageBanner';

/**
 * Shared layout for legal pages (Privacy, Terms, Cancellation).
 * Renders a banner and a clean, readable prose section.
 */
export default function LegalLayout({ title, image, sections }) {
  return (
    <PageWrapper noPad>
      <PageBanner title={title} image={image} crumb={title} />
      <section className="section bg-cream dark:bg-dark">
        <div className="container-x max-w-4xl">
          <p className="mb-10 text-sm text-dark/50 dark:text-cream/50">
            Last updated: January 2026
          </p>
          <div className="space-y-10">
            {sections.map((s, i) => (
              <div key={i}>
                <h2 className="font-heading text-2xl font-bold text-dark dark:text-cream">
                  {i + 1}. {s.heading}
                </h2>
                {s.body.map((p, j) => (
                  <p key={j} className="mt-3 text-dark/70 dark:text-cream/70 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
