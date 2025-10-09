import { AnimatedGroup } from "@/components/ui/animated-group";
import { motion } from "motion/react";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="py-16 md:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            },
            ...transitionVariants,
          }}
        >
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
            Building innovative solutions with modern technologies
          </h2>
        </AnimatedGroup>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                  },
                },
              },
              ...transitionVariants,
            }}
          >
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-gradient-to-b aspect-square relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                <div className="h-full w-full rounded-[15px] bg-background p-8 flex items-center justify-center">
                  <div className="space-y-6 text-center">
                    <div className="text-6xl font-bold text-primary">1+</div>
                    <p className="text-xl font-medium">Years of Experience</p>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="space-y-2">
                        <div className="text-3xl font-bold text-primary">
                          10+
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Projects
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl font-bold text-primary">
                          5+
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Technologies
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedGroup>

          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              },
              ...transitionVariants,
            }}
          >
            <div className="relative space-y-4">
              <p className="text-muted-foreground">
                I am a Computer Science and Engineering graduate with strong
                skills in backend development using{" "}
                <span className="text-foreground font-bold">
                  Java, Spring Boot, and Node.js
                </span>
                , proficient in building REST APIs, deploying applications on
                AWS, and implementing machine learning models for prediction and
                classification tasks. Familiar with the SDLC and Agile
                methodologies, with a strong eagerness to contribute to
                innovative projects and team success.
              </p>

              <div className="pt-6">
                <div className="border-l-4 border-primary pl-4 space-y-4">
                  <h3 className="text-xl font-semibold">Core Expertise</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">▹</span>
                      Backend Development with Java & SpringBoot
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">▹</span>
                      Full-Stack Development with Node.js & React
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">▹</span>
                      Cloud Infrastructure & AWS Services
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">▹</span>
                      Machine Learning & AI Integration
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </div>
    </motion.section>
  );
}
