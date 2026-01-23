import { motion } from 'motion/react'
import { Timeline } from '@/components/ui/timeline'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experienceData = [
    {
        title: 'Apr 2025 – Jun 2025',
        content: (
            <div className="space-y-4">
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Briefcase className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2 text-foreground">
                                Backend Developer
                            </h3>
                            <p className="text-primary font-medium mb-2">
                                TheFGH
                            </p>
                            <div className="flex flex-wrap gap-3 mb-3 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    <span>Remote</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    <span>Contract</span>
                                </div>
                            </div>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">▹</span>
                                    <span>Built and deployed backend services from scratch using Node.js and Express.js, handling 10K+ monthly requests with latency under 150ms</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">▹</span>
                                    <span>Collaborated with a 5-member Agile team to deliver sprint-based backend features alongside frontend developers and product managers</span>
                                </li>
                            </ul>
                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                    Node.js
                                </span>
                                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                    Express.js
                                </span>
                                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                    Agile
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: 'Sep 2024 – Mar 2025',
        content: (
            <div className="space-y-4">
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                            <Briefcase className="w-6 h-6 text-blue-500" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2 text-foreground">
                                Java Development Team Lead (Intern)
                            </h3>
                            <p className="text-blue-500 font-medium mb-2">
                                Ceeras IT Services
                            </p>
                            <div className="flex flex-wrap gap-3 mb-3 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    <span>Remote</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    <span>Internship</span>
                                </div>
                            </div>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">▹</span>
                                    <span>Led a team of six to develop "My Desk," an employee management web application using Java, Spring Boot, and MySQL</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">▹</span>
                                    <span>Designed REST APIs for attendance, approvals, and leave tracking, reducing query time by 40% through indexing and query refactoring</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500 mt-1">▹</span>
                                    <span>Integrated Spring Security with role-based access control (RBAC) and audit logging to ensure secure and traceable operations</span>
                                </li>
                            </ul>
                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="px-3 py-1 bg-blue-500/10 text-blue-500 text-xs rounded-full">
                                    Java
                                </span>
                                <span className="px-3 py-1 bg-blue-500/10 text-blue-500 text-xs rounded-full">
                                    Spring Boot
                                </span>
                                <span className="px-3 py-1 bg-blue-500/10 text-blue-500 text-xs rounded-full">
                                    MySQL
                                </span>
                                <span className="px-3 py-1 bg-blue-500/10 text-blue-500 text-xs rounded-full">
                                    Spring Security
                                </span>
                                <span className="px-3 py-1 bg-blue-500/10 text-blue-500 text-xs rounded-full">
                                    REST API
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: 'Apr 2024 – Jul 2024',
        content: (
            <div className="space-y-4">
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                            <Briefcase className="w-6 h-6 text-green-500" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2 text-foreground">
                                Software Developer Intern
                            </h3>
                            <p className="text-green-500 font-medium mb-2">
                                Tekie's Zen LLC
                            </p>
                            <div className="flex flex-wrap gap-3 mb-3 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    <span>Remote</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    <span>Internship</span>
                                </div>
                            </div>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">▹</span>
                                    <span>Deployed serverless backend features using Node.js on AWS Lambda and S3, improving API response times by 25%</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">▹</span>
                                    <span>Refactored 1,000+ lines of code and managed version control</span>
                                </li>
                            </ul>
                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs rounded-full">
                                    Node.js
                                </span>
                                <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs rounded-full">
                                    AWS Lambda
                                </span>
                                <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs rounded-full">
                                    AWS S3
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
]

export default function ExperienceSection() {
    return (
        <motion.section
            id="experience"
            className="py-16 md:py-32 bg-muted/30"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}>
            <div className="mx-auto max-w-6xl px-6 mb-12">
                <div className="text-center">
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}>
                        <Briefcase className="w-4 h-4" />
                        <span>Professional Journey</span>
                    </motion.div>
                    <motion.h2
                        className="text-4xl font-medium lg:text-5xl mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}>
                        Work Experience
                    </motion.h2>
                    <motion.p
                        className="text-muted-foreground text-lg max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}>
                        My professional experience and contributions to various organizations
                    </motion.p>
                </div>
            </div>
            <Timeline data={experienceData} />
        </motion.section>
    )
}
