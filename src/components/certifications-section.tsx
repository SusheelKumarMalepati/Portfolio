import { motion } from "motion/react";
import { Award, Calendar, ShieldCheck, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Oracle Cloud Infrastructure Certified Foundations Associate",
    issuer: "Oracle",
    date: "Jun 2025",
    credentialId: "319617889OCI25FNDCFA",
    link: "https://catalog-education.oracle.com/apex/f?p=1010:26:107949199298997",
    category: "Cloud",
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    title: "Oracle Data Platform Certified Foundations Associate",
    issuer: "Oracle",
    date: "Jun 2025",
    credentialId: "319617889OCI25DCFA",
    link: "https://catalog-education.oracle.com/apex/f?p=1010:26:107949199298997",
    category: "Data",
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    title: "Oracle APEX Cloud Developer Certified Professional",
    issuer: "Oracle",
    date: "May 2025",
    credentialId: "319617889APEX24CDOCP",
    link: "https://catalog-education.oracle.com/apex/f?p=1010:26:107949199298997",
    category: "Development",
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    title: "MySQL Certified Associate",
    issuer: "Oracle",
    date: "Jun 2025",
    credentialId: "19617889MYSQLIMPOCA",
    link: "https://catalog-education.oracle.com/apex/f?p=1010:26:107949199298997",
    category: "Database",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Java Spring Boot",
    issuer: "Infosys",
    date: "May 2025",
    credentialId: "Available upon request",
    link: "https://verify.onwingspan.com/?trk=public_profile_see-credential",
    category: "Development",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "AWS APAC - Solutions Architecture Job Simulation",
    issuer: "Forage",
    date: "Dec 2024",
    credentialId: "WeNb5Kv4wbokMwu3n",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_Hye3e9pcbtBqdWC6i_1734409459536_completion_certificate.pdf?trk=public_profile_see-credential",
    category: "Cloud",
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Canvas Credentials (Badgr)",
    date: "Nov 2024",
    credentialId: "6728f0c18b04931e5ca3099a",
    link: "https://badgr.com/public/assertions/lgbSZNh7QfuuuMdGx9OpDg?trk=public_profile_see-credential`",
    category: "API",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Accenture Nordics - Software Engineering Job Simulation",
    issuer: "Forage",
    date: "Nov 2024",
    credentialId: "Available upon request",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20Nordics/HNpZwZcuYwona2d8Y_Accenture%20Nordics_Hye3e9pcbtBqdWC6i_1723625588560_completion_certificate.pdf?trk=public_profile_see-credential",
    category: "Software Engineering",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Agile Development and Scrum Fundamentals",
    issuer: "edX",
    date: "Jun 2024",
    credentialId: "e3ad2304744a4eb3b9bcd76c12400fe9",
    link: "https://www.credly.com/badges/34acf612-2c68-4654-b812-b4ee4bf861a3/linked_in_profile?trk=public_profile_see-credential",
    category: "Agile",
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "AWS Certified Solutions Architect - Associate C03 (Exam Prep)",
    issuer: "edX",
    date: "Apr 2024",
    credentialId: "3d22c5760f2d462a93b3031aac196e6f",
    link: "https://courses.edx.org/certificates/3d22c5760f2d462a93b3031aac196e6f?trk=public_profile_see-credential",
    category: "Cloud",
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "Architecting Solutions on AWS",
    issuer: "edX",
    date: "Apr 2024",
    credentialId: "7b72ebd31ebc420baaef32363200b94d",
    link: "https://courses.edx.org/certificates/7b72ebd31ebc420baaef32363200b94d?trk=public_profile_see-credential",
    category: "Cloud",
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "AWS Cloud Technical Essentials",
    issuer: "edX",
    date: "Apr 2024",
    credentialId: "452b2a00a54343fd99c73323c51f24e0",
    link: "https://courses.edx.org/certificates/452b2a00a54343fd99c73323c51f24e0?trk=public_profile_see-credential",
    category: "Cloud",
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "Introduction to Designing Data Lakes on AWS",
    issuer: "edX",
    date: "Apr 2024",
    credentialId: "866d694c26d64107bb7b46de4389a427",
    link: "https://courses.edx.org/certificates/866d694c26d64107bb7b46de4389a427?trk=public_profile_see-credential",
    category: "Data",
    color: "from-teal-500/20 to-cyan-500/20",
  },
];

export default function CertificationsSection() {
  return (
    <motion.section
      id="certifications"
      className="py-16 md:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Professional Credentials</span>
          </motion.div>
          <motion.h2
            className="text-4xl font-medium lg:text-5xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Licenses & Certifications
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Validated expertise across cloud platforms, development frameworks,
            and modern technologies
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * index, duration: 0.5 }}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 cursor-pointer"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Content */}
              <div className="relative p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-muted text-xs font-medium">
                      {cert.category}
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-3 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                    <span className="text-xs font-bold text-foreground">
                      {cert.issuer.charAt(0)}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    {cert.issuer}
                  </p>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>Issued {cert.date}</span>
                </div>

                {/* Credential ID */}
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-1">
                    Credential ID
                  </p>
                  <p className="text-xs font-mono text-foreground truncate">
                    {cert.credentialId}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
