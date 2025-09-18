import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Terms of Service | Govind Ghosh - Web Developer"
        description="Terms of service for Govind Ghosh's portfolio website. Learn about the terms and conditions for using our website and services."
        keywords="Terms of Service, Website Terms, Govind Ghosh, Web Developer Terms, Legal Terms"
        canonical="https://govindghosh.netlify.app/terms"
      />
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <section className="prose prose-invert max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
        <p className="text-muted-foreground">Last updated: September 17, 2025</p>

        <p>
          These Terms govern your access to and use of this website. By using the site, you agree
          to these Terms. If you do not agree, do not use the site.
        </p>

        <h2>Use of the Site</h2>
        <ul>
          <li>Use the site only for lawful purposes and in compliance with these Terms.</li>
          <li>Do not interfere with or disrupt the site’s operation or security.</li>
          <li>Do not attempt to access data you are not authorized to access.</li>
        </ul>

        <h2>Intellectual Property</h2>
        <p>
          All content on the site, including text, graphics, logos, and software, is owned by the
          site owner or its licensors and is protected by applicable intellectual property laws.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          The site may contain links to third-party websites. We are not responsible for the
          content, policies, or practices of those sites and provide links for convenience only.
        </p>

        <h2>Disclaimers</h2>
        <p>
          The site is provided on an “as is” and “as available” basis without warranties of any
          kind, express or implied, including implied warranties of merchantability, fitness for a
          particular purpose, and non-infringement. We do not guarantee the site will be error-free
          or uninterrupted.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, we shall not be liable for any indirect,
          incidental, special, consequential, or punitive damages, or any loss of profits or
          revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or
          other intangible losses, resulting from your use of or inability to use the site.
        </p>

        <h2>Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless the site owner from and against any claims,
          liabilities, damages, losses, and expenses arising out of or in any way connected with
          your use of the site or violation of these Terms.
        </p>

        <h2>Changes to the Terms</h2>
        <p>
          We may update these Terms from time to time. Changes take effect when posted. If you
          continue to use the site after changes are posted, you accept the revised Terms.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms are governed by the laws of India, without regard to conflicts of law
          principles. Any disputes shall be resolved in the courts located in Mathura, Uttar
          Pradesh, India.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about these Terms, contact:
          <br />
          <span className="text-foreground">govindghosh0@gmail.com</span>
        </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}


