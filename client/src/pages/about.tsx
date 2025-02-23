import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8"
      >
        <div className="grid gap-12 md:grid-cols-2">
          <div className="lg:w-3/4">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight"
            >
              Empowering the{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                digital future
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 text-lg text-muted-foreground"
            >
              We're a team of passionate developers, designers, and innovators
              working together to create cutting-edge solutions for modern
              challenges.
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold">Our Mission</h3>
            <p className="text-muted-foreground">
              To deliver innovative technology solutions that empower businesses and
              individuals to achieve their full potential in the digital age.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold">Our Vision</h3>
            <p className="text-muted-foreground">
              To be the leading force in digital transformation, setting new
              standards for technological excellence and innovation.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold">Our Values</h3>
            <p className="text-muted-foreground">
              Innovation, integrity, collaboration, and a relentless commitment to
              delivering value to our clients and partners.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
