import { motion } from "framer-motion";
import { techStack } from "../data/portfolio";
import { HiDownload } from "react-icons/hi";

export default function About() {
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

  return (
    <section
      id="about"
      className="section-padding bg-muted/30 dark:bg-background transition-colors"
    >
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
              About <span className="gradient-text">Govind Ghosh</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional Full Stack Developer with expertise in React, Java, Website Development, and MERN stack technologies
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Govind Ghosh - Professional Full Stack Developer
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm Govind Ghosh, a professional Full Stack Developer based in Vrindavan Mathura with a passion for creating
                  exceptional digital experiences. With expertise in React, Java, Website Development, Node.js, and MERN stack
                  technologies, I help businesses in Mathura, Vrindavan, and across India transform their ideas into
                  scalable, high-performance web applications.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As a React Developer, Java Developer, and Website Developer serving Vrindavan and Mathura, my journey in web development spans across frontend and
                  backend technologies, with a focus on delivering clean,
                  maintainable code and user-centric solutions. I specialize in MERN stack development and custom website development for local businesses and believe in
                  continuous learning and staying updated with the latest
                  industry trends.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card dark:bg-background border border-border rounded-lg p-4 transition-colors">
                  <h4 className="font-semibold text-primary mb-2">
                    Frontend Expertise
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    React, Next.js, TypeScript, Tailwind CSS
                  </p>
                </div>
                <div className="bg-card dark:bg-background border border-border rounded-lg p-4 transition-colors">
                  <h4 className="font-semibold text-primary mb-2">
                    Backend Mastery
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Node.js, Express.js, Java, Spring Boot
                  </p>
                </div>
                <div className="bg-card dark:bg-background border border-border rounded-lg p-4 transition-colors">
                  <h4 className="font-semibold text-primary mb-2">
                    Database Skills
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    MongoDB, PostgreSQL, MySQL
                  </p>
                </div>
                <div className="bg-card dark:bg-background border border-border rounded-lg p-4 transition-colors">
                  <h4 className="font-semibold text-primary mb-2">Deployment</h4>
                  <p className="text-sm text-muted-foreground">
                    Vercel, Netlify, AWS, Docker
                  </p>
                </div>
              </div>

              <motion.a
                href="/govindghosh.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 btn-hero"
              >
                <HiDownload className="w-5 h-5" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Tech Stack */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center lg:text-left">
                  Technologies I Work With
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {techStack.map((tech) => (
                    <motion.div
                      key={tech.name}
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.1,
                        rotateY: 180,
                        transition: { duration: 0.3 },
                      }}
                      className="group bg-card dark:bg-background border border-border rounded-lg p-4 text-center cursor-pointer shadow-sm hover:shadow-md transition-all"
                      style={{
                        transformStyle: "preserve-3d",
                        perspective: "1000px",
                      }}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <tech.icon
                          className="w-8 h-8 transition-colors duration-300"
                          style={{ color: tech.color }}
                        />
                        <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                          {tech.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-card dark:bg-background border border-border rounded-lg transition-colors"
                >
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-card dark:bg-background border border-border rounded-lg transition-colors"
                >
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Exp
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-card dark:bg-background border border-border rounded-lg transition-colors"
                >
                  <div className="text-2xl font-bold text-primary">99%</div>
                  <div className="text-sm text-muted-foreground">
                    Satisfaction
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
