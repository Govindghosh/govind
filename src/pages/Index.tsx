import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Govind Ghosh | Freelance Full Stack Developer & React Specialist"
        description="Professional Full Stack Developer specializing in React, Java, Node.js, and MERN stack. Expert web developer helping businesses scale with custom applications and exceptional digital experiences."
        keywords="Govind Ghosh, Full Stack Developer, React Developer, Java Developer, MERN Stack Developer, Web Developer, Node.js Developer, JavaScript Developer, TypeScript Developer, Freelance Developer, Web Development Services, Custom Web Applications"
        canonical="https://govindghosh.netlify.app"
      />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Testimonials />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
