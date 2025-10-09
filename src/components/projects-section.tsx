import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

const projects = [
    {
        title: 'Occasio',
        description:
            'Full-stack event management platform with JWT-based login, event creation, and ticket booking.',
        tags: ['Java', 'Spring Boot', 'MySQL'],
        link: '#',
    },
    {
        title: 'FoodOrderingManagement',
        description:
            'A backend system for a multi-vendor food delivery platform enabling user/vendor onboarding and real-time order processing.',
        tags: ['Java', 'Spring Boot', 'REST API'],
        link: '#',
    },
    {
        title: 'face_mask_detection',
        description:
            'A computer vision project using ML to detect face masks in real-time video streams.',
        tags: ['Python', 'OpenCV', 'ML'],
        link: '#',
    },
    {
        title: 'TimeSheet',
        description:
            'An efficient timesheet management system for employees to log hours, generate reports, and manage weekly productivity.',
        tags: ['Java', 'Spring Boot', 'JPA'],
        link: '#',
    },
    {
        title: 'fullstack_developer_capstone',
        description:
            'A full-stack capstone project demonstrating end-to-end application development skills.',
        tags: ['React', 'Spring Boot', 'Full-Stack'],
        link: '#',
    },
    {
        title: 'BankProject',
        description:
            'A standalone Java-based ATM system simulating core banking operations like transfers, deposits, and withdrawals.',
        tags: ['Java', 'Core Java'],
        link: '#',
    },
]

export default function ProjectsSection() {
    return (
        <motion.section
            id="projects"
            className="py-16 md:py-32"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}>
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center mb-12 md:mb-16">
                    <motion.h2
                        className="text-4xl font-medium lg:text-5xl mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}>
                        Featured Projects
                    </motion.h2>
                    <motion.p
                        className="text-muted-foreground text-lg max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}>
                        A showcase of my recent work and contributions
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                            className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                            <div className="flex flex-col h-full">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>

                                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}>
                    <Button
                        asChild
                        size="lg"
                        className="rounded-xl px-8 text-base group cursor-pointer">
                        <Link to="/projects">
                            <span>View All Projects</span>
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </motion.section>
    )
}
