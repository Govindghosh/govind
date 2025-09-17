import { motion } from "framer-motion";
import { processSteps } from "../data/portfolio";

export default function Process() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const stepVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="process" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              My <span className="gradient-text">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven workflow that ensures quality results and client
              satisfaction
            </p>
          </motion.div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline Line */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent-light transform -translate-x-1/2 z-0"
              />

              {/* Process Steps */}
              <div className="relative z-10 flex flex-col">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    variants={stepVariants}
                    className={`mb-20 flex items-center w-full ${
                      index % 2 === 0 ? "justify-start" : "justify-end"
                    }`}
                  >
                    {/* Step Content */}
                    <div className="w-1/2 px-6">
                      <div className="bg-background p-6 rounded-xl shadow-lg border border-border">
                        <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                          <span className="w-8 h-8 bg-primary/20 text-primary rounded-full flex items-center justify-center text-sm font-bold">
                            {step.id}
                          </span>
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Step Circle on Timeline */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-primary to-accent-light rounded-full flex items-center justify-center text-white shadow-glow z-20"
                    >
                      <step.icon className="w-6 h-6" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

{/* Mobile/Tablet Vertical Timeline */}
<div className="lg:hidden space-y-10 relative">
  {processSteps.map((step, index) => (
    <motion.div
      key={step.id}
      variants={stepVariants}
      className="relative flex items-start"
    >
      {/* Step Circle */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent-light 
                   rounded-full flex items-center justify-center text-xl text-white shadow-glow relative z-10"
      >
        <step.icon className="w-6 h-6" />
      </motion.div>

      {/* Vertical Line */}
      {index < processSteps.length - 1 && (
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ delay: index * 0.2, duration: 0.8 }}
          className="absolute left-6 top-12 w-px bg-gradient-to-b from-primary to-accent-light"
        />
      )}

      {/* Step Content */}
      <div className="ml-6 flex-1">
        <div className="flex items-center mb-1">
          <h3 className="text-lg font-semibold text-foreground mr-2">
            {step.title}
          </h3>
          <span className="w-7 h-7 bg-primary/15 text-primary rounded-full flex items-center justify-center text-xs font-bold">
            {step.id}
          </span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  ))}
</div>


          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Let's discuss your project and see how I can help you achieve your
              goals.
            </p>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-hero"
            >
              Start Your Project
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
