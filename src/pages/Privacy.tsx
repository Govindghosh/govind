import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Privacy Policy | Govind Ghosh - Web Developer"
        description="Privacy policy for Govind Ghosh's portfolio website. Learn how we collect, use, and protect your personal information when you visit our site or contact us."
        keywords="Privacy Policy, Data Protection, Govind Ghosh, Web Developer Privacy, Contact Information Security"
        canonical="https://govindghosh.netlify.app/privacy"
      />
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <section className="prose prose-invert max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: September 17, 2025</p>

        <p>
          Your privacy matters. This policy explains what information is collected, how it is used,
          and the choices you have. It is designed to meet or exceed expectations of leading
          technology organizations while remaining clear and concise.
        </p>

        <h2>Information We Collect</h2>
        <ul>
          <li>
            Usage data: pages viewed, interactions, performance metrics, approximate location derived
            from IP (non-precise).
          </li>
          <li>
            Contact data you provide: name, email, message content submitted via the contact form.
          </li>
          <li>
            Device data: browser type, operating system, and settings. No sensitive device identifiers are stored.
          </li>
        </ul>

        <h2>How We Use Information</h2>
        <ul>
          <li>Provide, maintain, and improve the website and its content.</li>
          <li>Respond to inquiries and provide customer support.</li>
          <li>Protect the website, users, and services from abuse or misuse.</li>
          <li>Comply with legal obligations.</li>
        </ul>

        <h2>Cookies and Local Storage</h2>
        <p>
          We use essential cookies and local storage to enable site functionality (e.g., theme
          preference). Analytics, if enabled in the future, will be privacy-focused and respect Do
          Not Track settings whenever possible.
        </p>

        <h2>Data Sharing</h2>
        <p>
          We do not sell personal information. We may share limited data with trusted service
          providers that help operate the site (e.g., hosting, error monitoring) under contractual
          confidentiality and security obligations, or when required by law.
        </p>

        <h2>Data Retention</h2>
        <p>
          Contact submissions are retained for as long as necessary to address your inquiry and
          maintain appropriate business records. Non-identifiable usage data may be kept to improve
          the site’s quality and security.
        </p>

        <h2>Your Choices</h2>
        <ul>
          <li>Opt out of non-essential cookies through your browser settings.</li>
          <li>Request access to or deletion of your contact submissions by emailing the address below.</li>
          <li>Disable JavaScript or tracking protections—core content remains accessible.</li>
        </ul>

        <h2>Security</h2>
        <p>
          We implement industry-standard safeguards to protect information in transit and at rest.
          However, no method of transmission or storage is completely secure, and we cannot guarantee
          absolute security.
        </p>

        <h2>Children’s Privacy</h2>
        <p>
          This site is not intended for children under 13 and does not knowingly collect personal
          information from them.
        </p>

        <h2>International Transfers</h2>
        <p>
          Information may be processed and stored in countries other than your own. We take steps to
          ensure appropriate safeguards consistent with applicable laws.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this policy to reflect changes in practices or legal requirements. Material
          changes will be highlighted on this page with a new “Last updated” date.
        </p>

        <h2>Contact</h2>
        <p>
          For questions or requests related to this policy, contact:
          <br />
          <span className="text-foreground">govindghosh0@gmail.com</span>
        </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}


