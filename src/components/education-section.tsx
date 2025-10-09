import { motion } from 'motion/react'
import { Timeline } from '@/components/ui/timeline'
import { GraduationCap, Award, BookOpen } from 'lucide-react'

const educationData = [
    {
        title: '2022 – 2026',
        content: (
            <div className="space-y-4">
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <GraduationCap className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2 text-foreground">
                                Bachelor of Technology in Computer Science & Engineering
                            </h3>
                            <p className="text-muted-foreground mb-3">
                                Sri Venkateswara University College of Engineering, Tirupati, A.P
                            </p>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
                                <Award className="w-4 h-4" />
                                <span className="font-semibold">CGPA: 8.75</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: '2020 – 2022',
        content: (
            <div className="space-y-4">
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                            <BookOpen className="w-6 h-6 text-blue-500" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2 text-foreground">
                                Senior Secondary (XII), Science
                            </h3>
                            <p className="text-muted-foreground mb-3">
                                Abhyas Junior College, Proddatur, Kadapa, A.P
                            </p>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-500">
                                <Award className="w-4 h-4" />
                                <span className="font-semibold">Percentage: 96.1%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: '2020',
        content: (
            <div className="space-y-4">
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                            <BookOpen className="w-6 h-6 text-green-500" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2 text-foreground">
                                Secondary (X)
                            </h3>
                            <p className="text-muted-foreground mb-3">
                                Gautam High School, Proddatur, Kadapa, A.P
                            </p>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-500">
                                <Award className="w-4 h-4" />
                                <span className="font-semibold">GPA: 10.0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
]

export default function EducationSection() {
    return (
        <motion.section
            id="education"
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
                        <GraduationCap className="w-4 h-4" />
                        <span>Academic Journey</span>
                    </motion.div>
                    <motion.h2
                        className="text-4xl font-medium lg:text-5xl mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}>
                        Education
                    </motion.h2>
                    <motion.p
                        className="text-muted-foreground text-lg max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}>
                        My academic background and educational achievements
                    </motion.p>
                </div>
            </div>
            <Timeline data={educationData} />
        </motion.section>
    )
}
