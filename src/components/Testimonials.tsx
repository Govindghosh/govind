import { motion } from 'framer-motion';
import { testimonials } from '../data/portfolio';
import { HiStar } from 'react-icons/hi';

export default function Testimonials() {
  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
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

  return (
    <section id="testimonials" className="section-padding overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Client <span className="gradient-text">Testimonials</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What my clients say about working with me
            </p>
          </motion.div>

          {/* Infinite Moving Cards */}
          <div className="relative">
            <div className="flex space-x-6 animate-marquee hover:pause">
              {duplicatedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: (index % testimonials.length) * 0.1 }}
                  className="flex-shrink-0 w-80 sm:w-96"
                >
                  <div className="card-glow h-full bg-card rounded-2xl shadow-lg p-6">
                    <div className="space-y-4">
                      {/* Rating */}
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <HiStar key={i} className="w-5 h-5 text-yellow-400" />
                        ))}
                      </div>

                      {/* Testimonial Content */}
                      <p className="text-muted-foreground leading-relaxed italic">
                        "{testimonial.content}"
                      </p>

                      {/* Client Info */}
                      <div className="flex items-center space-x-4 pt-4 border-t border-border">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-light rounded-full flex items-center justify-center text-white font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

        
           
          </div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-4xl font-bold text-primary mb-2"
              >
                50+
              </motion.div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl sm:text-4xl font-bold text-primary mb-2"
              >
                100+
              </motion.div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-3xl sm:text-4xl font-bold text-primary mb-2"
              >
                99%
              </motion.div>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-3xl sm:text-4xl font-bold text-primary mb-2"
              >
                24/7
              </motion.div>
              <p className="text-muted-foreground">Support Available</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
