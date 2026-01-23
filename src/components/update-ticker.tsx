import { motion } from 'motion/react'
import { Sparkles, ExternalLink } from 'lucide-react'

export default function UpdateTicker() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mt-8 rounded-2xl overflow-hidden bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
        >
            <div className="mx-auto max-w-5xl px-6 py-3">
                <a
                    href="https://javageniusai.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 text-sm md:text-base group w-full"
                >
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 1,
                        }}
                    >
                        <Sparkles className="w-5 h-5 text-primary" />
                    </motion.div>

                    <span className="font-medium text-foreground">
                        JavaGeniusAI - AI-Powered Java Learning Platform
                    </span>

                    <motion.div
                        className="flex items-center gap-1 text-primary"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                    >
                        <span className="text-sm font-medium">Visit Now</span>
                        <ExternalLink className="w-4 h-4" />
                    </motion.div>
                </a>
            </div>

            {/* Animated gradient overlay */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
                animate={{
                    x: ['-100%', '100%'],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />
        </motion.div>
    )
}
