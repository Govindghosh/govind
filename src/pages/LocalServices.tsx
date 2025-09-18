import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const LocalServices = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const localServices = [
    {
      title: "Website Development in Vrindavan",
      description: "Professional website development services for businesses in Vrindavan. Custom websites, e-commerce platforms, and web applications.",
      features: ["Custom Website Design", "E-commerce Development", "Responsive Design", "SEO Optimization"]
    },
    {
      title: "Java Development in Mathura", 
      description: "Expert Java development services for businesses in Mathura. Enterprise applications, web services, and backend development.",
      features: ["Java Web Applications", "Spring Boot Development", "REST API Development", "Database Integration"]
    },
    {
      title: "Full Stack Development Services",
      description: "Complete full stack development solutions for businesses in Vrindavan and Mathura. End-to-end web application development.",
      features: ["Frontend Development", "Backend Development", "Database Design", "Cloud Deployment"]
    },
    {
      title: "React Development Solutions",
      description: "Modern React development services for businesses in Vrindavan Mathura. Single page applications and dynamic web interfaces.",
      features: ["React Applications", "Next.js Development", "Component Libraries", "State Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="max-w-6xl mx-auto"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Web Development Services in <span className="gradient-text">Vrindavan Mathura</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Professional Full Stack Developer, Java Developer, and Website Developer serving businesses in Vrindavan, Mathura, and across India
              </p>
            </motion.div>

            {/* Location Info */}
            <motion.div variants={itemVariants} className="bg-card border border-border rounded-xl p-8 mb-16">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Serving Vrindavan & Mathura</h2>
                  <p className="text-muted-foreground mb-6">
                    As a professional Full Stack Developer based in Vrindavan Mathura, I provide comprehensive web development services 
                    to local businesses and organizations. My expertise in React, Java, and MERN stack technologies helps businesses 
                    in the region establish a strong digital presence.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <FaMapMarkerAlt className="text-primary" />
                      <span className="text-muted-foreground">Vrindavan, Uttar Pradesh, India</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaPhone className="text-primary" />
                      <span className="text-muted-foreground">Available for local consultations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaEnvelope className="text-primary" />
                      <span className="text-muted-foreground">govind@example.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaClock className="text-primary" />
                      <span className="text-muted-foreground">Flexible working hours</span>
                    </div>
                  </div>
                </div>
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Service Areas</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Vrindavan - Website Development</li>
                    <li>• Mathura - Java Development</li>
                    <li>• Agra - Full Stack Development</li>
                    <li>• Delhi NCR - Web Applications</li>
                    <li>• Remote Services - Across India</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {localServices.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div variants={itemVariants} className="text-center bg-gradient-to-r from-primary/10 to-accent-light/10 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you're in Vrindavan, Mathura, or anywhere in India, I'm here to help you build exceptional web applications. 
                Let's discuss your project requirements and create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-hero"
                >
                  Get Started Today
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-hero-outline"
                >
                  View My Work
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LocalServices;
